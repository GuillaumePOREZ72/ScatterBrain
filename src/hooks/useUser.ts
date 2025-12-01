/**
 * Node modules
 */
import { useEffect, useState } from 'react';

/**
 * Types
 */
import type { User } from '@/types';
export type UserResponse = Pick<User, 'username' | 'email' | 'role'>;

 export const useUser = () => {
  const [user] = useState<UserResponse | undefined>(() => {
    const userJson = localStorage.getItem('user');

    if (userJson) {
      return JSON.parse(userJson) as UserResponse;
    }

    return undefined;
  });

  return user;
};
