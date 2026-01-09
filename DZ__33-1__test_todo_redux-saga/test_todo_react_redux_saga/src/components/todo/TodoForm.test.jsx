import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useDispatch } from 'react-redux'
import TodoForm from './TodoForm'

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}))

// Що у поле для тексту можна ввести як цифри, так і букви
describe('You can enter both numbers and letters in the text field.', () => {
  test('numbers and letters', async () => {
    const dispatchMock = vi.fn()
    useDispatch.mockReturnValue(dispatchMock)

    render(<TodoForm />)

    const input = screen.getByTestId('todo-input')

    expect(input).toHaveValue('')

    await userEvent.type(input, 'test')
    expect(input).toHaveValue('test')

    await userEvent.clear(input)
    await userEvent.type(input, '777')
    expect(input).toHaveValue('777')
  })
})

// Можна протестувати, що після натискання на кнопку “Додати” без тексту, ви отримаєте помилку
describe('After clicking on the “Додати” button without text', () => {
  test('shows Required error', async () => {
    const dispatchMock = vi.fn()
    useDispatch.mockReturnValue(dispatchMock)

    render(<TodoForm />)

    await userEvent.click(
      screen.getByRole('button', { name: /додати/i })
    )

    expect(screen.getByText(/Required/i)).toBeInTheDocument()
    expect(dispatchMock).not.toHaveBeenCalled()
  })
})

