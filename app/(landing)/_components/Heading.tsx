"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-5xl text-indigo-500">
        Your Ideas, Documents, & Plans. Welcome to{" "}
        <span className="font-bold text-primary">Stasis</span>
      </h1>
      <h2 className="text-base font-medium sm:text-xl">
        Stasis is the connected workspace where <br /> better, faster work
        happens.
      </h2>
      <h2 className="text-base font-medium sm:text-xl text-muted-foreground">
        Developed with love by Harshad, Eshan, Dhruv, Nav, Bhavya
      </h2>
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size="md" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Stasis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignUpButton mode="modal">
          <Button>
            Get Stasis free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </SignUpButton>
      )}
    </div>
  );
};
