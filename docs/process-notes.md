# process documentation

this project moved through several stages, each shaped by a mix of trial, error, and iteration. i used **codex**, **github copilot**, and **chatgpt** throughout the entire workflow. sometimes they helped, sometimes they made things more confusing, but working between all three kept the project moving even when parts of the layout kept breaking.

all screenshots mentioned in these notes are stored in the repo under:
/docs/process-screenshots/

they follow the same naming structure as the phases below (a, b, c, etc.), so you can view each version directly in that folder.

---

## phase a — early hero and home page layout

i started with the homepage and hero section because they set the tone for the entire style. the first versions were structural tests: rough grids, placeholder spacing, and early hierarchy attempts that didn’t feel cohesive yet. codex and copilot generated workable layouts, but they didn’t match the direction i needed.

chatgpt helped me step back and rethink spacing and placement so the homepage felt clearer and more aligned with the grid-heavy nature of the style.

screenshots labeled **a** in the `/process-screenshots` folder show these early iterations.

---

## phase b — fixing timeline and designer layout on the homepage

this was the most difficult part. the timeline kept breaking on mobile, collapsing into odd orders, and causing sideways scrolling. the designers section on the homepage also kept drifting off the grid. every fix created a new issue somewhere else.

codex often tried to “repair” the layout by adding even more conflicting rules, which made things worse. working with chatgpt helped me simplify the structure, tighten the grid, and adjust the breakpoints so the page stopped fighting itself.

everything in this stage is labeled **b** in the `/process-screenshots` folder.

---

## phase c — actual designers page

the designers page went through a placeholder stage first. i used fake people and temporary descriptions to get the structure right before inserting real content. once the grid felt solid, i replaced the placeholder entries with the actual designers and adjusted spacing, type scale, and alignment to match the homepage.

codex and copilot handled most of the markup, while chatgpt helped me correct weird stacking behavior when the grid shifted.

screenshots for this part are labeled **c** in the folder.

---

## phase d — when the designers page broke

after i thought the designers page was stable, a layout adjustment elsewhere caused the entire page to break — uneven columns, misaligned text, and grid behavior that didn’t make any sense. this stage was mostly about stripping out unnecessary rules and rebuilding the structure so it behaved again.

chatgpt helped troubleshoot the css conflicts, while copilot made it faster to rework the repeated parts.

these broken versions and fixes are labeled **d** or **e** in the screenshot folder.

---

## phase e — the about page

the about page came last because i wanted the rest of the site to guide how it should look. the earliest versions were either too plain or too styled and didn’t feel connected to the rest of the pages. after several revisions with copilot and chatgpt, i landed on an approach that kept the tone consistent with the homepage and designers page.

screenshots for this part are labeled **f** in the folder.

---

# reflection on the process

this project was built through constant iteration. every major section broke at least once, and some broke repeatedly. codex helped with scaffolding, copilot handled repetitive structure, and chatgpt was the one that helped me understand what actually needed to change each time the layout fell apart.

the `/docs/process-screenshots/` folder documents every stage of the progression — from the rough early drafts to the broken layouts to the versions that finally felt clean. the process wasn’t linear, but working between these tools helped me reach a design that feels intentional and aligned with the style.
