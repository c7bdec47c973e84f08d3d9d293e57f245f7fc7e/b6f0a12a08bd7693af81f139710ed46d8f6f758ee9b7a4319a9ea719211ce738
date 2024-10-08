"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next");
  const [linkHref, setLinkHref] = useState<string | null>(null);
  const linkText = "Go back to the Vercel dashboard to continue.";

  useEffect(() => {
    if (next) {
      try {
        const nextUrl = new URL(next);
        if (
          nextUrl.hostname === "vercel.com" ||
          nextUrl.hostname.endsWith(".vercel.sh")
        ) {
          setLinkHref(nextUrl.toString());
        }
      } catch (e) {}
    }
  }, [next]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-md">
        <Image
          className="invert dark:invert-0"
          src="/vercel.svg"
          alt="Vercel logo"
          width={50}
          height={50}
          priority
        />
        <div className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] leading-relaxed">
          <p className="mb-4">
            Congratulations! You&apos;ve successfully deployed the Vercel
            Starter Kit.
          </p>
          <p>
            Next, let&apos;s create a pull request to improve this page.{" "}
            {linkHref ? (
              <a href={linkHref} className="underline">
                {linkText}
              </a>
            ) : (
              linkText
            )}
          </p>
        </div>
      </main>
    </div>
  );
}
