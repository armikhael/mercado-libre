import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@components/Layout'

import Home from '@/pages/home'
import ProductDetail from '@/pages/product-detail'
import Results from '@/pages/results'
import NotFound from '@/pages/not-found'

export default function Router() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/product-detail/:id' element={<ProductDetail />} />
					<Route path='/results/:search' element={<Results />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}
