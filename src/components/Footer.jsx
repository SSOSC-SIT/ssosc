import Link from "@/components/Links";
import Image from "next/image";

const githubLink = "https://github.com/SSOSC-SIT24";
const linkedinLink = "https://www.linkedin.com/company/ssoscsitmng/ ";
const instagramLink =
  "https://www.instagram.com/ssosc.sitmng?utm_source=qr&igsh=Z2xuN3kwbnh4b3V3 ";
const whatsAppLink = " https://chat.whatsapp.com/BaG97xk50KQ46u5xsV0SU1 ";
const twitterLink = "https://twitter.com/";
const youtubeLink = "https://www.youtube.com/";
const discordLink = "https://discord.gg/yRt9BadFru";

const communityGuidelines = "https://github.com/SSOSC-SIT";

const Footer = () => {
  return (
    <div className="bg-[#ff7b01]">
      <footer className="body-font tracking-wider">
        <div className="container md:pt-14 pb-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex flex-grow md:pl-20 mb-10 mx-6 md:mt-0 mt-10 ">
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <div className="flex text-white flex-col">
                <Link href={githubLink} target="_blank" text="GitHub" />
                <Link href={linkedinLink} target="_blank" text="LinkedIn" />
                <Link href={instagramLink} target="_blank" text="Instagram" />
                <Link href={whatsAppLink} target="_blank" text="WhatsApp" />
                <Link href={twitterLink} target="_blank" text="Twitter" />
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full px-4">
              <div className="flex text-white flex-col">
                <Link href={youtubeLink} target="_blank" text="Youtube" />
                <Link href={discordLink} target="_blank" text="Discord" />
                <Link
                  href={communityGuidelines}
                  target="_blank"
                  text="Community Guidelines"
                />
                <Link href="#" target="_blank" text="Donate" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-white flex-shrink-0 mx-auto my-4 md:mx-6 ">
            <Image
              src="/SSOSC.LOGO-WHITE.png"
              alt="logo"
              width={150}
              height={140}
              className=""
            />
            <p className="font-bold pt-4">
              Srinivas Student Open-Source Community
            </p>
            <p className="pt-2">
              Srinivas Institute of Technology, Valachil, Mangalore - 574143
            </p>
            <Link
              target="_blank"
              text="ssosc@sitmng.ac.in"
              href="mailto:ssosc@sitmng.ac.in"
            />
            <p className="pt-2">+91 9141258312</p>
          </div>
        </div>
        <div className="text-white bg-black">
          <p className="py-5 px-5 text-center">
            SSOSC © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
