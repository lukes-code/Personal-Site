import Articles from '../components/Articles'
import Nav from '../components/Nav'

export default function Home() {
  const contentType = "blogPost";
  return (
    <div>
      <Nav />
      <p>This is the blog page</p>
      <Articles contentType={contentType} isHome={false}/>
    </div>
  )
}