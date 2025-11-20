import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      company: "Evident Microscopy",
      logo: "/logos/evident.jpeg",
      roles: [
        {
          title: "Software Engineer",
          type: "Full-time",
          duration: "Nov 2025 - Present",
        },
        {
          title: "Software Intern",
          type: "Internship",
          duration: "Aug 2025 - Nov 2025",
        },
      ],
    },
    {
      company: "Pramana",
      logo: "/logos/pramana.jpeg",
      roles: [
        {
          title: "Software Intern",
          type: "Internship",
          duration: "May 2025 - Aug 2025",
        },
      ],
    },
    {
      company: "WhatBytes",
      logo: "/logos/whatbytes.jpeg",
      roles: [
        {
          title: "Full Stack Developer",
          type: "Internship",
          duration: "Nov 2024 - Jan 2025",
        },
      ],
    },
  ];

  return (
    <div className="mt-14">
      <h3 className="text-[#000000] text-[1.2rem] sm:text-[1.2rem] font-medium mb-8">
        experience
      </h3>
      <div className="flex flex-col gap-10">
        {experiences.map((exp, companyIndex) => (
          <div key={companyIndex} className="flex gap-4">
            <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 overflow-hidden mt-[5.4px]">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h4 className="text-[#000000] text-[0.9rem] sm:text-[1rem] font-medium">
                {exp.company}
              </h4>
              <div className="flex flex-col gap-4">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="flex flex-col gap-1">
                    <h5 className="text-[#000000] text-[0.8rem] sm:text-[0.8rem] font-medium">
                      {role.title}
                    </h5>
                    <p className="text-[#000000] text-[0.7rem] sm:text-[0.8rem] opacity-70">
                      {role.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

