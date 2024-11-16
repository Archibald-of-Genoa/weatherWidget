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
    }, 200);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  useEffect(() => {
    if (debouncedSearchText) {
      console.log(`City name: ${debouncedSearchText}`);
    }
  }, [debouncedSearchText]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleKeyOrClick = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      ("key" in event && (event.key === "Enter" || event.key === " ")) ||
      event.type === "click"
    ) {
      console.log("Location icon triggered");
    }
  };

  return (
    <div className="mx-auto rounded-lg bg-vanilla">
      <div className="flex items-center p-5">
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyOrClick}
          maxLength={50}
          className="min-h-12 grow rounded-lg bg-white px-4 outline-none placeholder:text-stone-400"
          placeholder="Enter city for weather forecast or click to auto-detect location"
        />

        <div className="flex items-center gap-x-3">
          <div className="ml-4 h-8 w-px bg-dark-grey"></div>
          <Icon
            name="Location"
            onKeyDown={handleKeyOrClick}
            onClick={handleKeyOrClick}
          />
          {/* {debouncedSearchText && (
              <Icon name="Umbrella" />
            )} */}
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-3 p-5">
        {debouncedSearchText && (
          <>
            <Icon name="OneDayForecast" />
            <Icon name="FiveDayForecast" />
          </>
        )}
      </div>
    </div>
  );
}
