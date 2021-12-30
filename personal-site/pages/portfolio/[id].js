import { useRouter } from 'next/router'
import GetPosts from '../../components/GetPosts'

const Post = () => {
  const router = useRouter()
  const { id } = router.query;
    return (
      <GetPosts 
        id={id}
        contentType="portfolio"
      />
    );
}

export default Post