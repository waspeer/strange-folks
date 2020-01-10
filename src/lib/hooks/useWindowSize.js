import { useState, useEffect } from "react"

export function useWindowSize() {
  const getSize = () => ({
    innerHeight: typeof window !== "undefined" ? window.innerHeight : undefined,
    innerWidth: typeof window !== "undefined" ? window.innerWidth : undefined,
    outerHeight: typeof window !== "undefined" ? window.outerHeight : undefined,
    outerWidth: typeof window !== "undefined" ? window.outerWidth : undefined,
  })
  const [size, setSize] = useState(getSize())

  useEffect(() => {
    const handleResize = () => setSize(getSize())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size
}
