/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Use relative import if moduleNameMapper is not set up
import Home from "../app/page";

describe("Home", () => {
  it("renders index page", () => {
    render(<Home />);
    // Check for the h1 with the correct text
    const heading = screen.getByRole("heading", { name: /hello world!/i });
    expect(heading).toBeInTheDocument();
  });
});
