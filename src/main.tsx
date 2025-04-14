import ReactDOM from "react-dom/client";
import App from "./App";

const renderWidget = (contaninerId: string, number: number) => {
  const container = document.getElementById(contaninerId);
  const root = ReactDOM.createRoot(container as HTMLElement);
  root.render(<App totalWithTax={number} />);
};

//@ts-expect-error winwo
window.renderMyWidget = renderWidget;
