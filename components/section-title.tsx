import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
  description?: string
  withLines?: boolean
  className?: string
}

const SectionTitle = ({
  children,
  description,
  withLines = true,
  className
}: SectionTitleProps) => {
  return (
    <div className="py-2">
      <div className="flex items-center min-h-full gap-10 justify-center">
        {withLines && (<div className="bg-blue-800 h-[2px] w-20" />)}
        <h2 className={cn("text-center text-4xl font-black text-gray-800", className)}>
          {children}
        </h2>
        {withLines && (<div className="bg-blue-800 h-[2px] w-20" />)}
      </div>
      {description && (
        <div>
          <p className="text-gray-500 text-center font-semibold">
            {description}
          </p>
        </div>
      )}
    </div>
  )
}

export default SectionTitle