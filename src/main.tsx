import ReactDOM from "react-dom/client";
import App from "./App";
import cssText from "./index.css?inline";
import "./index.css";

const renderWidget = (contaninerId: string, targetNode: string) => {
  const container = document.getElementById(contaninerId);
  const priceElement = document.getElementById(targetNode);
  const shadowRoot = container?.attachShadow({ mode: "open" });

  /*
  The CSS @property rule (used to define typed custom properties for things like animation, theming, borders, etc.) must be defined in the global document, 
  not just inside the Shadow DOM. Browsers don't yet fully support @property in ShadowRoots, so anything relying on that (like border-color, opacity, etc. using --tw-* variables) 
  might break.
  */
  const styleTag = document.createElement("style");
  styleTag.textContent = cssText;
  shadowRoot?.appendChild(styleTag);

  /*
    If you can control the host page, inject your Tailwind styles + @property definitions into the main <head>, not just in the Shadow DOM.
  */
  const linkTag = document.createElement("link");
  linkTag.rel = "stylesheet";
  linkTag.href =
    "https://dmaza81.github.io/sequra_frontend_challenge/sequra-widget.css";
  document.head?.appendChild(linkTag);

  const root = ReactDOM.createRoot(shadowRoot as ShadowRoot);
  root.render(<App priceElement={priceElement} />);
};

//@ts-expect-error window
window.renderMyWidget = renderWidget;
