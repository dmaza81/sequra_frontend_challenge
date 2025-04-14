interface AppProps {
  totalWithTax?: number;
}

const App: React.FC<AppProps> = ({ totalWithTax = 0 }) => {
  return <>SeQura totalWithTax: {totalWithTax}</>;
};

export default App;
