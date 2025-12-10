import { Link } from "react-router";

export default function WrongPage() {
  return (
    <div className="rounded-md bg-white py-20 text-center">
      <h1 className="text-3xl font-bold">
        Sorry, the page you were looking for was not found!
      </h1>
      <div className="mt-10 flex justify-center">
        <Link
          to="/"
          className="w-[80%] rounded-md bg-black p-3 font-bold text-white"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
