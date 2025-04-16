import { useFetchAndLoad } from "./hooks";
import { useEffect, useState } from "react";
import { getCreditAgreements } from "./services/public.service";
import {
  CreateAgreementAdapterProps,
  createCreditAgreementAdapter,
} from "./adapters";
import { CreditAgreement } from "./models";
import Dropdown from "./components/DropDown";
import { Header } from "./components";
import useMutationObserver from "./hooks/useMutationObserver";

interface AppProps {
  priceElement: HTMLElement | null;
}

const App: React.FC<AppProps> = ({ priceElement }) => {
  const [totalWithTax, setTotalWithTax] = useState<number>(0);
  const { loading, callEndpoint } = useFetchAndLoad();
  const [creditAgreements, setCreditAgreements] = useState<
    CreateAgreementAdapterProps[]
  >([]);

  const becomeCurrencyValueToInteger = (): number => {
    return Number(priceElement?.innerText.replace(/[^0-9.]/g, ""));
  };

  const callback = (mutationList: MutationRecord[]) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        setTotalWithTax(becomeCurrencyValueToInteger());
      }
    }
  };

  useEffect(() => {
    if (priceElement) setTotalWithTax(becomeCurrencyValueToInteger());
    // eslint-disable-next-line
  }, [priceElement]);

  useMutationObserver(priceElement, callback);

  useEffect(() => {
    (async () => {
      try {
        const newCreditAgreements: CreateAgreementAdapterProps[] = [];
        const result = await callEndpoint(getCreditAgreements(totalWithTax));
        result?.data?.map((creditAgreement: CreditAgreement) => {
          newCreditAgreements.push(
            createCreditAgreementAdapter(creditAgreement)
          );
        });
        setCreditAgreements(newCreditAgreements);
      } catch (err) {
        console.error(err);
      }
    })();
    // eslint-disable-next-line
  }, [totalWithTax]);

  if (loading)
    return (
      <div>
        <h3>LOADING</h3>
      </div>
    );

  if (creditAgreements?.length === 0) return null;
  if (!priceElement) return null;

  return (
    <div className="flex flex-col p-6 border border-gray-400 rounded-l gap-y-2 ">
      <Header />
      <Dropdown options={creditAgreements} />
    </div>
  );
};

export default App;
