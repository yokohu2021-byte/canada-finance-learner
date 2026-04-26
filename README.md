# Canada Finance Learner

A multilingual financial education article site for English, French, and Chinese readers in Canada.

## What this MVP includes

- English, French, and Chinese routes: `/en`, `/fr`, `/zh`
- Article list and article detail pages
- Google AdSense placeholder components
- Free 1-hour consultation form page
- Basic About, Disclaimer, Privacy Policy, and Contact pages
- Ready for GitHub and Vercel deployment

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a new GitHub repository.
2. Upload all files in this folder.
3. Go to Vercel.
4. Click **Add New Project**.
5. Import the GitHub repository.
6. Click **Deploy**.

## Form setup

The form can work with Formspree, Tally, Airtable, or another form service.

Create `.env.local` from `.env.example` and add:

```bash
NEXT_PUBLIC_FORM_ENDPOINT="https://formspree.io/f/your-id"
NEXT_PUBLIC_CONTACT_EMAIL="your@email.com"
```

If no form endpoint is set, the form will open the user's email app with a prefilled message.

## Google AdSense setup

The site currently uses ad placeholders. After AdSense approval, replace the placeholder logic in `components/AdSlot.tsx` with your real Google AdSense script or ad unit code.

## Important boundary

This site is for financial education and information sharing only. It does not provide personal investment, tax, legal, or financial advice.
