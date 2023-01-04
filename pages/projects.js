import Head from "next/head";
import LayOut from "../components/layout";
import ProjectItem from "../components/projects/projectItem";
import { DATABASE_ID, TOKKEN } from "../config";
import { motion } from "framer-motion";

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
      }}
    >
      <LayOut>
        <div className="flex flex-col items-center justify-center min-h-screen m-5 px-10 py-10 mb-10">
          <Head>
            <title> 프로젝트 </title>
            <meta name="description" content="프로젝트" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className="text-2xl font-bold sm:text-6xl">
            총 프로젝트 :
            <span className="pl-5 text-blue-500">
              {projects.results.length}
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 py-5 m-6 gap-8 w-full">
            {projects.results.map((data) => (
              <>
                <ProjectItem key={data.id} data={data} />
              </>
            ))}
          </div>
        </div>
      </LayOut>
    </motion.div>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  const projectsNames = projects.results.map(
    (result) => result.properties.이름.title[0].plain_text
  );

  console.log(projectsNames);
  return {
    props: { projects }, // will be passed to the page component as props
  };
}
