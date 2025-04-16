import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const renderWidget = (contaninerId: string, targetNode: string) => {
  const container = document.getElementById(contaninerId);
  const priceElement = document.getElementById(targetNode);

  const root = ReactDOM.createRoot(container as HTMLElement);
  root.render(<App priceElement={priceElement} />);
};

//@ts-expect-error winwo
window.renderMyWidget = renderWidget;
