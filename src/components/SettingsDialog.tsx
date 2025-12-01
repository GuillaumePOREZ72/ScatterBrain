/**
 * Node modules
 */
import { useCallback } from 'react';
import { useFetcher } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Components
 */
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { InputPassword } from '@/components/InputPassword';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

/**
 * Custom hooks
 */
import { useUser } from '@/hooks/useUser';

/**
 * Assets
 */
import { AtSignIcon, Loader2Icon, MailIcon } from 'lucide-react';

/**
 * Types
 */
import type { DialogProps } from '@radix-ui/react-dialog';

/**
 * Profile form schema
 */
const profileFormSchema = 