import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { TextTruncate, MakeDate } from '../helpers';
import Markdown from 'markdown-to-jsx';

const StyledArticle = styled.div`
  flex: 1;
  min-width: 350px;
  max-width: 350px;
  margin: 10px 30px;
  margin-bottom: 60px;
  cursor: pointer;
  img {
      width: 100%;
      border-radius: 4px 4px 0px 0px;
  }
  button {
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--red);
      font-weight: bold;
      font-size: 15px;
      padding: 0px;
      display: block;
      margin-top: 10px;
  }
  .article-date {
      color: var(--grey);
      font-style: italic;
      font-size: 15px;
  }
  .article-title {
      font-weight: bold;
  }
  @media only screen and (max-width: 768px) {
    min-width: 300px;
    max-width: 300px;
  }
`;

export default function Article({ article, id, contentType, isHome, order }) {
    const imagePath = `https:${article.fields.image.fields.file.url}`;
    const linkPath = `/${contentType}/${id}`;
    return(
        <Link href={linkPath} passHref>
            <StyledArticle>
                <img src={imagePath} alt="article image" />
                <p className="article-date">{MakeDate(article.fields.date)}</p>
                <p className="article-title">{article.fields.title}</p>
                <Markdown className="article-short-text">{TextTruncate(article.fields.longContent, 125)}</Markdown>
                <button>Read more -</button>
            </StyledArticle>
        </Link>
    );
}