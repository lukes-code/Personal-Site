import Articles from '../components/Articles'
import Header from '../components/Header'
import Title from '../components/Title'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Articles contentType="blogPost" isHome={true}/>
        <Title title="About."/>
        <Banner />
        <Title title="Skills."/>
        <Articles contentType="portfolio" isHome={true}/>
      </main>
    </div>
  )
}
