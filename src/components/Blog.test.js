import '@testing-library/jest-dom/extend-expect'
import { render, screen,fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'


describe('<Blog/>',  () => {
  const blog = {
    title: 'How to get away with murder',
    author : 'Ademola',
    url: '/',
    likes: 5,
  }


  const deleteBlog = jest.fn()
  const increaseLike = jest.fn()
  test('component display blog title but not the the rest of the component', () => {

    const component =  render(<Blog blog={blog} deleteBlog = {deleteBlog} increaseLike = {increaseLike}/>)
    expect(component.container).toHaveTextContent('How to get away with murder')
  })

  test('clicking the view display likes and url', () => {

    const component = render(<Blog blog={blog} deleteBlog = {deleteBlog}/>)

    const button  = component.getByText('view')
    fireEvent.click(button)
    expect(component.container).toHaveTextContent('Ademola')
    expect(component.container).toHaveTextContent(5)
  })
})