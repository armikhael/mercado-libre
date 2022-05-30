import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Breadcrumb from '@/components/Breadcrumb'
import ProductsList from '@/components/Products/List'

import servicesResults from './services'

export default function Results() {
	let { search } = useParams()
	const [result, setResult] = useState([])
	const [filter, setFilters] = useState([])

	useEffect(() => {
		servicesResults(search).then((response: any) => {
			if (response) {
				setResult(response.results)
				setFilters(response.filters[0].values[0].path_from_root)
			}
		})
	}, [])

	return (
		<div className='ml-base-containert'>
			<Breadcrumb breadcrumb={filter} />
			<div className='ml-results-content-main'>
				{result.length > 0 && (
					<>
						{result.map((item: any, index: any) => (
							<ProductsList key={index} detail={item} />
						))}
					</>
				)}
			</div>
		</div>
	)
}
