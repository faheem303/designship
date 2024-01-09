import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Dropdown = ({ options, handleSelection, selectedOption, toggleDropdown }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-[20rem]">
            <button
                onClick={() => {
                    setOpen(!open);
                    toggleDropdown();
                }}
                className={`flex w-full items-center justify-between rounded bg-white p-2 border-b border-gray-300 bg-transparent font-[500] text-gray-500 ${open && 'border-gray-400'}`}
            >
                <span>{selectedOption === '' ? 'Select Industry' : selectedOption}</span>
                <FontAwesomeIcon icon={faChevronDown} className="text-xl" />
            </button>

            {open && (
                <ul className="z-[9] absolute mt-1 w-full rounded bg-white ring-1 ring-gray-300" onClick={() => setOpen(false)}>
                    {options.map((option) => (
                        <li
                            key={option}
                            className="cursor-pointer select-none p-2 hover:bg-gray-200"
                            onClick={() => {
                                handleSelection(option);
                                setOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;