import { useRouter } from 'next/router'
import GetPosts from './GetPosts'

const Post = ({ contentType, id }) => {
    return (
      <>
        <GetPosts 
          id={id}
          contentType={contentType}
        />
      </>
    );
}

export default Post