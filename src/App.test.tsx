import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { fidleIt } from "./helpers/helper";
import Basket from "./components/Basket";
import { BrowserRouter } from 'react-router-dom'

test("renders learn react link", () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  // const linkElement = screen.getByText("Fish soup");
  // expect(linkElement).toBeInTheDocument();
});

// test("test basket", ()=>{
//     render(<Basket/>);
// });
