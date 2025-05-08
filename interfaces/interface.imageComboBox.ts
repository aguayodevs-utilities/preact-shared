

export interface ImageComboBoxOption {
    value: string;
    img: string;
    label: string;
    description: string;
}
  
export interface ImageComboBoxProps {
    options: ImageComboBoxOption[];
    placeholder?: string;
    value?: string | null;
    onChange?: (selected: ImageComboBoxOption | null) => void;
    disabled?: boolean;
}