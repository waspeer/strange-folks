import { useState, useEffect } from "react"
import throttle from "lodash.throttle"

import { isBrowser } from "#lib/helpers"

const getWindowScrollPosition = () =>
  isBrowser
    ? {
        x: window.scrollX,
        y: window.scrollY,
      }
    : { x: 0, y: 0 }

export function useWindowScrollPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = throttle(() => {
      setPosition(getWindowScrollPosition())
    }, 100)

    setPosition(getWindowScrollPosition())

    window.addEventListener("scroll", handleScroll)

    return () => {
      handleScroll.cancel()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return position
}
