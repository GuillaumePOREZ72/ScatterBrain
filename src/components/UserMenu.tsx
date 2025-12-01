/**
 * Node modules
 */
import { Link } from 'react-router';

/**
 * Components
 */
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Avatar from 'react-avatar';

/**
 * Custom hooks
 */
import { useUser } from '@/hooks/useUser';

/**
 * Assets
 */
import { LayoutDashboardIcon, LogOutIcon, SettingsIcon } from 'lucide-react';

export const UserMenu = () => {
  const user = useUser();

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size='icon'
            variant='ghost'
          >
            <Avatar
              email={user.email}
              className='rounded-sm'
              size='28'
            />
          </Button>
        </DropdownMenuTrigger>
        
      </DropdownMenu>
    );
  }
};
