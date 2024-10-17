import Image from "next/image";
import { getNextUrl } from "./get-next-url";

export default function Home() {
  const nextUrl = getNextUrl("first-preview-deployment");

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
          {nextUrl && (
            <p>
              Next, let&apos;s create a pull request to improve this page. By
              clicking the button below, the Vercel bot will create a pull
              request for you.
            </p>
          )}
        </div>
        {nextUrl && (
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href={nextUrl.next}
                target="_blank"
                rel="noopener noreferrer"
              >
                Create a pull request
              </a>
            </div>
            <a
              className="font-[family-name:var(--font-geist-mono)] text-sm text-gray-500 hover:underline"
              href={nextUrl.skip}
              target="_blank"
              rel="noopener noreferrer"
            >
              Skip and go to dashboard
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
