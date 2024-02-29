import { useState } from "react"
import Stats from "./Stats"
import Textarea from "./Textarea"
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants"

export default function Container() {
  const [text, setText] = useState("")
  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  }

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  )
}
