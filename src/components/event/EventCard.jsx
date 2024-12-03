"use client"; // Ensure this is a Client Component

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation"; // Updated to next/navigation
import { Events } from "@/Constant";

const EventCard = () => {
  const router = useRouter();

  const handleCardClick = (slug) => {
    router.push(`/hackathon`); // Redirects to /events/[slug]
  };

  return (
    <>
      <div className="w-full">
        <h2 className="text-7xl z-50 font-extrabold text-white text-center mb-24 hover:underline mt-20">
          Upcoming Events
        </h2>
      </div>
      {Events.map((event) => (
        <div
          key={event.title}
          onClick={() => handleCardClick(event.slug)} // Call redirection on click
          className="max-w-md overflow-hidden shadow-xl border-2 mx-5 mt-9 p-3 rounded-lg transition ease-in-out m-4 hover:-translate-y-1 hover:scale-105 hover:border-4 duration-700 hover:shadow-lg hover:shadow-[#ff7b01] cursor-pointer"
        >
          <Image
            src={event.imageUrl}
            alt={event.title}
            width={800}
            height={80}
            className="w-full h-96"
          />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-[#ff7b01]">
              {event.title}
            </h2>
            <p className="text-gray-200 text-sm">{event.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {event.tag1}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {event.tag2}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventCard;