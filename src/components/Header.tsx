import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          AlgoBot
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="#features" className="hidden lg:inline hover:text-blue-600">Features</Link></li>
          <li><Link href="#testimonials" className="hidden lg:inline hover:text-blue-600">Testimonials</Link></li>
          <li><Link href="/login" className="hover:text-blue-600">Log In</Link></li>
          <li><Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  )
}


