import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="invert dark:invert-0"
          src="/vercel.svg"
          alt="Vercel logo"
          width={50}
          height={50}
          priority
        />
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Let&apos;s get started with Vercel.
        </p>
        <ul className="list-disc list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Push to a branch to create a preview deployment.
          </li>
          <li className="mb-2">
            Deploy on every push. Collaborate with comments.
          </li>
          <li className="mb-2">
            Merge to ship to production. Rollback instantly.
          </li>
        </ul>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=vercel-starter-kit&utm_medium=appdir-template-tw&utm_campaign=vercel-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a new Project
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://vercel.com/dashboard?utm_source=vercel-starter-kit&utm_medium=appdir-template-tw&utm_campaign=vercel-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Dashboard
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/docs?utm_source=vercel-starter-kit&utm_medium=appdir-template-tw&utm_campaign=vercel-starter-kit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?utm_source=vercel-starter-kit&utm_medium=appdir-template-tw&utm_campaign=vercel-starter-kit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Templates
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/pricing?utm_source=vercel-starter-kit&utm_medium=appdir-template-tw&utm_campaign=vercel-starter-kit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/plans.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Compare Plans
        </a>
      </footer>
    </div>
  );
}
