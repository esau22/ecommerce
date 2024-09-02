import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <Image
          src="/images/logo/logo-icon.svg"
          alt="Logo"
          width={150}
          height={150}
          className="w-10 object-cover"
        />
      </Link>
    </>
  );
};

export default Logo;
