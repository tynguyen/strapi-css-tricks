import ArticleCard from '../components/ArticleCard';
import Header from '../components/Header';
const qs = require('qs');

export default function Home( {loginResponseData, articles} ) {
  console.log('[DEBUG] Login response');
  console.log(loginResponseData);
  console.log(articles[1].attributes.author);

  return (

      <div>
          <h1>Implementing Authenticated API Requests to Strapi
          </h1>

          <div className='article-grid'>
            {articles.map((_article_, i) => (
              <ArticleCard article={_article_.attributes} key={i} />
            ))}
          </div>
      </div>

  );

}

export async function getServerSideProps(ctx) {
    const loginData = {
      identifier: 'tynguyen.tech@gmail.com',
      password: '@rv#0ZHGgu26',
    };

    const login = await fetch(`http://localhost:1337/api/auth/local`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify(loginData),
        },
      );
    const loginResponseData = await login.json();

    const query = qs.stringify({
      populate: [
        'tags',
        'author',
        'author.photo',
        'photo'
      ],
    },{
      encodeValuesOnly: true,
    });

    const res = await fetch(`http://localhost:1337/api/articles?${query}`);

    // const res = await fetch(`http://localhost:1337/api/articles`, {
    //   headers: {
    //     Authorization: `Bearer ${loginResponseData.jwt}`
    //   }
    // });
    let articles = await res.json();
    articles = articles.data;

    return {props: {articles: articles, loginResponseData: loginResponseData}};
};