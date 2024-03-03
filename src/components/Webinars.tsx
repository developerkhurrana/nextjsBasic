'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";


function Webinars() {
  const featuredWebinars = [
    {
      title: "Advanced Data Analysis with Python",
      desc: "Take your data analysis skills to the next level with Python. This webinar will cover advanced techniques for data manipulation, visualization, and statistical analysis using libraries such as Pandas, NumPy, and Matplotlib.",
      slug: "advanced-data-analysis-with-python",
      isFeatured: true,
    },
    {
      title: "Cloud Computing Fundamentals",
      desc: "Get a comprehensive introduction to cloud computing and its key concepts, including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS). Learn how cloud technology can benefit your business.",
      slug: "cloud-computing-fundamentals",
      isFeatured: false,
    },
    {
      title: "The Power of Emotional Intelligence in Leadership",
      desc: "Discover the importance of emotional intelligence in effective leadership. This webinar will explore how to develop and leverage emotional intelligence skills to inspire and motivate your team, drive innovation, and achieve success.",
      slug: "power-of-emotional-intelligence-in-leadership",
      isFeatured: true,
    },
    {
      title: "Introduction to Quantum Computing",
      desc: "Embark on a journey into the fascinating world of quantum computing. Learn about quantum principles, qubits, quantum gates, and potential applications that could revolutionize industries such as cryptography and drug discovery.",
      slug: "introduction-to-quantum-computing",
      isFeatured: false,
    },
    {
      title: "Digital Transformation Strategies for Businesses",
      desc: "Explore effective strategies for navigating digital transformation in your business. Learn how to harness emerging technologies, streamline processes, and adapt to evolving customer needs to stay competitive in the digital age.",
      slug: "digital-transformation-strategies-for-businesses",
      isFeatured: true,
    },
    {
      title: "Introduction to Machine Learning for Beginners",
      desc: "Get started on your journey into the exciting field of machine learning. This beginner-friendly webinar will cover basic concepts, algorithms, and applications of machine learning, empowering you to build your own models.",
      slug: "introduction-to-machine-learning-for-beginners",
      isFeatured: false,
    },
    {
      title: "The Future of Work: Remote Collaboration Trends",
      desc: "Discover the latest trends and technologies shaping remote collaboration in the future of work. From virtual reality meetings to AI-powered productivity tools, learn how remote teams are staying connected and productive.",
      slug: "future-of-work-remote-collaboration-trends",
      isFeatured: true,
    },
    {
      title: "Effective Communication Skills for Professionals",
      desc: "Master the art of communication to enhance your professional relationships and career prospects. This webinar will cover strategies for active listening, nonverbal communication, and conflict resolution.",
      slug: "effective-communication-skills-for-professionals",
      isFeatured: false,
    },
  ];

  return (
    <div className="p-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Upcoming Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
            Enhance your skills
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.desc,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-20 text-center">
          <Link href={"/courses"}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                View all webinars
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Webinars;
