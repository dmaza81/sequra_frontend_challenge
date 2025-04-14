import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = () => {
  const options = ["Perfil", "Configuración", "Cerrar sesión"];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Opciones");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className={`justify-between w-full inline-flex items-center gap-1 px-4 py-2 bg-white border border-gray-300 ${isOpen ? "rounded-t-md" : "rounded-md"}  hover:bg-gray-50 transition-all`}
      >
        {selected}
        {isOpen ? (
          <ChevronUp className="w-4 h-4 transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-4 h-4 transition-transform duration-300" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute left-0 w-full bg-white rounded-b-lg  border border-gray-200 z-10"
          >
            <ul className="py-2">
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Dropdown;
