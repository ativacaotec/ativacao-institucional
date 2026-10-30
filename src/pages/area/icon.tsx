import { StyledIcon } from "./icon.styles"

export interface IconProps {
    src: string
    top: string
    left: string
    onClick?: () => void
}

export const Icon = ({ src, top, left, onClick }: IconProps) => {
  return (
    <StyledIcon src={src} $top={top} $left={left} onClick={onClick} />
  )
};