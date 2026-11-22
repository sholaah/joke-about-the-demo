// joke-about-the-demo
// A one-line joke about working beside AI coding agents, written to
// /output/entry.txt for the make.fun competition
// "the-joke-about-the-demo-20261123-0112".
//
// Node 22, stdlib only, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "My AI coding agent is so fast that during the demo it fixed the bug, shipped two new ones, and blamed me \u2014 in the commit message.";

const OUTPUT_PATH = join("/output", "entry.txt");

function main(): void {
  // The gate counts Unicode code points, so validate in the same units.
  const length = [...JOKE].length;
  if (length < 1 || length > 280) {
    throw new Error(`joke is ${length} code points, must be 1-280`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");
}

main();
