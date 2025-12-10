import { useVan } from "./RentedVanHost";

export default function RentedVanPhotos() {
  const { van } = useVan();

  return (
    <div className="flex flex-row gap-4">
      <div className="h-20 w-20">
        <img
          src={van?.imageUrl}
          alt=""
          className="h-full w-full rounded-md object-contain"
        />
      </div>
    </div>
  );
}
