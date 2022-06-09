export const paseJson = (str: any, name: string) => {
	try {
		return JSON.parse(str) || []
	} catch {
		localStorage.removeItem(name)
		return new Array()
	}
}
