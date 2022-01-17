import ImageOne from '../../../assets/images/image-product-1.jpg';
import ImageOneThumb from '../../../assets/images/image-product-1-thumbnail.jpg';
import ImageTwoThumb from '../../../assets/images/image-product-2-thumbnail.jpg';
import ImageThreeThumb from '../../../assets/images/image-product-3-thumbnail.jpg';
import ImageFourThumb from '../../../assets/images/image-product-4-thumbnail.jpg';

export const ImageCarousel = () => {
  return (
    <div>
      <div>
        <img src={ImageOne} alt="Hero" />
      </div>

      <div>
        <div>
          <img src={ImageOneThumb} alt="Thumbnail One" />
          <img src={ImageTwoThumb} alt="Thumbnail Two" />
          <img src={ImageThreeThumb} alt="Thumbnail Three" />
          <img src={ImageFourThumb} alt="Thumbnail Four" />
        </div>
      </div>
    </div>
  );
};
