import {DropdownOption, useDropdown} from "../hooks/useDropdown";

interface DropdownProps {
  value: DropdownOption | null;
  options: DropdownOption[];
  onSelect: (selectedOption: DropdownOption) => void;
}

export const icons = {
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

export const Dropdown = ({options, onSelect, value}: DropdownProps) => {
  const {
    classes,
    handleKeyDown,
    handleOptionClick,
    toggleDropdown,
  } = useDropdown(options, onSelect);

  return (
    <div className={classes.dropdownContainer}>
      <div onClick={() => handleOptionClick(options[0])}>select Science</div>
      <input
        type="text"
        value={value?.label}
        className={classes.select}
        onKeyDown={handleKeyDown}
        onClick={toggleDropdown}/>
      {/*  <span>{value?.label}</span>*/}
      {/*  <div className={classes.angleIcon}>{icons.popupIcon}</div>*/}
      {/*</input>*/}
      <div className={classes.dropdownMenu}>
        {options.map(option => (
          <div className={classes.dropdownMenuItem}
               key={option.value}
               onClick={() => handleOptionClick(option)}>{option.label}</div>
        ))}
      </div>
    </div>
  )
}