import { getAllPublished, getSinglePost } from "@/lib/notion";

export default async function Home() {
  // const posts = await getAllPublished();
  const post = await getSinglePost();

  return (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
        To get started, edit the page.tsx file.
      </h1>

      <p className="max-w-md text-lg leading-8">
        Looking for a starting point or more instructions? Head over to{" "}
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="font-medium"
        >
          Templates
        </a>{" "}
        or the{" "}
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="font-medium"
        >
          Learning
        </a>{" "}
        center.
      </p>
    </div>
  );
}
