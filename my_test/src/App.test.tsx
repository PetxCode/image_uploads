import App from "./App";
import { render, screen, userEvent } from "./utils/test-utils";

describe("Just a Test", () => {
  it("The text must Exit", () => {
    render(<App />);

    let myText = screen.getByText("Vite + React");

    expect(myText).toBeInTheDocument();
  });

  it("The text must Exit again", () => {
    render(<App />);

    let text = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    );

    expect(text).toBeInTheDocument();
  });

  it("check for Button", async () => {
    render(<App />);

    userEvent.click(await screen.findByRole("button", { name: "count is 0" }));

    expect(screen.getByText(/count is/i)).toBeInTheDocument();
  });
});
