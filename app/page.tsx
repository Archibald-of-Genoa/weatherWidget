"use client";

import SearchInput from "./ui/components/SearchInput/SearchInput";

export default function Page() {
  return (
    <>
      <div className="bg-base-widget mx-auto mt-12 rounded-lg px-7 pt-7 lg:h-[600px] lg:max-w-[800px]">
        <SearchInput />
      </div>
    </>
  );
}
