import { useState } from 'react'

import { Input, Button, Form } from 'antd'
import { SearchOutlined, ClockCircleOutlined } from '@ant-design/icons'

import { ContentSearchResult, SearchResultLi } from './styled.component'
import { compareArraySearch } from './utilities/compare-array.utilities'
import { paseJson } from './utilities/parse-json.utilities'
import servicesAutosuggest from './services'

export default function SearchInput() {
	const [form] = Form.useForm()
	const [result, setResult] = useState([])
	const [list] = useState<any>(paseJson(localStorage.getItem('saveSearch'), 'saveSearch'))
	const [focus, setFocus] = useState(false)

	const handleSearch = (item: string) => {
		if (item) {
			servicesAutosuggest(item).then((response: any) => {
				if (response) {
					setResult(compareArraySearch(list, response.suggested_queries))
				}
			})
		}
	}

	const handleSaveSearch = (item: string) => {
		list.push(item)
		localStorage.setItem('saveSearch', JSON.stringify(list.slice(-5)))
	}

	const handleSumit = (item: string) => {
		if (item.search) {
			window.location.href = window.location.origin + `/results/${item.search}`
		}
	}

	return (
		<>
			<div className='ml-header-search-content'>
				<Form onFinish={handleSumit} form={form}>
					<Form.Item name='search' className='ml-header-search-input-content'>
						<Input
							autoComplete='off'
							className='ml-header-search-input'
							onChange={(e) => handleSearch(e.target.value)}
							onClick={() => setFocus(true)}
							onBlur={() =>
								setTimeout(() => {
									setFocus(false)
								}, 250)
							}
							placeholder='Buscar productos, marcas y más…'
						/>
					</Form.Item>
					<Button className='ml-header-search-button' htmlType='submit'>
						<span className='ml-header-button-line'></span>
						<SearchOutlined className='ml-header-search-icon' />
					</Button>
				</Form>
			</div>
			{result.length > 0 && (
				<>
					<ContentSearchResult visible={focus}>
						<div className='ml-header-search-result-content'>
							<ul>
								{result.slice(0, 6).map((item: any, index: any) => (
									<a
										className='ml-header-search-result-link'
										onClick={() => handleSaveSearch(item.q)}
										key={index}
										href={`/results/${item.q}`}>
										<SearchResultLi bold={item.exists}>
											{item.exists ? <ClockCircleOutlined /> : <SearchOutlined />}
											{item.q}
										</SearchResultLi>
									</a>
								))}
							</ul>
							{result.length > 7 && (
								<>
									<hr />
									<ul>
										<div className='ml-header-search-title-oficial-store'>Tiendas Oficiales</div>
										{result.slice(6, 9).map((item: any, index: any) => (
											<li key={index}>
												<SearchOutlined /> {item.q} en{' '}
												<a>
													{item.filters[0].name} {item.filters[0].values[0].name}
												</a>
											</li>
										))}
									</ul>
								</>
							)}
						</div>
					</ContentSearchResult>
				</>
			)}
		</>
	)
}
