import App from "@/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

describe("Popup Component", () => {
  it("should render the base component", async () => {
    const user = userEvent.setup();

    render(<App />);

    const moreInfo = await screen.findByText("Más info");
    await user.click(moreInfo);
    const popupTitle = await screen.findByText("Fracciona tu pago");

    expect(popupTitle).toBeDefined();
  });
});
