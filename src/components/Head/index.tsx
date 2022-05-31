import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function Head(props: any) {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<meta charSet='utf-8' />
					<title>{props.title}</title>
					<meta name={props.name} content={props.content} />
					{props.canonical && <link rel='canonical' href={props.canonical} />}
					{props.property && (
						<>
							<meta property='og:title' content={props.property.title} />
							<meta property='og:type' content={props.property.type} />
							<meta property='og:url' content={props.property.url} />
							<meta property='og:image' content={props.property.image} />
						</>
					)}
				</Helmet>
			</HelmetProvider>
		</>
	)
}
