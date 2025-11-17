# **neo-swiss lineage gallery**

a study on neo-swiss web design

**live site:**  
https://mcbridgeeee.github.io/neo-swiss/

---

## what this project is  

a minimal, neo-swiss-inspired static site built using eleventy.  
designed to emphasize clean geometry, restrained typography, and structured hierarchy.

a study in structure, restraint, and visual discipline.  
built with 11ty and deployed on github pages, this site leans into the clarity and tension of swiss and neo-swiss design: strong grids, patient spacing, and typography that does the heavy lifting without raising its voice.

nothing loud. nothing decorative.  
just form, function, and intent.

---

## core ideas  

- clean hierarchy  
- modular layouts  
- stable grid system  
- typography as architecture  
- minimal color, maximum contrast  

---

## stack  

- **eleventy (11ty)** – static site generator  
- **nunjucks** – templating  
- **github pages** – deployment  
- **hand-written css** – no frameworks  

---

## directory structure  
src/
css/
main.css
designers/
index.njk
style/
index.njk
timeline/
index.njk
_includes/
_layouts/
base.njk
page.njk
header.njk
footer.njk
index.njk

.eleventy.js
package.json

---

## development  

### install dependencies  

npm install 
### run locally  

npx @11ty/eleventy --serve
### build  

npx @11ty/eleventy
---

## deployment  

fully automated through github actions.  
push → build → deploy → live.

the site is served inside the `/neo-swiss/` subdirectory,  
so internal links use prefix-safe paths that work on github pages.

---

## future plans  

- refine spacing and vertical rhythm  
- explore alternate typographic systems  
- expand the timeline  
- experiment with even stricter grid constraints  

---

## note  

this project is an exercise in design discipline — removing everything that doesn’t serve the structure.  
the simplicity is intentional, not accidental.
