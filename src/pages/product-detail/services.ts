import axios from 'axios'
import { notification } from 'antd'

export default async function servicesDetailProduct(item: any) {
	let responses
	await axios({
		method: 'GET',
		url: `${import.meta.env.VITE_APP_API_MERCADOLIBRE}/items/${item}`,
	})
		.then((response) => {
			if (response.status === 200) {
				responses = response.data
			} else {
				notification.error({
					message: response.data.error,
					description: response.data.message,
				})
			}
		})
		.catch((error) => {
			notification.error({
				message: error.response.data.error,
				description: error.response.data.message,
			})
		})
	return responses
}
