import { useEffect, useRef } from "react"
import Parallax from "parallax-js"

export function useParallax() {
  const ref = useRef(null)

  useEffect(() => {
    const p = new Parallax(ref.current)
    return () => p.destroy()
  }, [ref])

  return ref
}
