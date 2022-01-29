export interface fetchedProductData {
  productID: string;
  brandName: string;
  productName: string;
  productDescription: string;
  price: {
    currentPrice: number;
    suggestedPrice: number | undefined;
    currentDiscount: number | undefined;
  };
  heroImages: string[];
  thumbnailImages: string[];
}
