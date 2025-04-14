import ReactDOM from "react-dom/client";
import App from "./App";

const renderWidget = (containerId: string, number: number) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App totalWithTax={number} />);
  } else {
    console.error(`No se encontró el contenedor con id: ${containerId}`);
  }
};

// Exportar la función para que pueda ser utilizada en el código de inserción
export { renderWidget };
