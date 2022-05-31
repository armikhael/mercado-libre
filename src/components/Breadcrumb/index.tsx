import { RightOutlined } from '@ant-design/icons'

export default function Breadcrumb(props: any) {
	return (
		<>
			{props.breadcrumb && (
				<section className='ml-breadcrumb-keywords-content'>
					<ul>
						{props.breadcrumb.map((item: any, index: any) => (
							<li key={index}>
								{item.name}
								{props.breadcrumb.length != index + 1 && <RightOutlined />}
							</li>
						))}
					</ul>
				</section>
			)}
		</>
	)
}
