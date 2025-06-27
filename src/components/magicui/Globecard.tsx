"use client";

export default function GlobeCard() {
  return (
    <div className="relative flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl border bg-white p-8 shadow-md dark:bg-black">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe
      </span>
      <div className="relative z-0 mt-8 aspect-square w-full">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="200" fill="url(#grad)" />
          {Array.from({ length: 2000 }).map((_, i) => {
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.sqrt(Math.random()) * 190;
            const x = 200 + radius * Math.cos(angle);
            const y = 200 + radius * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="1" fill="#888888" />;
          })}
          <circle cx="270" cy="150" r="4" fill="#ff4500" />
          <circle cx="240" cy="210" r="4" fill="#ff4500" />
          <circle cx="310" cy="180" r="4" fill="#ff4500" />
          <circle cx="220" cy="250" r="3" fill="#ff4500" />
        </svg>
      </div>
    </div>
  );
}
