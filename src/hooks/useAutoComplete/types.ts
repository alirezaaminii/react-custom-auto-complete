import {RefObject} from "react";
import {ISuggestion} from "../../components/auto-complete/types";

export interface UseAutoCompleteProps {
  onSelect: (selectedOption: string) => void;
  inputRef: RefObject<HTMLDivElement>,
  suggestions: ISuggestion[];
  tags: string[];
}