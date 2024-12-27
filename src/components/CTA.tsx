import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Competitive Programming Skills?</h2>
      <p className="text-xl mb-8">Join thousands of developers who are already using AlgoBot to excel in their coding journey.</p>
      <Link href="/register" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
        Start Free Trial
      </Link>
    </section>
  )
}


