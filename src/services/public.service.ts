import { CreditAgreement } from "@/models";
import { loadAbort } from "@/utils";
import axios from "axios";

export const getCreditAgreements = (totalWithTax: number) => {
  const controller = loadAbort();
  return {
    call: axios.get<CreditAgreement[]>(
      "http://localhost:8080/credit_agreements",
      {
        signal: controller.signal,
        params: {
          totalWithTax,
        },
      }
    ),
    controller,
  };
};
