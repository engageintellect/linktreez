import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-2 text-center bg-zinc-800">
      <a href="https://github.com/engageintellect/linktreez">
        <div className="flex justify-center items-center gap-2">
          <div>Linktreez</div>
          <div>
            <FaGithub />
          </div>
        </div>
      </a>
    </div>
  );
}
