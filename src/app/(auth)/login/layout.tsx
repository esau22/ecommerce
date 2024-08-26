import Image from "next/image";
import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-8 bg-white">
      <section className="hidden lg:flex flex-col items-center justify-start gap-y-5 rounded-2xl bg-gray-100 dark:bg-gray-900 p-8">
        <div className="relative w-60 h-20 mb-6">
          <Image
            src="/images/logo/logo.svg"
            alt="Logo"
            fill
            className="hidden dark:block object-contain"
          />
          <Image
            src="/images/logo/logo-dark.svg"
            alt="Logo"
            fill
            className="dark:hidden object-contain"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl mb-4">
          Welcome Back!
        </h1>
        <p className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-3">
          Sign in to your account
        </p>
        <p className="w-full max-w-sm text-center text-gray-500 dark:text-gray-400 font-medium">
          Please sign in to your account by completing the necessary fields
          below
        </p>
      </section>
      {children}
    </main>
  );
};

export default AuthLayout;
