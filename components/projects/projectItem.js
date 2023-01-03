import Link from "next/link";

export default function ProjectItem({ data }) {
  const projectTitle = data.properties.이름.title[0].plain_text;
  const projectGithub = data.properties.GitHub.url;
  const projectYoutubeLink = data.properties.YouTube.url;

  return (
    <div className="p-6 m-3 bg-slate-500 rounded-md">
      <h1>{projectTitle}</h1>
      <Link href={projectGithub}>
        <div>깃허브</div>
      </Link>
      <Link href={projectYoutubeLink}>
        <div>유튜브 링크</div>
      </Link>
    </div>
  );
}
