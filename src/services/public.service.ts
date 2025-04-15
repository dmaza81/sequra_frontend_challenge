import { CreditAgreement } from "@/models";
import { loadAbort } from "@/utils";
import axios from "axios";

export const getCreditAgreements = (totalWithTax: number) => {
  const controller = loadAbort();
  return {
    call: axios.get<CreditAgreement[]>(
      import.meta.env.VITE_SEQURA_HOST_API + "/credit_agreements",
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

export const postEvent = (data: object) => {
  return axios.post(import.meta.env.VITE_SEQURA_HOST_API + "/events", data);
};
