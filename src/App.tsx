import { useFetchAndLoad } from "./hooks";
import { useEffect, useState } from "react";
import { getCreditAgreements } from "./services/public.service";
import {
  CreateAgreementAdapterProps,
  createCreditAgreementAdapter,
} from "./adapters";
import { CreditAgreement } from "./models";
import Dropdown from "./components/DropDown";

interface AppProps {
  totalWithTax?: number;
}

const App: React.FC<AppProps> = ({ totalWithTax = 0 }) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [creditAgreements, setCreditAgreements] = useState<
    CreateAgreementAdapterProps[]
  >([]);

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

  return (
    <div className="flex flex-col p-6 border border-gray-400 rounded-l m-2 gap-y-2 ">
      <div className="flex flex-row justify-between">
        <span className="font-semibold ">Pagalo en</span>
      </div>
      <Dropdown options={creditAgreements} />
    </div>
  );
};

export default App;
