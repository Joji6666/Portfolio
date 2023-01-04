import Link from "next/link";
import Darkmode from "./darkmode";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <div
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              id="head-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="blue"
                viewBox="0 0 24 24"
              >
                <path d="M24 10.935v2.131l-10 4.934v-2.23l7.64-3.77-7.64-3.779v-2.221l10 4.935zm-24 0v2.131l10 4.934v-2.23l-7.64-3.77 7.64-3.779v-2.221l-10 4.935z" />
              </svg>

              <span className="ml-3 text-xl">김진 포트폴리오</span>
            </div>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <div className="mr-5 hover:text-gray-900" id="link">
                Home
              </div>
            </Link>
            <Link href="/aboutMe">
              <div className="mr-5 hover:text-gray-900" id="link">
                About Me
              </div>
            </Link>

            <Link href="/projects">
              <div className="mr-5 hover:text-gray-900" id="link">
                Projects
              </div>
            </Link>

            <Link href="/contect">
              <div className="mr-5 hover:text-gray-900" id="link">
                Contect
              </div>
            </Link>
          </nav>
          <Darkmode />
        </div>
      </header>
    </>
  );
}
