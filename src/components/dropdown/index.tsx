import {useDropdown} from "../../hooks/useDropDown";
import {colors} from "../../assets/colors";
import React, {useRef} from "react";
import {DropdownProps} from "./types";

export const icons = {
  selectedIcon: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3337 4L6.00033 11.3333L2.66699 8"
        stroke={colors.secondary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  popupIcon: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10L12 16L18 10"
        stroke="#94A3B8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export const DropDown = ({options, onSelect, value}: DropdownProps) => {
  const activeItemRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    classes,
    handleKeyDown,
    handleOptionClick,
    handleOptionKeyDown,
    toggleDropdown,
  } = useDropdown({options, onSelect, activeItemRef, dropdownRef});

  return (
    <div className={classes.dropdownContainer} ref={dropdownRef}>
      <div
        tabIndex={0}
        role="combobox"
        aria-expanded={false}
        className={classes.select}
        onKeyDown={handleKeyDown}
        onClick={toggleDropdown}>
        <span>{value?.label ?? 'Select me...'}</span>
        <div className={classes.angleIcon}>{icons.popupIcon}</div>
      </div>
      <div
        className={classes.dropdownMenu}>
        <div className={classes.dropdownMenuInsideContainer}>
          {options.map((option) => {
            const isSelected = option.value === value?.value;
            return (
              <div className={`${classes.dropdownMenuItem} ${isSelected ? 'selected' : ''}`}
                   tabIndex={0}
                   ref={isSelected ? activeItemRef : null}
                   key={option.value}
                   onClick={() => handleOptionClick(option)}
                   onKeyDown={handleOptionKeyDown(option)}>
                <span>{option.label}</span>
                {isSelected ? icons.selectedIcon : null}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}