import { ChevronDown, ChevronUp } from "lucide-react";

interface ChevronProps {
  open: boolean;
}
const Chevron: React.FC<ChevronProps> = ({ open = false }) => {
  return open ? (
    <ChevronUp
      aria-label="Cerrar opciones de pago"
      className="w-4 h-4 transition-transform duration-300"
    />
  ) : (
    <ChevronDown
      aria-label="Abrir opciones de pago"
      className="w-4 h-4 transition-transform duration-300"
    />
  );
};

export default Chevron;
