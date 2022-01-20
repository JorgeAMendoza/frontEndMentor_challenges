export interface fetchedProductData {
  brandName: string;
  productName: string;
  productDescription: string;
  price: {
    currentPrice: number;
    suggestedPrice: number;
    currentDiscount: number;
  };
  heroImages: string[];
  thumbnailImages: string[];
}
