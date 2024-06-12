import DashbaordCard from '@/components/dashboard/dashboardcard';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import PostsTable from '@/components/posts/postTable';
import AnalyticsChart from '@/components/dashboard/analyticsChart';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashbaordCard
          title='Total Posts'
          count={130}
          icon={<Newspaper className='text-slate-500' size={72} />}
        />
        <DashbaordCard
          title='Catagories'
          count={12}
          icon={<Folder className='text-slate-500' size={72} />}
        />

        <DashbaordCard
          title='Users'
          count={233}
          icon={<User className='text-slate-500' size={72} />}
        />
        <DashbaordCard
          title='Comments'
          count={130}
          icon={<MessageCircle className='text-slate-500' size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title='Latest Post' limit={5} />
    </>
  );
}
