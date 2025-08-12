// import BadgeIcon from "../../assets/badge.svg?react";
// import CrossIcon from "../../assets/cross.svg?react";
// import ModalContainer from "./ModalContainer";
// function Modal({ title, description, buttonText }) {
//   return (
//     <>
//       <div>
//         <BadgeIcon />
//       </div>
//       <div className="flex flex-col items-center gap-3">
//         <div className="font-semibold text-2xl">{title}</div>
//         <div className="text-center text-gray-500">{description}</div>
//       </div>
//       <div className="bg-blue-600 text-white px-10 py-4 rounded">
//         {buttonText}
//       </div>
//     </>
//   );
// }

// export default Modal;

import BadgeIcon from "../../assets/badge.svg?react";
import CrossIcon from "../../assets/cross.svg?react";
import ModalContainer from "./ModalContainer";

function Modal({ title, description, buttonText }) {
  return (
    <div className="flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8 w-full max-w-[480px] mx-auto">
      {/* Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
        <BadgeIcon className="w-full h-full" />
      </div>

      {/* Title & Description */}
      <div className="flex flex-col items-center gap-2">
        <div className="font-semibold text-lg sm:text-xl lg:text-2xl text-center">
          {title}
        </div>
        <div className="text-center text-gray-500 text-sm sm:text-base">
          {description}
        </div>
      </div>

      {/* Button */}
      <button className="bg-blue-600 text-white px-6 py-3 sm:px-10 sm:py-4 rounded text-sm sm:text-base w-full sm:w-auto">
        {buttonText}
      </button>
    </div>
  );
}

export default Modal;
