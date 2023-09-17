import "./style.css";
import { IoLogoWordpress } from "react-icons/io";

export default async function Blog() {
  const res = await fetch(
    "http://ismailwp.infinityfreeapp.com/wp-json/wp/v2/posts?categories=5&_embed/wp-json/wp/v2/posts?_embed",
    { next: { tags: ["collection"] } }
  );
  const data = await res.json();
  const projectItems = data.map((project) => (
    <article
      key={project.id}
      className="bg-gray-900 text-white p-4 rounded shadow-sm mt-5"
    >
      <header className="flex justify-center items-center mb-5">
        <IoLogoWordpress size={200} />
      </header>
      <h2 className="text-3xl text-left mb-6">{project.title.rendered}</h2>
      <p dangerouslySetInnerHTML={{ __html: project.content.rendered }} />
    </article>
  ));
  return (
    <main className={`mt-4 pb-6`}>
      <section className="container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-start justify-center">
        {projectItems}
      </section>
    </main>
  );
}
