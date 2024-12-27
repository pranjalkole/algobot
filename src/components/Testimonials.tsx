import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Software Engineer at Google',
    content: 'AlgoBot has been a game-changer for my competitive programming journey. It\'s like having a personal mentor available 24/7.',
    avatar: '/placeholder.svg?height=100&width=100'
  },
  {
    name: 'Sophia Lee',
    role: 'Computer Science Student',
    content: 'Thanks to AlgoBot, I\'ve improved my problem-solving skills dramatically. It\'s an invaluable tool for any aspiring programmer.',
    avatar: '/placeholder.svg?height=100&width=100'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
            <div className="flex items-center">
	    {/*<Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>*/}
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
