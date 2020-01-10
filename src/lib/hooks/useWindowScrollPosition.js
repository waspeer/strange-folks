import { useState, useEffect } from "react"
import throttle from "lodash.throttle"

export function useWindowScrollPosition() {
  const defaultPosition = { x: 0, y: 0 }
  const [position, setPosition] = useState(defaultPosition)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setPosition(
        typeof window !== "undefined"
          ? { x: window.scrollX, y: window.scrollY }
          : defaultPosition
      )
    }, 100)

    window.addEventListener("scroll", handleScroll)

    return () => {
      handleScroll.cancel()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [defaultPosition])

  return position
}
