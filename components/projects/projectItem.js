import Image from "next/legacy/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
  const projectTitle = data.properties.이름.title[0].plain_text;
  const projectGithub = data.properties.GitHub.url;
  const projectYoutubeLink = data.properties.YouTube.url;
  const projectDescription = data.properties.설명.rich_text[0].plain_text;
  const projectCoverImage = data.cover.file.url;
  const projectTags = data.properties.태그.multi_select;

  return (
    <div className="project-cards">
      <Image
        className="rounded-t-xl"
        src={projectCoverImage}
        alt="cover-image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="p-3 mb-3 flex flex-col  ">
        <span className="text-2xl font-bold dark:text-yellow-500">
          {projectTitle}
        </span>
        <h3 className="mt-3 text-xl">{projectDescription}</h3>
        <Link href={projectGithub}>
          <div>깃허브</div>
        </Link>
        <Link href={projectYoutubeLink}>
          <div>유튜브 링크</div>
        </Link>
        <div className="flex items-start mt-2">
          {projectTags.map((tags) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={tags.id}
            >
              {tags.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
