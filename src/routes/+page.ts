import { snippetList } from '../data/code-snippet';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const nameList = snippetList.map((snippet) => snippet.name);

	return {
		patternList: nameList
	};
};
