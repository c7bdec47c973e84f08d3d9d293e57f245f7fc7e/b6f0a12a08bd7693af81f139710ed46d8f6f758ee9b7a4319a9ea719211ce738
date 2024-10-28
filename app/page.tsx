"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import vercelSvg from "./vercel.svg";

function Circle() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75C12.0041 0.75 15.25 3.99594 15.25 8Z"
        stroke="var(--gray-900)"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const stepName = "first-preview-deployment";
  const [nextUrlPrefix, setNextUrlPrefix] = useState<string>("#");

  useEffect(() => {
    const host = window.location.host;

    if (host !== "localhost") {
      setNextUrlPrefix(
        `https://vercel-site-git-chibicode-life-4346-create-a-demo-for-de-c94e2a.vercel.sh/new/starter-kit/step?origin=${encodeURIComponent(
          window.location.hostname,
        )}&stepName=`,
      );
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-10 row-start-2 max-w-xl w-full font-[family-name:var(--font-geist-sans)]">
        <Image
          className="invert dark:invert-0"
          src={vercelSvg}
          alt="Vercel logo"
          width={50}
          height={50}
          priority
        />
        <div className="text-left font-[family-name:var(--font-geist-sans)] leading-relaxed">
          <h1 className="mb-6 font-semibold">Kudos on the deployment!</h1>
          <ul className="text-sm">
            <li className="flex gap-4 items-start">
              <span className="inline-flex mt-0.5">
                <Circle />
              </span>
              <span className="text-gray900">
                Next, let&apos;s create a pull request and start improving this
                page.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground font-medium text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm h-10 font-[family-name:var(--font-geist-sans)]"
            href={`${nextUrlPrefix}${stepName}`}
          >
            Create a Pull Request
          </a>
          <a
            className="font-[family-name:var(--font-geist-sans)] text-gray-500 hover:underline flex items-center justify-center text-sm h-10 font-medium"
            href={`${nextUrlPrefix}skip`}
          >
            Go to Dashboard
          </a>
        </div>
      </main>
    </div>
  );
}
