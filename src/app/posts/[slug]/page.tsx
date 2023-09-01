import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";
import remarkGfm from "remark-gfm";

// Função para obter o conteúdo do post
const getPostContent = (slug: string) => {
  const folder = `posts/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf-8');
  const matterResult = matter(content);
  return matterResult;
};

// Componente personalizado para estilizar o conteúdo do Markdown
const CustomMarkdown = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-4 dark:text-white text-black">{children}</div>;
};

export default function PostPage(props: any) {
  const slug = props.params.slug; // Obtém o slug do URL
  const post = getPostContent(slug); // Obtém o conteúdo do post com base no slug

  return (
    <div className="px-6 py-12 md:px-[95px] lg:px-40 lg:py-20 xl:px-[323px] 2xl:py-20 2xl:px-[410px]">
      <div className="my-12">
        <h1 className="text-2xl dark:text-white pb-5 text-black mt-2 font-bold">
          {post.data.title} {/* Título do post */}
        </h1>
      </div>
      <article className="dark:text-white text-black prose lg:prose-xl">
        <Markdown
          plugins={[remarkGfm]}
          options={{
            forceBlock: true,
            overrides: {
              // Sobrescrever elementos Markdown conforme necessário
              h1: {
                component: "h1",
                props: {
                  className: "text-3xl font-bold mb-4 dark:text-white text-black",
                },
              },
              h2: {
                component: "h2",
                props: {
                  className: "text-2xl font-bold mb-3 dark:text-white text-black mt-8", // Adiciona margem ao topo do subtítulo
                },
              },
              h3: {
                component: "h3",
                props: {
                  className: "text-xl font-bold mb-2 dark:text-white text-black mt-6", // Adiciona margem ao topo do subtítulo
                },
              },
              // ... Adicione mais overrides conforme necessário
            },
            wrapper: CustomMarkdown,
          }}
        >
          {post.content} 
        </Markdown>
      </article>
    </div>
  );
}
