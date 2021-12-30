import Articles from '../components/Articles'

export default function Home() {
  return (
    <div>
      <p>I am the home page</p>
      <p>I am the header</p>
      <Articles contentType="blogPost" isHome={true}/>
      <p>I am the about</p>
      <p>I am the skills</p>
      <Articles contentType="portfolio" isHome={true}/>
    </div>
  )
}
