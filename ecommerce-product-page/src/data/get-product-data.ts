import productOneHero from '../assets/images/image-product-1.jpg';
import productTwoHero from '../assets/images/image-product-2.jpg';
import productThreeHero from '../assets/images/image-product-3.jpg';
import productFourHero from '../assets/images/image-product-4.jpg';
import productOneThumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import productTwoThumbnail from '../assets/images/image-product-2-thumbnail.jpg';
import productThreeThumbnail from '../assets/images/image-product-3-thumbnail.jpg';
import productFourThumbnail from '../assets/images/image-product-4-thumbnail.jpg';
import { fetchedProductData } from '../types/fetched-data';

export const getProductData = (): Promise<string> => {
  const jsonData: fetchedProductData = {
    productID: 'a631g',
    brandName: 'Sneaker Company',
    productName: 'Fall Limited Edition Sneakers',
    productDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
    price: {
      currentPrice: 125.0,
      suggestedPrice: 250.0,
      currentDiscount: 50,
    },
    heroImages: [
      productOneHero,
      productTwoHero,
      productThreeHero,
      productFourHero,
    ],
    thumbnailImages: [
      productOneThumbnail,
      productTwoThumbnail,
      productThreeThumbnail,
      productFourThumbnail,
    ],
  };

  const data = JSON.stringify(jsonData);
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve(data), 300);
  });
};
