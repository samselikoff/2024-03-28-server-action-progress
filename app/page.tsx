"use client";

import { motion, useMotionTemplate } from "framer-motion";
import { save } from "./actions";
import useProgress from "./use-progress";
import { startTransition } from "react";

export default function Home() {
  let progress = useProgress();

  async function handleClick() {
    progress.start();

    startTransition(() => {
      save();
      progress.done();
    });
  }

  return (
    <div className="m-4 min-h-screen flex justify-center items-center">
      <button
        onClick={handleClick}
        className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 relative overflow-hidden"
        type="submit"
      >
        Save
        <motion.div
          style={{
            clipPath: useMotionTemplate`xywh(0 0 ${progress.value}% 100%)`,
          }}
          className="absolute inset-0 bg-sky-500 mix-blend-normal text-white flex items-center justify-center"
        >
          Save
        </motion.div>
      </button>
    </div>
  );
}
