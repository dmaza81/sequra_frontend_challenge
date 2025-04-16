export interface GenericCreditAgreement {
  value: number;
  string: string;
}

export interface CreditAgreement {
  instalment_count: number;
  apr: GenericCreditAgreement;
  total_with_tax: GenericCreditAgreement;
  cost_of_credit: GenericCreditAgreement;
  cost_of_credit_pct: GenericCreditAgreement;
  grand_total: GenericCreditAgreement;
  max_financed_amount: GenericCreditAgreement;
  instalment_amount: GenericCreditAgreement;
  instalment_fee: GenericCreditAgreement;
  instalment_total: GenericCreditAgreement;
}
