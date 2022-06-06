import styled from 'styled-components'

type InterfaceSearchResult = {
	visible: boolean
}

type InterfaceSearchResultLi = {
	bold: boolean
}

export const ContentSearchResult = styled.div<InterfaceSearchResult>`
	display: ${(props) => (props.visible ? 'block' : 'none')};
`

export const SearchResultLi = styled.li<InterfaceSearchResultLi>`
	font-weight: ${(props) => (props.bold ? '600' : '300')};
`
