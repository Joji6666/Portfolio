import Head from "next/head";
import Link from "next/link";
import LayOut from "../components/layout";
import { motion } from "framer-motion";

export default function Contect() {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
      }}
    >
      <LayOut>
        <div className=" min-h-screen m-5 px-10 py-10 mb-10">
          <Head>
            <title> Contect </title>
            <meta name="description" content="Contect" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="md:ml-auto md:mr-auto flex flex-col items-center  justify-center">
            <div className="flex mb-10">
              <span className="sm:text-3xl font-blod text-xl">
                카카오톡 오픈채팅 :
              </span>
              <Link href="https://open.kakao.com/o/s3Yg6VWe">
                <div className="ml-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="w-11 h-11 pr-2 pb-3"
                  >
                    <path d="M12 1c-6.627 0-12 4.364-12 9.749 0 3.131 1.817 5.917 4.64 7.7.868 2.167-1.083 4.008-3.142 4.503 2.271.195 6.311-.121 9.374-2.498 7.095.538 13.128-3.997 13.128-9.705 0-5.385-5.373-9.749-12-9.749z" />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="flex mb-10">
              <span className="sm:text-3xl font-blod text-xl">
                인스타그램 :
              </span>
              <Link href="https://www.instagram.com/warigari_warigari/">
                <div className="ml-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-12 h-12 pr-2 pb-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="flex mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-12 h-12 pr-2 pb-3"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <span className="sm:text-3xl font-blod text-xl">이메일 :</span>
              <span className="sm:text-3xl pl-3 text-blue-500  pr-5 text-xl ">
                rlawls11000@naver.com
              </span>
            </div>

            <div className="flex mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-12 h-12 pr-2 pb-3"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="sm:text-3xl font-blod text-xl">연락처 :</span>
              <span className="sm:text-3xl pl-3 text-blue-500 pr-5  text-xl">
                010-6622-9124
              </span>
            </div>
          </div>
        </div>
      </LayOut>
    </motion.div>
  );
}
