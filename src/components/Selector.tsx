import { CreateAgreementAdapterProps } from "@/adapters";
import React from "react";

interface SelectProps {
  options: CreateAgreementAdapterProps[];
}

const Selector: React.FC<SelectProps> = ({ options }) => {
  return (
    <select>
      <option key={0} value="">
        Pagalo en
      </option>
      {options?.map((option: CreateAgreementAdapterProps, i) => (
        <option key={i} value={option.instalmentTotal}>
          {option.instalmentCount} cuotas de {option.instalmentTotal}/mes
        </option>
      ))}
    </select>
  );
};

export default Selector;
