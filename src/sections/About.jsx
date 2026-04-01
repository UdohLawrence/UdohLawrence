import { highlights } from "../constants/highlights";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into polished,
              <span className="font-serif italic font-normal text-white">
                &nbsp; full-stack products that ship.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a software engineer with 3+ years of experience building
                digital products that people actually use. What started as
                curiosity about how the web works has grown into a strong
                foundation in modern fullstack development.
              </p>
              <p>
                I work primarily with React, Next.js, and TypeScript — across
                everything from marketing sites to large-scale enterprise
                applications. I care about writing good code, but I care just as
                much about the experience on the other side of the screen.
              </p>
              <p>
                Outside of work, I'm usually keeping up with new tools and
                frameworks, contributing to developer conversations online, or
                quietly playing guitar.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Good software should work well, look great, and be a joy to maintain - <strong className="text-xl font-bold italic">I hold myself to these standards</strong>."
              </p>
            </div>
          </div>
          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
