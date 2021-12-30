import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { TextTruncate, MakeDate } from '../helpers';

const StyledArticle = styled.div`
  flex: 1;
  min-width: 350px;
  max-width: 350px;
  margin: 10px 30px;
  margin-bottom: 60px;
  img {
      width: 100%;
  }
  button {
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--red);
      font-weight: bold;
      font-size: 15px;
      padding: 0px;
  }
  .article-date {
      color: var(--grey);
      font-style: italic;
      font-size: 15px;
  }
  .article-title {
      font-weight: bold;
  }
`;

export default function Article({ article, id, contentType, isHome }) {
    const imagePath = `https:${article.fields.image.fields.file.url}`;
    const linkPath = `/${contentType}/${id}`;
    let shouldRender = false;
    if (id < 4 && isHome || !isHome){ shouldRender = true; }
    return(
        <>
            {shouldRender &&
                <StyledArticle>
                    <img src={imagePath} alt="article image" />
                    <p className="article-date">{MakeDate(article.fields.date)}</p>
                    <p className="article-title">{article.fields.title}</p>
                    <p className="article-short-text">{TextTruncate(article.fields.longContent, 125)}</p>
                    <Link href={linkPath}>
                        <button>Read more -></button>
                    </Link>
                </StyledArticle>
            }
        </>
    );
}