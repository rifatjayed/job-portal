// import React from "react";
// import ReactDOM from "react-dom";

// import BadgeIcon from "../../assets/badge.svg?react";
// import CrossIcon from "../../assets/cross.svg?react";

// function ModalContainer({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
//       <div className="relative bg-white py-10 px-15 flex flex-col justify-center items-center gap-6 rounded-lg ">
//         {children}
//         <div
//           className="absolute w-14 h-14 bg-gray-400 rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer"
//           onClick={onClose}
//         >
//           <CrossIcon />
//         </div>
//       </div>
//     </div>,
//     document.getElementById("modal-root")
//   );
// }

// export default ModalContainer;

import React from "react";
import ReactDOM from "react-dom";
import BadgeIcon from "../../assets/badge.svg?react";
import CrossIcon from "../../assets/cross.svg?react";

function ModalContainer({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="relative bg-white py-10 px-15 flex flex-col justify-center items-center gap-6 rounded-lg ">
        {children}
        <div
          className="absolute w-14 h-14 bg-gray-400 rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer"
          onClick={onClose}
        >
          <CrossIcon />
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ModalContainer;
