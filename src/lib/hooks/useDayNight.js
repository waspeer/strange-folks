import { useState, useEffect } from "react"

export function useDayNight() {
  const getDay = () => {
    const hours = new Date().getHours()
    return hours < 19 || hours > 9
  }
  const [day, setDay] = useState(getDay())
  const tenMinutes = 600000

  useEffect(() => {
    const interval = setInterval(() => {
      setDay(getDay())
    }, tenMinutes)

    return () => clearInterval(interval)
  }, [])

  return day
}
