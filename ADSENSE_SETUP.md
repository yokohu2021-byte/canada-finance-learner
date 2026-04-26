# AdSense Setup Notes

This version includes the Google AdSense site script in `app/layout.tsx` and an `ads.txt` file in `public/ads.txt`.

After uploading this version to GitHub and Vercel finishes redeploying, test:

- `https://canadafinancelearner.ca/ads.txt`
- `https://canadafinancelearner.ca/en/articles`

The global script is enough for AdSense site review and Auto ads. The article-body placeholders are already positioned in the middle of the article. To replace them with actual manual in-article ads later, you will need to create an Ad Unit in AdSense and provide the `data-ad-slot` ID.
