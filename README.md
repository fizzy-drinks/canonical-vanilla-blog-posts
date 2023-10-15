# canonical-vanilla-blog-posts

This project was made using [Vanilla](https://vanillaframework.io/) and [Next](https://nextjs.org).

It attempts to replicate the following image:

![An image of an older version of Ubuntu's blog posts](README__example.png)

It pulls data from a sample API and populates the cards visible on screen.

## View project live

This project is live at [vanilla-project.lins.dev](https://vanilla-project.lins.dev), but you can run it
yourself using Node.js and NPM.

## Install and run

```
npm install
npm run dev
```

## Change the API source

Create a `.env.local` file, and set the `NEXT_PUBLIC_POST_API_URL` to your custom API.

```NEXT_PUBLIC_POST_API_URL=https://localhost:5000/posts```
