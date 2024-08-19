import { createOpenAI } from '@ai-sdk/openai'

export function openai(apiKey: string) {
  const Openai = createOpenAI({
    apiKey,
  })

  return Openai('gpt-3.5-turbo')
}
