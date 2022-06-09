export const compareArraySearch = (searchLocal: any, searchResult: any) => {
	searchLocal.map(function (i: any) {
		searchResult.map(function (j: any, index: any) {
			if (j.q === i) {
				searchResult[index].exists = true
			}
		})
	})
	return searchResult
}
