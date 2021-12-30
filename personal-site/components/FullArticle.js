import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { TextTruncate, MakeDate } from '../helpers';
import Markdown from 'markdown-to-jsx';

const StyledArticle = styled.div`
  flex: 1;
  min-width: 350px;
  max-width: 600px;
  margin: 60px auto;
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
  img {
      border-radius: 5px 5px 0px 0px;
  }
`;

export default function FullArticle({ article, id, contentType }) {

    const imagePath = `https:${article.image.fields.file.url}`;
    const linkPath = `/${contentType}/${id}`;
    return(
        <StyledArticle>
            <img src={imagePath} alt="article image" />
            <p className="article-date">{MakeDate(article.date)}</p>
            <p className="article-title">{article.title}</p>
            <Markdown>{article.longContent}</Markdown>
        </StyledArticle>
    );
}