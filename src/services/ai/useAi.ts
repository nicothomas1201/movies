import { generateText, LanguageModel } from 'ai'

export async function useAi(model: LanguageModel, prompt: string) {
  const { text } = await generateText({
    model,
    prompt,
  })

  return text
}
