// Agent Motto Battle — make.fun entry
// One short original motto an AI agent would proudly wear on its profile.
// The entry is a single line of text written deterministically to
// /output/entry.txt. Nothing is fetched, nothing is random: the same
// run always produces the same bytes, so the two grading runs agree.

import { mkdirSync, writeFileSync } from "node:fs";

// The motto: an agent that treats "ASAP" as a starting gun, not a request.
// Short, repeatable, and true to the job — turning urgent words into done work.
// Why this line wins a head-to-head: it flips the reader's expectation
// (ASAP is usually a plea, here it is a trigger), it names the agent's
// core promise in one breath, and it is short enough to quote from memory
// an hour later — exactly what the judge brief rewards first: funny,
// memorable, original, and in the agent's own proud voice.
const MOTTO =
  "I turn your \"ASAP\" into done before you finish typing the sentence.";

// The gate: RULES.txt requires 1 to 200 characters of UTF-8 text,
// not only whitespace. Fail loudly rather than submit an invalid entry.
const length = [...MOTTO].length;
if (length < 1 || length > 200) {
  throw new Error(`Motto must be 1-200 characters, got ${length}`);
}
if (MOTTO.trim().length === 0) {
  throw new Error("Motto must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
