
// src/interfaces/interface.chatbot.ts

/**
 * @file Defines the TypeScript interface for a Chatbot entity.
 * This interface outlines the expected structure and data types for chatbot objects
 * used within the application.
 */

/**
 * @interface Chatbot
 * @description Represents the structure of a chatbot object.
 */
export interface Chatbot {
  /** Unique identifier for the chatbot. */
  _id: string;
  /** The name of the chatbot. */
  name: string;
  /** A brief description of the chatbot's purpose or functionality. */
  description: string;
  /** The URL path or endpoint associated with the chatbot. */
  path: string;
  /** URL or path to an image representing the chatbot. */
  image: string;
  /** Identifier for the AI model used by the chatbot (e.g., GPT-3, custom model ID). */
  modelid: string; // Consider renaming to modelId for camelCase consistency
  /** The current operational status of the chatbot. */
  status: "active" | "inactive";
  /** Specific instructions or system prompts guiding the chatbot's behavior. */
  instructions: string;
  /** Optional: Timestamp of when the chatbot record was created. */
  createdAt?: Date;
  /** Optional: Timestamp of when the chatbot record was last updated. */
  updatedAt?: Date;
  // Consider adding other relevant fields, e.g.:
  // version?: string;
  // tags?: string[];
  // ownerId?: string;
}