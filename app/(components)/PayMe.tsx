import { FaBtc, FaDollarSign } from "react-icons/fa";
import { items } from "../../data/data";

export default function PayMe() {
  return (
    <>
      <div className="h-16 w-full flex items text-xl font-semibold mb-2 gap-2 sm:w-[66vw] md:w-[50vw] xl:w-[33vw]">
        <a
          href={items.cashapp.url}
          className="group text-4xl w-full bg-green-700 hover:bg-green-800 rounded-lg flex items-center justify-center transition-colors duration-300"
        >
          <div className="group-hover:scale-[110%] transition-transform duration-500">
            <FaDollarSign />
          </div>
        </a>
        <a className="group text-4xl w-full bg-amber-700 hover:bg-amber-800 rounded-lg flex items-center justify-center transition-colors duration-300">
          <div className="group-hover:scale-[110%] transition-transform duration-500">
            <FaBtc />
          </div>
        </a>
      </div>
    </>
  );
}
