import Header from '@/components/Header'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2023 AlgoBot. All rights reserved.</p>
      </footer>
    </div>
  )
}

function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Meet AlgoBot</h1>
      <p className="text-xl mb-8">Your AI-Powered Competitive Programming Assistant</p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </section>
  )
}
