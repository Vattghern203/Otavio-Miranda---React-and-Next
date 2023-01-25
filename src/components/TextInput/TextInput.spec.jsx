import { render, screen } from '@testing-library/react'

import { TextInput } from '.'
import userEvent from '@testing-library/user-event'

describe('<TextInput />', () => {

    const fn = jest.fn()

    it('should match the placeholder', () => {
        
        render(<TextInput handleChange={fn} searchValue={'test'} />)

        const input = screen.getByPlaceholderText(/search here/i)

        expect(input).toBeInTheDocument()
    
        expect(input.value).toBe('test')
    })

    it('should call handleChange function on each key pressed', () => {
        
        render(<TextInput handleChange={fn} />)

        const input = screen.getByPlaceholderText(/search here/i)

        const value = 'test'

        userEvent.type(input, value)

        expect(input.value).toBe(value)
        expect(fn).toHaveBeenCalledTimes(value.length)

    })

    it('should match the snapshot', () => {
        const {container} = render(<TextInput handleChange={fn} searchValue={'test'}/>)

        expect(container).toMatchSnapshot()
    })
})