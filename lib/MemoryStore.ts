export class Collection<T> {
  constructor(private data: T[]) {}

  public findOne(query: Partial<T>): T {
    return this.data.find((item) => {
      return Object.keys(query).every((key) => item[key] === query[key]);
    });
  }

  public findAll(query: Partial<T> = null): T[] {
    if (!query) return this.data;

    return this.data.filter((item) => {
      return Object.keys(query).every((key) => item[key] === query[key]);
    });
  }

  public insert(item: T): T {
    this.data.push(item);
    return item;
  }

  public update(query: Partial<T>, item: any): T | null {
    const index = this.data.findIndex((i) =>
      Object.keys(query).every((key) => i[key] === query[key]),
    );
    if (index > -1) {
      this.data[index] = item;
      return item;
    } else {
      return null;
    }
  }

  public delete(query: Partial<T>): boolean {
    const index = this.data.findIndex((i) =>
      Object.keys(query).every((key) => i[key] === query[key]),
    );

    if (index > -1) {
      this.data.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  public setData(data: T[]){
    this.data = data
  }
}

export class MemoryStore {
  private collections: Record<string, Collection<any>> = {};

  public collection<T>(name: string, data: any = []): Collection<T> {
    if (!this.collections[name]) {
      this.collections[name] = new Collection<T>(data);
    }

    return this.collections[name];
  }
}
