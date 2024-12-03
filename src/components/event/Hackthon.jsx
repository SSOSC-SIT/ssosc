"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import WhyParticipate from "./whyParticipate";
import ReactPlayer from "react-player";
import { Calendar, Trophy, Users } from "lucide-react";

const Hackthon = () => {
  return (
    <div>
      <main className="relative">
        <div className="max-w-7xl mx-auto text-center pt-20 pb-32 px-4 "
       >
          <div className="max-w-full mx-auto  rounded-lg bg-transparent shadow-md mt-28">
          <div className="p-6 text-center space-y-4">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                24 HOURS NATIONAL LEVEL HACKATHON
              </h2>
              <h3 className="text-5xl md:text-7xl font-black mt-4 tracking-wider bg-clip-text text-[#ff7b01] ">
                SRINATHON
              </h3>
            </div>
          </div>
          <div className="p-6 space-y-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-indigo-600" />
                <span className="font-semibold">10-11 DECEMBER 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-indigo-600" />
                <span className="font-semibold">Prize Worth Up to 1 LAKH</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-indigo-600" />
                <span className="font-semibold">National Level Event</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 hover:border-indigo-500 transition-colors rounded-lg p-4">
                <h4 className="text-xl font-bold text-center text-[#ff7b01]">DEVATHON</h4>
                <p className="text-sm text-muted-foreground mt-2 text-center">AI driven Interview system</p>
              </div>
              <div className="border-2 hover:border-indigo-500 transition-colors rounded-lg p-4">
                <h4 className="text-xl font-bold text-center text-[#ff7b01]">OPEN THEME</h4>
                <p className="text-sm text-muted-foreground mt-2 text-center">One type solution for all services</p>
              </div>
              <div className="border-2 hover:border-indigo-500 transition-colors rounded-lg p-4">
                <h4 className="text-xl font-bold text-center text-[#ff7b01]">ZETATHON</h4>
                <p className="text-sm text-muted-foreground mt-2 text-center">Research Track</p>
              </div>
            </div>
          </div>
          <div className="p-6 flex justify-center">
            
          <a href="https://forms.gle/HfPn8Y9KvCqXAQsf8">
            <button
              variant="outline"
              size="lg"
              className="text-white bg-gradient-to-r from-indigo-600 to-purple-600 font-bold py-2 px-4 rounded "
            >
              Register NOW
            </button>
          </a>
          </div>
        </div>


          {/* <div
            className="absolute  left-0 right-0 h-64 bg-repeat-x"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1440' height='256' viewBox='0 0 1440 256' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 256V96L48 128L96 96L144 128L192 96L240 128L288 96L336 128L384 96L432 128L480 96L528 128L576 96L624 128L672 96L720 128L768 96L816 128L864 96L912 128L960 96L1008 128L1056 96L1104 128L1152 96L1200 128L1248 96L1296 128L1344 96L1392 128L1440 96V256H0Z' fill='%230066FF' fill-opacity='0.2'/%3E%3Cpath d='M0 256V128L48 160L96 128L144 160L192 128L240 160L288 128L336 160L384 128L432 160L480 128L528 160L576 128L624 160L672 128L720 160L768 128L816 160L864 128L912 160L960 128L1008 160L1056 128L1104 160L1152 128L1200 160L1248 128L1296 160L1344 128L1392 160L1440 128V256H0Z' fill='%230066FF' fill-opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundPosition: "bottom center",
            }}
          /> */}
        </div>

        <section className="bg-transparent py-24 mt-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              About Srinathon
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300">
                  Srinathon features three exciting tracks: Zetathon, Devathon,
                  and an Open Theme, offering participants a diverse range of
                  challenges to showcase their skills. The event aims to inspire
                  innovation and provide opportunities for students to work on
                  meaningful projects.
                </p>
                <p className="text-gray-300">
                  SSOSC looks forward to witnessing the creativity and
                  dedication of participants throughout Srinathon and wishes
                  everyone a successful and enriching experience. Stay tuned for
                  updates as the hackathon progresses..
                </p>
                <button variant="outline" className="mt-4 group border-2 p-2 w-auto">
                  Learn More
                  <FaArrowRightLong className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    
                      <ReactPlayer
                        url="https://youtu.be/egYFRQnyPCo"
                        width="100%"
                        height="100%"
                        loop
                        playing
                      />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WhyParticipate />
        <section className="bg-[#0a0b1a] py-24">
          <div className="max-w-7xl mx-auto px-4">
            {/* Challenge Sponsors */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-white text-center tracking-wider mb-16">
                CHALLENGE SPONSOR
              </h2>
              <div className="grid md:grid-cols-2 gap-16 items-center justify-items-center">
                <div className="w-full max-w-md">
                  <Image
                    src="/sponser/devapps.jpg?height=80&width=300"
                    alt="Qualcomm"
                    width={300}
                    height={80}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-full max-w-md">
                  <Image
                    src="/sponser/zetacoding.jpg?height=100&width=200"
                    alt="IIIT Hyderabad HubData"
                    width={200}
                    height={100}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Associate Sponsors */}
            <div>
              <h2 className="text-3xl font-bold text-white text-center tracking-wider mb-16">
                ASSOCIATE SPONSOR
              </h2>
              <div className="flex justify-center gap-10">
                <div className="w-full max-w-md m-4">
                  <Image
                    src="/sponser/IEEEB.png?height=60&width=200"
                    alt="bvteXL"
                    width={200}
                    height={60}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-full max-w-md m-4">
                  <Image
                    src="/sponser/IEEEM.png?height=60&width=200"
                    alt="bvteXL"
                    width={200}
                    height={60}
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-full max-w-md m-4">
                  <Image
                    src="/sponser/IEEESIT.jpg?height=60&width=200"
                    alt="bvteXL"
                    width={200}
                    height={60}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hackthon;
