/**
 * Node modules
 */
import { createBrowserRouter } from 'react-router';

/**
 * Loaders
 */
import refreshTokenLoader from '@/routes/loaders/refreshToken';

/**
 * Pages
 */
import { Login } from '@/pages/auth/Login';
import { Signup } from '@/pages/auth/Signup';

/**
 * Actions
 */
import signupAction from '@/routes/actions/auth/signup';
import loginAction from '@/routes/actions/auth/login';

/**
 * Error boundaries
 */

const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
    action: loginAction,
  },
  {
    path: '/signup',
    Component: Signup,
    action: signupAction,
  },
  {
    path: '/refresh-token',
    loader:refreshTokenLoader,
  },
  {
    path: '/',
    children: [
      {
        index: true,
      },
      {
        path: 'blogs',
      },
      {
        path: '/blogs/:slug',
      },
    ],
  },
  {
    path: '/admin',
    children: [
      {
        path: 'dashboard',
      },
      {
        path: 'blogs',
      },
      {
        path: 'blogs/create',
      },
      {
        path: 'blogs/:slug/edit',
      },
      {
        path: 'comments',
      },
      {
        path: 'users',
      },
    ],
  },
  {
    path: '/settings',
  },
]);

export default router;
