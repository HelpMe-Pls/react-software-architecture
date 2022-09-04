import React from 'react';
import { useDataSSR } from '../useDataSSR';


export const Articles = () => {
	// Notice there's no `useEffect()` to fetch the data coz `useEffect()`
	// won't be called when our component is rendered on the server

	// The actual component doesn't give a fuck wheather it's on the server or on the browser
	// That's taken care of by this `useDataSSR` custom hook:
	const articles = useDataSSR('articles', async () => {
		console.log('No preloaded articles found, loading from server');

		// This `fetch` is actually from 'isomorphic-fetch' so that it can "fetch" on the server
		// Coz `fetch` is a browser-native thing
		const response = await fetch('http://localhost:8080/api/articles');
		const articles = await response.json();
		return articles
	});

	return (
		<>
		<h1>Articles</h1>
		{articles && articles.map(article => (
			<div key={article.title}>
				<h3>{article.title}</h3>
				<p>by {article.author}</p>
			</div>
		))}
		</>
	);
}