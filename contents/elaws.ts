import type { PlasmoCSConfig } from "plasmo"

import { oldToNew } from "~utils/functions"

export const config: PlasmoCSConfig = {
  matches: ["https://elaws.e-gov.go.jp/document?lawid=*"]
}

window.addEventListener("load", () => {
  setTimeout(() => {
    const prevElements = document.querySelectorAll(
      "._div_EnactStatement, ._div_ArticleTitle, ._div_ParagraphSentence"
    )
    for (let i = 0; i < prevElements.length; i++) {
      const prevElement = prevElements[i].innerHTML
      let newElement: string = ""
      for (let i = 0; i < prevElement.length; i++) {
        newElement += oldToNew(prevElement[i])
      }
      prevElements[i].innerHTML = newElement
    }
  }, 1000)
})
