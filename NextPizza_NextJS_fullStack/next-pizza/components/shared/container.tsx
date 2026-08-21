import { cn } from "@/lib/utils"

type ContainerProps = {
  className?: string
  children?: React.ReactNode
}

export  function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>
      {children}
    </div>
  )
}