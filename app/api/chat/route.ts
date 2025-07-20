import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { config } from '@/config/project';
import { prompts } from '@/constants/prompts';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google(config.defaultModel),
    messages,
    system: prompts.greeting,
  });

  return result.toDataStreamResponse();
}