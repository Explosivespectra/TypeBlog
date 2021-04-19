import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MenuCard } from "../components/pageComponents/MenuPage/ChildComponents/MenuCard";
describe("MenuCard", () => {
  test("Use the first ever hard-code test value with a very long name to create a menu card", () => {
    const firstTimeUsingJestReactTestingLibrary = {
      name: "Moon Pie",
      rarity: 4,
      imgFileName: "moon_pie.png",
      id: 10,
    };

    render(<MenuCard {...firstTimeUsingJestReactTestingLibrary} />);

    expect(screen.getByText(/Moon Pie/)).toBeInTheDocument();
  });
});
