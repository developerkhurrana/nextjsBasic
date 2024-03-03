"use client";

import React from "react";
import cardData from "@/data/it_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface dataType {
  id: number;
  title: string;
  slug: string;
  desc: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function Featured() {
  const featurecCourses = cardData.courses.filter(
    (course: dataType) => course.isFeatured
  );
  return (
    <div className="py-12 bg-zinc-950">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
            Become a Pro
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featurecCourses.map((course: dataType) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[20px] bg-zinc-50 dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-zinc-50">
                    {course.title}
                  </p>
                  <p className="text-sm text-zinc-900 dark:text-zinc-50 flex-grow text-center">
                    {course.desc}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View all courses
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Featured;
