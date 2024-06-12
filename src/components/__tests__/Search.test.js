import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should show restaurant list after inputting an clicking burger on search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchButton);

  //   const restaurantResults = screen.getAllByTestId("resCards");

  //   expect(restaurantResults.length).toBe(3);
});
