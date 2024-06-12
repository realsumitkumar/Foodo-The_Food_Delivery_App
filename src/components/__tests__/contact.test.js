import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//decribe can be used to wrap one kind of test cases
describe("test cases for contact us page", () => {
  beforeAll(() => {
    console.log("before all");
  });

  beforeEach(() => {
    console.log("before each");
  });

  //   afterAll and afterEach are also there

  //test or it both mean the same thing
  test("Should load contact us page ", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should get 2 textBoxes in the page", () => {
    render(<Contact />);

    //Quering
    const textBox = screen.getAllByRole("textbox"); //for getting all textBoxes, will throw an error if we use getByRole and there are multiple elements

    // screen.getAllByRole("textbox") - will return JSX => React element => Object (JS)

    expect(textBox.length).toBe(2);
  });
});
