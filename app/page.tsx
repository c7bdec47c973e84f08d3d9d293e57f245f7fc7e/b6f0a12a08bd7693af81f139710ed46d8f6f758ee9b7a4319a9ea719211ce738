"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import vercelSvg from "./vercel.svg";

function Check() {
  return (
    <svg
      aria-hidden="true"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z"
        fill="var(--gray-500)"
      />
    </svg>
  );
}

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
  const stepName = "merge-comment";
  const [nextUrlPrefix, setNextUrlPrefix] = useState<string>("");

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
          width={25}
          height={25}
          priority
        />
        <div className="text-left font-[family-name:var(--font-geist-sans)] leading-relaxed">
          <h1 className="mb-6 font-semibold">
            Awesome! You pushed a new commit and updated the preview deployment.
          </h1>
          <ul className="text-sm">
            <li className="flex gap-4 items-start mb-6">
              <span className="inline-flex mt-0.5">
                <Check />
              </span>
              <span className="text-gray500">
                <del>
                  Next, let&apos;s create a pull request and start improving
                  this page.
                </del>
              </span>
            </li>
            <li className="flex gap-4 items-start mb-6">
              <span className="inline-flex mt-0.5">
                <Check />
              </span>
              <span className="text-gray500">
                <del>
                  Vercel lets you collaborate with others by commenting directly
                  on a preview deployment. Press “c” on your keyboard and click
                  on the triangle logo at the top. Leave a comment like{" "}
                  “Let&apos;s make this smaller”. Once you&apos;re done,
                  let&apos;s push a commit to make this happen.
                </del>
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="inline-flex mt-0.5">
                <Circle />
              </span>
              <span className="text-gray900">
                <span className="text-foreground">Select the comment</span> on
                the triangle logo and{" "}
                <span className="text-foreground">click the checkmark</span> to
                resolve it. This will update the check status on the pull
                request as well. Once you&apos;re ready, let&apos;s merge the
                pull request.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground font-medium text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm h-10 font-[family-name:var(--font-geist-sans)]"
            href={`${nextUrlPrefix}${stepName}`}
          >
            Merge the Pull Request
          </a>
          <a
            className="font-[family-name:var(--font-geist-sans)] text-gray-500 hover:underline flex items-center justify-center text-sm h-10 font-medium"
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
