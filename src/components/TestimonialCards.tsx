"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function TestimonialCards() {
  const testimonials = [
    {
      id: 1,
      quote: "Life is what happens when you're busy making other plans.",
      name: "John Lennon",
      title: "Musician",
    },
    {
      id: 2,
      quote: "The only way to do great work is to love what you do.",
      name: "Steve Jobs",
      title: "Entrepreneur",
    },
    {
      id: 3,
      quote: "Believe you can and you're halfway there.",
      name: "Theodore Roosevelt",
      title: "President",
    },
    {
      id: 4,
      quote: "Do not go gentle into that good night,",
      name: "Dylan Thomas",
      title: "Poet",
    },
    {
      id: 5,
      quote: "Two roads diverged in a wood, and I—",
      name: "Robert Frost",
      title: "Poet",
    },
    {
      id: 6,
      quote: "I have a dream that one day on the red hills of Georgia,",
      name: "Martin Luther King Jr.",
      title: "Activist",
    },
  ];

  return (
    <div
      className="h-[40rem] w-full
     dark:bg-zinc-950 dark:bg-grid-white/10 relative flex flex-col items-center justify-center overflow-hidden"
    >
      <h1 className="text-3xl font-bold text-center mb-8 z-10">
        Head from our Alumnis
      </h1>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
