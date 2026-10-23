# Together2050 pre-indexing audit

**Verdict: READY AFTER EXTERNAL VERIFICATION**

Date: 23 October 2026. Section 2 is the production baseline from before these fixes, when Netlify was serving commit `4d591ea`. The fixes are now deployed as `40d8fd2`. Section 13 is the post-deploy check. Nothing was submitted to Google Search Console.

Search Console ownership, the event-time decision, and the Google Form guest-access checks are still open. Submitting a sitemap or requesting indexing does not guarantee indexing, ranking, or immediate Core Web Vitals data.

## 1. Route inventory

| URL | HTTP | Indexable | Canonical | Performance test |
| --- | --- | --- | --- | --- |
| `https://together2050.com/` | 200 | Yes | `https://together2050.com/` | Yes |
| `https://together2050.com/about` | 200 | Yes | `https://together2050.com/about` | Yes |
| `https://together2050.com/vision` | 200 | Yes | `https://together2050.com/vision` | Yes |
| `https://together2050.com/what-we-do` | 200 | Yes | `https://together2050.com/what-we-do` | Yes |
| `https://together2050.com/team` | 200 | Yes | `https://together2050.com/team` | Yes |
| `https://together2050.com/team/advisory-council` | 200 | Yes | `https://together2050.com/team/advisory-council` | Yes |
| `https://together2050.com/collaborate` | 200 | Yes | `https://together2050.com/collaborate` | Yes |
| `https://together2050.com/get-involved` | 200 | Yes | `https://together2050.com/get-involved` | Yes |
| `https://together2050.com/events/the-cost-of-perfection` | 200 | Yes | `https://together2050.com/events/the-cost-of-perfection` | Yes |
| `https://together2050.com/get-involved#contact` | Same document as Get Involved | Not a separate URL | Get Involved canonical | Not scored separately |
| `https://together2050.com/contact` | 301 to `/get-involved#contact` | No | — | No |
| `https://together2050.com/team/core-team` | 301 to `/team` | No | — | No |
| `https://together2050.com/no-such-page-audit` | 404 | No (`noindex, nofollow`, no canonical) | — | No |
| `http://together2050.com/` | 301 to `https://together2050.com/` | No | — | No |
| `https://www.together2050.com/` | 301 to `https://together2050.com/` | No | — | No |
| `https://together2050.com/about/` | 301 to `/about` | No | — | No |

No other public routes exist in the router. `/contact` is absent from the sitemap.

**Duplicate URLs at the baseline:** `https://together2050.com/about.html`, `/get-involved.html`, `/events/the-cost-of-perfection.html`, `/index.html`, and `/about/index.html` returned HTTP 200. That was fixed in the deploy recorded in section 13.

## 2. PageSpeed and Lighthouse

**Tool:** Lighthouse 12.8.2, headless Chrome, against production. Three runs per page and device. Tables use the median. The raw runs are listed so a single fast or slow run is not treated as the result.

**PageSpeed Insights API:** NOT TESTED. The API returned HTTP 429, quota exceeded, on 23 October 2026. No CrUX field data was returned.

**Google Search Console Core Web Vitals:** NOT TESTED. This audit had no Search Console access. A high Lighthouse score is not field-data proof.

**After the code changes below:** NOT TESTED on production. Those changes are not deployed. They do not change the rendered pages that were measured.

### Mobile median

| Page | Perf | A11y | Best practices | SEO | FCP | LCP | TBT | CLS | Speed Index | Runs (perf) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Home | 93 | 100 | 100 | 100 | 2.58s | 2.58s | 0ms | 0.000 | 3.20s | 93, 80, 93 |
| About | 92 | 100 | 100 | 100 | 2.56s | 2.56s | 0ms | 0.000 | 3.43s | 92, 93, 91 |
| Vision | 95 | 100 | 100 | 100 | 2.39s | 2.39s | 0ms | 0.000 | 2.87s | 94, 95, 95 |
| Our Work | 82 | 100 | 100 | 100 | 2.70s | 4.20s | 0ms | 0.000 | 3.77s | 83, 82, 62 |
| Team | 93 | 100 | 100 | 100 | 2.59s | 2.59s | 0ms | 0.000 | 3.25s | 93, 90, 93 |
| Advisory Council | 81 | 100 | 100 | 100 | 3.24s | 3.24s | 0ms | 0.011 | 5.56s | 81, 78, 93 |
| Collaborate | 94 | 100 | 100 | 100 | 2.47s | 2.47s | 0ms | 0.005 | 2.91s | 94, 94, 93 |
| Get Involved | 91 | 96 | 100 | 100 | 2.45s | 2.45s | 0ms | 0.000 | 4.85s | 94, 84, 91 |
| The Cost of Perfection | 85 | 100 | 100 | 100 | 2.56s | 3.69s | 0ms | 0.000 | 3.06s | 85, 85, 85 |

### Desktop median

| Page | Perf | A11y | Best practices | SEO | FCP | LCP | TBT | CLS | Speed Index | Runs (perf) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Home | 91 | 100 | 100 | 100 | 1.38s | 1.38s | 0ms | 0.000 | 1.42s | 91, 93, 89 |
| About | 83 | 100 | 100 | 100 | 1.83s | 1.83s | 0ms | 0.003 | 1.87s | 93, 83, 65 |
| Vision | 92 | 100 | 100 | 100 | 1.31s | 1.31s | 0ms | 0.000 | 1.38s | 89, 92, 92 |
| Our Work | 75 | 100 | 100 | 100 | 2.01s | 2.01s | 0ms | 0.000 | 3.81s | 81, 75, 71 |
| Team | 71 | 100 | 100 | 100 | 2.34s | 2.34s | 0ms | 0.000 | 2.58s | 92, 71, 70 |
| Advisory Council | 83 | 100 | 100 | 100 | 1.73s | 1.73s | 0ms | 0.009 | 2.00s | 85, 83, 83 |
| Collaborate | 90 | 100 | 100 | 100 | 1.43s | 1.43s | 0ms | 0.000 | 1.48s | 82, 91, 90 |
| Get Involved | 88 | 96 | 100 | 100 | 1.52s | 1.52s | 0ms | 0.000 | 1.63s | 90, 88, 85 |
| The Cost of Perfection | 88 | 100 | 100 | 100 | 1.40s | 1.72s | 0ms | 0.000 | 1.45s | 89, 88, 86 |

CLS is well under 0.1 on every median. TBT was 0ms on every run. SEO and Best Practices were 100 on every run. The only accessibility score below 100 is Get Involved at 96.

### Largest contentful paint

A separate diagnostic Lighthouse pass identified the element. These single runs are not a replacement for the medians above.

- Home and Get Involved: the intro paragraph. FCP and LCP match, so the paint is text, not a photograph.
- Our Work and The Cost of Perfection: the first session poster. It is `loading="lazy"` and sits below the first screen on a phone. The file is 880×1100 and is displayed nearer 180–260px wide. It was not recompressed, because the approved poster artwork was left unchanged.
- Lighthouse did not flag render-blocking resources on these passes. `font-display` scored 1. Google Fonts is still a third-party stylesheet (`Instrument Sans`, `display=swap`, preloaded).
- Unused JavaScript in the main bundle was about 59–61KB of the 390KB file (118KB gzip).
- Document server time on those diagnostic runs was 310–550ms.

Slowest medians: desktop Team (71), desktop Our Work (75), mobile Advisory Council (81), mobile Our Work (82). The spread on desktop Team (92, 71, 70) and desktop About (93, 83, 65) is lab noise, not a single page defect.

## 3. Images and bundles

Shipped photographs and posters are WebP. The largest shipped image is Ahmed Mujtaba at 110KB (720×960). Event posters are 70–97KB. The Open Graph image is a 1200×630 JPEG at 97KB. Portraits declare width and height and sit in a fixed 4:5 frame. Below-the-fold portraits use `loading="lazy"`. The homepage founder portrait uses eager loading.

Original PNG and JPEG masters under `assest/` are not imported and are not in `dist`. They were not edited.

No image was replaced or recompressed. A smaller poster derivative could reduce Our Work and event LCP, and it was not made, because it would risk the approved artwork for an unmeasured gain.

Production fingerprinted assets currently send `cache-control: public, max-age=0, must-revalidate`. A one-year immutable cache for `/assets/*` is prepared in `netlify.toml` and is not live.

## 4. Responsive and functional checks

Headless Chrome measured all nine public pages plus the 404 at 375, 390, 768, 1024, and 1440. **50 of 50 checks passed:** horizontal overflow 0, one `h1`, no broken images, no console exceptions recorded.

In the production browser:

- The mobile menu opened, exposed the primary links, marked Home as current, and moved focus to Close.
- Footer Contact from Home reached `/get-involved#contact` with the contact section 96px from the top, under the fixed header.
- Empty contact submit showed “Please enter your full name.” and no success message.
- An invalid email showed “Please enter a valid email address.” and kept the name.
- Subject options were Select a topic, General Inquiry, General Questions, Website Feedback, Technical Issues, and Other.

Numbered lists were not changed.

## 5. Links

| Destination | Result |
| --- | --- |
| All nine public routes | PASS, HTTP 200 |
| `/contact`, `/team/core-team` | PASS, HTTP 301 to the intended targets |
| `http://` and `www` | PASS, HTTP 301 to `https://together2050.com/` |
| Instagram, Facebook, LinkedIn company, TikTok, YouTube, WhatsApp channel | PASS, HTTP 200. Titles matched Together2050 where a title was returned. |
| `https://wa.me/923433729053` | PASS, resolved to WhatsApp for `923433729053` |
| `mailto:info@together2050.com` and `mailto:officialtogether2050@gmail.com` | PASS by source. Not an HTTP check. |
| Registration form `https://forms.gle/oppPmpj8zvJi5hxr5` | PASS, HTTP 200, title “The Cost of Perfection Session Series \| Registration Form”. Not submitted. |
| Membership, ambassador, and collaboration Google Forms | NEEDS MANUAL VERIFICATION. Membership opened to a Google sign-in page. Ambassador and collaboration returned HTTP 401 to the same Google Forms host. |
| Instagram profiles linked from team and advisory cards | PASS, HTTP 200 |
| LinkedIn profiles linked from team and advisory cards | NEEDS MANUAL VERIFICATION. LinkedIn returned HTTP 999, which is bot protection, not proof the profile is missing. |
| External links that open a new tab | PASS. They use `target="_blank"` and `rel="noopener noreferrer"`. |

No internal link points at a removed page. No redirect loop was found.

## 6. Technical SEO

| Check | Result |
| --- | --- |
| Unique titles and descriptions on the nine indexable pages | PASS in the live HTML |
| Canonicals use `https://together2050.com` | PASS |
| `robots` `index, follow` on indexable pages | PASS |
| 404 `noindex, nofollow` and no canonical | PASS |
| One `h1` per public page | PASS |
| `robots.txt` allows `/` and points at the sitemap | PASS |
| Sitemap has the nine canonical URLs only | PASS. No `/contact`, no fragment, no staging host. |
| Open Graph and Twitter cards | PASS on the homepage shell, including `og-image.jpg` at 1200×630 |
| Organization JSON-LD on the homepage | PASS |
| WebPage JSON-LD on the other indexable HTML shells | PASS |
| Event JSON-LD | Present in the React page for the real sessions. It is not in the initial HTML, which contains WebPage JSON-LD until JavaScript runs. Rich Results Test: NOT TESTED. |
| Accidental `noindex` on public pages | PASS, none found |
| Flat `.html` duplicates | PASS after the deploy in section 13. At the baseline they returned HTTP 200 with the correct canonical. |

Heading order and image alt text did not fail Lighthouse accessibility on the measured pages, except the Get Involved color-only link noted below.

## 7. Contact form and hosting

Live form behavior was checked without a new production submission.

| Check | Result |
| --- | --- |
| `/get-involved#contact` lands on the section | PASS, section top 96px |
| `/contact` 301 | PASS |
| Fields and subject options | PASS |
| Empty and invalid input | PASS. No success message. Values kept. |
| Failure and success against Netlify on this deploy | NOT TESTED. No new enquiry was sent. |
| `dist/__forms.html` contains `name="contact"`, honeypot, and the five subjects | PASS in the local build |
| Live `/__forms.html` | PASS, HTTP 200, `noindex`, form name `contact`, new subjects present |

Historical Netlify delivery is not treated as proof that this deploy still emails anyone.

Security headers on the homepage: HSTS `max-age=31536000`, CSP restricting scripts to `'self'`, `X-Frame-Options: DENY`, `nosniff`, referrer policy, and a locked-down permissions policy. Server: Netlify.

`npm audit --omit=dev`: 0 vulnerabilities. Full `npm audit`: 3 high findings, all in development tools (`brace-expansion`, `source-map-js`, `vite`). They were not upgraded.

No secrets were found in the audited source. No third-party analytics script is present.

## 8. Changes made, not deployed

| File | Why |
| --- | --- |
| `vite.config.ts` | Stop writing the extra `about.html`-style copies. Directory `index.html` files remain, so `/about` still prerenders. |
| `netlify.toml` | Permanently redirect the published `.html` duplicates, including `/about/index.html`, and cache fingerprinted `/assets/*` for one year. |
| `public/_redirects` | The same Netlify redirects. |
| `vercel.json` | The same redirects, so the unused Vercel config does not diverge. Production is Netlify. |
| `src/pages/GetInvolved.tsx` | Underline the closing “Collaborate” link. The sentence and destination are unchanged. |

Details and command results are in sections 12 and 13. The deploy and the later Lighthouse comparison are in section 13.

## 9. Remaining risks

1. The redirect and cache change is deployed. See section 13 before submitting the sitemap.
2. Get Involved accessibility is 100 on production after the deploy. The baseline was 96. See section 13.
3. The registration form and the website disagree on session times. The website was left unchanged. The exact choice is in section 12.
4. Zain’s approved session title and the registration form agree. The poster file prints different wording. The poster was not edited.
5. Membership, ambassador, and collaboration forms open a Google sign-in page before any form content. They are not 404s. Whether guests should be able to respond is a manual decision.
6. Personal LinkedIn URLs were blocked by LinkedIn’s bot response.
7. Field Core Web Vitals and Search Console ownership were not available.
8. A new contact submission was not sent, so inbox delivery was not rechecked.

## 10. Commands and results

| Command | Result |
| --- | --- |
| `git status` | Clean `main` at `4d591ea` before edits. After edits, four files are modified and uncommitted. |
| Production `curl` of routes, redirects, headers, sitemap, robots, form file | Results in sections 1, 6, and 7 |
| Lighthouse 12.8.2 × 3, nine pages, mobile and desktop | 54/54 runs completed. Medians in section 2. |
| PageSpeed Insights API | HTTP 429. NOT TESTED. |
| Headless layout pass, five widths | 50/50 overflow checks passed |
| `npm audit --omit=dev` | 0 vulnerabilities |
| `npm audit` | 3 high, development tools only |
| `npx eslint .` | Passed |
| `npx tsc -b` | Passed |
| `npm run build` | Passed |

## 11. Search Console checklist

The redirect and cache deploy is live. Do not submit the sitemap until the manual items in section 13 are accepted.

| Item | Status |
| --- | --- |
| Domain property ownership | NOT TESTED |
| Homepage on HTTPS at `https://together2050.com/` | PASS |
| Preferred host (`www` and `http` redirect to the apex) | PASS |
| `https://together2050.com/robots.txt` | PASS. Allows `/`. |
| Sitemap to submit | `https://together2050.com/sitemap.xml` |
| Sitemap matches the nine indexable URLs | PASS |
| Canonicals on those pages | PASS |
| Important pages HTTP 200 | PASS |
| `/contact` and `/team/core-team` redirect | PASS |
| No accidental `noindex` on public pages | PASS |
| Robots does not block pages or assets | PASS |
| Duplicate `.html` URLs | PASS after deploy. See section 13. |
| Event structured data in the first HTML response | Not in the static shell. JavaScript adds it. Rich Results Test NOT TESTED. |

**Inspect these URLs first, after deploy:**

1. `https://together2050.com/`
2. `https://together2050.com/events/the-cost-of-perfection`
3. `https://together2050.com/get-involved`
4. `https://together2050.com/about`
5. `https://together2050.com/what-we-do`
6. `https://together2050.com/vision`
7. `https://together2050.com/team`
8. `https://together2050.com/team/advisory-council`
9. `https://together2050.com/collaborate`

Then confirm `/contact` and `/about.html` are not indexed as their own pages. HTTP 200 does not mean a URL is indexed. This audit does not request indexing and does not predict ranking.

## 12. Follow-up fixes, still local

Checked again on 23 October 2026. `main` is even with `origin/main` at `4d591ea`. The edits are uncommitted. Production was rechecked and still serves the pre-fix site.

### Duplicate URLs

Production, before any deploy:

| URL | Result |
| --- | --- |
| `/index.html` | FAIL for indexing. HTTP 200, `cache-control: public, max-age=0, must-revalidate` |
| `/about.html` | FAIL. HTTP 200 |
| `/get-involved.html` | FAIL. HTTP 200 |
| `/events/the-cost-of-perfection.html` | FAIL. HTTP 200 |
| `/about/index.html` | FAIL. HTTP 200 |
| `/vision/index.html` and `/team/advisory-council/index.html` | FAIL. HTTP 200. Same directory-index pattern. |

Local build after the Vite change: PASS. `dist` contains the nine canonical shells (`index.html` plus eight `*/index.html` route files), `404.html`, and `__forms.html`. It does not contain `about.html` or any other flat page copy. Each indexable shell has a unique title, description, canonical on `https://together2050.com`, and `index, follow`. `404.html` is `noindex, nofollow` and has no canonical. `dist/sitemap.xml` has exactly these nine URLs and no `.html` duplicate, fragment, staging host, or `/contact`:

1. `https://together2050.com/`
2. `https://together2050.com/about`
3. `https://together2050.com/vision`
4. `https://together2050.com/what-we-do`
5. `https://together2050.com/team`
6. `https://together2050.com/team/advisory-council`
7. `https://together2050.com/collaborate`
8. `https://together2050.com/get-involved`
9. `https://together2050.com/events/the-cost-of-perfection`

`dist/robots.txt` allows `/` and names `https://together2050.com/sitemap.xml`.

Prepared redirects, not yet live:

- `/index.html` → `/`
- each flat page, such as `/about.html` → `/about`
- Netlify `/*/index.html` → `/:splat` with force, so `/about/index.html` → `/about` and the other directory copies do the same
- Vercel lists those eight directory copies explicitly. `vercel.json` is not the production host.

A request for `/about` does not match `/*/index.html`, so the rule does not point the clean URL back at itself. `/index.html` is a separate rule to `/`. Live redirect behavior: NOT TESTED until deploy. Vite preview does not apply Netlify redirects.

### Asset cache

`/assets/*` in `netlify.toml` sets `Cache-Control: public, max-age=31536000, immutable` and repeats the existing security headers, because a more specific Netlify header block does not inherit them. HTML, `sitemap.xml`, `robots.txt`, and `__forms.html` are outside `/assets/` and are not marked immutable.

Production fingerprinted JavaScript is still `public, max-age=0, must-revalidate` (`/assets/index-dpe0Gxxg.js`). The new header is local only. Its effect on Lighthouse: NOT TESTED.

### Accessibility

The closing sentence is still “For partnership proposals, visit Collaborate. To join activities and contribute, choose a pathway above.” The link still goes to `/collaborate`. It now has an underline. The text color stays the existing near-black (`#0B0B0B`). Keyboard focus uses the existing site outline: 2px solid `#FC0000`, offset 3px. Confirmed in the local production build.

Local Lighthouse 13.5.0, accessibility only, `http://127.0.0.1:4190/get-involved`, 23 October 2026. Three runs per device. This is not the production baseline in section 2.

| Device | Accessibility | `link-in-text-block` | Runs |
| --- | ---: | --- | --- |
| Mobile | 100 | Pass | 100, 100, 100 |
| Desktop | 100 | Pass | 100, 100, 100 |

Production Get Involved remains 96 until this is deployed and measured again. No full nine-page Lighthouse rerun was done. Do not treat the local 100 as a production performance improvement.

### Event information, left unchanged

Sources:

- Website and event JSON-LD: `src/data/events.ts` (`timeLabel`, `startsAt`) and `src/pages/EventDetail.tsx` (`startDate` from `startsAt`). Labels are 8:00 PM PKT and 9:00 PM PKT. Structured start times are `2026-10-24T20:00:00+05:00`, `2026-10-24T21:00:00+05:00`, `2026-10-25T20:00:00+05:00`, and `2026-10-25T21:00:00+05:00`.
- Registration form, read in a browser on 23 October 2026 and not submitted: `https://forms.gle/oppPmpj8zvJi5hxr5` opened the public form “The Cost of Perfection Session Series | Registration Form”. It lists 8:00 PM–8:50 PM PKT for Taskeen and Sama, and 8:50 PM–9:30 PM PKT for Zain and Nageen.

The repository does not contain the form’s time ranges, so the site was not changed.

**Decision needed:** should the website and event structured data stay at 8:00 PM and 9:00 PM, or change to the form’s 8:00–8:50 PM and 8:50–9:30 PM ranges? Zain and Nageen’s structured start time would move from 21:00 to 20:50 if the form is the source.

Zain’s session title is not the same kind of conflict. `src/data/events.ts` sets the approved title to “Taking Ownership” and the subtitle to “Accountability and Decisions Under Pressure”. The registration form uses that same topic. `posterText` is “Beyond the Pressure: Building a Healthier Definition of Success”, and the comment in that file says it is the printed poster title when it differs from the approved session title. It is used for the image alt. The poster file was not edited.

**Decision needed only if the poster should change:** leave the poster and alt text as they are, or authorize a replacement poster later. The on-site title was not rewritten.

### External forms

Checked in a browser on 23 October 2026. Nothing was submitted.

| Link | Result |
| --- | --- |
| Registration `https://forms.gle/oppPmpj8zvJi5hxr5` | PASS for the first page. The form title and schedule were visible without signing in. A sign-in control was also present. Later pages were not opened. NEEDS MANUAL VERIFICATION if a guest must sign in before finishing. |
| Membership `https://forms.gle/mh665nL992axAhz86` | NEEDS MANUAL VERIFICATION. The short link and the form document both redirect to Google sign-in. The form id exists. This is not an HTTP 404. |
| Ambassador `https://forms.gle/d2bpooFtVWKDegJMA` | NEEDS MANUAL VERIFICATION. Same Google sign-in wall. The form id exists. |
| Collaboration `https://forms.gle/wZHoFjajShq6E9iA9` | NEEDS MANUAL VERIFICATION. Same Google sign-in wall. The form id exists. |

An earlier automated HTTP 401 was not treated as proof that a form is broken. No form permissions were changed.

### Commands on this follow-up

| Command | Result |
| --- | --- |
| `git status` | `main` even with `origin/main` at `4d591ea`. Uncommitted: the four earlier config files, `src/pages/GetInvolved.tsx`, and untracked `AUDIT_REPORT.md`. |
| `npx eslint .` | PASS |
| `npx tsc -b` | PASS |
| `npm run build` | PASS. New bundles: `index-DWd1lWTf.js` (390.11 kB) and `index-CpWVe-mX.css`. |
| `npm audit --omit=dev` | PASS. 0 vulnerabilities. |
| `npm audit` | 3 high, development tools only: `brace-expansion`, `source-map-js`, and `vite` 7.0.0–7.3.6. Not upgraded. |
| Production `curl -I` of the duplicate URLs and `/assets/index-dpe0Gxxg.js` | HTTP 200 and `max-age=0`, as listed above. |
| Local Lighthouse accessibility × 3, Get Involved, mobile and desktop | 100 on all six runs. |

The approval in this follow-up was given after section 12 was written. The live results are in section 13. Do not submit `https://together2050.com/sitemap.xml` or request indexing from this audit.

## 13. Post-deploy verification

Commits on `main`: `5afe584` (redirects, asset cache, Collaborate underline, this report) and `40d8fd2` (restore the flat HTML files). Netlify deployed both. The live bundle is `/assets/index-DckQPNgt.js` and `/assets/index-wOUrO6wa.css`.

The first deploy made `/about` redirect to `/about/` because only `about/index.html` remained, while the canonical tag still said `https://together2050.com/about`. `40d8fd2` put the flat HTML files back. The forced redirects still hide `/about.html` and `/about/index.html`. After that deploy, the slash-free routes return 200 again.

### Redirects and cache

Checked with `curl -I` on 23 October 2026 after `40d8fd2`. No redirect loop. Each duplicate below is one 301, then HTTP 200 on the canonical URL.

| URL | Result |
| --- | --- |
| `/index.html` | PASS. 301 to `/` |
| `/about.html` | PASS. 301 to `/about` |
| `/get-involved.html` | PASS. 301 to `/get-involved` |
| `/events/the-cost-of-perfection.html` | PASS. 301 to `/events/the-cost-of-perfection` |
| `/about/index.html` | PASS. 301 to `/about` |
| `/`, `/about`, `/vision`, `/what-we-do`, `/team`, `/team/advisory-council`, `/collaborate`, `/get-involved`, `/events/the-cost-of-perfection` | PASS. HTTP 200 |
| `/about/` and the other trailing-slash routes checked | PASS. 301 back to the slash-free URL |
| `/contact` | PASS. 301 to `/get-involved#contact` |
| `/team/core-team` | PASS. 301 to `/team` |
| `/no-such-page-audit-3` | PASS. HTTP 404, `noindex, nofollow`, no canonical |
| `/assets/index-DckQPNgt.js`, `/assets/index-wOUrO6wa.css`, `/assets/ahmed-mujtaba-Bve-UFT7.webp` | PASS. `cache-control: public, max-age=31536000, immutable` |
| HTML, sitemap, robots, `__forms.html` | PASS. Not immutable. `cache-control: public, max-age=0, must-revalidate` |
| About canonical and robots | PASS. `https://together2050.com/about`, `index, follow` |
| `__forms.html` | PASS. Form name `contact`, subject “General Inquiry” present |

### Lighthouse after deploy

**Tool:** Lighthouse 12.8.2, the same version as section 2. Headless Chrome, simulated throttling, three runs per page and device. 54 of 54 runs completed, 0 errors. Fetch times 2026-10-23T14:59:21Z through 2026-10-23T15:14:12Z. Tables are medians. These are lab results, not CrUX field data. Field Core Web Vitals remain NOT TESTED.

#### Mobile median

| Page | Perf | A11y | Best practices | SEO | FCP | LCP | TBT | CLS | Speed Index | Runs (perf) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Home | 93 | 100 | 100 | 100 | 2.56s | 2.56s | 0ms | 0.000 | 3.01s | 93, 94, 93 |
| About | 93 | 100 | 100 | 100 | 2.52s | 2.52s | 0ms | 0.000 | 2.99s | 93, 90, 94 |
| Vision | 92 | 100 | 100 | 100 | 2.53s | 2.53s | 0ms | 0.000 | 3.66s | 90, 93, 92 |
| Our Work | 86 | 100 | 100 | 100 | 2.51s | 3.59s | 0ms | 0.000 | 3.19s | 86, 87, 86 |
| Team | 93 | 100 | 100 | 100 | 2.56s | 2.56s | 0ms | 0.000 | 3.04s | 92, 93, 93 |
| Advisory Council | 93 | 100 | 100 | 100 | 2.53s | 2.53s | 0ms | 0.011 | 3.17s | 92, 93, 93 |
| Collaborate | 93 | 100 | 100 | 100 | 2.53s | 2.53s | 0ms | 0.005 | 2.99s | 94, 93, 92 |
| Get Involved | 93 | 100 | 100 | 100 | 2.55s | 2.55s | 0ms | 0.000 | 3.14s | 93, 94, 93 |
| The Cost of Perfection | 84 | 100 | 100 | 100 | 2.64s | 3.78s | 27ms | 0.000 | 3.31s | 83, 86, 84 |

#### Desktop median

| Page | Perf | A11y | Best practices | SEO | FCP | LCP | TBT | CLS | Speed Index | Runs (perf) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Home | 88 | 100 | 100 | 100 | 1.54s | 1.54s | 0ms | 0.000 | 1.71s | 88, 87, 91 |
| About | 91 | 100 | 100 | 100 | 1.32s | 1.32s | 0ms | 0.003 | 1.56s | 91, 92, 91 |
| Vision | 92 | 100 | 100 | 100 | 1.28s | 1.28s | 0ms | 0.000 | 1.42s | 92, 93, 92 |
| Our Work | 81 | 100 | 100 | 100 | 1.89s | 1.89s | 0ms | 0.000 | 2.08s | 72, 81, 85 |
| Team | 86 | 100 | 100 | 100 | 1.63s | 1.63s | 0ms | 0.000 | 1.81s | 87, 80, 86 |
| Advisory Council | 88 | 100 | 100 | 100 | 1.52s | 1.52s | 0ms | 0.009 | 1.59s | 83, 90, 88 |
| Collaborate | 89 | 100 | 100 | 100 | 1.39s | 1.39s | 0ms | 0.000 | 1.83s | 89, 84, 89 |
| Get Involved | 91 | 100 | 100 | 100 | 1.34s | 1.34s | 0ms | 0.000 | 1.62s | 91, 91, 81 |
| The Cost of Perfection | 83 | 100 | 100 | 100 | 1.63s | 1.96s | 0ms | 0.000 | 1.72s | 86, 78, 83 |

#### Comparison with section 2

Get Involved accessibility is 100 on all six production runs. The baseline was 96 on both devices because the closing Collaborate link was color-only. That is the measured result of the underline.

Best Practices and SEO stayed 100. CLS stayed under 0.1. TBT stayed 0ms except The Cost of Perfection on mobile, whose median is 27ms from runs of 27ms, 0ms, and 32ms.

Performance medians moved in both directions. Mobile Advisory Council went from 81 to 93, and desktop Team went from 71 to 86. Desktop Home went from 91 to 88, and desktop The Cost of Perfection went from 88 to 83. The baseline already showed swings of that size on a single page, including desktop About at 93, 83, and 65. The one-year asset cache does not change a first-load Lighthouse run. These performance differences are lab variation, not a demonstrated sitewide gain.

### Still open

1. Choose the session times: keep 8:00 PM and 9:00 PM on the site, or adopt the registration form’s 8:00–8:50 PM and 8:50–9:30 PM ranges.
2. Leave Zain’s poster as printed, unless a replacement poster is authorized. The site title and the form agree.
3. Confirm whether membership, ambassador, and collaboration forms should require a Google account. Registration’s first page is public; later pages were not opened.
4. Confirm the Search Console Domain property, then submit `https://together2050.com/sitemap.xml` and inspect the nine canonical URLs. This audit did not do that.
5. Field Core Web Vitals remain NOT TESTED.
