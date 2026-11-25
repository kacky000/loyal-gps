// Writes the entry: the GPS's own excuse for sending the driver down the wrong road (at most 200 characters).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "I didn't take a wrong turn. That road was on my map in 1987, and unlike some people in this car, I stay loyal. In 200 feet, exit the lake on your left.";
const limit = 200;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
