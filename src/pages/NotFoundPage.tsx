import { useEffect, useState } from "react";
export default function () {
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowEmoji((prev) => !prev);
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-center px-6">
      <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-100 drop-shadow-lg">404</h1>
      <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
        Oops! Page not found {showEmoji ? "😢" : "🚫"}
      </p>
      <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md">
        The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>

      <a
        href="/"
        className="mt-8 inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-md"
      >
        ⬅️ Back to Home
      </a>

      <div className="mt-12 flex items-center gap-3 text-sm text-gray-400 dark:text-gray-500">
        <span className="h-px w-10 bg-gray-300 dark:bg-gray-600"></span>
        <span>EZYShop Assistant</span>
        <span className="h-px w-10 bg-gray-300 dark:bg-gray-600"></span>
      </div>
    </div>
  );
}
