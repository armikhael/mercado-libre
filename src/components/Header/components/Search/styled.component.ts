import styled from 'styled-components'

type Interface = {
	visible: boolean
}

export const ContentSearchResult = styled.div<Interface>`
	display: ${(props) => (props.visible ? 'block' : 'none')};
`
