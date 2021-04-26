import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the headings', () => {
    render(<Main />)

    expect(screen.getByRole('heading', { name: /boilerplate project/i }))
  })
})
