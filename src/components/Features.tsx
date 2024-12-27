import { Code, Zap, Award } from 'lucide-react'

const features = [
  {
    icon: <Code className="w-12 h-12 text-blue-600" />,
    title: 'Smart Code Analysis',
    description: 'AlgoBot analyzes your code in real-time, providing instant feedback and optimization suggestions.'
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: 'Problem Solving Assistance',
    description: 'Get AI-powered hints and explanations for complex algorithmic problems.'
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: 'Performance Tracking',
    description: 'Track your progress and compare your performance with top competitive programmers.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">AlgoBot Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
