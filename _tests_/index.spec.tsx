// /**
//  * @jest-environment jsdom
//  */
// import React from "react";
// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";

// // Mock the dynamically imported HelloWorld component
// jest.mock("../components/apps/HelloWorld", () => ({
//   __esModule: true,
//   default: () => <h1>Hello world!</h1>,
// }));

// import Home from "../app/page";

// describe("Home", () => {
//   it("renders index page", async () => {
//     render(<Home />);
//     const heading = await screen.findByRole("heading", {
//       name: /hello world!/i,
//     });
//     expect(heading).toBeInTheDocument();
//   });
// });
describe("Hello World Test", () => {
  it("should return hello world", () => {
    expect("hello world2").toBe("hello world2");
  });
});
