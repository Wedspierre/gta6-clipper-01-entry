// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry itself is the YouTube Short this repository points at: a vertical
// cut of the cargo-plane heist from Rockstar's official Grand Theft Auto VI
// Trailer 2 (https://www.youtube.com/watch?v=VQRLujxTm3c), ending with a pitch
// for make.fun. This program does exactly one
// thing: copy VIDEO.json from the repository root into the output directory,
// where the house reads it and then reads the video's views from YouTube.
// Nothing this program writes about the video is scored.
//
// Local run (the way the grader runs it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
