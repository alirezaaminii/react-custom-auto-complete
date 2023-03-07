import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import {colors} from "../assets/colors";

export interface DropdownOption {
  label: string;
  value: string;
}

interface StyleProps {
  isOpen: boolean;
}

const useDropdownStyles = createUseStyles({
  dropdownContainer: {
    position: 'relative',
    width: '375px',
  },
  select: {
    boxSizing: 'border-box',
    width: '100%',
    height: '48px',
    padding: '8px',
    border: `1px solid ${colors.stroke}`,
    backgroundColor: colors.white,
    borderRadius: '12px',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 200ms',
    outline: '2px solid transparent',
    '&:hover': {
      'outline-color': colors.primary + 20,
    },
    '&:focus': {
      'outline-color': colors.primary + 20,
      border: `2px solid ${colors.primary + 40}`,
    },
  },
  angleIcon: {
    transition: 'all 200ms',
    transform: (props: StyleProps) => props.isOpen ? 'rotateX(180deg)' : 'rotateX(0)',
  },
  dropdownMenu: {
    position: 'absolute',
    top: (props: StyleProps) => props.isOpen ? '80px' : '0',
    width: '100%',
    left: 0,
    backgroundColor: colors.white,
    border: `1px solid ${colors.stroke}`,
    borderRadius: '20px',
    overflow: 'auto',
    maxHeight: '200px',
    zIndex: (props: StyleProps) => props.isOpen ? 1 : -1,
    opacity: (props: StyleProps) => props.isOpen ? 1 : 0,
    '::-webkit-scrollbar-thumb': {
      background: 'red',
      borderRadius: '10px',
    }
  },
  dropdownMenuItem: {
    padding: '8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.primary + 20,
    },
  },
});

export const useDropdown = (options: DropdownOption[], onSelect: (selectedOption: DropdownOption) => void) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useDropdownStyles({ isOpen });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (['Enter', 'ArrowDown'].includes(event.key)) {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const handleOptionClick = (selectedOption: DropdownOption) => {
    onSelect(selectedOption);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return {
    classes,
    isOpen,
    setIsOpen,
    handleKeyDown,
    handleOptionClick,
    toggleDropdown,
  };
};