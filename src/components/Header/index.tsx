import { Row, Col } from 'antd'

import Logo from '@components/Logo'
import Search from './components/Search'

export default function Header() {
	return (
		<>
			<header className='ml-header-content-main'>
				<div className='ml-base-containert'>
					<Row>
						<Col span={2}>
							<Logo mlClass={'ml-header-logo-main'} />
						</Col>
						<Col offset={2} xs={{ span: 16 }} md={{ span: 12 }}>
							<Search />
						</Col>
						<Col offset={1} xs={{ span: 4 }} md={{ span: 3 }}>
							<img
								className='ml-header-img-banner'
								src='https://http2.mlstatic.com/D_NQ_602055-MLA49875786788_052022-OO.png'
							/>
						</Col>
					</Row>
				</div>
			</header>
		</>
	)
}
