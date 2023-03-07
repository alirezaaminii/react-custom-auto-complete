import React, {useEffect} from 'react';
import {useEscapeKeyPress} from "../useEscapeKeyPress";
import {useBoolean} from "../useBoolean";
import {useClickOutside} from "../useClickOutSide";
import {DropdownOption, UseDropDownProps} from "./types";
import {useDropdownStyles} from "./styles";

export const useDropdown = ({dropdownRef, onSelect, activeItemRef}: UseDropDownProps) => {
  const [isOpen, setIsOpenActions] = useBoolean(false);
  const classes = useDropdownStyles({ isOpen });
  useEscapeKeyPress(setIsOpenActions.setFalse);
  useClickOutside(dropdownRef, setIsOpenActions.setFalse);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (['Enter', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      setIsOpenActions.setTrue();
    }
  };

  useEffect(() => {
    if(isOpen) {
      if(activeItemRef.current) {
        activeItemRef.current.scrollIntoView({
          block: 'center',
        });
      }
    }
  }, [isOpen])

  const handleOptionClick = (selectedOption: DropdownOption) => {
    onSelect(selectedOption);
    setIsOpenActions.setFalse();
  };

  const handleOptionKeyDown = (selectedOption: DropdownOption) => (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (['Enter'].includes(event.key)) {
      event.preventDefault();
      onSelect(selectedOption);
      setIsOpenActions.setFalse();
    }
  };

  return {
    classes,
    isOpen,
    handleKeyDown,
    handleOptionClick,
    handleOptionKeyDown,
    toggleDropdown: setIsOpenActions.toggle,
  };
};