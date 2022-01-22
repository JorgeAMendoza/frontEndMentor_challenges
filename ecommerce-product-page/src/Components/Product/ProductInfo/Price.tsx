interface PriceProps {
  price: number;
  discountPercent: number | undefined;
  msrp: number | undefined;
}

export const Price = ({ price, discountPercent, msrp }: PriceProps) => {
  return (
    <div>
      <p>{price}</p>
      <span>{discountPercent}</span>
      <span>{msrp}</span>
    </div>
  );
};
