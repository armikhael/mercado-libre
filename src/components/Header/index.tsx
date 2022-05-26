import { Row, Col } from 'antd'

import Logo from '@components/Logo'
import Search from './components/Search'

export default function Header() {
	return (
		<>
			<header className='ml-header-content-main'>
				<div className='ml-base-containert'>
					<Row>
						<Col span={2} offset={2} xs={{ offset: 1 }}>
							<Logo mlClass={'ml-header-logo-main'} />
						</Col>
						<Col offset={2} xs={{ span: 16 }} md={{ span: 12 }}>
							<Search />
						</Col>
					</Row>
				</div>
			</header>
		</>
	)
}
