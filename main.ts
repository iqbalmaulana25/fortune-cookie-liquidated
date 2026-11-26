// Fortune Cookie for the Liquidated Trader
// Writes one fortune cookie line for a crypto trader who just got liquidated
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..160 characters, not only whitespace; at most 20 words.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Your portfolio will recover, the cookie says, before adding: this cookie is down 97% too.";

// Gate guard: single line, file content (entry + newline) within 1..160 chars,
// and at most 20 words.
const wordCount = entry.trim().split(/\s+/).length;
if (entry.includes("\n") || entry.trim().length === 0 || entry.length + 1 > 160 || wordCount > 20) {
  throw new Error(`entry breaks the gate: ${entry.length} characters, ${wordCount} words`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
console.log(entry);
