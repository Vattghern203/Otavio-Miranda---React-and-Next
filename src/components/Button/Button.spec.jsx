import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from '.'
import userEvent from "@testing-library/user-event";

describe('<Button />', () => {
    it('should render the button with the text "load more"', () => {
        render(<Button text="Load More" />);

        expect.assertions(1)

        const button = screen.getByRole('button', { name: /load more/i })
        expect(button).toBeInTheDocument()  
    })

    it('should call a function on button click', () => {

        const fn = jest.fn()

        render(<Button text="Load More" onClick={fn} />)

        const button = screen.getByRole('button', { name: /load more/i})

        //fireEvent.click(button)
        userEvent.click(button)

        expect(fn).toHaveBeenCalled()
    })

    it('should be disabled when disable is equals to true', () => {
        render(<Button text="Load More" disabled={true} />)

        const button = screen.getByRole('button', { name: /load more/i})
        
        expect(button).toBeDisabled()
    })

    it('should be enabled when disable is equals to false', () => {
        render(<Button text="Load More" disabled={false} />)

        const button = screen.getByRole('button', { name: /load more/i})
        
        expect(button).toBeEnabled()
    })

    it('should match the snapshot', () => {
        const { container } = render(<Button text="load more" disabled={false} />)
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toMatchSnapshot()
    })
})