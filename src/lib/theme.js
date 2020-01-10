import textBackground from "../images/klang.svg"

export default ({ mode }) => ({
  backgroundColor: mode === "light" ? "#fff2d3" : "#559cd6",
  primary: "#ff88d9",
  secondary: "#00feff",
  neutral: "#ffe000",
  textBackgroundUrl: `${textBackground}#${mode === "light" ? "day" : "night"}`,
})
