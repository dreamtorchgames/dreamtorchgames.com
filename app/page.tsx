import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10 sm:p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-amber-900 after:dark:via-amber-400 after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      <div className="pb-5">
        <h1 className="text-4xl font-bold mb-5">
          <Link href="/">We are Dreamtorch Games</Link>
        </h1>
        <div className="text-xl sm:text-2xl font-thin mb-5 w-full sm:w-1/2">
          <p className="mb-5">And we have a story to tell</p>
          <p className="mb-5">
            While being immersed in an enchanting realm, we experienced magic, unveiled the myths, and our connection
            with the story was a feeling we could never describe. This perfect blend of technology and art left us
            stunned, and we knew we had to give what we had got. So, Dreamtorch Games, an indie game studio, was born.
          </p>
          <p>
            We create rich narrative experiences with immersive gameplay and artistic storytelling. We want to take you
            on a journey that will challenge your mind, tug your heartstrings, and take you into realms of fantasy.
          </p>
        </div>
        <Link className="text-xl" href="mailto:contact@dreamtorchgames.com">
          contact@dreamtorchgames.com
        </Link>
      </div>
    </main>
  );
}
