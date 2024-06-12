import PostsTable from '@/components/posts/postTable';
import BackButton from '@/components/back-button';
import PostsPagination from '@/components/posts/posts-pagination';
const PostPage = () => {
  return (
    <>
      <BackButton text='Go Back' link='/' />
      <PostsTable />
      <PostsPagination />
    </>
  );
};

export default PostPage;
