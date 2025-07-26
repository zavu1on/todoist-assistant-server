"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function TodoistAuthHandler() {
  const router = useRouter()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get("code")
    const state = urlParams.get("state")

    let redirectUrl: string

    if (code && state) {
      redirectUrl = `https://t.me/todoist_ai_assistant_bot?start=${state}`
    } else {
      redirectUrl = "https://t.me/todoist_ai_assistant_bot?start=auth_failed"
    }

    router.replace(redirectUrl)
  }, [])
  return (
    <div>
      <p>Обработка авторизации Todoist...</p>
    </div>
  )
}
