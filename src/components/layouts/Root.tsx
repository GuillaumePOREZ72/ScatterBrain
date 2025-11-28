/**
 * Node modules
 */
import { Outlet } from 'react-router';

/**
 * Components
 */

export const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-dvh'>
      <Loading className='z-40' />
    </div>
  );
};
