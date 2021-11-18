import React from "react";
import { render } from "@testing-library/react";
import MenuSummary from "./MenuSummary";

const props = {
  itemCount: 6,
  dietCounts: { 've': 2, 'v': 4 }
};

describe("MenuSummary", () => {
  it("renders a count of items", () => {
    const { getByText } = render(<MenuSummary {...props} />);

    expect(getByText('6 items')).toBeDefined();
  });
  it("renders a list of diets and there count", () => {
    const { getAllByTestId } = render(<MenuSummary {...props} />);
    const dietCounts = getAllByTestId('diet-count')

    expect(dietCounts[0]).toHaveTextContent('2xve');
    expect(dietCounts[1]).toHaveTextContent('4xv');
  });
});
