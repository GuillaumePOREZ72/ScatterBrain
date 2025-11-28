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
import { InputPassword } from '@/components/InputPassword';

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

  // React hook form initial
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Handle form submission
  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }, []);

  return (
    <div
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2' />
        <Form {...form}>
          <form
            className='p-6 md:p-8'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col items-center text-center'>
                <h1 className='text-2xl font-semibold'>{LOGIN_FORM.title}</h1>
                <p className='text-muted-foreground text-balance'>
                  {LOGIN_FORM.description}
                </p>
              </div>

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='grid gap-3'>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='johndoe@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='grid gap-3'>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <InputPassword
                        placeholder='Enter your password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};
