/**
 * Node modules
 */
import { Link } from 'react-router';
import { useState } from 'react';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Logo } from '@/components/Logo';
import { Navbar } from '@/components/Navbar';

/**
 * Custom hooks
 */

/**
 * Assets
 */
import { MenuIcon, XIcon } from 'lucide-react';

export const Header = ({
  className,
  ...props
}: React.ComponentProps<'header'>) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header
      className={cn(
        'border-b fixed top-0 left-0 w-full h-16 grid items-center bg-background z-40',
        className,
      )}
      {...props}
    >
      <div className='container py-3 flex items-center gap-4'>
        <Logo />

        <div
          className={cn(
            'grow max-md:absolute max-md:top-16 max-md:left-0 max-md:bg-background max-md:w-full max-md:border-b md:flex md:justify-center md:items-center',
            !mobileMenuOpen && 'max-md:hidden',
          )}
        >
          <Navbar />
        </div>
      </div>
    </header>
  );
};
