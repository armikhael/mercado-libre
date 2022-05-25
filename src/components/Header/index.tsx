import Logo from './components/Logo'
import Search from './components/Search'

export default function Header() {
	return (
		<>
			<header className='ml-header-content-main'>
				<h1>Header</h1>
				<Logo />
				<Search />
			</header>
		</>
	)
}
