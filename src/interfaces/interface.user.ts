// src/interfaces/interface.user.ts

/**
 * @file Defines the TypeScript interface for a User entity.
 * This interface outlines the expected structure for user objects within the application,
 * commonly retrieved from authentication or user session management.
 */

/**
 * @interface User
 * @description Represents the structure of a user object.
 */
export interface User {
  /** Unique identifier for the user (e.g., from a database or SSO provider). */
  _id: string;
  /** The user's first name or primary given name. */
  name: string;
  /**
   * The user's second name or surname.
   * This field might be optional depending on the user data source.
   * Consider making it `second_name?: string;` if it can be absent.
   */
  sname: string; // Consider renaming to secondName or lastName for camelCase consistency
  /** URL or path to the user's avatar or profile image. */
  image: string; // Could be optional: `image?: string;`
  /**
   * The role of the user within the application (e.g., "admin", "editor", "viewer").
   * Consider using a union type for more specific role values: `role: "admin" | "user" | "guest";`
   */
  role: string;
  /** The user's email address. Should be unique. */
  email: string;
  // Optional additional fields:
  // username?: string; // If a separate username is used
  // isActive?: boolean;
  // lastLogin?: Date;
  // permissions?: string[];
  // preferences?: Record<string, any>;
}
