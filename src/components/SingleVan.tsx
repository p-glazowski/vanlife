import { useEffect, useState } from "react";
import { type Van } from "../types/types";
import { showImages } from "../API/Api";

interface SingleVanProps {
  van: Van;
}

export default function SingleVan({ van }: SingleVanProps) {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    async function loadImage() {
      const data = await showImages(van.id);
      setImage(data[0]);
    }

    loadImage();
  }, []);
  return (
    <div className="flex flex-row items-center justify-between gap-20 rounded-md bg-white p-4">
      <div className="flex flex-row items-center gap-4">
        <div className="h-15 w-15">
          {!image && (
            <div className="flex h-full w-full items-center justify-center text-xl">
              <span>?</span>
            </div>
          )}
          {image && (
            <img
              src={image}
              alt=""
              className="h-full w-full rounded-md object-cover"
            />
          )}
        </div>
        <div>
          <h4 className="font-bold">{van.name}</h4>
          <p className="text-sm text-gray-500">${van.price}/day</p>
        </div>
      </div>
      <p>Edit</p>
    </div>
  );
}
