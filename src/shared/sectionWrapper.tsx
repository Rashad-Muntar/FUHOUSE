import { PropsWithChildren } from 'react'

const SectionWrapper = ({ children }: PropsWithChildren) => {
  return <div className="mt-16">{children}</div>
}

export default SectionWrapper
