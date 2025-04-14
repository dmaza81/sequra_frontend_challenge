import { CreateAgreementAdapterProps } from "@/adapters";
import { postEvent } from "@/services/public.service";
import React from "react";

interface SelectProps {
  options: CreateAgreementAdapterProps[];
}

const Selector: React.FC<SelectProps> = ({ options }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const selectedValue = event.target.value;
    postEvent({
      context: "checkoutWidget",
      type: "simulatorInstalmentChanged",
      selectedInstalment: selectedValue,
    });
  };

  return (
    <select onChange={handleChange}>
      <option key={0} value="">
        Pagalo en
      </option>
      {options?.map((option: CreateAgreementAdapterProps, i) => (
        <option key={i} value={option.instalmentCount}>
          {option.instalmentCount} cuotas de {option.instalmentTotal}/mes
        </option>
      ))}
    </select>
  );
};

export default Selector;
