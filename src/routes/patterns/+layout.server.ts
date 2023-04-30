import { snippetList } from '../../data/code-snippet';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	const path = url.pathname;

	const snippet = snippetList.find((snippet) => path.includes(snippet.name.toLocaleLowerCase()));

	const patternList = snippetList.map((snippet) => snippet.name.toLocaleLowerCase());

	return {
		snippet: snippet?.code,
		patternName: snippet?.name,
		patternList
	};
};
