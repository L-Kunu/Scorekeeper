import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./GameForm";

describe("GameForm", () => {
  it("renders two input fields and a button", () => {
    const nameOfGameInput = screen.getAllByLabelText(/name of game/i);
    const palyerNameInput = screen.getAllByLabelText(/player names/i);
    const submitButton = screen.getAllByRole("button", { name: /create/i });

    expect(nameOfGameInput).toBeInTheDocument();
    expect(palyerNameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('renders a form with a the name "Create a new game"', () => {
    render(<GameForm />);

    const form = screen.getAllByRole("form", { name: "Create a new game" });

    expect(form).toBeInTheDocument();
  });

  it("submits form data when every field is filled out", () => {
    const handleCreate = jest.fn();
    render(<GameForm onCreateGame={handleCreate} />);

    const nameOfGameInput = screen.getAllByLabelText(/name of game/i);
    const palyerNameInput = screen.getAllByLabelText(/player names/i);
    const submitButton = screen.getAllByRole("button", { name: /create/i });

    userEvent.type(nameOfGameInput, "Dodelido");
    userEvent.type(palyerNameInput, "Jane, John");
    userEvent.click(submitButton);

    expect(handleCreate).toHaveBeenCalledWith({
      nameOfGame: "Dodelido",
      playerNames: ["Jane", "John"],
    });
  });

  it("does not submit form if input field is empty", () => {
    const handleCreate = jest.fn();
    render(<GameForm onCreateGame={handleCreate} />);

    const nameOfGameInput = screen.getAllByLabelText(/name of game/i);
    const submitButton = screen.getAllByRole("button", { name: /create/i });

    userEvent.type(nameOfGameInput, "Dodelido");
    userEvent.click(submitButton);

    expect(handleCreate).not.toHaveBeenCalled();
  });
});
