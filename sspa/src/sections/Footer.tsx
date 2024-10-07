export const Footer = () => {
  return <footer className="border border-white/20 rounded-lg shadow m-4 dark:bg-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Solstice™. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
              <a href="/#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
              <a href="/timeline" className="hover:underline me-4 md:me-6">Timeline</a>
          </li>
          <li>
              <a href="/expandability" className="hover:underline me-4 md:me-6">Expandability</a>
          </li>
          <li>
              <a href="/lessons" className="hover:underline">Lessons</a>
          </li>
      </ul>
      </div>
  </footer>
  
};
