import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import Mock_Data from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"


test ("should render the restaurant card components having props in it", () => {
    render(<RestaurantCard resData={Mock_Data} />)

    const resName = screen.getByText("Pizza Hut")

    expect(resName).toBeInTheDocument()

})