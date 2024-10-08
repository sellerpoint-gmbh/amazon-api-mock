class Collection {
	private data: any[] = []

	public findOne(query: any) {
		return this.data.find(item => {
			return Object.keys(query).every(key => item[key] === query[key])
		})
	}

	public findAll(query: any = null) {
		if (!query) return this.data

		return this.data.filter(item => {
			return Object.keys(query).every(key => item[key] === query[key])
		})
	}

	public insert(item: any) {
		this.data.push(item)
	}

	public update(query: any, item: any) {
		const index = this.data.findIndex(i => Object.keys(query).every(key => i[key] === query[key]))
		if (index > -1) {
			this.data[index] = item
		}
	}

	public delete(query: any) {
		const index = this.data.findIndex(i => Object.keys(query).every(key => i[key] === query[key]))
		if (index > -1) {
			this.data.splice(index, 1)
		}
	}
}

export class MemoryStore {
	private collections: Record<string, Collection> = {}

	public collection(name: string) {
		if (!this.collections[name]) {
			this.collections[name] = new Collection()
		}

		return this.collections[name]
	}
}
