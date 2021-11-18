import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MenuPreview from "./MenuPreview";

const props = {
  items: [
    { id: 1, dietaries: ["ve, v"], name: "foo" },
    { id: 2, dietaries: ["v"], name: "bar" },
  ],
  onClick: jest.fn(),
};

describe("MenuBuilder", () => {
  it("renders the items", () => {
    const { getByText } = render(<MenuPreview {...props} />);

    expect(getByText("foo")).toBeInTheDocument();
    expect(getByText("bar")).toBeInTheDocument();
  });

  it("calls the onClick prop with the item id when pressed", () => {
    const { getAllByRole } = render(<MenuPreview {...props} />);
    const secondButton = getAllByRole("button")[1];

    fireEvent.click(secondButton);
    expect(props.onClick).toHaveBeenCalledWith(2);
  });
});
