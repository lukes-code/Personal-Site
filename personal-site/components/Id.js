import { useRouter } from 'next/router'
import GetPosts from './GetPosts'
import Nav from './Nav'

const Post = ({ contentType, id }) => {
    return (
      <>
        <Nav />
        <GetPosts 
          id={id}
          contentType={contentType}
        />
      </>
    );
}

export default Post