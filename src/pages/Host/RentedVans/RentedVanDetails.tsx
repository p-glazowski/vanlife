import { useVan } from "./RentedVanHost";

export default function RentedVanDetails() {
  const { van } = useVan();

  return (
    <div className="flex flex-col gap-4 text-sm">
      <h3>
        <span className="font-bold">Name:</span> {van?.name}
      </h3>
      <p className="capitalize">
        <span className="font-bold">Category:</span> {van?.type}
      </p>
      <p>
        <span className="font-bold">Description:</span> {van?.description}
      </p>
      <p>
        <span className="font-bold">Visibility:</span> Public
      </p>
    </div>
  );
}
