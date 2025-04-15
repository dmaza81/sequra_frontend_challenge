import { ChevronDown, ChevronUp } from "lucide-react";

interface ChevronProps {
  isOpen: boolean;
}
const Chevron: React.FC<ChevronProps> = ({ isOpen = false }) => {
  return isOpen ? (
    <ChevronUp className="w-4 h-4 transition-transform duration-300" />
  ) : (
    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
  );
};

export default Chevron;
