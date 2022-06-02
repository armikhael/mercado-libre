export const formatPrice = (price: any, currency: any) => {
	const hanbleFormatPrice = new Intl.NumberFormat('es-CL', {
		currency: currency,
		minimumFractionDigits: 0,
	})
	return hanbleFormatPrice.format(price)
}
