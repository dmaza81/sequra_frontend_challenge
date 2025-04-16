import App from "@/App";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("App component", () => {
  it("should show App without settings totalWithTax", async () => {
    const htmlElement = document.createElement("p");
    htmlElement.innerText = "0 €";

    render(<App priceElement={htmlElement} />);

    const text = await screen.findByText("3 cuotas de 5 €/mes");
    expect(text).toBeDefined();
  });

  it("should show App with settings totalWithTax", async () => {
    const htmlElement = document.createElement("p");
    htmlElement.innerText = "150,00 €";

    render(<App priceElement={htmlElement} />);

    const text = await screen.findByText("3 cuotas de 55 €/mes");
    expect(text).toBeDefined();
  });

  it("should not show App when there is no priceElement", async () => {
    render(<App priceElement={null} />);

    const text = screen.queryByText("3 cuotas de 5 €/mes");
    expect(text).toBeNull();
  });
});
