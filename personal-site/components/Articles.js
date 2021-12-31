import * as contentful from 'contentful';
import { useEffect, useState } from 'react';
import Article from './Article';
import styled from 'styled-components';

const StyledArticles = styled.div`
  .articles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 60px 30px;
  }
  .articles-home {
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      -webkit-overflow-scrolling: auto;
      margin: 40px 60px;
  }
  .articles-home::-webkit-scrollbar {
    width: 1em;
    border-radius: 10px;
  }
    
  .articles-home::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: var(--black);
  }
    
  .articles-home::-webkit-scrollbar-thumb {
    background-color: var(--red);
    border-radius: 10px;
  }
  @media only screen and (max-width: 768px) {
      .articles-home {
        margin: 40px 20px;
      }
  }
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
    
    
    let homeClass = (isHome) ? "articles-home" : "articles";

    if (loading) return "loading...";
    return (
        <StyledArticles id="blog">
            <div className={homeClass}>
                {Object.keys(articles).map((article, i) => (
                    <Article 
                        article={articles[i]} 
                        key={i}
                        order={i}
                        id={articles[i].fields.id}
                        contentType={contentType === 'blogPost' ? "blog" : "portfolio"}
                        isHome={isHome}
                    />
                ))}
            </div>
        </StyledArticles>
    );
} 