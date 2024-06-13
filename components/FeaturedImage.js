import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedImage({ post }) {
	let img = '';

	const defaultFeaturedImage =
		'http://localhost:10023/wp-content/uploads/2024/06/360_F_568525285_CrGJ8Yh1noTyqu6QsocfVeGQGY91E0Jb-1.jpg';
	const defaultWidth = '300';
	const defaultHeight = '200';

	if (post.featuredImage) {
		let size = post.featuredImage.node.mediaDetails.sizes[0];
		img = {
			src: size.sourceUrl,
			width: size.width,
			height: size.height,
		};
	} else {
		img = {
			src: defaultFeaturedImage,
			width: defaultWidth,
			height: defaultHeight,
		};
	}

	return (
		<Link href={`/blog/${post.slug}`}>
			<Image
				src={img.src}
				width={img.width}
				height={img.height}
				alt={post.title}
				className="h-full object-cover rounded-xl"
			/>
		</Link>
	);
}
