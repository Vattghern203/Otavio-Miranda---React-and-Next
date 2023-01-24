import { render, screen } from "@testing-library/react"
import { PostCard } from "."
import { postCardPropsMock } from "./mock"

const props = postCardPropsMock

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />)

        expect(screen.getByRole('img')).toHaveAttribute('src', props.cover)
        
        expect(screen.getByRole('heading', {name: 'placeholder'})).toBeInTheDocument()

        expect(screen.getByText('random text')).toBeInTheDocument()
    })

    it('should match the snapshot', () => {
        const { container } = render(<PostCard {...props} />)

        expect(container.firstChild).toMatchSnapshot()
    })
})