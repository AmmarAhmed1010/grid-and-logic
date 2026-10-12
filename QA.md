# QA evidence

Review date: 10 October 2026. Local Chromium inspection and Playwright verification at 390, 768 and 1440 pixels. See `output/playwright/qa-results.json` for route-level results and `output/playwright/` for full-page screenshots.

## Technical gates

- ESLint: passed.
- TypeScript strict no-emit check: passed.
- Next.js optimized production build: passed; routes prerendered successfully.
- Domain unit tests: No domain test suite; browser checks cover agency interactions.

## Browser gates

Every application route is checked at the three widths for successful responses, one primary heading, horizontal overflow, control labels and empty button names. Unknown routes are checked for HTTP 404. Page errors and console errors are collected. Representative page types and key flow states are captured.

Checks target practical accessibility: semantic structure, labeled controls, visible keyboard focus, keyboard menus and reduced motion. This is not a full WCAG conformance audit or a measured performance score.

## Refinements made after initial review

Improved enquiry validation behind a typed adapter, retained local brand/project assets and adjusted responsive grid/typographic spacing.

## Limitations

The studio email and phone come from its existing website. The form prepares a demo enquiry without sending it. Replace src/lib/contact.ts with a real authorized service before accepting enquiries.

## Final measured outcomes

- 40 recorded browser checks passed; page/console errors: 0.
- Production HTTP verification: 13 application routes passed, 202 internal link references resolved to known routes, custom 404 passed.
- Production browser checks passed on the homepage and three representative inner pages: hydration, image decoding and desktop overflow.
- Optimized build output is saved in output/playwright/build-output.txt.
- Mobile menu opens, Escape closes and returns focus, keyboard focus outline, reduced-motion content visible, homepage images load, no failed asset requests.
- Invalid contact blocked; valid demo enquiry feedback; perspective installation rotates.

## Screenshot index

- [about-1440.png](output/playwright/about-1440.png)
- [about-390.png](output/playwright/about-390.png)
- [about-768.png](output/playwright/about-768.png)
- [contact-1440.png](output/playwright/contact-1440.png)
- [contact-390.png](output/playwright/contact-390.png)
- [contact-768.png](output/playwright/contact-768.png)
- [home-1440.png](output/playwright/home-1440.png)
- [home-390.png](output/playwright/home-390.png)
- [home-768.png](output/playwright/home-768.png)
- [home-desktop-preview.png](output/playwright/home-desktop-preview.png)
- [home-preview.png](output/playwright/home-preview.png)
- [home-production.png](output/playwright/home-production.png)
- [review-sheet.png](output/playwright/review-sheet.png)
- [services-1440.png](output/playwright/services-1440.png)
- [services-390.png](output/playwright/services-390.png)
- [services-3d-configurators-1440.png](output/playwright/services-3d-configurators-1440.png)
- [services-3d-configurators-390.png](output/playwright/services-3d-configurators-390.png)
- [services-3d-configurators-768.png](output/playwright/services-3d-configurators-768.png)
- [services-768.png](output/playwright/services-768.png)
- [work-1440.png](output/playwright/work-1440.png)
- [work-390.png](output/playwright/work-390.png)
- [work-768.png](output/playwright/work-768.png)
- [work-sofa-configurator-1440.png](output/playwright/work-sofa-configurator-1440.png)
- [work-sofa-configurator-390.png](output/playwright/work-sofa-configurator-390.png)
- [work-sofa-configurator-768.png](output/playwright/work-sofa-configurator-768.png)
