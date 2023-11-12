import {useAutoComplete} from "../../hooks/useAutoComplete";
import React, {useRef} from "react";
import {AutoCompleteProps} from "./types";

export const AutoComplete = ({onSelect, tags, suggestions}: AutoCompleteProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        classes,
        handleKeyDown,
        handleOptionClick,
        handleOptionKeyDown,
        value,
        handleChange,
        toggleMenu,
        filteredSuggestions,
    } = useAutoComplete({onSelect, inputRef, suggestions, tags});
    const inputPlaceHolder = tags.length > 0 ? "Add labels..." : "Add tags...";

    return (
        <div className={classes.autoCompleteContainer} ref={inputRef}>
            <input
                tabIndex={0}
                role="combobox"
                aria-expanded={false}
                className={classes.select}
                onKeyDown={handleKeyDown}
                placeholder={inputPlaceHolder}
                value={value}
                onFocus={toggleMenu}
                onChange={handleChange}>
            </input>
            <div
                className={classes.menu}>
                <div className={classes.menuInsideContainer}>
                    {filteredSuggestions.length > 0 ? filteredSuggestions.map((option, index) => {
                        return (
                            <div className={`${classes.menuItem} item`}
                                 tabIndex={0}
                                 key={option.id}
                                 id={`item-${index}`}
                                 onClick={() => handleOptionClick(option.label)}
                                 onKeyDown={handleOptionKeyDown(option.label)}>
                                <span>{option.label}</span>
                            </div>
                        )
                    }) : <div className={classes.nothingToSuggest}>Nothing to suggest</div>}
                </div>
            </div>

            <div className={classes.selectedTagsContainer}>
                {
                    tags.map(tag => (
                        <div key={tag} className={classes.selectedTagItem}>{tag}</div>
                    ))
                }
            </div>
        </div>
    )
}