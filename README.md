# Twimba 🐦

A mini Twitter/X clone built with vanilla JavaScript, HTML, and CSS. Twimba lets you post tweets, like them, retweet them, and view replies — all running entirely in the browser with no backend required.

## Features

- **Post a tweet** — Type into the "what's happening?" box and hit **Tweet** to add a new post to the top of your feed.
- **Like tweets** ❤️ — Click the heart icon to like/unlike any tweet. The like count updates instantly and the icon turns red when liked.
- **Retweet** 🔁 — Click the retweet icon to retweet/un-retweet a post. The retweet count updates and the icon turns green when active.
- **View replies** 💬 — Click the comment icon on any tweet to expand or collapse its thread of replies.
- **Live feed rendering** — The entire feed re-renders automatically whenever you interact with it, so counts and states always stay in sync.

## How to Use It

1. Open `index.html` in your browser (or run the project locally, see below).
2. Write something in the tweet box at the top and click **Tweet** to share it — it appears instantly at the top of the feed under your handle (`@Paarthvi`).
3. Browse the feed of existing tweets:
   - Tap the heart to like a tweet.
   - Tap the retweet icon to retweet it.
   - Tap the speech bubble to reveal any replies underneath that tweet.
4. All your likes, retweets, and new tweets update live in the same session (data resets on page refresh since there's no database — everything lives in `data.js` while the app is running).

## Running Locally

```bash
npm install
npm start
```

Then open the local server URL shown in your terminal. This project uses [Vite](https://vitejs.dev/) for local development — check their docs if you want to customize the build setup.

## Project Structure

| File | Purpose |
|---|---|
| `index.html` | Page markup — header, tweet input box, and feed container |
| `index.css` | All styling — layout, colors, icons, liked/retweeted states |
| `index.js` | App logic — rendering the feed, handling clicks (tweet, like, retweet, reply toggle) |
| `data.js` | The tweet data itself (handles, text, likes, retweets, replies, UUIDs) 

|<img width="527" height="857" alt="t" src="https://github.com/user-attachments/assets/368ae180-3a91-4f7e-83b3-718644d2edb6" />


It's a solid stepping stone toward understanding how frameworks like React handle state and rendering under the hood, since you're doing manually here what a framework would otherwise abstract away.

Happy tweeting! 🎉
