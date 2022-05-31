export default function Title(props: any) {
	return (
		<>
			<div>
				<span className='ml-product-detail-new'>
					Nuevo <span>|</span> 1221 vendidos
				</span>
			</div>
			<h1 className='ml-product-detail-title'>{props.result.title}</h1>
			<p className='ml-product-detail-seller'>Vendido por {props.result.seller_id}</p>
		</>
	)
}
