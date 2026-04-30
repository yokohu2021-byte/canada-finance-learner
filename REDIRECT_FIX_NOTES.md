# Redirect Fix Notes

This version changes the root URL behavior.

Before:
- `https://canadafinancelearner.ca/` redirected to `/en`.

Now:
- `https://canadafinancelearner.ca/` directly renders the English homepage.
- `/en`, `/fr`, and `/zh` remain available as language versions.
- `www.canadafinancelearner.ca` can continue to redirect to `canadafinancelearner.ca` at the Vercel domain level.

Reason:
- This reduces redirect chains for Googlebot and AdSense crawler.
- It can help resolve Search Console redirect errors for root-domain URLs.
