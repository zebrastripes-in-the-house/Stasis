import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="items-center gap-x-2 md:flex">
      <Image
        src="/logo.svg"
        height="40"
        width="40"
        alt="logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="40"
        width="40"
        alt="logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold")}>Stasis</p>
    </div>
  );
};
