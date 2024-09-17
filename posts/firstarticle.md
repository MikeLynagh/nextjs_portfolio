---
title: "How I built a portfolio using NextJS and hosted it for free"
date: "16-09-2024"
tags: ["nextjs"]
---

Welcome to my portfolio website. Feel free to browse around my tiny corner of the internet. 
I decided to start this portfolio as a way to document and share my learnings around software development and technology as I gain more experience in this field. When I first looked up, how to build a portfolio, almost every guide recommended starting with something like Wordpress or Wix or another website builder. 

I figured that wasn't for me. I can code. I want to have full control over my website. So I decided, what the hell, I will build this from scratch. I made a lot of mistakes along the way and I will share them here, along with some tips too. 

Why NextJS

NextJS is like the new cool kid on the block. Released back in 2016 by Vercel, it's a framework built on top of Facebook's popular framework, React. React is built on top of Javascript. Yep, you got that right, there's a lot of layers going on. 

That's pretty much how the whole internet works. Think of building a deck of cards. 

Anyways, NextJS has some handy features. One of the most important of those is that NextJS can generate pages on the server when new content is added. This means you get a fast website, with decent performance with sacrificing Search Enging Optimisation (SEO). That could all yet matter diddly squat if the AI tools keep getting better and better but that's for another day. Anyways, a great place to start is with the NextJS documentation. 

Using a Theme

I didn't actually use a theme for this website. It's all coded by hand. In hindsight, that wasn't the smartest move as it took a lot of hours to build. I did model this off a youtube video, feel free to check it out if you want. 

Hosting Content 

For now, everything is hosted on github. I use Markdown to write articles, they are saved to github and when I update the content and post to github, the page redeploys to vercel. It's an example of a continuous deployment approach. 