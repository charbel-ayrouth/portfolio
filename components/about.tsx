"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 space-y-3"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About Me</SectionHeading>

      <p>
        Hey there! I'm <span className="font-medium">Charbel Ayrouth</span>, a
        recent{" "}
        <span className="font-medium">software engineering graduate</span> who
        jumped into a full-time tech job even before graduation. Although my job
        doesn't involve coding, it's taught me a lot about technology and how to
        solve problems.
      </p>
      <p>
        In my free time,{" "}
        <span className="italic">I love coding and hitting the gym</span>.
        Coding is like a hobby to me—it's creative and fun. I enjoy figuring out
        solutions to problems and making things work.
      </p>
      <p>
        I'm on a journey to become a{" "}
        <span className="underline">full-stack web developer</span>. I've got a
        good start in support engineering, and now I'm excited to dive deeper
        into coding and build cool stuff on the web.
      </p>
    </motion.section>
  );
}
