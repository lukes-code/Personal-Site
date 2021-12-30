import { useRouter } from 'next/router'
import * as contentful from 'contentful';
import FullArticle from './FullArticle'
import { useEffect, useState } from 'react';

const GetPosts = ({ contentType, id }) => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

    //Get blog posts
    const client = contentful.createClient({
        space: process.env.NEXT_PUBLIC_SPACE,
        accessToken: process.env.NEXT_PUBLIC_KEY
    })  
    
    useEffect(() => {
        if (loading && id){
            client.getEntries({
                content_type: `${contentType}`,
            }).then((res) => {
                setArticle(res.items[id].fields);
                setLoading(false);
            });
        }
    }, [client, loading, contentType, id]);

    if (loading) return "loading...";
    return (
      <FullArticle 
        article={article} 
        key={id}
        id={id}
        contentType={contentType === 'blogPost' ? "blog" : "portfolio"}
      />
    );
}

export default GetPosts