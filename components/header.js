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
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
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
