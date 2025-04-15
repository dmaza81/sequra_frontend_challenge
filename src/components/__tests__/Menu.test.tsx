import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "@/App";

describe("Menu Component", () => {
  it("renders correctly", async () => {
    render(<App />);

    const menuElement1 = await screen.findByText("Págalo en");
    const menuElement2 = await screen.findByText("Más info");

    expect(menuElement1).toBeDefined();
    expect(menuElement2).toBeDefined();
  });
});
