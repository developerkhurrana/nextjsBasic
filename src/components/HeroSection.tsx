import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b leading-[1vw] from-neutral-50 to-neutral-400 bg-opacity-50">
          Master code like a pro!
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Welcome to our coding bootcamp, where you can learn the latest
          programming skills and technologies from experienced developers.
          Whether you're a beginner or an experienced coder, we have a range of
          courses and resources to help you achieve your goals. Join our
          community of learners and start your coding journey today!
        </p>
      </div>
      <div className="mt-4">
        <Link href={"/"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-zinc-900 text-black dark:text-zinc-100 border-neutral-200 dark:border-zinc-800"
          >
            Explore courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
