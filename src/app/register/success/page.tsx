import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function RegisterSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="flex items-center justify-center space-x-2">
            <CheckCircle className="text-green-500" />
            <span>Registration Successful!</span>
          </CardTitle>
          <CardDescription>Welcome to AlgoBot</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Your account has been created successfully. You can now start using AlgoBot to improve your competitive programming skills.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}


