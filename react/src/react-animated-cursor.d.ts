declare module 'react-animated-cursor' {
  import { ComponentType } from 'react'

  export interface AnimatedCursorProps {
    innerSize: number
    outerSize: number
    color: string
    outerAlpha: number
    innerScale: number
    outerScale: number
  }

  const AnimatedCursor: ComponentType<AnimatedCursorProps>

  export default AnimatedCursor
}
