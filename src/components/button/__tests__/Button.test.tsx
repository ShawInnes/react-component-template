import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
