interface PriceProps {
  price: number;
  discountPercent: number | undefined;
  msrp: number | undefined;
}

export const Price = ({ price, discountPercent, msrp }: PriceProps) => {
  return (
    <div className="flex gap-4 align-middle xl:flex-col xl:gap-2">
      <p className="font-bold text-2xl">
        ${price}.00{' '}
        <span className="text-orange font-bold bg-orange bg-opacity-20 py-1 px-2 rounded-md text-base ml-2">
          {discountPercent}%
        </span>
      </p>

      <span className="ml-auto line-through text-light-gray font-bold opacity-50 xl:ml-0">
        ${msrp}.00
      </span>
    </div>
  );
};
