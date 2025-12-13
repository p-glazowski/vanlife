import { useEffect, useState } from "react";
import { type Van } from "../types/types";
import { showImages } from "../API/Api";

/* type SingleVanProps = Omit<Van, "id" | "description" | "hostId">; */
interface SingleVanProps {
  van: Van;
}
export default function SingleVanItem({ van }: SingleVanProps) {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    async function loadImage() {
      try {
        const img = await showImages(van.id);
        setImage(img[0]);
      } catch (err) {
        console.error(err);
      }
    }

    loadImage();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="h-100">
        <img
          src={image}
          alt="Van image"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="pt-3">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">{van.name}</h2>
            <div>
              <button className="bg-my-orange rounded-md px-4 py-1 text-xs text-white capitalize">
                {van.type}
              </button>
            </div>
          </div>
          <div className="">
            <p className="font-semibold">${van.price}</p>
            <p className="text-sm">/day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
