export default function NotFound() {
	return (
		<div className='ml-not-found-content'>
			<img src={`${import.meta.env.VITE_APP_IMG_BBP}/nLH7PqS/404.png`} />
			<h3>Parece que esta página no existe</h3>
			<a href='/'>Ir a la página principal</a>
		</div>
	)
}
