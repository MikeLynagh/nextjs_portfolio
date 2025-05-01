---
title: "How I built an AI app to Help Physiotherapists create home exercise programmes"
date: "29-04-2025"
tags: ["AI", "Software Development"]
---

## TLDR:

This is a blog post about how I built an AI app to help physiotherapists create home exercise programmes. It describes the process and tech stack I used. If you're interested in the website, here is the link [PhysioRehabAI](https://physio-ai-brown.vercel.app/)


A few weeks ago, I was looking for a project to work on that would help me learn more about building AI apps. I also wanted to build something that would be useful. Then, I was chatting to a friend who works as a physiotherapist and they asked, 

"Cound AI help to quickly created rehab programmes for patients?"

It was a great question. I immediately thought "YES, they can, but how?". 
I was already experimenting with AI apps and wanted to build something real - not just another to do app clone. So I decided to build a simple MVP that lets physiotherapists create home exercise programmes by using AI to generate them. 

This sounded like a fun project. Interesting tool. Opportuntiy to get on the vibe code train and build another web app wrapper around an LLM! I can hear the groans already. 

### The Idea 

The goal was to let a person type something like: 

- "Client is 3 weeks post hamstring strain. Create a specific strength-focused programme, they want to return to running in 3 weeks". 

and get back a structured, evidence-based programme, with instructions, sets and reps. 

I figured out it would be helpful to add some sort of visual demo and then have a way of sharing that programme either as a PDF or to be able to send it via email. 

### The Tech Stack 

I kept things simple and stuck to what I know. 

* **Frontend**: React.js - a simple interface with a chat-style input and a PDF preview
* **Backend**: Node.js with Express, deployed on Vercel
* **AI Model**: Deepseek's chat API  
* **YoutTube API**: To fetch demo videos for each exercise
* **EmailJS**: To send the PDF via email 
* **Database - Supabase**: To collect feature requests via a form where users can submit suggestions and upvote ideas. 

### The Prompts 

When it comes to having good outcomes with LLMs, the most important part is the prompt. Open AI has really good documentation on this. You can check out their cookbooks [here](https://cookbook.openai.com/). 

When you interact with an LLM through an API, you can pass in a system prompt. This is a prompt that is designed to give the LLM a general idea of what you want to achieve. 

The user prompt is the prompt that you pass in to the LLM to get the response. 

In my case, the system prompt was much more important that the user response. The more detailed and specific the system prompt, the less work for the user to do. 

Here is a sample of what I used: 

```javascript 
const SYSTEM_PROMPT = `You are an expert evidence-based physiotherapist assistant... 

When generating programs, strictly follow this format:

- **Exercise: [Exercise Name]**
  **Instructions:** [Clear instructions]
  **Sets/Reps:** [e.g. 3 sets of 12]

Here I included a sample output to model.

### Notes:
[Precautions or progression advice]

Important rules:
1. No intro or outro text
2. Use this markdown format exactly
3. Include 4 exercises`
```

Getting this part right took trial and error. In my case, I was parsing the response into a structured format as I needed to create a PDF that could be sent by email. After a lot of tweaking an different inputs, I landed on a prompt that gave me a consistent, clean output. This can be harder than you think. 

### Handling Real-World Challenges 
There are downsides to using LLMs through an API. They are slow. As in it takes time to get a response. People do not like waiting for long for responses when it comes to web apps or web pages in general. 

Side-tangent, but do you know why a lift has a mirror in it? People figured out years ago that they couldn't speed up lifts too much so instead they added a mirror. People are vain and like to look at themselves. This distracts them from becoming annoyed by the speed of the lift. In web apps, people add a loading spinner. Notice the next time you have no internet connection, google have built a small game to play.

So that is one challenge. Another issue is timeouts. When you host on platforms like Vercel, they have an automatic timeout limit. In theory this is a good idea. For a typcial API call, the response should be quick, as in milliseconds. So it makes sense to have a limit. The problem with an AI request is that your response may take up to a minute or more. I won't go into details here but there are techniques to get around this such as using a streaming response or caching. Anyway, I figured out after a while that I could rework my backend to handle longer response times and increase the time limit on Vercel. 

If you get stuck on something like this from a hosting platform, note to self: "read the damn docs". 

### What's Next 
The MVP is now live here and anyone can try it out [here](https://physio-ai-brown.vercel.app/). I haven't open-sourced it (yet) but I do plan to keep improving it. I have had some feedback on features to improve and add. 

Right now for me, it's about learning, shipping and getting better at taking an idea from 0 to 1. 











