import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'


describe('<Blog/>',  () => {
  const blog = {
    title: 'How to get away with murder',
    author : 'Ademola',
    url: '/',
    likes: 5,
  }
  test('component display blog title but not the the rest of the component', () => {

    render(<Blog blog={blog}/>)

    const elementToShow = screen.getByText('How to get away with murder',{ exact: false })
    expect(elementToShow).toBeDefined()
  })
})