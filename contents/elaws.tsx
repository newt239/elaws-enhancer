import type { PlasmoCSConfig } from "plasmo"
import { oldToNew } from "~utils/functions"

export const config: PlasmoCSConfig = {
  matches: ["https://elaws.e-gov.go.jp/document?lawid=*"]
}

const CustomButton = () => {
  const onClick = ( ) => {
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
  }
  return <button onClick={onClick} style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}>Convert</button>
}

export default CustomButton