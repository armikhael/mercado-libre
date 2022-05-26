import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

export default function ProductsList() {
	return (
		<>
			<div className='ml-products-list-content-main'>
				<Row className='ml-products-list-content'>
					<Col xs={9} sm={9} md={4} lg={4} xl={4}>
						<Link to={`/product-detail/dfhhfudsfhu`}>
							<img
								className='ml-products-list-img-main'
								src='https://http2.mlstatic.com/D_NQ_NP_721295-MLC49898759060_052022-V.png'
							/>
						</Link>
					</Col>
					<Col xs={15} sm={15} md={20} lg={20} xl={20}>
						<Link to={`/product-detail/dfhhfudsfhu`}>
							<h2 className='ml-product-list-title'>Parrilla Eléctrica Thomas Th-224 1650w</h2>
						</Link>
						<p className='ml-product-list-seller'>Vendido por Thomas</p>
						<div className='ml-product-list-price'>
							<span>
								<span>$ </span>59.990
							</span>
						</div>
						<div className='ml-product-list-tags'>
							<span>Llega gratis mañana</span>
						</div>
					</Col>
				</Row>
				<HeartOutlined className='ml-products-list-icon-heart' />
			</div>
		</>
	)
}
