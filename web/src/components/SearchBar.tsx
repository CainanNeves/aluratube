import { ImSearch } from "react-icons/im";

export default function SearchBar() {
  return (
    <div className="flex w-full max-w-sm divide-solid overflow-hidden rounded-full border border-borderBase">
      <input
        className="w-10/12 border-none bg-backgroundBase py-1 px-2 text-textColorBase outline-none"
        type=""
        placeholder="Pesquisar videos"
      />
      <button className="flex flex-auto cursor-pointer items-center justify-center divide-solid border-l border-none border-borderBase bg-backgroundLevel2 shadow-sm hover:opacity-50 sm:h-10 sm:w-10">
        <ImSearch />
      </button>
    </div>
  );
}
