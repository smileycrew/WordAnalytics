import { useState } from "react"
import Warning from "./Warning"

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState(false)

  const handleChange = (event) => {
    let newText = event.target.value

    // basic validation
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed!")
      newText = newText.replace("<script>", "")
    } else if (newText.includes("@")) {
      setWarningText("No @ symbol allowed!")
      newText = newText.replace("@", "")
    } else {
      setWarningText("")
    }

    setText(newText)
  }

  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        spellCheck="false"
        placeholder="Enter your text"
        value={text}
      ></textarea>
      <Warning warningText={warningText} />
    </div>
  )
}
