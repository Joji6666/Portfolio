import Head from "next/head";
import LayOut from "../components/layout";

export default function Contect() {
  return (
    <>
      <LayOut>
        <Head>
          <title>contect</title>
          <meta name="description" content="contect" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>연락하기</h1>
      </LayOut>
    </>
  );
}
