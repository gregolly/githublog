import { IconsProps } from '../../@types/icons-props'

export function ChevronIcon({ width, height, color }: IconsProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9997 31C21.4514 31 20.9028 30.7907 20.4849 30.3722L7.62779 17.5151C6.79074 16.678 6.79074 15.322 7.62779 14.4849L20.4849 1.62779C21.322 0.790737 22.678 0.790737 23.5151 1.62779C24.3521 2.46484 24.3521 3.82087 23.5151 4.65792L12.1727 16L23.5164 27.3437C24.3535 28.1808 24.3535 29.5368 23.5164 30.3739C23.0979 30.7924 22.5488 31 21.9997 31Z"
        fill={color}
      />
    </svg>
  )
}
