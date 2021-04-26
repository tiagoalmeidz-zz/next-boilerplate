import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the headings', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /boilerplate project/i }))

    expect(container.firstChild).toMatchSnapshot()
  })
})
