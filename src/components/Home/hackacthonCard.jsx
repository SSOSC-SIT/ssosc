
import { Sparkles, Calendar, Trophy } from 'lucide-react'
import Link from "next/link"

export default function HackathonPromo() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 flex items-center justify-center gap-2">
          <Sparkles className="h-8 w-8 text-yellow-500" />
          SRINATHON 2024
          <Sparkles className="h-8 w-8 text-yellow-500" />
        </h2>
      </div>
      <div className="px-6 pb-6 text-center space-y-4">
        <p className="text-lg font-semibold text-gray-700">
          24 Hours National Level Hackathon
        </p>
        <div className="flex justify-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-1 text-indigo-600" />
            10-11 Dec 2024
          </div>
          <div className="flex items-center">
            <Trophy className="h-5 w-5 mr-1 text-indigo-600" />
            Prize up to 1 Lakh
          </div>
        </div>
        <p className="text-indigo-600 font-medium">
          Showcase your skills in Development, Innovation, and Research!
        </p>
      </div>
      <div className="px-6 pb-6 flex justify-center">
        <Link href="/hackathon">
          <button size="lg" className=" w-60 rounded bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold">
            Learn More & Register
          </button>
        </Link>
      </div>
    </div>
  )
}
