import { Row, Col, Button } from 'antd'
import { CarOutlined, HeartOutlined } from '@ant-design/icons'

import Breadcrumb from '@/components/Breadcrumb'
import Title from './components/Title'

export default function ProductDetail() {
	return (
		<div className='ml-base-containert'>
			<Breadcrumb />
			<div className='ml-product-detail-content-main'>
				<Row>
					<Col xs={24} sm={12} md={17} lg={17} xl={17}>
						<div className='ml-product-detail-title-mobil'>
							<Title />
						</div>
						<img
							className='ml-product-detail-img-main'
							src='https://http2.mlstatic.com/D_NQ_NP_2X_614885-MLA49588273946_042022-F.png'
						/>
					</Col>
					<Col xs={24} sm={12} md={7} lg={7} xl={7}>
						<div className='ml-product-detail-features'>
							<HeartOutlined className='ml-product-detail-icon-heart' />
							<div className='ml-product-detail-title-desktop'>
								<Title />
							</div>
							<div className='ml-product-detail-price'>
								<span>$</span>59.990
							</div>
							<div className='ml-product-detail-tags'>
								<span>
									<CarOutlined /> Llega gratis mañana
								</span>
							</div>
							<br />
							<Button className='ml-product-detail-btn-buy' type='primary'>
								Comprar ahora
							</Button>
						</div>
					</Col>
					<Col xs={24} sm={24} md={17} lg={17} xl={17}>
						<div className='ml-product-detail-description-content'>
							<h3>Descripción del producto </h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
								into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
								release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
								software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</div>
					</Col>
				</Row>
			</div>
			<br />
		</div>
	)
}
