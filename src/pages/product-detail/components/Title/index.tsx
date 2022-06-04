export default function Title(props: any) {
	return (
		<>
			<div>
				<span className='ml-product-detail-new'>
					{props.result.condition} <span>|</span> {props.result.sold_quantity} vendidos
				</span>
			</div>
			<h1 className='ml-product-detail-title'>{props.result.title}</h1>
			<p className='ml-product-detail-seller'>Vendido por {props.seller.seller.nickname}</p>
		</>
	)
}
