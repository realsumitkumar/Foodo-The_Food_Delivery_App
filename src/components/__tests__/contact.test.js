import { render, screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Contact Us page should be loaded ", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})

test("Button should be loaded ", () => {
    render(<Contact/>);

    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument()
})

test("Get 2 textBoxes in the page", () => {
    render(<Contact/>)

    //Quering
    const textBox = screen.getAllByRole("textbox") //for getting all textBoxes, will throw an error if we use getByRole and there are multiple elements

    // screen.getAllByRole("textbox") - will return JSX => React element => Object (JS)

    expect(textBox.length).toBe(2)
    
})