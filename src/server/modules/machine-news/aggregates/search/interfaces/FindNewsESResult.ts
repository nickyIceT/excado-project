export interface FindNewsESResult {
  data?: {
    title: string,
    state: string,
    description: string,
    imageUrls: string[],
    price: number,
    priceType: string,
    newsType: string,
    owner: string,
    location: {
      isDeleted: boolean,
      lastModifiedAt: number,
      _id: string,
      name: string,
      slug: string,
    },
    status: string,
    usedHours: number,
    serialNo: number,
    categoryId: {
      isDeleted: boolean,
      lastModifiedAt: number,
      _id: string,
      name: string,
      slug: string,
    },
    brand: {
      isDeleted: boolean,
      lastModifiedAt: number,
      _id: string,
      name: string,
      slug: string,
    },
    model: {
      isDeleted: boolean,
      lastModifiedAt: number,
      _id: string,
      name: string,
      slug: string,
      brand: string,
      category: string,
    },
    weight: number,
    year: number,
    followBy: string[],
    isDeleted: boolean,
    createdBy: number,
    createdAt: number,
    lastModifiedAt: number,
    elasticsearchID: string,
    elasticsearchTitle: string,
    _id: string,
  }[];
  before?: string;
  after?: string;
}
