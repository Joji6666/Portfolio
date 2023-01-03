import Head from "next/head";
import LayOut from "../components/layout";
import ProjectItem from "../components/projects/projectItem";
import { DATABASE_ID, TOKKEN } from "../config";

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <>
      <LayOut>
        <Head>
          <title> 프로젝트 </title>
          <meta name="description" content="프로젝트" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>총 프로젝트 : {projects.results.length}</h1>
        {projects.results.map((data) => (
          <>
            <ProjectItem key={data.id} data={data} />
          </>
        ))}
      </LayOut>
    </>
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
