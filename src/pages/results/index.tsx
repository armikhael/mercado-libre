import Breadcrumb from '@/components/Breadcrumb'
import ProductsList from '@/components/Products/List'

export default function Results() {
	return (
		<div className='ml-base-containert'>
			<Breadcrumb />
			<div className='ml-results-content-main'>
				<ProductsList />
			</div>
		</div>
	)
}
