import { useVan } from "./RentedVanHost";

export default function RentedVanPricing() {
  const { van } = useVan();

  return (
    <div className="py-5">
      <span className="text-2xl font-bold">${van?.price}</span>
      <span className="text-gray-500">/day</span>
    </div>
  );
}
