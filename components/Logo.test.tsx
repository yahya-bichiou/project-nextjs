import { render, screen } from "@testing-library/react";
import Logo from "@/components/logo";

test("renders the logo image", () => {
  render(<Logo local="en" />);
  const img = screen.getByAltText(/uploadthing logo/i);
  expect(img).toBeInTheDocument();
});
