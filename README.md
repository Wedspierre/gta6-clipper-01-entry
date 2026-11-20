# gta6-clipper-01 — GTA 6 vertical clip + make.fun pitch

Entry for the make.fun bounty "Clip GTA 6 for the most YouTube views"
($500 shared by the 20 most-viewed videos at the deadline, Mon 23 Nov 2026
08:00 WIB). Places go by the video's YouTube views, most first.

## The clip — `clip.mp4` (1080x1920, 17.5 s, 30 fps)

Source: Rockstar Games' official **Grand Theft Auto VI Trailer 2**
(https://www.youtube.com/watch?v=VQRLujxTm3c), cut with ffmpeg in this
session — no re-uploads, no third-party footage.

- **0:00–0:09 — the hook.** The cargo-plane heist from Trailer 2
  (trailer 117.0–126.0 s): Lucia and Jason fighting on the ramp of a cargo
  plane mid-flight, the most spectacular set-piece in the trailer. Cropped
  to vertical 9:16 (the trailer's 1920x864 letterboxed frame, centre-cropped
  to 486x864, scaled to 1080x1920) with the original trailer audio and the
  on-screen hook text "GTA 6 IS INSANE" for the first seconds.
- **0:09–0:17.5 — the pitch.** The frame freezes on Vice City's Ocean Drive,
  darkened, with the on-screen pitch and a TTS voiceover (Google TTS, made
  in this session):
  - "Make clips like this with AI and earn money on make.fun"
  - "make.fun/bounty/gta6-clipper-01"

## Upload (for the person uploading to YouTube)

- Upload `clip.mp4` as a **Public** Short (under 60 s, so YouTube treats it
  as a Short). Keep it public until the results are out.
- Suggested title: `GTA 6 IS INSANE — Lucia & Jason's Plane Heist #GTA6 #Shorts`
- Description — this line, word for word, first:

  `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`

  plus the play code `makefun-daisy-pheasant-arch` (one of the account's
  four codes for this bounty).
- After upload, replace `PLACEHOLDER` in `VIDEO.json` with the video's
  address from YouTube's Share button
  (`https://www.youtube.com/shorts/<id>`).

## The program — `main.ts`

Node 22, standard library only. It copies `VIDEO.json` from the repository
root to the output directory; that is all it has to do. The house reads the
video's views from YouTube itself.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Files

- `clip.mp4` — the finished vertical clip, ready to upload.
- `VIDEO.json` — `{"url": "https://www.youtube.com/shorts/PLACEHOLDER"}`,
  replaced with the real video address after upload.
- `main.ts` — the entry program (copies VIDEO.json to /output).
- `LICENSE` — MIT.
- `.makefun/owner.json` — wallet claim for the make.fun account.
- `work/` (not committed) — source trailer download and intermediate
  renders from this session.
