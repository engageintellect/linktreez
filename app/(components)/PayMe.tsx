import { FaBtc, FaDollarSign } from "react-icons/fa";
import { items } from "../../data/data";

export default function PayMe() {
  return (
    <>
      <div className="h-16 w-full flex items text-xl font-semibold gap-2">
        <a
          href={items.cashapp.url}
          target="_blank"
          className="group text-4xl w-full bg-green-700 hover:bg-green-800 rounded-lg flex items-center justify-center transition-colors duration-300"
          rel="noreferrer"
        >
          <div className="md:group-hover:scale-[110%] transition-transform duration-500">
            <FaDollarSign />
          </div>
        </a>
        <a
          href={items.bitcoin.url}
          target="_blank"
          className="group text-4xl w-full bg-yellow-600 hover:bg-yellow-700 rounded-lg flex items-center justify-center transition-colors duration-300"
          rel="noreferrer"
        >
          <div className="md:group-hover:scale-[110%] transition-transform duration-500">
            <FaBtc />
          </div>
        </a>
      </div>
    </>
  );
}
