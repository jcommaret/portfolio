import { render, screen } from "@testing-library/react"
import App from "./App"

test("Render Name", () => {
  render(<App />)
  const portfolioName = screen.getByText(/Jérôme Commaret/i)
  expect(portfolioName).toBeInTheDocument()
})
