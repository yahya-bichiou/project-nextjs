import Image from "next/image";

export default function Logo({ local }: { local: string }) {
  return (
    <div className="flex justify-center items-start pt-5">
      <a href={`/${local}`}>
        <Image
          src="/images/logo.svg"
          width={200}
          height={60}
          alt="UploadThing Logo"
        />
      </a>
    </div>
  );
}
