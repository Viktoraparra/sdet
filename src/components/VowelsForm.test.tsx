import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import VowelsForm from "./VowelsForm";

describe("VowelsForm", () => {
  test("renders an initial count of 0", () => {
    render(<VowelsForm />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test("Updates with a count after submit", () => {
    render(<VowelsForm />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });
});
