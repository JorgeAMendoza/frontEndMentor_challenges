import { useReducer } from 'react';
import { NextIcon } from '../../Icons/NextIcon';
import { PreviousIcon } from '../../Icons/PreviousIcon';

interface ImageAction {
  type: 'NEXT' | 'PREVIOUS' | 'CLICK';
  payload: number;
}
interface imageIndex {
  index: number;
}

interface ImageCarouselProps {
  heroImages: string[];
  thumbnailImages: string[];
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

export const ImageCarousel = ({
  heroImages,
  thumbnailImages,
}: ImageCarouselProps) => {
  const [state, dispatch] = useReducer(reducer, { index: 0 });

  return (
    <div>
      <div className="relative">
        <img
          className="xl:rounded-lg"
          src={heroImages[state.index]}
          alt="Hero"
        />
        <button
          className="absolute top-2/4 left-5 image-carousel-button xl:hidden"
          onClick={() =>
            dispatch({ type: 'PREVIOUS', payload: heroImages.length - 1 })
          }
        >
          <PreviousIcon />
        </button>
        <button
          className="absolute top-2/4 right-5 image-carousel-button xl:hidden"
          onClick={() =>
            dispatch({ type: 'NEXT', payload: heroImages.length - 1 })
          }
        >
          <NextIcon />
        </button>
      </div>

      <div className="hidden xl:block">
        <div className="flex gap-6 rounded-lg mt-5">
          {thumbnailImages.map((thumbnail, index) => (
            <button
              className=""
              key={thumbnail}
              data-index={index}
              onClick={() => dispatch({ type: 'CLICK', payload: index })}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index}`}
                className="rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
