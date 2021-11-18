import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MenuBuilder from "./MenuBuilder";

const props = {
  items: [{ id: 1, name: "pancakes", dietaries: ["v"] }],
  onClick: jest.fn(),
  onTextInput: jest.fn(),
};

describe("MenuBuilder", () => {
  it("renders the items in the list", () => {
    const { getByText } = render(<MenuBuilder {...props} />);

    expect(getByText("pancakes")).toBeInTheDocument();
  });

  it("calls the onClick prop with the correct data when an item is clicked", () => {
    const { getAllByTestId } = render(<MenuBuilder {...props} />);

    const firstMenuItem = getAllByTestId("menu-builder-item")[0];
    fireEvent.click(firstMenuItem);

    expect(props.onClick).toHaveBeenCalledWith(props.items[0]);
  });

  it("calls the onTextInput prop with the input text when entered", () => {
    const { getByTestId } = render(<MenuBuilder {...props} />);

    const textInput = getByTestId("text-input");
    fireEvent.change(textInput, {target: {value: 'F'}})

    expect(props.onTextInput).toHaveBeenCalledWith('F');
  })
});
