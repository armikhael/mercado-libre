export default function Images(props: any) {
	return (
		<>
			<picture className={props.classContent}>
				<source className={props.classImage} srcSet={props.webp} type='image/webp' />
				<source className={props.classImage} srcSet={props.jp2} type='image/jp2' />
				<source className={props.classImage} srcSet={props.jxr} type='image/vnd.ms-photo' />
				<img className={props.classImage} src={props.default} alt={props.title} title={props.title} />
			</picture>
		</>
	)
}
