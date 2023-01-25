import { render, screen } from '@testing-library/react'

import { Posts } from '.'

const props = {

    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            cover: 'img/img_1.png'
        },
    
        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            cover: 'img/img_2.png'
        },
    
        {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            cover: 'img/img_3.png'
        }
    ]
}

describe('<Posts />', () => {
    it('should render posts', () => {
        render(<Posts  {...props}/>)

        expect(screen.getAllByRole('heading', { name : /title/i }))
            .toHaveLength(3)

        expect(screen.getAllByRole('img', { name : /title/i }))
            .toHaveLength(3)

        expect(screen.getAllByText(/body/i))
            .toHaveLength(3)
    })

    
    it('should not render posts', () => {
        render(<Posts />)
        expect(screen.queryAllByRole('heading', {name: /title/i}))
            .toHaveLength(0)
    })

    it('should match the snapshot', () => {
        const {container} = render(<Posts {...props}  />)
    
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toMatchSnapshot()
    })
})