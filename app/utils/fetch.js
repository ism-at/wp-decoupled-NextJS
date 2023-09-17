export default async function getData(pageId) {
  const url = `http://ismailwp.infinityfreeapp.com/wp-json/wp/v2/pages/${pageId}`;
  const path = url.toString();
  const res = await fetch(path);

  if (!res.ok) {
    throw new Error("404");
  }
  return res.json();
}
