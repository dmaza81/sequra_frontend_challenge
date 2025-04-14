import App from "@/App";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("App component", () => {
  it("should show App without settings totalWithTax", () => {
    render(<App />);

    const text = screen.getByText("SeQura totalWithTax: 0");
    expect(text).toBeDefined();
  });

  it("should show App with settings totalWithTax", () => {
    render(<App totalWithTax={15000} />);

    const text = screen.getByText("SeQura totalWithTax: 15000");
    expect(text).toBeDefined();
  });
});
