import { useRouter } from 'next/router'
import GetPosts from '../../components/GetPosts'
import Nav from '../../components/Nav'

const Post = () => {
  const router = useRouter()
  const { id } = router.query;
    return (
      <>
        <Nav />
        <GetPosts 
          id={id}
          contentType="portfolio"
        />
      </>
    );
}

export default Post