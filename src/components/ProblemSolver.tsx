'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function ProblemSolver() {
  const [problem, setProblem] = useState('')
  const [response, setResponse] = useState('')
  const [responseType, setResponseType] = useState<'topics' | 'hints' | 'solution' | null>(null)
  const [loading, setLoading] = useState(false);

  const handleGetTopics = () => {
	  setLoading(true);
    setResponse('');
    setResponseType('topics')
    const body = JSON.stringify({ input: { problem } });
    fetch("https://flow-api.mira.network/v1/flows/flows/pranjal/cp-problem-topics7?version=0.0.1", { method: "POST", headers: { "Content-Type": "application/json", "miraauthorization": "sb-48d11f2267445dedf42e3ef9d7829c62" }, body }).then(resp => resp.json()).then(resp => {setResponse(resp.result); setLoading(false);});
  }

  const handleGetHints = () => {
    setLoading(true);
    setResponse('');
    setResponseType('hints')
    const body = JSON.stringify({ input: { problem } });
    fetch("https://flow-api.mira.network/v1/flows/flows/pranjal/cp-problem-topics7?version=0.0.1", { method: "POST", headers: { "Content-Type": "application/json", "miraauthorization": "sb-48d11f2267445dedf42e3ef9d7829c62" }, body }).then(resp => resp.json()).then(resp => {
	    const topics = resp.result;
    const body = JSON.stringify({ input: { problem, topics } });
    fetch("https://flow-api.mira.network/v1/flows/flows/pranjal/cp-problem-hint7?version=0.0.1", { method: "POST", headers: { "Content-Type": "application/json", "miraauthorization": "sb-48d11f2267445dedf42e3ef9d7829c62" }, body }).then(resp => resp.json()).then(resp => {setResponse(resp.result); setLoading(false);});
    });
  }

  const handleGetSolution = () => {
	  setLoading(true);
    setResponse('');
    setResponseType('solution')
    const body = JSON.stringify({ input: { problem } });
    fetch("https://flow-api.mira.network/v1/flows/flows/pranjal/cp-problem-topics7?version=0.0.1", { method: "POST", headers: { "Content-Type": "application/json", "miraauthorization": "sb-48d11f2267445dedf42e3ef9d7829c62" }, body }).then(resp => resp.json()).then(resp => {
	    const topics = resp.result;
    const body = JSON.stringify({ input: { problem, topics } });
    fetch("https://flow-api.mira.network/v1/flows/flows/pranjal/cp-problem-solver7?version=0.0.1", { method: "POST", headers: { "Content-Type": "application/json", "miraauthorization": "sb-48d11f2267445dedf42e3ef9d7829c62" }, body }).then(resp => resp.json()).then(resp => {setResponse(resp.result); setLoading(false);});
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Problem Solver</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Describe your problem here..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:space-x-4">
          <Button onClick={handleGetTopics} className="flex-1">
            Get Topics
          </Button>
          <Button onClick={handleGetHints} className="flex-1">
            Get Hints
          </Button>
          <Button onClick={handleGetSolution} className="flex-1">
            Get Solution
          </Button>
        </div>
	{loading && (
          <div className={`mt-4 p-4 rounded-md ${responseType === 'hints' ? 'bg-blue-50' : (responseType === 'solution' ? 'bg-green-50' : 'bg-slate-50')}`}>
            <p className="whitespace-pre-wrap">Loading...</p>
          </div>
        )}
	{response && (
          <div className={`mt-4 p-4 rounded-md ${responseType === 'hints' ? 'bg-blue-50' : (responseType === 'solution' ? 'bg-green-50' : 'bg-slate-50')}`}>
            <h4 className="font-semibold mb-2">{responseType === 'hints' ? 'Hint:' : (responseType === 'solution' ? 'Solution:' : 'Topic:')}</h4>
            <p className="whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


