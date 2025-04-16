import App from "@/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

describe("Dropdown Component", () => {
  it("should render the base component", async () => {
    const htmlElement = document.createElement("p");
    htmlElement.innerText = "0 €";

    render(<App priceElement={htmlElement} />);

    const element = await screen.findByText("3 cuotas de 5 €/mes");

    expect(element).toBeDefined();
  });

  it("should show Dropdown options when click on the trigger button", async () => {
    const user = userEvent.setup();
    const htmlElement = document.createElement("p");
    htmlElement.innerText = "0 €";

    render(<App priceElement={htmlElement} />);

    const element = await screen.findByText("3 cuotas de 5 €/mes");
    await user.click(element);
    const newElement = await screen.findByText("6 cuotas de 5 €/mes");

    expect(newElement).toBeDefined();
  });

  it("should change the visible option when selected one of them", async () => {
    const user = userEvent.setup();
    const htmlElement = document.createElement("p");
    htmlElement.innerText = "0 €";

    render(<App priceElement={htmlElement} />);

    const element = await screen.findByText("3 cuotas de 5 €/mes");
    await user.click(element);
    const select = await screen.findByText("6 cuotas de 5 €/mes");
    await user.click(select);
    const finalElement = await screen.findByText("6 cuotas de 5 €/mes");

    expect(finalElement).toBeDefined();
  });
});
