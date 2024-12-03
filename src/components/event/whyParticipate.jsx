import { Eye, IndianRupee, Lightbulb } from 'lucide-react'

export default function WhyParticipate() {
  const features = [
    {
      icon: IndianRupee,
      title: "1 Lakhs",
      subtitle: "Worth prizes at stake, along with Certificate of Participation and Swags",
      iconColor: "text-[#4ADE80]",
    },
    {
      icon: Lightbulb,
      title: "Get Inspired",
      subtitle: "Code with 500+ developers and designers to build solutions to real-world problems",
      iconColor: "text-[#A855F7]",
    },
    {
      icon: Eye,
      title: "Fresh Insights",
      subtitle: "Get insights from eminent speakers and mentors",
      iconColor: "text-[#EC4899]",
    },
  ]

  return (
    <section className="bg-[#0a0b1a] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl font-bold text-white text-center mb-16 tracking-wider">
          Why
          <br />
          Participate?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1b2e] border-none p-6 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 p-4 rounded-lg bg-[#252640] group-hover:bg-[#2a2b47] transition-colors">
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-[#EC4899] font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

