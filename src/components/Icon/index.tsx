import Close from '@/assets/icons/close.svg?react'
import Image from '@/assets/icons/image-icon.svg?react'
import { twMerge } from 'tailwind-merge'
import './icon.css'

const iconsMap = {
  Close,
  Image
} as const

export type IconsMap = typeof iconsMap
export type IconsNames = keyof IconsMap
interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconsNames
  clickable?: boolean
  onClick?: () => void
  className?: string
  svgProps?: React.SVGProps<SVGSVGElement>
}

const Icon = ({ name, onClick, className, svgProps }: IconProps) => {
  const IconToRender = iconsMap[name]

  if (!IconToRender) return null
  return (
    <IconToRender
      {...svgProps}
      className={twMerge(
        `${!!onClick && 'cursor-pointer hover:fill-primary-600'} transition-all h-5 fill-primary-800`,
        className
      )}
      onClick={onClick}
    />
  )
}
export default Icon
