import { chromium } from "playwright";
import * as fs from "fs";
import * as path from "path";

const sites = [
  { name: "sequence", url: "https://sequencesoftware.io" },
  { name: "comedy", url: "https://tavicomedy.com" },
  { name: "purple", url: "https://purplecomputer.org" },
  { name: "bimah", url: "https://bimah.org" },
  { name: "alwaysblock", url: "https://github.com/tavinathanson/alwaysblock" },
];

async function captureScreenshots() {
  const outputDir = path.join(process.cwd(), "public", "screenshots");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1200, height: 750 },
    deviceScaleFactor: 1,
  });

  for (const site of sites) {
    console.log(`Capturing ${site.name}...`);
    const page = await context.newPage();
    try {
      await page.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
      await page.screenshot({
        path: path.join(outputDir, `${site.name}.png`),
      });
      console.log(`  ✓ ${site.name}`);
    } catch (e) {
      console.error(`  ✗ ${site.name}: ${e}`);
    }
    await page.close();
  }

  await browser.close();
  console.log("Done!");
}

captureScreenshots();
