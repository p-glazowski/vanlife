import { useState } from "react";
import { useVan } from "./RentedVanHost";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../API/Api";
import { useVans } from "../../../providers/VansProvider";
import { useAuthContext } from "../../../providers/AuthProvider";

export default function RentedVanPricing() {
  const { van } = useVan();
  const { loadHostVans } = useVans();
  const { profile } = useAuthContext();
  const [editing, setEditing] = useState(false);
  const [price, setPrice] = useState({ price: van.price });
  const [error, setError] = useState(false);
  console.log(price);

  async function sentData() {
    const ref = doc(db, "vans", van.id);

    if (price.price === 0) {
      setError(true);
      return;
    }

    await updateDoc(ref, price);
    setError(false);
    setEditing(false);
    loadHostVans(profile.id);
  }

  function handleChange(e: any) {
    const { value } = e.currentTarget;

    setPrice({ price: Number(value) });
  }

  if (editing) {
    return (
      <div className="flex flex-col gap-5 py-5">
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="price">
            Price USD:
          </label>
          <div>
            <input
              type="number"
              name="price"
              id="price"
              value={price.price === 0 ? "" : price.price}
              onChange={handleChange}
              className="border-my-orange w-20 rounded-md border bg-white pl-2"
            />
          </div>
        </div>
        {error && <p className="text-sm text-red-500">Price cannot be 0</p>}
        <div className="flex flex-row gap-5">
          <div>
            <button
              className="bg-my-orange cursor-pointer rounded-md p-1 px-3 font-bold text-white"
              onClick={sentData}
            >
              Save
            </button>
          </div>
          <div>
            <button
              className="bg-my-orange cursor-pointer rounded-md p-1 px-3 font-bold text-white"
              onClick={() => {
                setEditing(false);
                setPrice({ price: van.price });
              }}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 py-5">
      <h1 className="text-xl font-bold">Current price:</h1>
      <div>
        <span className="text-2xl font-bold">${van?.price}</span>
        <span className="text-gray-500">/day</span>
      </div>
      <div>
        <button
          className="bg-my-orange cursor-pointer rounded-md p-2 font-bold text-white"
          onClick={() => {
            setEditing(true);
          }}
        >
          Change price
        </button>
      </div>
    </div>
  );
}
