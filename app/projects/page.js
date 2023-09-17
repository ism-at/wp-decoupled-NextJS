import "./style.css";

export default async function Project() {
  const res = await fetch(
    "http://ismailwp.infinityfreeapp.com/wp-json/wp/v2/posts?categories=7",
    { next: { tags: ["collection"] } }
  );
  const data = await res.json();
  const projectItems = data.map((project) => (
    <article
      key={project.id}
      className="bg-gray-900 text-white p-4 md:h-[200px] mt-5 rounded-md shadow-md"
    >
      <h2>{project.title.rendered}</h2>
      <p dangerouslySetInnerHTML={{ __html: project.content.rendered }} />
    </article>
  ));
  return (
    <main className={`mt-4 pb-6 `}>
      <section className="container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-end justify-center">
        {projectItems}
      </section>
    </main>
  );
}
