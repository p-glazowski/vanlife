import { useEffect } from "react";
import { useAuthContext } from "../../../providers/AuthProvider";
import { useBookingsContext } from "../../../providers/BookingsProvider";
import SingleHostedVan from "../../../components/Bookings/Hosting/SingleHostedVan";
import { updateBookingStatus } from "../../../API/Api";

export default function Hosting() {
  const { profile } = useAuthContext();
  const { getHostedVansData, hostedVans } = useBookingsContext();

  useEffect(() => {
    if (profile.id) {
      getHostedVansData(profile.id);
    }
  }, []);

  async function handleAccept(bookingId: string) {
    await updateBookingStatus(bookingId, "accepted");
    getHostedVansData(profile.id);
  }

  async function handleCancel(bookingId: string) {
    await updateBookingStatus(bookingId, "canceled");
    getHostedVansData(profile.id);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">HOSTING</h2>
        <p className="text-sm text-slate-500">Vans that you've rented out</p>
        <div className="border border-black opacity-10"></div>
      </div>
      <div className="flex flex-col gap-5">
        {hostedVans.map((van, i) => (
          <SingleHostedVan
            key={i}
            bookedVan={van}
            handleAccept={handleAccept}
            handleCancel={handleCancel}
          />
        ))}
      </div>
    </div>
  );
}
