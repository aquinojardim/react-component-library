import React from "react";
import { render } from "@testing-library/react";

import FashionphileButton from "./FashionphileButton";
import { FashionphileButtonProps } from "./FashionphileButton.types";

describe("Fashionphile Button", () => {
  let props: FashionphileButtonProps;

  beforeEach(() => {
    props = {
      theme: "primary"
    };
  });

  const renderComponent = () => render(<FashionphileButton {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const FashionphileButton = getByTestId("fashionphile-button");

    expect(FashionphileButton).toHaveClass("fashionphile-button-primary");
  });

  it("should have secondary className with theme set as secondary", () => {
    props.theme = "secondary";
    const { getByTestId } = renderComponent();

    const FashionphileButton = getByTestId("fashionphile-button");

    expect(FashionphileButton).toHaveClass("fashionphile-button-secondary");
  });
});
