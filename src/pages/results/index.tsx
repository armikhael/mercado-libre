import Navigation from '@/components/Navigation'
import ProductsList from '@/components/Products/List'

export default function Results() {
	return (
		<div className='ml-base-containert'>
			<Navigation />
			<div className='ml-results-content-main'>
				<ProductsList />
			</div>
		</div>
	)
}
