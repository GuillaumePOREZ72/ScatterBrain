/**
 * Node modules
 */
import React, { useState } from 'react';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Components
 */
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';

/**
 * Assets
 */
import { EyeClosedIcon, EyeIcon } from 'lucide-react';

/**
 * Types
 */
type InputPasswordProps = Omit<React.ComponentProps<'input'>, 'type'>;

export const InputPassword: React.FC<InputPasswordProps> = ({
  className,
  ...props
}) => {
  
  return <div className=''>Input Password</div>
};
