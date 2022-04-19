import { render, fireEvent, cleanup, getByText } from "@testing-library/react";
import Counter from './Counter'

afterEach(cleanup);

it("displays the count",()=>{
    const {getByTestId} = render(<Counter/>);
    expect(getByTestId("count")).toHaveTextContent("0");
});

it("increments count", ()=>{
    const {getByTestId, getByText} = render(<Counter/>);
    fireEvent.click(getByText("increment"));
    expect(getByTestId("count")).toHaveTextContent("1")
})

