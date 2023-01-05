import Link from "next/link";
import Mychar from "./mychar";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center  sm:text-left break-all ">
        <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900 break-all">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(" 안녕하세요.")
                .callFunction(() => {})
                .start();
            }}
          />

          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("프론트엔드 개발자를 꿈꾸는 김진입니다.")
                .callFunction(() => {})
                .start();
            }}
          />
        </h1>

        <p id="hero-content" className="mb-8 leading-relaxed break-all">
          <p>
            새로운 도전을 좋아하며 제게 나타난 문제를 해결할 때 크나큰 성취감을
            느낍니다.
          </p>
          <p>
            배움에는 끝이 없다고 생각하며 제가 만나는 모든 사람, 제가 경험한
            모든 것이 저의 스승이라 생각하며 항상 배움에 감사하고 있습니다.
          </p>
          <p>
            코딩 기술만큼 커뮤니케이션 능력 또한 중요하다고 생각하며 소통하는
            개발자가 되고 싶습니다.
          </p>
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </Link>
          <Link href="/contect">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              연락처 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Mychar />
      </div>
    </>
  );
}
