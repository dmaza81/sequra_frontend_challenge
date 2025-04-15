import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreateAgreementAdapterProps } from "@/adapters";
import { postEvent } from "@/services/public.service";
import { creditAgreementSelected } from "@/signals";
import Chevron from "./Chevron";

interface DropdownProps {
  options: CreateAgreementAdapterProps[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    if (options.length > 0) {
      creditAgreementSelected.value = options[0];
      setSelected(0);
    }
  }, [options]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: number) => {
    postEvent({
      context: "checkoutWidget",
      type: "simulatorInstalmentChanged",
      selectedInstalment: options[option].instalmentCount,
    });

    creditAgreementSelected.value = options[option];

    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className={`cursor-pointer justify-between w-full inline-flex items-center gap-1 px-4 py-2 bg-white border-gray-300 ${isOpen ? "rounded-t-md border-t-1 border-x-1" : "rounded-md border"}  hover:bg-gray-50 transition-all`}
      >
        {options[selected].instalmentCount} cuotas de{" "}
        {options[selected].instalmentTotal}/mes
        <Chevron isOpen />
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
              {options?.map(
                (option, i) =>
                  i != selected && (
                    <li
                      key={i}
                      onClick={() => handleSelect(i)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {option.instalmentCount} cuotas de{" "}
                      {option.instalmentTotal}
                      /mes
                    </li>
                  )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Dropdown;
