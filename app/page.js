import "./page.css";
import Image from "next/image";
import getData from "./utils/fetch";

export default async function Home() {
  const data = await getData(9);
  return (
    <main className={`mt-4 pb-6 ${data.title.rendered.toLowerCase()}`}>
      <h1
        className="text-4xl my-2 text-center font-bold uppercase"
        dangerouslySetInnerHTML={{ __html: data.title.rendered }}
      />
      <section
        className="relative"
        dangerouslySetInnerHTML={{ __html: data.content.rendered }}
      />
      {/* <Image
        src="http://ismailwp.infinityfreeapp.com/wp-content/uploads/2023/09/01.jpg"
        className="image-header"
        width="2000"
        height="3000"
      /> */}
    </main>
  );
}
