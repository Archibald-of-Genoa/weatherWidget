export function Input() {
  return (
    <>
      <div className="focus flex h-12 w-[790px] items-center rounded-lg bg-vanilla pr-4">
        <input
          className="h-12 grow rounded-lg bg-input-grey px-4 text-dark-grey outline-none placeholder:text-vanilla focus:bg-vanilla focus:placeholder:text-dark-grey"
          placeholder="Enter the city for the weather forecast of click to auto-detect"
        ></input>
        <div className="mx-3 h-8 w-px bg-dark-grey"></div>
      </div>
    </>
  );
}
