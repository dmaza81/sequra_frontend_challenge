import { CreditAgreement } from "@/models";

export interface CreateAgreementAdapterProps {
  instalmentTotal: string;
  instalmentCount: number;
  instalmentFee: string;
}

export const createCreditAgreementAdapter = (
  creditResponse: CreditAgreement
): CreateAgreementAdapterProps => ({
  instalmentTotal: creditResponse.instalment_total.string,
  instalmentCount: creditResponse.instalment_count,
  instalmentFee: creditResponse.instalment_fee.string,
});
