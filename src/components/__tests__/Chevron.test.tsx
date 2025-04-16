import App from "@/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

describe("Chevron Component", () => {
  it("should show open chevron", async () => {
    const htmlElement = document.createElement("p");
    htmlElement.innerText = "0 €";

    render(<App priceElement={htmlElement} />);

    const openChevron = await screen.findByLabelText("Abrir opciones de pago");

    expect(openChevron).toBeDefined();
  });

  it("should show close chevron", async () => {
    const user = userEvent.setup();
    const htmlElement = document.createElement("p");
    htmlElement.innerText = "0 €";

    render(<App priceElement={htmlElement} />);

    const openChevron = await screen.findByLabelText("Abrir opciones de pago");
    await user.click(openChevron);

    const closeChevron = await screen.findByLabelText(
      "Cerrar opciones de pago"
    );

    expect(closeChevron).toBeDefined();
  });
});
