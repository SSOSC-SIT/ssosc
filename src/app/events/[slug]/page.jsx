import PhotoCollage from '@/components/event/PhotoCollage'
import Image from 'next/image'

export default function EventDetails() {
  
  return (
    <div className="container mx-auto px-4 py-8 space-y-12 ">
      <div className="flex flex-col md:flex-row gap-8 mt-20">
        {/* Left side - Event Poster */}
        <div className="md:w-1/3">
          <Image
            src="/event/ReverseCoding.jpg?height=600&width=400"
            alt="Event Poster"
            width={400}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Event Details */}
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-5xl font-bold">Tech Conference 2024</h1>
          <p className="text-2xl text-muted-foreground">Date: June 15-17, 2024</p>
          <p className="text-xl">Mentor: Dr. Jane Smith</p>
          <p className="text-lg text-muted-foreground">
            Join us for an exciting three-day conference exploring the latest trends in technology,
            featuring keynote speakers, workshops, and networking opportunities.
          </p>
        </div>
      </div>

      {/* Post-event Report Section */}
      <div className="bg-muted p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold mb-4">Post-Event Report</h2>
        <p className="text-xl mb-6">
          The Tech Conference 2024 was a resounding success, with over 500 attendees from 20 different countries. 
          Highlights included keynote speeches on AI ethics, hands-on workshops on blockchain technology, and a 
          startup pitch competition. Attendees praised the networking opportunities and the quality of presentations.
        </p>

        {/* Photo Collage */}
        <PhotoCollage />
      </div>
    </div>
  )
}