

// src/interfaces/interface.imageComboBox.ts

/**
 * @file Defines TypeScript interfaces related to the ImageComboBox component.
 * This includes the structure for individual options and the props for the component itself.
 */

/**
 * @interface ImageComboBoxOption
 * @description Represents a single option within the ImageComboBox.
 * Each option has a value, an image URL, a display label, and a description.
 */
export interface ImageComboBoxOption {
  /** The unique value associated with the option. */
  value: string;
  /** URL or path to the image for the option. */
  img: string;
  /** The primary display text for the option. */
  label: string;
  /** Additional descriptive text for the option. */
  description: string;
  // [key: string]: any; // Optional: Allow other properties if needed for extensibility
}

/**
 * @interface ImageComboBoxProps
 * @description Defines the props for the `CustomImageComboBox` component.
 */
export interface ImageComboBoxProps {
  /** An array of `ImageComboBoxOption` objects to populate the combo box. */
  options: ImageComboBoxOption[];
  /** Optional placeholder text to display when no option is selected. */
  placeholder?: string;
  /** The `value` of the currently selected option. Can be a string or null if no selection. */
  value?: string | null | undefined; // Allow undefined as Autocomplete might pass it
  /**
   * Optional callback function triggered when the selected option changes.
   * Receives the newly selected `ImageComboBoxOption` object or `null` if cleared (though clearable is disabled).
   */
  onChange?: (selected: ImageComboBoxOption | null) => void;
  /** Optional boolean to disable the combo box. Defaults to `false`. */
  disabled?: boolean;
  // Consider adding other standard Autocomplete props if they should be exposed, e.g.:
  // loading?: boolean;
  // loadingText?: ReactNode;
  // onOpen?: (event: React.SyntheticEvent) => void;
  // onClose?: (event: React.SyntheticEvent, reason: AutocompleteCloseReason) => void;
}