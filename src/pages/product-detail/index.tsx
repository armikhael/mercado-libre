import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Row, Col, Button } from 'antd'
import { CarOutlined, HeartOutlined } from '@ant-design/icons'

import { formatPrice } from '@utilities/format-price'

import Images from '@components/Images'
import Breadcrumb from '@/components/Breadcrumb'
import Title from './components/Title'

import { Detail } from './model'
import servicesDetailProduct from './services'

export default function ProductDetail() {
	let { id } = useParams()
	const [result, setResult] = useState<Detail>()
	const [mobile, setMobile] = useState(false)

	useEffect(() => {
		if (window.innerWidth < 768) {
			setMobile(true)
		}
		servicesDetailProduct(id).then((response: any) => {
			if (response) {
				setResult(response)
			}
		})
	}, [])

	return (
		<>
			{result && (
				<div className='ml-base-containert'>
					<Breadcrumb />
					<div className='ml-product-detail-content-main'>
						<Row>
							<Col xs={24} sm={12} md={17} lg={17} xl={17}>
								{mobile && <Title result={result} />}
								<Images
									classImage={'ml-products-list-img-main'}
									webp={`${import.meta.env.VITE_APP_IMAGES}/D_NQ_NP_2X_${result.thumbnail_id}-F.webp`}
									jp2={`${import.meta.env.VITE_APP_IMAGES}/D_NQ_NP_2X_${result.thumbnail_id}-F.jp2`}
									jxr={`${import.meta.env.VITE_APP_IMAGES}/D_NQ_NP_2X_${result.thumbnail_id}-F.jxr`}
									default={`${import.meta.env.VITE_APP_IMAGES}/D_NQ_NP_2X_${result.thumbnail_id}-F.png`}
									alt={result.title}
									title={result.title}
								/>
							</Col>
							<Col xs={24} sm={12} md={7} lg={7} xl={7}>
								<div className='ml-product-detail-features'>
									<HeartOutlined className='ml-product-detail-icon-heart' />
									{!mobile && <Title result={result} />}
									{result.original_price && (
										<div className='ml-product-detail-original-price'>
											<span>
												<span>$ </span>
												{formatPrice(result.original_price, result.currency_id)}
											</span>
										</div>
									)}
									<div className='ml-product-detail-price'>
										<span>$</span>
										{formatPrice(result.price, result.currency_id)}
									</div>
									<div>
										<span>en </span>
										<span className='ml-product-detail-installments'>
											12x <span>$ </span>
											{formatPrice('25353', result.currency_id)} sin interes
										</span>
									</div>
									{result.shipping && (
										<>
											{result.shipping.free_shipping && (
												<div className='ml-product-detail-tags'>
													<span>
														<CarOutlined /> Llega gratis mañana
													</span>
												</div>
											)}
										</>
									)}
									<br />
									<Button className='ml-product-detail-btn-buy' type='primary'>
										Comprar ahora
									</Button>
								</div>
							</Col>
							<Col xs={24} sm={24} md={17} lg={17} xl={17}>
								<div className='ml-product-detail-description-content'>
									<h3>Descripción</h3>
									<p>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
										industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
										and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
										leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
										with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
										publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</p>
								</div>
							</Col>
						</Row>
					</div>
					<br />
				</div>
			)}
		</>
	)
}
