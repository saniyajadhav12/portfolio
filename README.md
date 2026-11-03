# Saniya Jadhav — Portfolio

My personal portfolio site, built with Next.js (App Router), TypeScript and Tailwind CSS. It's a single static page with no backend or database.

## Run it locally

```bash
npm install     # first time only
npm run dev     # then open http://localhost:3000
```

Other commands:

- `npm run lint`: check the code for problems
- `npm run build`: production build (the same one Vercel runs)

## Editing content

**All text on the site lives in one file: [`src/data/content.ts`](src/data/content.ts).** You don't need to touch any components.

| To change… | Edit this in `content.ts` |
| --- | --- |
| Browser tab title, Google description | `site.title`, `site.description` |
| Hero line, greeting, tagline, badge | `hero` |
| Hero photo description (alt text) | `site.photoAlt` |
| About paragraphs, closing sentence, and the three "through-line" cards | `about.paragraphs`, `about.closing`, `about.highlights` |
| "Now" card (see below) | `now` |
| Jobs (one-line `summary` + bullets behind "Show details") | `experience` (set `show: false` to hide an entry without deleting it) |
| Projects (order on the page = order in the list) | `projects` |
| Skills | `skills` |
| Education (set `gpa: null` to hide the GPA) | `education` |
| Availability line, email, LinkedIn, GitHub, location | `contact` |
| Footer | `footer` |

Tips:

- Wrap text in `**double asterisks**` to make it **bold** in experience bullets and project highlights.
- A project with no `liveUrl` shows no Live Demo button.
- `teamWork` (team projects only) appears as "My team-phase work", separate from the solo highlights.

### Filling in the "Now" card

The card at the end of the About section is hidden while it's empty. To show it, fill in `now` in `content.ts`:

```ts
export const now = {
  building: "What you're building right now",
  learning: "What you're learning or reading",
  updated: "Dec 2026", // shown as "Updated Dec 2026"
};
```

Either `building` or `learning` on its own is enough; empty rows are skipped. Clear both to hide the card again.

### Editing the Plotline case study

All text for `/projects/plotline` lives in [`src/data/case-studies/plotline.ts`](src/data/case-studies/plotline.ts). The stack and links come from the Plotline entry in `content.ts`. Set `next: []` to hide the "What I'd do next" section.

### Updating the resume

Replace `public/resume.pdf` with the new file, keeping the same name.

### Changing the hero photo

The hero shows `public/photo-portrait.jpg` as a rounded card. To swap it:

1. Crop the new photo to a **4:5 portrait** (e.g. 640×800 px). Keep your face in the upper third.
2. **Remove the metadata first**. Phone photos carry GPS location, device and date. For example, on a Mac: open it in Preview → Tools → Show Inspector → GPS → Remove Location Info, or re-export with a tool that strips EXIF.
3. Save it as `public/photo-portrait.jpg`, replacing the old file.

The component is `src/components/HeroPhoto.tsx` if you ever want a different size or shape.

## Deploying to Vercel

The project deploys to Vercel with zero configuration:

1. Push the repo to GitHub.
2. On [vercel.com](https://vercel.com), sign in with GitHub, then go to **Add New → Project**, import the `portfolio` repo, and click **Deploy**.
3. After that, every push to `main` redeploys the site automatically.

## Project structure

```text
src/
  data/content.ts        ← all site text (edit this)
  app/layout.tsx         fonts, SEO metadata, theme setup
  app/page.tsx           page section order
  app/globals.css        colors (light + dark) and animations
  app/icon.svg           favicon
  app/opengraph-image.tsx  link-preview image
  components/            header, theme toggle, and one file per section
public/resume.pdf        resume linked from the site
```
