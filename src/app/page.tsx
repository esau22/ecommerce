"use client";
import ButtonIcon from "@/components/ui/button-icons";
import { GrRun } from "react-icons/gr";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ButtonIcon
        icon={GrRun}
        label="Bienvenido"
        className="p-10"
        onClick={() => router.push("/login")}
      />
    </div>
  );
};

export default Home;
