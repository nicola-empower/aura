import Layout from './components/Layout'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import FounderStory from './components/FounderStory'
import Lifestyle from './components/Lifestyle'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <Layout>
      <main className="bg-[var(--midnight)] min-h-screen">
        <Hero />
        <Philosophy />
        <FounderStory />
        <Lifestyle />
        <Testimonials />
        <Contact />
      </main>
    </Layout>
  )
}

export default App
