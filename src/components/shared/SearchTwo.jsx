import SearchIcon from "../../assets/search.svg?react";
import ArrowIcon from "../../assets/arrow.svg?react";
import BookIcon from "../../assets/book.svg?react";
import LocationIcon from "../../assets/location.svg?react";
function SearchTwo() {
  return (
    <div className="relative searchbar flex items-center gap-6 z-10 bg-white overflow w-[1032px] py-8 rounded-2xl">
      <img
        className="absolute top-0 left-[460px] -translate-y-full"
        src="/cornerUp.svg"
        alt=""
      />
      <img
        className="absolute bottom-0 left-[460px] translate-y-full"
        src="/cornerDown.svg"
        alt=""
      />
      <div className="relative w-[270px]">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
            <SearchIcon className="w-3 h-3 text-gray-500" />
          </div>
        </div>
        <input
          className="w-full bg-gray-100 h-[48px] pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-[16px]"
          placeholder="Job title, keywords, or company name"
        />
      </div>
      <div className="relative w-[270px]">
        {/* Left icon */}
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
            <BookIcon className="w-3 h-3 text-gray-500" />
          </div>
        </div>

        {/* Right arrow icon */}
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <ArrowIcon className="w-3 h-3 text-gray-500" />
        </div>

        {/* Select input */}
        <select
          className="w-full bg-gray-100 text-gray-500 h-[48px] pl-10 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-[16px] appearance-none cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="jobs">Jobs</option>
          <option value="companies">Companies</option>
          <option value="locations">Locations</option>
        </select>
      </div>

      <div className="relative w-[250px]">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
            <LocationIcon className="w-3 h-3 text-gray-500" />
          </div>
        </div>
        <input
          className="w-full h-[48px] bg-gray-100 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-[16px]"
          placeholder="Location"
        />
      </div>
      <div className="flex gap-4 bg-blue-600 px-4 py-3 rounded-full text-white">
        Find Job
        <div className="w-6 h-6  bg-white rounded-full flex items-center justify-center shadow-sm">
          <ArrowIcon className="w-2 h-2 text-gray-500 -rotate-90" />
        </div>
      </div>
    </div>
  );
}

export default SearchTwo;
