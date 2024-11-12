"use client";

import { ChangeEvent, useState } from "react";
import { Icon } from "../Icon/Icon";

type SearchInput = {};

export default function SearchInput() {
  const [inputText, setText] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="mx-auto rounded-lg bg-vanilla">
        <div className="flex items-center p-5">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="min-h-12 grow rounded-lg bg-white px-4 outline-none placeholder:text-stone-400"
            placeholder="Enter the city for the weather forecast of click to auto-detect"
          ></input>

          {inputText && (
            <div className="flex items-center">
              <div className="mx-3 h-8 w-px bg-dark-grey"></div>
                <Icon name="OneDayForecast" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
