// download-list.mjs
import fs from "node:fs/promises";
import path from "node:path";

const listFile = process.argv[2] || "urls.txt";
const outDir = "images/gallery";
await fs.mkdir(outDir, { recursive: true });

const urls = (await fs.readFile(listFile, "utf8"))
  .split("\n")
  .map((u) => u.trim())
  .filter((u) => u && !u.startsWith("#"));

console.log(`${urls.length} ta URL topildi`);

let i = 1;
for (const url of urls) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    const name = path.basename(new URL(url).pathname) || "image";
    await fs.writeFile(
      path.join(outDir, `${String(i).padStart(3, "0")}-${name}`),
      Buffer.from(await res.arrayBuffer())
    );
    console.log("✓", url);
  } catch (e) {
    console.log("✗", url, e.message);
  }
  i++;
}