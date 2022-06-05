import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@components/Layout'
import Loading from '@components/Loading'

import Home from '@/pages/home'
import NotFound from '@/pages/not-found'

const ProductDetail = lazy(() => import('@/pages/product-detail'))
const Results = lazy(() => import('@/pages/results'))

export default function Router() {
	return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/product-detail/:id' element={<ProductDetail />} />
						<Route path='/results/:search' element={<Results />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</Layout>
		</BrowserRouter>
	)
}
