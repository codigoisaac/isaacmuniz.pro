import Image from "next/image";
import { Project } from "@/interfaces/portfolio";

interface Props {
  project: Project;
}

export default function ProjectPageBody({ project }: Props) {
  return (
    <>
      <section className="block">
        {/* Project Image Floated Left */}
        <div className="float-left mr-8 mb-6 w-full md:w-1/2 lg:w-1/3">
          <div className="relative overflow-hidden rounded-xl group">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              placeholder="blur"
              priority
              sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Wrapped Description Text */}
        <article className="font-transducer leading-relaxed text-lg text-justify md:text-left">
          <p className="font-bold text-xl mb-4 text-primary">
            {project.excerpt}
          </p>

          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </article>
      </section>
    </>
  );
}
