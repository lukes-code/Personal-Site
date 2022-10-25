import Articles from '../components/Articles'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ContentSection from '../components/ContentSection'
import ContentImage from '../components/ContentImage'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Articles contentType="blogPost" isHome={true}/>
        <ContentSection 
            title="About me."
            firstLine="Hello," 
            secondLine="I am Luke," 
            thirdLine="a developer from Wales, UK"
            content="As a self-taught developer working commercially since early 2019, I have found a passion for problem-solving. Translating wireframes into beautiful responsive and accessible sites or implementing dynamic data and complex logic, I am constantly looking for ways to grow as the tech industry continues to evolve."
        />
        <ContentImage source="/static/hacktoberfest.jpg" alt="squad photo"/>
        <Banner />
        <ContentSection 
            title="Portfolio."
            firstLine="Here," 
            secondLine="is some of" 
            thirdLine="my personal work"
            content="A great deal of my experience has come commercially, to which I cannot share. I am more than happy to talk technical to make up for this, just reach out."
        />
        <Articles contentType="portfolio" isHome={true}/>
      </main>
    </div>
  )
}
