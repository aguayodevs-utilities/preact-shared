// src/interfaces/interface.model.ts

/**
 * @file Defines the TypeScript interface for an AI Model entity.
 * This interface describes the structure and data types for AI model objects.
 */

/**
 * @interface IModel
 * @description Represents the structure of an AI model object.
 * It includes details about the model's identification, metadata, and provider.
 */
export interface IModel {
  /** Unique identifier for the AI model. */
  _id: string;
  /** The display name of the AI model. */
  name: string;
  /** A brief description of the AI model, its capabilities, or use cases. */
  description: string;
  /** URL or path to an image representing the AI model or its provider. */
  image: string;
  /**
   * The current status of the AI model (e.g., "available", "deprecated", "beta").
   * Consider using a union type for more specific status values: `status: "active" | "beta" | "deprecated";`
   */
  status: string;
  /** An array of license identifiers or names under which the model is available. */
  license: string[]; // Could also be `license: string;` if only one license is typical
  /** The specific name or identifier of the model (e.g., "text-davinci-003", "gpt-4"). */
  model: string;
  /** The version of the AI model (e.g., "1.0.0", "v2"). */
  model_version: string; // Consider renaming to modelVersion for camelCase consistency
  /** The provider or source of the AI model (e.g., "OpenAI", "HuggingFace", "Google AI"). */
  model_provider: string; // Consider renaming to modelProvider for camelCase consistency
  // Optional additional fields:
  // createdAt?: Date;
  // updatedAt?: Date;
  // capabilities?: string[]; // e.g., ["text-generation", "translation"]
  // inputSchema?: Record<string, any>;
  // outputSchema?: Record<string, any>;
}

