import App from "@/App";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("App component", () => {
  it("should show App without settings totalWithTax", async () => {
    render(<App />);

    const text = await screen.findByText("3 cuotas de 5 €/mes");
    expect(text).toBeDefined();
  });

  it("should show App with settings totalWithTax", async () => {
    render(<App totalWithTax={15000} />);

    const text = await screen.findByText("3 cuotas de 55 €/mes");
    expect(text).toBeDefined();
  });
});
