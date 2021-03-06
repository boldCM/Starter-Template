import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders storybook react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/To Storybook/i);
  expect(linkElement).toBeInTheDocument();
});
