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
    <div>
      <p>{numOfProduct}</p>
      <button onClick={() => decreaseNumOfProduct()}>-</button>
      <button onClick={() => increaseNumOfProduct()}>+</button>
    </div>
  );
};
