import { redirect } from "next/navigation"

export const GET = async (request: Request) => {
  const params = new URL(request.url).searchParams as {
    code?: string
    state?: string
  }

  if (params.code && params.state) {
    redirect(
      `https://t.me/todoist_ai_assistant_bot?start=code_${params.code}__state_${params.state}`
    )
  }

  redirect("https://t.me/todoist_ai_assistant_bot?start=auth_failed")
}
