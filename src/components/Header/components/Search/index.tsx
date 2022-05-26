import { useState } from 'react'

import { Input, Button } from 'antd'
import { SearchOutlined, ClockCircleOutlined } from '@ant-design/icons'

export default function SearchInput() {
	const [result, setResult] = useState(false)
	const [focus, setFocus] = useState(false)

	const handleSearch = (item: any) => {
		if (item) {
			setResult(item)
		}
	}

	return (
		<>
			<div className='ml-header-search-content'>
				<Input
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
				<Button className='ml-header-search-button' htmlType='submit' href={`/results/kdsdjk`}>
					<SearchOutlined />
				</Button>
			</div>
			<div className='ml-header-search-result-content' style={focus ? { display: 'block' } : { display: 'none' }}>
				<ul>
					<li>
						<ClockCircleOutlined /> Hola
					</li>
					<li>
						<ClockCircleOutlined /> Hola
					</li>
					<li>
						<ClockCircleOutlined /> Hola
					</li>
					<li>
						<ClockCircleOutlined /> Hola
					</li>
					<li>
						<ClockCircleOutlined /> Hola
					</li>
				</ul>
			</div>
		</>
	)
}
