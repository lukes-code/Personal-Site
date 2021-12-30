import Articles from '../components/Articles'

export default function Home() {
  const contentType = "blogPost";
  return (
    <div>
      <p>This is the blog page</p>
      <Articles contentType={contentType} isHome={false}/>
    </div>
  )
}