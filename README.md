# Nishant Saravanan — portfolio website

A one-page portfolio built with plain HTML, CSS, and a little JavaScript. No build step, no server, no paid services. It's ready for GitHub Pages.

Your site address will be **https://nishantsaravanan.github.io/**

---

## What's in this folder

```
index.html            the whole website (all the text lives here)
css/styles.css        colors, fonts, layout
js/main.js            mobile menu, schematic animation, résumé preview check
assets/
  resume.pdf          public copy of your résumé (phone number removed)
  favicon.svg         the little icon in the browser tab
  images/             optional photos go here (see "Adding images")
.nojekyll             tells GitHub to publish the files exactly as they are
README.md             this guide
```

---

## Before you publish: what becomes public

- **Everything on a GitHub Pages site is public.** Anyone with the link can see it, and search engines may index it.
- **Your repository is public too.** On a free GitHub account the Pages repo must be public, so anyone can browse every file in it, including `assets/resume.pdf` and its full history. If you later delete something, it can still be found in old commits.
- **Your résumé:** `assets/resume.pdf` is a copy of your résumé with **only the phone number removed**. Everything else is unchanged, and the email and LinkedIn links still work. If you'd rather show your phone number, replace it with your original PDF (keep the file name `resume.pdf`).
- **Your email** (nishantsaravanan9@gmail.com) appears on the page as a clickable link, so expect some spam over time.

---

## Step 1: Rename your repository to lowercase

You already have an empty repository called `NishantSaravanan.github.io`. GitHub's docs say a user site's repository must be named `<username>.github.io` and that any uppercase letters must be lowercased. Rename it so it matches exactly:

1. Open https://github.com/nishantsaravanan/NishantSaravanan.github.io
2. Click **Settings** (top of the repo).
3. Under **General → Repository name**, type `nishantsaravanan.github.io` and click **Rename**.

(If you were starting from scratch: click **+ → New repository**, name it `nishantsaravanan.github.io`, set it to **Public**, and click **Create repository**.)

---

## Step 2: Upload the website files

Upload the **contents** of this folder, not the folder itself. `index.html` must end up at the top level of the repository, or GitHub will show a 404.

### Option A: In your browser (easiest)

1. Open your repository on GitHub.
2. Because it's empty, click the link that says **uploading an existing file**. (Once it has files, use **Add file → Upload files** instead.)
3. Open this folder on your computer, select everything inside it (`index.html`, `css`, `js`, `assets`, `README.md`, `.nojekyll`), and drag it all onto the upload area. Folders keep their structure when dragged in Chrome, Edge, or Firefox.
   - `.nojekyll` is a hidden file. On a Mac, press **Cmd + Shift + .** in Finder to show hidden files. If you miss it, the site will still work.
4. Scroll down, write a message like `Add portfolio site`, and click **Commit changes**.
5. Check the repository's file list: you should see `index.html` at the top level, next to the `css`, `js`, and `assets` folders.

### Option B: With Git on the command line

```bash
cd path/to/this/folder
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/nishantsaravanan/nishantsaravanan.github.io.git
git push -u origin main
```

---

## Step 3: Turn on GitHub Pages

1. In your repository, go to **Settings → Pages** (left sidebar, under "Code and automation").
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose **main** and the folder **/ (root)**, then click **Save**.

For a repository named `nishantsaravanan.github.io` this is often already set for you. Just confirm it.

---

## Step 4: Your site address

| Repository name | Site address |
|---|---|
| `nishantsaravanan.github.io` (your user site) | **https://nishantsaravanan.github.io/** |
| anything else, for example `portfolio` (a project site) | https://nishantsaravanan.github.io/portfolio/ |

A project repository's name becomes a **path** after your user site address. It does not become its own domain. This site uses relative file paths, so it works at either address without changes.

---

## Step 5: Check that it deployed

1. Open the **Actions** tab of your repository. You'll see a run called **pages build and deployment**.
   - Yellow dot: still publishing. Green check: done. Red X: click it to see what failed.
2. Go to **Settings → Pages**. When it's ready, the top of the page shows **"Your site is live at https://nishantsaravanan.github.io/"** with a **Visit site** button.
3. The first publish can take up to about 10 minutes.

---

## Troubleshooting

**The site shows "404 — There isn't a GitHub Pages site here"**
- Wait 10 minutes, then hard-refresh (Ctrl + Shift + R, or Cmd + Shift + R on a Mac).
- Make sure `index.html` is at the top level of the repository, not inside a subfolder like `site/index.html`. If it's in a subfolder, move the files up or re-upload the folder's contents.
- Make sure the repository name is exactly `nishantsaravanan.github.io` (all lowercase).
- Make sure Settings → Pages is set to **main** and **/ (root)**.
- On a free account, the repository must be **Public**.

**The page loads but has no styling (plain text, default fonts)**
- The `css` folder didn't upload, or `styles.css` was renamed. It must be `css/styles.css`.

**An image is missing**
- File names are case-sensitive on GitHub: `Profile.JPG` is not the same as `profile.jpg`. Make the name in `assets/images/` match the `src="..."` in `index.html` exactly, including the extension.
- Make sure you removed the comment lines around that image (see "Adding images").

**The résumé link is broken**
- The file must be at `assets/resume.pdf`, all lowercase, with exactly that name.

**The résumé preview box is empty**
- Some browsers (most phones, and a few desktop browsers) can't show PDFs inside a page. The site detects this where it can and shows the "Open" and "Download" buttons instead. The buttons always work.

**My changes don't show up**
- Check the Actions tab for a green check, then hard-refresh. Browsers cache pages for a few minutes.

---

## Preview on your own computer

Double-click `index.html` to open it in your browser. Everything works this way.

For the most accurate preview (including the embedded résumé), run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000

---

## Updating the site later

**Edit text:** open `index.html` on GitHub, click the pencil icon, make your change, and click **Commit changes**. Each section starts with a comment like `<!-- ============ PROJECTS ============ -->` so you can find it. The site republishes automatically in a minute or two.

**Add a job or project:** copy an existing `<li class="role">…</li>` (Experience) or `<article class="project">…</article>` (Projects) block, paste it right below, and change the text.

**Update your résumé:**
1. Make a public-ready PDF (remove anything you don't want public, like your phone number).
2. Rename it `resume.pdf`.
3. In the repository, open the `assets` folder, click **Add file → Upload files**, drop in the new `resume.pdf`, and commit. It replaces the old one.

**Change colors or fonts:** all colors are at the top of `css/styles.css` in the `:root` block (and a second block below it for dark mode). Change a hex value and it updates everywhere.

**The hero drawing:** the schematic is inline SVG in `index.html`, inside `<figure class="sheet">`. Each connector (`J1`–`J7`) is a link to a section. If you add or rename a section, update the matching `<a class="net" href="#...">` and its label.

---

## Adding images

None are needed; the site is designed to look finished without them. When you're ready:

| Put this file in `assets/images/` | It appears in |
|---|---|
| `profile.jpg` | About section, above the text (shown at 4:5, portrait) |
| `college.jpg` | Education section, above the school name (shown at 16:9) |
| `project-1.jpg` | Projects, top of the Soil Health Monitoring Probe (shown at 3:2) |
| `project-2.jpg` | Projects, top of the Automated Anesthesia System (shown at 3:2) |

Then:
1. Open `index.html` and search for `OPTIONAL`.
2. Each image has a block like this:
   ```html
   <!-- OPTIONAL PORTRAIT: add assets/images/profile.jpg, then delete the two comment lines around the <figure> below.
   <figure class="portrait"><img src="assets/images/profile.jpg" ...></figure>
   END OPTIONAL PORTRAIT -->
   ```
   Delete the first line (`<!-- OPTIONAL ...`) and the last line (`END OPTIONAL ... -->`), keeping the `<figure>` line in the middle.
3. Using PNG or WebP? Change `.jpg` in that `src="..."` to `.png` or `.webp`.
4. Update the `alt="..."` text so it describes the actual photo.

Images are cropped to fit their frame without stretching. Keep each file under about 500 KB so the page loads quickly (resize photos to roughly 1600 px wide).

---

## Optional: use a custom domain

If you own a domain (for example `nishantsaravanan.com`), you can point it at this site:

1. In **Settings → Pages → Custom domain**, enter your domain and click **Save**. Do this before changing DNS.
2. At your domain registrar, add the DNS records GitHub lists for your setup (a `CNAME` record for `www`, and `A`/`ALIAS` records for the bare domain).
3. Once the check passes, turn on **Enforce HTTPS**.

DNS changes can take up to 24 hours. Full, current instructions:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

If you add a custom domain, also update the two `https://nishantsaravanan.github.io/` addresses near the top of `index.html` (the `canonical` and `og:url` lines).
