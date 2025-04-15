import React, { useState } from "react";
import Popup from "./Popup";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <span className="font-semibold">Págalo en</span>
        <button className="font-semibold cursor-pointer" onClick={handleOpen}>
          Más info
        </button>
      </div>
      {isOpen && <Popup onClose={handleClose} />}
    </>
  );
};

export default Menu;
