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
        stroke="var(--secondary)"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const stepName = "view-pull-request";
  const [nextUrlPrefix, setNextUrlPrefix] = useState("#");

  useEffect(() => {
    const host = window.location.host;

    if (host !== "localhost") {
      setNextUrlPrefix(
        `https://vercel-site-git-chibicode-life-4346-create-a-demo-for-de-c94e2a.vercel.sh/new/vercel-tutor/step?origin=${encodeURIComponent(
          window.location.hostname,
        )}&stepName=`,
      );
    }
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-10 row-start-2 max-w-2xl w-full font-[family-name:var(--font-geist-sans)]">
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
          <ul>
            <li className="flex gap-4 items-center">
              <span className="inline-flex">
                <Circle />
              </span>
              <span className="text-secondary">
                We&apos;ve also created a pull request to make changes to this
                page. Click below to view:
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground font-medium text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm h-10 font-[family-name:var(--font-geist-sans)]"
            href={`${nextUrlPrefix}${stepName}`}
          >
            View Pull Request
          </a>
          <a
            className="font-[family-name:var(--font-geist-sans)] text-secondary hover:underline flex items-center justify-center text-sm h-10 font-medium"
            href={`${nextUrlPrefix}skip`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Dashboard
          </a>
        </div>
      </main>
    </div>
  );
}
