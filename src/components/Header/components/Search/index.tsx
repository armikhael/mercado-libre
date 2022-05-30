import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input, Button, Form } from 'antd'
import { SearchOutlined, ClockCircleOutlined } from '@ant-design/icons'

import servicesAutosuggest from './services'

export default function SearchInput() {
	let history = useNavigate()
	const [form] = Form.useForm()
	const [result, setResult] = useState([])
	const [focus, setFocus] = useState(false)

	const handleSearch = (item: any) => {
		if (item) {
			servicesAutosuggest(item).then((response: any) => {
				if (response) {
					setResult(response.suggested_queries)
				}
			})
		}
	}

	const handleSumit = (item: any) => {
		if (item) {
			history(`/results/${item.search}`)
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
						<SearchOutlined />
					</Button>
				</Form>
			</div>
			{result.length > 0 && (
				<>
					<div className='ml-header-search-result-content' style={focus ? { display: 'block' } : { display: 'none' }}>
						<ul>
							{result.slice(0, 6).map((item: any, index: any) => (
								<li key={index}>
									<ClockCircleOutlined /> {item.q}
								</li>
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
				</>
			)}
		</>
	)
}
