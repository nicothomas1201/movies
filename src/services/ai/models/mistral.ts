import { createMistral } from '@ai-sdk/mistral'

export function mistral(apiKey: string) {
  const Mistral = createMistral({
    apiKey,
  })

  return Mistral('mistral-large-latest')
}
