import "./style.css";
import getData from "../utils/fetch";

export default async function Project() {
  const data = await getData(15);
  return (
    <main
      className={`mt-4 pb-6 overflow-hidden ${data.title.rendered
        .toLowerCase()
        .replace(" ", "_")
        .replace("!", "")}`}
    >
      <h1
        className="text-4xl my-2 text-center font-bold uppercase"
        dangerouslySetInnerHTML={{ __html: data.title.rendered }}
      />
      <section
        className="container mx-auto overflow-hidden md:flex justify-center flex-col items-center"
        dangerouslySetInnerHTML={{ __html: data.content.rendered }}
      />
    </main>
  );
}
