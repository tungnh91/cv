# Changelog

## [Unreleased] — simplify-hero

### Removed
- **Professional experience section** (`ExperienceSection`) removed from the front page. All company rows, role descriptions, tags, and animated visuals are no longer rendered on the home route.
- **Profile link cards** (`ProfileLinks`) removed — LinkedIn and Résumé buttons no longer appear on the front page.
- **Divider** between the hero and profile links removed along with the surrounding layout wrapper.

### Changed
- **Hero layout** — switched from a side-by-side (avatar + text) row to a centered column: avatar on top, name and tagline below. Removed the fixed `min-h` constraint so the card sizes to its content.
- **Hero card padding** tightened to `py-12 / py-14` (was `py-20` with a forced `70vh` min-height).
- **Avatar size** slightly reduced (`108px / 140px` vs `104px / 176px`) to suit the more compact, centered layout.
- **Tagline text** bumped to `text-5xl / text-6xl` (was `text-4xl / text-6xl`) and subtitle color softened (`text-gray-500`) for better visual hierarchy.
- **`pages/index.tsx`** simplified — only renders `<Hero />` inside a single flex column; all other section imports removed.

### Added
- **Contact email** — `tungnh91 [at] gmail.com` displayed below the tagline. The `[at]` obfuscation prevents automated email scraping. Clicking the address copies the real address (`tungnh91@gmail.com`) to the clipboard and shows a brief `✓ copied!` confirmation.
- **`ClickBurst` component** (`components/home/ClickBurst.tsx`) — a transparent canvas overlay attached to the hero card. Each click spawns 32 spark particles that fly outward with slight gravity and fade over ~1 second. Particle colors adapt to the active theme (brand gold / green / white in dark mode; amber / forest / indigo in light mode).
- **Avatar wiggle** — clicking the avatar triggers a spring-physics CSS wiggle animation (`avatar-wiggle` keyframe added to `global.css`). State resets via `onAnimationEnd` so it can be re-triggered immediately.
- **`hooks/useKonamiCode.ts`** — unused file left in the repository (created during development, not wired up).

### Files changed
| File | Change |
|---|---|
| `pages/index.tsx` | Removed `ExperienceSection`, `ProfileLinks`, divider |
| `components/home/Hero.tsx` | Full rewrite — centered layout, email, avatar wiggle, ClickBurst |
| `components/home/ClickBurst.tsx` | New — click-to-burst particle canvas |
| `hooks/useKonamiCode.ts` | New — unused, can be deleted |
| `styles/global.css` | Added `avatar-wiggle` keyframe |
