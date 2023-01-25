import Link from 'next/link';

const ArticleCard = ({ article }) => {
	const date = new Date(article.date).toDateString();
	return (
		<div className='article'>
			<div className='cover-image'>
				<img src={`http://localhost:1337${article.photo.data.attributes.url}`} />
			</div>

			<div className='article-info'>

			</div>
		</div>
	);
};


export default ArticleCard;