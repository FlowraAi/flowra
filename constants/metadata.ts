import { Metadata } from "next";
import { config } from "@/config/project";

// Default metadata for the app
export const defaultMetadata: Metadata = {
  title: config.appName,
  description: config.description,
  keywords: config.keywords,
  icons: {
    icon: "/favicon.ico",
  },
};
