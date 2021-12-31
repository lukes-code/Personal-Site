import { useRouter } from 'next/router'
import Id from '../../components/Id'

const Post = () => {
  const router = useRouter()
  const { id } = router.query;
    return (
      <Id 
        id={id}
        contentType="portfolio"
      />
    );
}

export default Post