import {RefObject} from "react";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface UseDropDownProps {
  onSelect: (selectedOption: DropdownOption) => void;
  activeItemRef: RefObject<HTMLDivElement>,
  dropdownRef: RefObject<HTMLDivElement>,
}