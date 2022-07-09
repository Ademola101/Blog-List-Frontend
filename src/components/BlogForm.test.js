import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

test('event handler is fired with the right props', () => {
  const addNote = jest.fn()
  const { container }  = render(<BlogForm createBlog={addNote} />)
  const titleInput = container.querySelector('#title-input')
  const authorInput = container.querySelector('#author-input')
  const urlInput = container.querySelector('#url-input')
  const likeInput = container.querySelector('#likes-input')

  const user = userEvent.setup()
  user.type(titleInput, 'test title input')
  user.type(authorInput, 'Ademola')
  user.type(urlInput, 'www.ademola')
  user.type(likeInput, 6)

  const save = screen.getByText('add blog')
  fireEvent.click(save)
  expect(addNote.mock.calls).toHaveLength(1)
  expect(addNote.mock.calls[0][0].content).toBe('test title input')
  expect(addNote.mock.calls[0][1].content).toBe('Ademola')
  expect(addNote.mock.calls[0][2].content).toBe('www.ademola')
  expect(addNote.mock.calls[0][3].content).toBe(6)

})