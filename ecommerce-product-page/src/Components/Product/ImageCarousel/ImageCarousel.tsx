import { useReducer} from 'react';
import ImageOne from '../../../assets/images/image-product-1.jpg';
import ImageTwo from '../../../assets/images/image-product-2.jpg';
import ImageThree from '../../../assets/images/image-product-3.jpg';
import ImageFour from '../../../assets/images/image-product-4.jpg';
import ImageOneThumb from '../../../assets/images/image-product-1-thumbnail.jpg';
import ImageTwoThumb from '../../../assets/images/image-product-2-thumbnail.jpg';
import ImageThreeThumb from '../../../assets/images/image-product-3-thumbnail.jpg';
import ImageFourThumb from '../../../assets/images/image-product-4-thumbnail.jpg';
import { NextIcon } from '../../Icons/NextIcon';
import { PreviousIcon } from '../../Icons/PreviousIcon';

interface ImageAction {
  type: 'NEXT' | 'PREVIOUS' | 'CLICK';
  payload: number;
}
interface imageIndex {
  index: number;
}

const reducer = (state: imageIndex, action: ImageAction) => {
  switch (action.type) {
    case 'NEXT':
      if (state.index + 1 > action.payload) return { index: 0 };
      else return { index: state.index + 1 };
    case 'PREVIOUS':
      if (state.index - 1 < 0) return { index: action.payload };
      else return { index: state.index - 1 };
    case 'CLICK':
      return { index: action.payload };
    default:
      return state;
  }
};

export const ImageCarousel = () => {
  const [state, dispatch] = useReducer(reducer, { index: 0 });
  const heroImages: string[] = [ImageOne, ImageTwo, ImageThree, ImageFour];
  const thumbnailImages: string[] = [
    ImageOneThumb,
    ImageTwoThumb,
    ImageThreeThumb,
    ImageFourThumb,
  ];

  return (
    <div>
      <div>
        <img src={heroImages[state.index]} alt="Hero" />
        <button
          onClick={() =>
            dispatch({ type: 'PREVIOUS', payload: heroImages.length - 1 })
          }
        >
          <PreviousIcon />
        </button>
        <button
          onClick={() =>
            dispatch({ type: 'NEXT', payload: heroImages.length - 1 })
          }
        >
          <NextIcon />
        </button>
      </div>

      <div>
        <div>
          {thumbnailImages.map((thumbnail, index) => (
            <button
              key={thumbnail}
              data-index={index}
              onClick={() => dispatch({ type: 'CLICK', payload: index })}
            >
              <img src={thumbnail} alt={`Thumbnail ${index}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
