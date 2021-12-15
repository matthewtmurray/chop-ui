import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { fidleIt } from "./helpers/helper";
import Basket from "./components/Basket";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Fish soup");
  expect(linkElement).toBeInTheDocument();
});

test("test basket", ()=>{
    render(<Basket/>);
});
