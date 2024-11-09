export function Input() {
  return (
    <>
      <input
        className=" bg-input-grey placeholder:text-vanilla focus:bg-vanilla focus:placeholder:text-dark-grey outline-none w-[790px] h-12"
        placeholder="Enter the city for the weather forecast of click to auto-detect"
      ></input>
    </>
  );
}
