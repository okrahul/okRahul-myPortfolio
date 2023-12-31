export const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-auto">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 All copyright reserve. ❤️ |{" "}
            <a href="#" className="hover:underline">
              Rahul Sharma 🚀
            </a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://github.com/okrahul"
                className="hover:underline me-4 md:me-6"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rahulsharma101/"
                className="hover:underline me-4 md:me-6"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ok_rahul_dev"
                className="hover:underline me-4 md:me-6"
              >
                {/* unicode of x */}
                {"\uD835\uDD4F"}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
