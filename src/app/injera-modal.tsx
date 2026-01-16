"use client";

import Image from "next/image";
import { useState } from "react";

export function InjeraTagline() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p className="mt-4 text-muted text-xl">
        I&apos;m also trying to ferment{" "}
        <a
          href="https://en.wikipedia.org/wiki/Injera"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover"
        >
          injera
        </a>{" "}
        but it tastes{" "}
        <button
          onClick={() => setShowModal(true)}
          className="text-accent hover:text-accent-hover cursor-pointer"
        >
          vile
        </button>{" "}
        thus far.
      </p>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-card-bg rounded-lg shadow-xl max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/injera.jpg"
              alt="My injera attempt"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <p className="p-4 text-center text-muted text-sm">
              Attempt 5,672: still vile.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
