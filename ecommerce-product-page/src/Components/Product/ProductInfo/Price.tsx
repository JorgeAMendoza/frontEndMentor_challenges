interface PriceProps {
  price: number;
  discountPercent: number | undefined;
  msrp: number | undefined;
}

export const Price = ({ price, discountPercent, msrp }: PriceProps) => {
  return (
    <div className="flex gap-4 align-middle">
      <p className="font-bold text-2xl">${price}.00</p>
      <span className="text-orange font-bold bg-orange bg-opacity-20 py-1 px-2 rounded-md">
        {discountPercent}%
      </span>
      <span className="ml-auto line-through text-light-gray font-bold opacity-50">
        ${msrp}.00
      </span>
    </div>
  );
};
