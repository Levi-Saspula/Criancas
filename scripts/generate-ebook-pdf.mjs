import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs/promises";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "public/ebook/pequenos-grandes-aprendizes.html");
const pdfPath = path.join(root, "public/ebook/pequenos-grandes-aprendizes.pdf");
await fs.mkdir(path.dirname(pdfPath), { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 1600 }, deviceScaleFactor: 1 });
  await page.goto("file://" + htmlPath, { waitUntil: "load" });
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: "<div style='font-size:8px;width:100%;margin:0 15mm;color:#758278'></div>",
    footerTemplate: "<div style='font-size:8px;width:100%;margin:0 15mm;color:#758278;text-align:center'><span>Pequenos Grandes Aprendizes</span><span style='float:right'><span class='pageNumber'></span> / <span class='totalPages'></span></span></div>",
    margin: { top: "12mm", right: "0mm", bottom: "16mm", left: "0mm" }
  });
  console.log(`PDF generated: ${pdfPath}`);
} finally {
  await browser.close();
}
