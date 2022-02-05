interface QuantityProps {
  numOfProduct: number;
  increaseNumOfProduct: () => void;
  decreaseNumOfProduct: () => void;
}

export const Quantity = ({
  numOfProduct,
  increaseNumOfProduct,
  decreaseNumOfProduct,
}: QuantityProps) => {
  return (
    <div className="bg-white-grey rounded-lg py-2 px-4 flex justify-between items-center xl:grow-[1]">
      <p className="order-2 font-bold">{numOfProduct}</p>
      <button
        className="quantity-button order-1"
        onClick={() => decreaseNumOfProduct()}
      >
        -
      </button>
      <button
        className="quantity-button order-3"
        onClick={() => increaseNumOfProduct()}
      >
        +
      </button>
    </div>
  );
};
