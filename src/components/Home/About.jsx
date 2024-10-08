import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".about", {
      opacity: -1,
      duration: 1,
      x: -300,
    });
  });

  return (
    <div className=" flex justify-center items-center my-5 m-[5%] ">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="md:w-1/2">
          <h1 className="font-montserratB text-[80px] md:text-[48px] lg:text-[64px]text-9xl md:text-5xl my-5 text-[#ff7b01]">
            What we do ?
          </h1>
          <p className=" about font-montserratR text-xl text-justify leading-relaxed text-white">
            Introducing SSOSC, a hub for the brightest minds to explore, create,
            and contribute to the open-source ecosystem. Powered by the passion
            for technology and a vision to drive change, SSOSC stands at the
            forefront of a movement that transcends classrooms, bringing
            real-world solutions to life. With the spirit of teamwork and the
            power of open-source, we’re setting the stage for a revolution in
            tech, unlocking the potential of students, developers, and
            innovators alike. 💡💻
          </p>
        </div>
        <div className="md:pl-10 md:pr-0 px-20 md:py-0 py-20 flex items-center justify-center md:w-1/2">
          <Image
            className="lg:p-20 md:px-10 sm:p-10"
            width={900}
            height={900}
            src="/SSOSC.LOGO-WHITE.png"
            alt="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
