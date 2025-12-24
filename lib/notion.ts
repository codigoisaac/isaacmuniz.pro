import { Client as NotionClient } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionConverter } from "notion-to-md";

const apiKey = process.env.NOTION_API_KEY;
const dataSourceId = process.env.NOTION_DATA_SOURCE_ID as string;

const notionClient = new NotionClient({ auth: apiKey });

export async function getAllPublished() {
  const response = await notionClient.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  const pages = response.results.filter(
    (result): result is PageObjectResponse => result.object === "page"
  );

  const formattedPostsData = pages.map((post) => {
    return formatPostData(post);
  });

  return formattedPostsData;
}

function formatPostData(post: PageObjectResponse) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postProps = post.properties as any;

  const formattedData = {
    id: post.id,
    title: postProps.Title.title[0]?.plain_text ?? "",
    subtitle: postProps.Subtitle?.rich_text[0]?.plain_text ?? "",
    tags: getTagNames(postProps.Tags.multi_select) ?? [],
    date: getDateString(postProps.Date.date?.start) ?? "",
    slug: postProps.Slug.rich_text[0]?.plain_text ?? "",
  };

  return formattedData;

  function getTagNames(tags: { [key: string]: string }[]): string[] {
    const allTagNames = tags.map((tag) => tag.name);

    return allTagNames;
  }

  function getDateString(notionDate?: string): string {
    if (!notionDate) return "";

    const date = new Date(notionDate);

    const formatter = new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    const parts = formatter.formatToParts(date);

    const year = parts.find((p) => p.type === "year")?.value;
    const day = parts.find((p) => p.type === "day")?.value;
    const monthRaw = parts.find((p) => p.type === "month")?.value ?? "";

    const month = monthRaw[0].toUpperCase() + monthRaw.slice(1);

    return `${year}, ${month}, ${day}`;
  }
}

export async function getSinglePost() {
  const pageId = "223f5bb8-06ed-80bd-8b95-fbcfd0f56aa2";

  const notionConverter = new NotionConverter(notionClient);

  const response = await notionConverter.convert(pageId);

  console.log("--- Markdown Output ---");
  console.log(response.content);

  console.log("--- Conversion Result Object ---");
  console.log(response);
}
