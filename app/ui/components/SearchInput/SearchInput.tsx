"use client";

import { ChangeEvent, useState, useEffect } from "react";
import { Icon } from "../Icon/Icon";

type SearchInput = {};

export default function SearchInput() {
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 300); 

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  // Effect to log the debounced city name and show the Location icon
  useEffect(() => {
    if (debouncedSearchText) {
      console.log(`City name: ${debouncedSearchText}`);
    }
  }, [debouncedSearchText]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      console.log("Location icon triggered");
    }
  };

  return (
    <>
      <div className="mx-auto rounded-lg bg-vanilla">
        <div className="flex items-center p-5">
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            maxLength={50}
            className="min-h-12 grow rounded-lg bg-white px-4 outline-none placeholder:text-stone-400"
            placeholder="Enter city for weather forecast or click to auto-detect"
          />

          {debouncedSearchText && (
            <div className="flex items-center">
              <div className="mx-3 h-8 w-px bg-dark-grey"></div>
              <Icon name="Location" onKeyDown={handleKeyPress} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
