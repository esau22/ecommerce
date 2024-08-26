"use client";
import { useState } from "react";
import ButtonIcon from "@/components/ui/button-icons";
import { FaGoogle, FaCheck, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import Input from "@/components/ui/input";
import { useRouter } from "next/navigation";

const FormAuth = () => {
  const router = useRouter();
  const [data, setData] = useState({
    remember: false,
  });
  return (
    <>
      <ButtonIcon
        label="Sign in with Google"
        icon={FaGoogle}
        className="px-14"
      />

      <div className="my-6 flex items-center justify-center">
        <span className="block h-px w-full bg-gray-400 dark:bg-dark-3 px-5"></span>
        <div className="block w-52 min-w-fit bg-white text-gray-400 px-3 text-center font-medium dark:bg-gray-dark">
          Or sign in with email
        </div>
        <span className="block h-px w-full bg-gray-400 dark:bg-dark-3 px-5"></span>
      </div>

      <div>
        <form>
          <div className="mb-4">
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              className="border-gray-400"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              className="border-gray-400"
            />
          </div>

          <div className="mb-6 flex items-center justify-between gap-2 py-2">
            <label
              htmlFor="remember"
              className="flex cursor-pointer select-none items-center font-satoshi text-base font-medium text-dark dark:text-white"
            >
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="peer sr-only"
              />
              <span
                className={`mr-2.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-stroke bg-white text-white text-opacity-0 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-opacity-100 dark:border-stroke-dark dark:bg-white/5 ${
                  data.remember ? "bg-primary" : ""
                }`}
              >
                <FaCheck />
              </span>
              Remember me
            </label>

            <Link
              href="/auth/forgot-password"
              className="select-none font-satoshi text-base font-medium text-dark underline duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mb-4">
            <ButtonIcon
              icon={FaSignOutAlt}
              label="Iniciar Sesion"
              className="px-20 bg-primary hover:bg-primary/60"
              onClick={() => router.push("/dashboard")}
            />
          </div>
        </form>
      </div>

      <div className="mt-6 text-center">
        <p>
          Don’t have any account?{" "}
          <Link href="/auth/signup" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default FormAuth;
