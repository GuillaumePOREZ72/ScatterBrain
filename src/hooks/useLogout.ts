/**
 * Node modules
 */
import { useNavigate, useLocation } from 'react-router';

/**
 * Custom modules
 */
import { scatterbrainApi } from '@/api';

export const useLogout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      await scatterbrainApi.post(
        '/auth/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        },
      );
    } catch (error) {
      // Ignorer l'erreur - on veut déconnecter même si le serveur échoue
      console.warn('Logout request failed:', error);
    }

    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');

    if (location.pathname === '/') {
      window.location.reload();
      return;
    }

    navigate('/', { viewTransition: true });
  };
};
