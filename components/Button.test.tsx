import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./ui/button";

test("renders button and responds to click", async () => {
  const handleClick = jest.fn();
  render(<Button text="Click me" onClick={handleClick} />);
  await userEvent.click(screen.getByText("Click me"));
  expect(handleClick).toHaveBeenCalled();
});
