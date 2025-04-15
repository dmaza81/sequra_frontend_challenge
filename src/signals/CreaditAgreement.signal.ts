import { CreateAgreementAdapterProps } from "@/adapters";
import { signal } from "@preact/signals-core";

const creditAgreementSelected = signal<CreateAgreementAdapterProps>();

export { creditAgreementSelected };
