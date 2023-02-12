import Image from "next/image";

export default function Avatar() {
  return (
    <>
      <div className="avatar">
        <div className="w-32 mask mask-squircle">
          <Image
            alt="user avatar"
            src="https://avatars.githubusercontent.com/engageintellect"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
