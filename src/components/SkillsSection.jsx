import { skills } from "../constants/skills";

const SkillsSection = () => {
  return (
    <div className="mt-20 animate-fade-in animation-delay-600">
      <p className="text-sm text-muted-foreground mb-6 text-center">
        My Tech. Stack
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="shrink-0 px-8 py-4">
              <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillsSection;
