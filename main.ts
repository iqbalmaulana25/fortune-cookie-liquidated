// Fortune Cookie for the Liquidated Trader
// One fortune cookie line for a crypto trader who just got liquidated,
// written to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides /output outside the grader).
// Gate: UTF-8 text of 1..160 characters, not only whitespace; at most 20 words.
// The fortune voice promises wealth first, then the cookie confesses it is
// broke too — the punchline breaks the oracle's formal phrasing.
import { mkdirSync, writeFileSync } from "node:fs";

// Setup: the classic fortune-cookie promise.
const setup = "Great wealth awaits you, the cookie promises —";
// Punchline: the cookie's own confession.
const punch = "right after admitting it is down 97% too.";
const entry = `${setup} ${punch}`;

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
