import React from 'react'
import Image from 'next/image'

const PhotoCollage = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <Image
              src="/event/ReverseCoding.jpg?height=400&width=400&text=Keynote"
              alt="Keynote Speech"
              width={400}
              height={400}
              className="rounded-md shadow-md object-cover w-full h-full"
            />
          </div>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Image
              key={i}
              src={`/event/ReverseCoding.jpg?height=200&width=200&text=Image${i}`}
              alt={`Event Highlight ${i}`}
              width={200}
              height={200}
              className="rounded-md shadow-md object-cover w-full h-full"
            />
          ))}
        </div>
  )
}

export default PhotoCollage
