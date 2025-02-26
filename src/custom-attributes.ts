import { WebInflator } from "@denshya/proton"

declare global {
  namespace JSX {
    interface CustomAttributes { }
  }
}

function applyCustomAttributes(inflator: WebInflator) {
  // inflator.jsxAttributes.set("special", context => { })
}

export default applyCustomAttributes
