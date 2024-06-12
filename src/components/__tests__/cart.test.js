import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should return the restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("New Thin n Crispy Pizzas");

  fireEvent.click(accordionHeader);

  screen.getAllByTestId("foodItems");

  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  const addButtons = screen.getAllByRole("button", { name: "Add +" });

  expect(screen.getByText("Cart-(0 items)")).toBeInTheDocument();

  fireEvent.click(addButtons[0]);

  expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();

  fireEvent.click(addButtons[0]);

  expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(8); //in Cart component we re-used the <RestaurantItems> component so this foodItems will be total 8 now

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  expect(screen.getByText("Cart is empty, add Items in your cart"));
});
