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

  let component
  const deleteBlog = jest.fn()
  const increaseLike = jest.fn()
  beforeEach(() => {

    component =  render(<Blog key={blog.id} blog={blog} deleteBlog = {deleteBlog} increaseLike = {increaseLike}/>)
  })


  test('render title and author but not the rest', async() => {

    const title = component.container.querySelector('.title')
    expect(title).toHaveTextContent('How to get away with murder')
    expect(component.queryByText('Ademola')).not.toBeInTheDocument()



  })

  test('clicking the view display likes and url', () => {


    const button  = screen.getByText('view')
    fireEvent.click(button)
    const rest = component.container.querySelector('.rest')
    expect(rest).toBeInTheDocument()
  })

  test('button click twice fire event handler twice', () => {
    const viewButton  = screen.getByText('view')
    fireEvent.click(viewButton)
    const button  = screen.getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)
    expect(increaseLike.mock.calls).toHaveLength(2)

  })
})