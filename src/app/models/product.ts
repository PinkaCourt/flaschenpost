interface IAarticles {
  id: number;
  shortDescription: string;
  price: number;
  unit: string;
  pricePerUnitText: string;
  image: string;
}

export interface IProduct {
  id: number;
  brandName: string;
  name: string;
  descriptionText?: string;
  articles: IAarticles[];
}

export interface IFlatProduct extends IAarticles {
  brandName: string;
  name: string;
  descriptionText?: string;
}
