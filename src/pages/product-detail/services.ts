import axios from 'axios'
import { notification } from 'antd'

export default async function servicesProduct(item: any) {
	let responses
	await axios({
		method: 'GET',
		url: `${import.meta.env.VITE_APP_API_MERCADOLIBRE_EXPRESS}/detail-product/${item}`,
	})
		.then((response) => {
			if (response.data.status === 200) {
				responses = response.data
			} else {
				notification.error({
					message: response.data.reason,
					description: response.data.body,
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
