import Layout from './components/Layout'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Lifestyle from './components/Lifestyle'
import Contact from './components/Contact'

function App() {
  return (
    <Layout>
      <main className="bg-[var(--midnight)] min-h-screen">
        <Hero />
        <Philosophy />
        <Lifestyle />
        <Contact />
      </main>
    </Layout>
  )
}

export default App
