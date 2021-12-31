import Articles from '../components/Articles'

export default function Home() {
  const contentType = "blogPost";
  return (
    <div>
      <Articles contentType={contentType} isHome={false}/>
    </div>
  )
}