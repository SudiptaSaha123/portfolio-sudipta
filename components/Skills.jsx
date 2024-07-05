import data from "@/public/data";
import Tech from "./Tech";

const Skills = () => {
  return (
    <div className="mt-14">
      <h3 className="text-[#000000] text-[1.2rem] sm:text-[1.2rem] font-medium mb-8">
        technical skills
      </h3>
      <div className="flex flex-col gap-8">
        {data.map((category) => (
          <div
            key={category.type}
            className="flex flex-col sm:flex-row gap-10 items-baseline"
          >
            <h3 className="text-white bg-[#5c5c5c] py-2 px-4 rounded-xl sm:w-[8rem] h-[2rem] flex items-center text-[0.7rem] sm:text-[0.8rem]">
              {category.type}
            </h3>
            <div className="flex flex-row gap-4 flex-wrap">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="text-white bg-[#000000] py-2 px-4 rounded-xl text-[0.7rem] sm:text-[0.8rem]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
