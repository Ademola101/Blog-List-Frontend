import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BlogForm from './BlogForm'

test('event handler is fired with the right props', async() => {
  const createBlog = jest.fn()
  const user = userEvent.setup()
  const { container }  = render(<BlogForm createBlog={createBlog} />)
  const titleInput = container.querySelector('#title-input')
  const authorInput = container.querySelector('#author-input')
  const urlInput = container.querySelector('#url-input')
  const likeInput = container.querySelector('#likes-input')
  const save = screen.getByText('save')


  await user.type(titleInput, 'test title input')
  await user.type(authorInput, 'Ademola')
  await  user.type(urlInput, 'www.ademola')
  await  user.type(likeInput, '6')


  await user.click(save)

  expect(createBlog.mock.calls[0][0]).toBe('test title input')
  expect(createBlog.mock.calls[0][1]).toBe('Ademola')
  expect(createBlog.mock.calls[0][2]).toBe('www.ademola')
  expect(createBlog.mock.calls[0][3]).toBe('6')

})