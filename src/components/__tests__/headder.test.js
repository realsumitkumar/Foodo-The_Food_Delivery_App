import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter, Link } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Log-in" });

  expect(loginButton).toBeInTheDocument();
});

test("Should render Header component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});


test("Should render Logout after clicking login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"Log-in"})

    fireEvent.click(loginButton) // event is triggered using fireEvent
  
    const logoutButton = screen.getByRole("button",{name:"Log-out"})

    expect(logoutButton).toBeInTheDocument()
    
  });
  