import { ChevronDown } from "lucide-react"

const ScrollToNextSection = ({nextSection}) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-0.5 animate-fade-in animation-delay-800">
        <a href={`#${nextSection}`} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce"/>
        </a>
      </div>
  )
}

export default ScrollToNextSection