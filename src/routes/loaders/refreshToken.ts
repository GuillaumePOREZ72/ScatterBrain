/**
 * Node modules
 */
import {redirect } from 'react-router';

/**
 * Custom router
 */
import { scatterbrainApi } from '@/api';

/**
 * Types
 */
import type { LoaderFunction } from 'react-router';
import { AxiosError } from 'axios';

const refreshTokenLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const redirectUri = url.searchParams.get('redirect') ?? '/';

  try {
    const response = await scatterbrainApi.post(
      '/auth/refresh-token',
      {},
      { withCredentials: true },
    );

    localStorage.setItem('accessToken', response.data.accessToken);

    return redirect(redirectUri);
  } catch (error) {
    if (error instanceof AxiosError) {
      // Vérifie aussi le status 401/403
      const isUnauthorized =
        error.response?.status === 401 || error.response?.status === 403;

      if (isUnauthorized) {
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
        return redirect('/login');
      }

      // Pour les autres erreurs, utilise Response directement
      throw new Response(error.response?.data.message || error.message, {
        status: error.response?.status || 500,
        statusText: error.response?.data.code || 'Error',
      });
    }
    throw error;
  }
};

export default refreshTokenLoader;