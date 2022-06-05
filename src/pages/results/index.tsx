import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Head from '@components/Head'
import Breadcrumb from '@/components/Breadcrumb'
import ProductsList from '@/components/Products/List'
import NotFound from '@pages/not-found'

import servicesResults from './services'

export default function Results() {
	let { search } = useParams()
	const [result, setResult] = useState([])
	const [filter, setFilters] = useState([])
	const [notFound, setnotFound] = useState(false)

	useEffect(() => {
		servicesResults(search).then((response: any) => {
			if (response.results.length > 0) {
				setResult(response.results)
				setFilters(response.filters[0].values[0].path_from_root)
			} else {
				setnotFound(true)
			}
		})
	}, [])

	return (
		<div className='ml-base-containert'>
			<Head
				title={`${search} | Mercado Libre Chile`}
				name={'description'}
				content={`Envío Gratis de ${search} en Mercado Libre Chile. Encuentre miles de marcas y productos a precios increíbles.`}
			/>
			{result.length > 0 && (
				<>
					<Breadcrumb breadcrumb={filter} />
					<div className='ml-results-content-main'>
						{result.map((item: any, index: any) => (
							<ProductsList key={index} detail={item} />
						))}
					</div>
				</>
			)}
			{notFound && <NotFound description={'No se encontro ningún resultado de busqueda'} />}
		</div>
	)
}
