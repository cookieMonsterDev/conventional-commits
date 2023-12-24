import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />);

    const myElem = screen.getByText("Docs");
    
    expect(myElem).toBeInTheDocument();
  });

  it('should contain the text "information"', () => {
    render(<Home />);

    const myElem = screen.getByText(/information/i); 

    expect(myElem).toBeInTheDocument(); 
  });
});
