import {DropdownOption} from "../../hooks/useDropDown/types";

export interface DropdownProps {
  value: DropdownOption | null;
  options: DropdownOption[];
  onSelect: (selectedOption: DropdownOption) => void;
}