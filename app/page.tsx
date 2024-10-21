"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import checkSvg from "./check.svg";

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
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-md text-sm font-[family-name:var(--font-geist-mono)]">
        <div className="flex items-center gap-4">
          <Image
            className="invert dark:invert-0"
            src="/vercel.svg"
            alt="Vercel logo"
            width={20}
            height={20}
            priority
          />
        </div>
        <div className="text-center sm:text-left leading-relaxed">
          <p className="mb-4">
            Awesome! By pushing a new commit, we&apos;ve updated our preview
            deployment, and the triangle is now smaller.
          </p>
          <p className="mb-4">
            We can resolve the comment by selecting the comment and clicking{" "}
            <Image src={checkSvg} alt="the plus icon" className="inline-flex" />
            . This will update the check status on the pull request as well.
          </p>
          <p>
            Finally, let&apos;s merge the pull request. This will create a new
            production deployment with these changes.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 font-[family-name:var(--font-geist-sans)]"
              href={`${nextUrlPrefix}${stepName}`}
            >
              Merge the pull request
            </a>
          </div>
          <a
            className="font-[family-name:var(--font-geist-mono)] text-gray-500 hover:underline"
            href={`${nextUrlPrefix}skip`}
          >
            Skip and go to dashboard
          </a>
        </div>
      </main>
    </div>
  );
}
