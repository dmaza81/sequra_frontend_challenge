import { useFetchAndLoad } from "./hooks";
import { useEffect, useState } from "react";
import { getCreditAgreements } from "./services/public.service";
import {
  CreateAgreementAdapterProps,
  createCreditAgreementAdapter,
} from "./adapters";
import { CreditAgreement } from "./models";
import Selector from "./components/Selector";

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

  return (
    <>
      {loading ? (
        <div>
          <h3>LOADING</h3>
        </div>
      ) : (
        <Selector options={creditAgreements} />
      )}
    </>
  );
};

export default App;
