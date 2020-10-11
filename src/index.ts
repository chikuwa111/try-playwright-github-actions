import { chromium } from "playwright";

const { EXECUTABLE_PATH } = process.env;

async function main() {
  const browser = await chromium.launch({ executablePath: EXECUTABLE_PATH });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://example.com");
  const title = await page.evaluate(() => document.title);
  console.log(title);
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
