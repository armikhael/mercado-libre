import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Row, Col, Button } from 'antd'
import { CarOutlined, HeartOutlined } from '@ant-design/icons'

import { formatPrice } from '@/utilities/format-price.utilities'

import Images from '@components/Images'
import Breadcrumb from '@/components/Breadcrumb'
import Head from '@components/Head'
import NotFound from '@pages/not-found'

import Title from './components/Title'
import { ImageListContent } from './styled.component'
import { Detail } from './model'
import servicesProduct from './services'

export default function ProductDetail() {
	let { id } = useParams()
	const [result, setResult] = useState<Detail>()
	const [mobile, setMobile] = useState(false)
	const [image, setImage] = useState('')
	const [notFound, setnotFound] = useState(false)

	useEffect(() => {
		if (window.innerWidth < 768) {
			setMobile(true)
		}
		servicesProduct(id).then((response: any) => {
			if (response) {
				setResult(response)
				setImage(response.detail.thumbnail_id)
			} else {
				setnotFound(true)
			}
		})
	}, [])

	return (
		<>
			{result && (
				<div className='ml-base-containert'>
					<Head
						title={result.detail.title}
						name={'description'}
						content={result.detail.description}
						property={{
							title: result.detail.title,
							type: 'product',
							url: result.detail.permalink,
							image: `${import.meta.env.VITE_APP_IMAGES}/D_NQ_NP_2X_${result.detail.thumbnail_id}-F.png`,
						}}
					/>
					<Breadcrumb breadcrumb={result.categories.path_from_root} />
					<div className='ml-product-detail-content-main'>
						<Row>
							<Col xs={0} sm={0} md={1} lg={1} xl={1}>
								{result.detail.pictures.slice(0, 6).map((item: any, index: any) => (
									<ImageListContent
										id={item.id}
										name={image}
										key={index}
										onMouseEnter={() => setImage(item.id)}
										className={'ml-product-detail-img-list-content'}>
										<Images
											classImage={'ml-product-detail-img-list'}
											webp={`${import.meta.env.VITE_APP_IMAGES}/D_Q_NP_614885-${item.id}-R.webp`}
											jp2={`${import.meta.env.VITE_APP_IMAGES}/D_Q_NP_614885-${item.id}-R.jp2`}
											jxr={`${import.meta.env.VITE_APP_IMAGES}/D_Q_NP_614885-${item.id}-R.jxr`}
											default={`${import.meta.env.VITE_APP_IMAGES}/D_Q_NP_614885-${item.id}-R.png`}
											alt={result.detail.title}
											title={result.detail.title}
										/>
									</ImageListContent>
								))}
							</Col>
							<Col xs={24} sm={12} md={15} lg={15} xl={15}>
								{mobile && <Title result={result.detail} seller={result.seller} />}
								<div className='ml-product-detail-img-main-content'>
									<Images
										classImage={'ml-product-detail-img-main'}
										webp={`${import.meta.env.VITE_APP_IMAGES}/D_NQ_NP_2X_${image}-F.webp`}
										jp2={`${import.meta.env.VITE_APP_IMAGES}/D_NQ_NP_2X_${image}-F.jp2`}
										jxr={`${import.meta.env.VITE_APP_IMAGES}/D_NQ_NP_2X_${image}-F.jxr`}
										default={`${import.meta.env.VITE_APP_IMAGES}/D_NQ_NP_2X_${image}-F.png`}
										alt={result.detail.title}
										title={result.detail.title}
									/>
								</div>
							</Col>
							<Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
							<Col xs={24} sm={12} md={7} lg={7} xl={7} className='ml-product-detail-features-content'>
								<div className='ml-product-detail-features'>
									<HeartOutlined className='ml-product-detail-icon-heart' />
									{!mobile && <Title result={result.detail} seller={result.seller} />}
									{result.detail.original_price && (
										<div className='ml-product-detail-original-price'>
											<span>
												<span>$ </span>
												{formatPrice(result.detail.original_price, result.detail.currency_id)}
											</span>
										</div>
									)}
									<div className='ml-product-detail-price'>
										<span>$</span>
										{formatPrice(result.detail.price, result.detail.currency_id)}
									</div>
									<div>
										<span>en </span>
										<span className='ml-product-detail-installments'>
											12x <span>$ </span>
											{formatPrice('25353', result.detail.currency_id)} sin interes
										</span>
									</div>
									{result.detail.shipping.free_shipping && (
										<div className='ml-product-detail-tags'>
											<span>
												<CarOutlined /> Llega gratis mañana
											</span>
										</div>
									)}
									<br />
									<Button className='ml-product-detail-btn-buy' type='primary'>
										Comprar ahora
									</Button>
								</div>
							</Col>
							<Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
							<Col xs={24} sm={24} md={15} lg={15} xl={15}>
								<div className='ml-product-detail-description-content'>
									<h3>Descripción</h3>
									{result.detail.description ? (
										<p>{result.detail.description}</p>
									) : (
										<p>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
											the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
											type and scrambled it to make a type specimen book. It has survived not only five centuries, but
											also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
											the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
											with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
										</p>
									)}
								</div>
							</Col>
						</Row>
					</div>
					<br />
				</div>
			)}
			{notFound && <NotFound />}
		</>
	)
}
