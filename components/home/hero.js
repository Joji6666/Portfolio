import Link from "next/link";
import Mychar from "./mychar";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.
          <br className="hidden lg:inline-block" />
          프론트엔드 지망생 김진입니다.
        </h1>
        <p id="hero-content" className="mb-8 leading-relaxed">
          내일 된 이런 흙으로 언덕 까닭입니다. 하나에 피어나듯이 하나의 책상을
          차 애기 봅니다. 했던 나는 별빛이 추억과 없이 별 패, 나의 있습니다.
          가을 책상을 별 너무나 잠, 아름다운 봅니다. 써 하나 아직 멀듯이,
          북간도에 동경과 듯합니다. 별들을 풀이 나는 밤이 별 별을 패, 이름을
          헤는 봅니다. 나의 새겨지는 노루, 봅니다. 했던 그리고 그리워 청춘이
          있습니다. 위에 헤는 하나에 소녀들의 별 겨울이 이런 오면 가슴속에
          있습니다.
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
