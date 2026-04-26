# Canada Finance Learner Deployment Guide

This package is prepared so you only need to deploy it.

## What is already configured

- Project name: Canada Finance Learner
- Languages: English, French, Chinese
- Routes: `/en`, `/fr`, `/zh`
- Article system: included in `content/articles.ts`
- Free consultation form: included in `/free-consultation`
- Formspree endpoint already connected: `https://formspree.io/f/xbdqelwo`
- Google ad placeholders: included through `components/AdSlot.tsx`

## Step 1: Upload to GitHub

1. Go to GitHub.
2. Create a new repository named `canada-finance-learner`.
3. Upload all files from this folder into the repository.
4. Commit the files.

## Step 2: Deploy with Vercel

1. Go to Vercel.
2. Click `Add New Project`.
3. Import your GitHub repository: `canada-finance-learner`.
4. Keep the default settings.
5. Click `Deploy`.

Vercel should automatically detect this as a Next.js project.

## Step 3: Test the form

After deployment:

1. Open `/en/free-consultation`.
2. Submit a test name, email, and question.
3. Check your Formspree dashboard and your email inbox.

Formspree may ask you to confirm your email or verify the first submission before sending future notifications.

## Optional: Add environment variables in Vercel

The Formspree endpoint is already included in the code. However, you can still add it in Vercel for cleaner configuration.

In Vercel → Project → Settings → Environment Variables, add:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xbdqelwo
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

Then redeploy.

## How to add or edit articles in MVP version

For this first version, articles are stored in:

```text
content/articles.ts
```

To add a new article:

1. Open `content/articles.ts`.
2. Copy one existing article block.
3. Change the slug, date, category, and translations.
4. Commit to GitHub.
5. Vercel will redeploy automatically.

Later, if the project works, this can be upgraded to a CMS so articles can be uploaded from a web dashboard.

## Google AdSense

The site has ad placeholders now. After Google AdSense approval, replace or enhance:

```text
components/AdSlot.tsx
```

Do not apply for AdSense too early. It is better to first publish more original articles and let Google index the site.
