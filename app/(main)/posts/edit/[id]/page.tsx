'use client';
import BackButton from '@/components/back-button';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

import { cn } from '@/lib/utils';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import posts from '@/data/posts';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';

const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  body: z.string().min(1, { message: 'Body is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  date: z.date({ required_error: 'A date of post is required.' }),
});

interface EditPostPageProps {
  params: {
    id: string;
  };
}
const EditPostPage = ({ params }: EditPostPageProps) => {
  const post = posts.find((post) => post.id === params.id);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date ? new Date(post?.date) : new Date(),
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: 'Post Updated!',
      description: 'The post was successfully updated',
    });
  };

  const { toast } = useToast();

  return (
    <>
      <BackButton text='Go Back' link='/posts' />
      <h3 className='text-2xl font-semibold mb-4'>Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-zinc-400'>
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter Title'
                    {...field}
                    className='bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:bg-slate-800 dark:text-white'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='body'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-zinc-400'>
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Post Body'
                    {...field}
                    className='bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:bg-slate-800 dark:text-white'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-zinc-400'>
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Author Name'
                    {...field}
                    className='bg-slate-100 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 dark:bg-slate-800 dark:text-white'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[280px] justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}>
                      <CalendarIcon className='mr-2 h-4 w-4' />
                      {field.value ? (
                        format(field.value, 'yyyy-MM-dd')
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs w-full'
            onClick={() => {
              handleSubmit;
            }}>
            Update Post
          </Button>
        </form>
      </Form>
    </>
  );
};
export default EditPostPage;
