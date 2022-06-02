import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

import { formatPrice } from '@/utilities/format-price.utilities'

import Images from '@components/Images'

export default function ProductsList(props: any) {
	return (
		<>
			<div className='ml-products-list-content-main'>
				<Row className='ml-products-list-content'>
					<Col xs={9} sm={9} md={4} lg={4} xl={4} className='ml-products-list-img-conent'>
						<Link to={`/product-detail/${props.detail.id}`}>
							<Images
								classImage={'ml-products-list-img-main'}
								webp={`${import.meta.env.VITE_APP_IMAGES}/D_${props.detail.thumbnail_id}-V.webp`}
								jp2={`${import.meta.env.VITE_APP_IMAGES}/D_${props.detail.thumbnail_id}-V.jp2`}
								jxr={`${import.meta.env.VITE_APP_IMAGES}/D_${props.detail.thumbnail_id}-V.jxr`}
								default={`${import.meta.env.VITE_APP_IMAGES}/D_${props.detail.thumbnail_id}-V.png`}
								alt={props.detail.title}
								title={props.detail.title}
							/>
						</Link>
					</Col>
					<Col xs={15} sm={15} md={20} lg={20} xl={20}>
						<Link to={`/product-detail/${props.detail.id}`}>
							<h2 className='ml-product-list-title'>{props.detail.title}</h2>
						</Link>
						<p className='ml-product-list-seller'>Vendido por {props.detail.seller.id}</p>
						{props.detail.original_price && (
							<div className='ml-product-list-original-price'>
								<span>
									<span>$ </span>
									{formatPrice(props.detail.original_price, props.detail.prices.presentation.display_currency)}
								</span>
							</div>
						)}
						<div className='ml-product-list-price'>
							<span>
								<span>$ </span>
								{formatPrice(props.detail.price, props.detail.prices.presentation.display_currency)}
							</span>
						</div>
						<div>
							<span>en </span>
							<span className='ml-product-list-installments'>
								{props.detail.installments.quantity}x <span>$ </span>
								{formatPrice(props.detail.installments.amount, props.detail.installments.currency_id)} sin interes
							</span>
						</div>
						{props.detail.shipping.free_shipping && (
							<div className='ml-product-list-tags'>
								<span>Llega gratis mañana</span>
							</div>
						)}
					</Col>
				</Row>
				<HeartOutlined className='ml-products-list-icon-heart' />
			</div>
		</>
	)
}
