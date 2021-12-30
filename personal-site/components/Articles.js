import * as contentful from 'contentful';
import { useEffect, useState } from 'react';
import Article from './Article';
import styled from 'styled-components';

const StyledArticles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 60px 30px;
`;

export default function Articles({ contentType, isHome }) {
    const [articles, setArticles] = useState({});
    const [loading, setLoading] = useState(true);

    //Get blog posts
    const client = contentful.createClient({
        space: process.env.NEXT_PUBLIC_SPACE,
        accessToken: process.env.NEXT_PUBLIC_KEY
    })  
    
    useEffect(() => {
        if (loading){
            client.getEntries({
                content_type: `${contentType}`,
            }).then((res) => {
                setArticles(res.items);
                setLoading(false);
            });
        }
    }, [client, contentType, loading]);

    if (loading) return "loading...";
    return (
        <StyledArticles>
            {Object.keys(articles).map((article, i) => (
                <Article 
                    article={articles[i]} 
                    key={i}
                    id={i}
                    contentType={contentType === 'blogPost' ? "blog" : "portfolio"}
                    isHome={isHome}
                />
            ))}
        </StyledArticles>
    );
} 