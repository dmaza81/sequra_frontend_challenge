import { CreditAgreement } from "@/models";

export interface CreateAgreementAdapterProps {
  instalmentTotal: string;
  instalmentCount: number;
}

export const createCreditAgreementAdapter = (
  creditResponse: CreditAgreement
): CreateAgreementAdapterProps => ({
  instalmentTotal: creditResponse.instalment_total.string,
  instalmentCount: creditResponse.instalment_count,
});
