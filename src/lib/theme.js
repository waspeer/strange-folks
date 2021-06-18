import textBackgroundDay from "../images/klang-day.svg"
import textBackgroundNight from "../images/klang-night.svg"

export default ({ mode }) => ({
  backgroundColor: mode === "light" ? "#fff" : "#559cd6",
  primary: "#ff88d9",
  secondary: "#00feff",
  neutral: "#ffe000",
  textBackgroundUrl: `${
    mode === "light" ? textBackgroundDay : textBackgroundNight
  }`,
  // textBackgroundUrl: `${
  //   mode === "light" ? textBackgroundDay : textBackgroundNight
  // }`,
})
