/**
 * Node modules
 */
import { Link, useFetcher, useNavigate } from 'react-router';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect } from 'react';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

/**
 * Assets
 */
import { loginBanner } from '@/assets';
import { LoaderCircleIcon } from 'lucide-react';

/**
 * Types
 */
import type { ActionResponse, AuthResponse, ValidationError } from '@/types';
type LoginFieldName = 'email' | 'password';

/**
 * Constants
 */
const LOGIN_FORM = {
  title: 'Welcome back',
  description: 'Login to your ScatterBrain account',
  footerText: "Don't have an account?",
} as const;

/**
 * Login form schema
 */
const formSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .max(50, 'Email must be less than 50 characters')
    .email('INvalid email address'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

export const LoginForm = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const loginResponse = fetcher.data as ActionResponse<AuthResponse>;

  const isSubmitting = fetcher.state === 'submitting';
  const isLoading = fetcher.state === 'loading';

  return (
    <div
      className={cn(className)}
      {...props}
    >
      <Card>
        <CardContent />
        <Form></Form>
      </Card>
    </div>
  );
};
