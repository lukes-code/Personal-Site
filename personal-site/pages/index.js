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
            content="I am a self-taught developer. I find true joy in being able to make something out of nothing. After learning via Codecademy and YouTube I made a small portfolio of static frontend websites, compiled from cheap freelance work and free work for friends. Thanks to this I landed a full-time junior developer job at Next Venture, working primarily with LAMP stack in the insurance sector. Still driven by new tech, I spend most evenings either working on my Bsc Software Engineering degree course or learning new code frameworks and libraries by means of courses on YouTube, Udemy or by Wes Bos. I left Next Venture after nearly 3 years to start at my current job at Eliga Services, here I get to use the modern technologies commercially."
        />
        <ContentImage source="/static/hacktoberfest.jpg" alt="squad photo"/>
        <Banner />
        <ContentSection 
            title="Portfolio."
            firstLine="Here," 
            secondLine="is some of" 
            thirdLine="my personal work"
            content="Please note that most of my experience and work happens in work time. I am unable to share this work. If there is anything you would like to see further, please contact me."
        />
        <Articles contentType="portfolio" isHome={true}/>
      </main>
    </div>
  )
}
