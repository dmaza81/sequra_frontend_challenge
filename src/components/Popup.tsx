import React from "react";
import { creditAgreementSelected } from "@/signals";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const items = [
    {
      text: "Fracciona tu pago solo con un coste fijo por cuota. ",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      text: "Ahora solo pagas la primera cuota.",
      imageUrl: "https://placehold.co/600x400",
    },
    {
      text: "El resto de pagos se cargarán automáticamente a tu tarjeta",
      imageUrl: "https://placehold.co/600x400",
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        aria-label="Cerrar mas info"
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="w-96 flex flex-col bg-white border-2 border-black rounded-lg p-6 z-10 gap-y-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className=" font-bold">seQura</h2>
          <h3 className="text-lg font-bold">Fracciona tu pago</h3>
        </div>
        <div className="flex flex-col space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between  gap-x-4"
            >
              <div className="">
                <span className="text-sm">{item.text}</span>
              </div>
              <img
                src={item.imageUrl}
                alt={item.text}
                className="w-12 h-12 object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-sm">
          Ademas en el importe mostrado ya se incluye la cuota unica mensual de{" "}
          {creditAgreementSelected.value?.instalmentFee}/mes, por lo que no
          tendras ninguna sorpresa
        </p>
      </div>
    </div>
  );
};

export default Popup;
