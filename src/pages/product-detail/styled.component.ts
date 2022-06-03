import styled from 'styled-components'

type Interface = {
	id: string
	name: string
}

export const ImageListContent = styled.div<Interface>`
	border: ${(props) => (props.id === props.name ? '2px solid #3483fa' : '1px solid rgba(0, 0, 0, 0.1)')};
`
