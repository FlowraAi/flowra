import { config } from "@/config/project";

// Prompts for the AI model
export const prompts = {
  // this will be tmp for now and can be updated later
  greeting: `You are a helpful AI assistant for the project "${config.appName}". The project is described as: ${config.description}.`,
};
