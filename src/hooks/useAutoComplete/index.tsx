import React, {ChangeEvent, useEffect, useState} from 'react';
import {useEscapeKeyPress} from "../useEscapeKeyPress";
import {useBoolean} from "../useBoolean";
import {useClickOutside} from "../useClickOutSide";
import {UseAutoCompleteProps} from "./types";
import {useAutoCompleteStyles} from "./styles";

export const useAutoComplete = ({inputRef, onSelect, suggestions, tags}: UseAutoCompleteProps) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpenActions] = useBoolean(false);
  const classes = useAutoCompleteStyles({ isOpen });
  const [currentSuggestedIndex, setCurrentSuggestedIndex] = useState(0);

  useEscapeKeyPress(setIsOpenActions.setFalse);
  useClickOutside(inputRef, setIsOpenActions.setFalse);
  const filteredSuggestions = suggestions.filter(suggestion => suggestion.label.includes(value) && !tags.includes(suggestion.label));

  const handleSelect = (selectedValue: string) => {
    onSelect(selectedValue);
    setValue("");
  }

  useEffect(() => {
    const focusElement = document.getElementById(`item-${currentSuggestedIndex}`);
    focusElement && focusElement.focus();
  }, [currentSuggestedIndex]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      event.preventDefault();
      handleSelect(value || suggestions[0].label);
      setIsOpenActions.setFalse();
    }
    if(event.key === 'ArrowDown') {
      event.preventDefault();
      setCurrentSuggestedIndex(0);
    }
    if(event.key === 'ArrowUp') {
      event.preventDefault();
      setCurrentSuggestedIndex(filteredSuggestions.length - 1);
    }
  };

  const handleOptionClick = (selectedOption: string) => {
    handleSelect(selectedOption);
    setIsOpenActions.setFalse();
  };

  const handleOptionKeyDown = (selectedOption: string) => (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (['Enter'].includes(event.key)) {
      event.preventDefault();
      handleSelect(selectedOption);
      setIsOpenActions.setFalse();
    }
    if (event.key === 'ArrowDown') {
      setCurrentSuggestedIndex((prevIndex) => (prevIndex + 1) % filteredSuggestions.length);
    } else if (event.key === 'ArrowUp') {
      setCurrentSuggestedIndex((prevIndex) => (prevIndex - 1 + filteredSuggestions.length) % filteredSuggestions.length);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if(event.target.value.length > 1 && event.target.value[event.target.value.length-1] === ',') {
      handleSelect(event.target.value.slice(0, -1));
    } else {
      const hasSuggestion = filteredSuggestions.some(suggestion => suggestion.label.includes(event.target.value) && event.target.value !== suggestion.label)
      if(!!event.target.value && hasSuggestion) {
        setIsOpenActions.setTrue();
      } else {
        setIsOpenActions.setFalse();
      }
    }
  }

  return {
    value,
    handleChange,
    filteredSuggestions,
    classes,
    isOpen,
    handleKeyDown,
    handleOptionClick,
    handleOptionKeyDown,
    toggleMenu: setIsOpenActions.toggle
  };
};