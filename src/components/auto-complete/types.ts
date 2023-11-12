export interface ISuggestion {
  id: string;
  label: string;
}

export interface AutoCompleteProps {
  tags: string[];
  suggestions: ISuggestion[];
  onSelect: (selectedOption: string) => void;
}