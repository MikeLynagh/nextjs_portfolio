---
title: "REST APIs A Few Ideas Worth Sharing"
date: "25-05-2025"
tags: ["REST APIs"]
---

## TLDR:

I've been reading a lot about REST APIs lately. I wanted to gather up some good ideas and collect them in a single home. I thought it might be helpful to make that home an article that I can refer back to the next time I have to create one. There might be a few ideas that could help you too when it comes to creating better REST APIs. 

## The basics of REST APIs

Now first off, I wrote this to learn more about REST APIs. No one asked me to. The internet is permissionless though. You don't need permission to write. You don't have to read this article. But if you do, you will have a better idea of REST APIs in 5 minutes. I guarantee it! 

Creating a great REST API isn't just about making endpoints that work—it's about making them easy to use, scalable, consistent, and developer-friendly. This guide outlines some practical tips for building REST APIs that perform well and are a joy to integrate with.

Inspired in part by [Slack's API design principles](https://slack.engineering/how-we-design-our-apis-at-slack/), here’s a breakdown of what works in the real world.

---

## 📌 Guiding Principles

### 1. **Do One Thing and Do It Well**

Each endpoint should serve a clear purpose. Keep them focused and modular. Trying to do too much in a single endpoint leads to bloat and confusion.

### 2. **Optimize for Developer Experience**

Aim to minimize the time it takes for someone to get started. Slack uses "Time to First Hello World" as a metric—ideally under 15 minutes to learn about the platform, create an app, and make the first API call.

### 3. **Return Clear, Consistent Errors**

Use meaningful, descriptive error codes. Avoid vague responses like `invalid_auth`. Instead, provide context with error types like:

- `name_too_long` instead of `invalid_name`
- `token_revoked` instead of `invalid_auth`
- `not_an_admin_user` instead of `access_denied`
- `missing_user_id` instead of `bad_input`

Also, include human-readable descriptions when it helps clarify the error. I didn't really understand how bad my error message ideas were until I read the article by Slack.

Once you've got those big 3 ideas in your head, you are well on your way to creating great REST APIs. But there's a few other things we should mention.

---

## 🔧 Basics of REST

REST (Representational State Transfer) is an architectural style—not a strict protocol. It emphasizes:

- Stateless communication
- Cacheable responses
- Resource-based design (usually accessed via HTTP)

### Use JSON

Most modern APIs accept and respond with JSON. I'm sure there are a million reasons not to use JSON. Honestly though, if you are just starting out, use JSON. Thank me later. Make sure to:

- Accept JSON payloads in requests
- Respond with `Content-Type: application/json` in headers
- Use `res.json()` in Express or your equivalent framework

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/", (req, res) => {
  res.json(req.body);
});

app.listen(3000, () => console.log("Server started on port 3000"));
```
The above is an example of the most basic version to start with, we will flesh this out as we go. 
---

### 🧭 Resource Naming and Structure

#### Use Nouns in Endpoints

Use HTTP methods to act on nouns (resources):

- `GET /todos/` – Retrieve all todos
- `POST /todos/` – Create a new todo
- `PUT /todos/:id` – Update a todo by ID
- `DELETE /todos/:id` – Delete a specific todo

The main ones you will use are GET and POST. Those are the ones you want to be more familiar with. People might say what about PATCH and DELETE. That's fine later on. For now, focus your time on GET AND POST, that will get you started on almost every type of project you can imagine. 

#### Use Logical Nesting

When resources contain other resources (e.g. articles have comments), nest endpoints:

```js
app.get("/articles/:id/comments", (req, res) => {
  const { id } = req.params;
  const comments = []; // Get comments by article ID
  res.json(comments);
});
```

Avoid deep nesting beyond 2–3 levels. It gets hard to manage and understand.

---

### ⚠️ Standard Error Codes

For most day to day tasks, the list below should cover your use cases. Be familiar with these. Use appropriate HTTP response codes to indicate the outcome of a request:

- CODE    MEANING 
- 200     OK 
- 201     Created 
- 400     Bad request (invalid input)
- 401     Unauthorised (not logged in)
- 403     Forbidden (no permission)
- 404     Not Found
- 500     Internal Server Error
- 502     Bad Gateway 

---

### 🔍 Filtering, Sorting, and Pagination

APIs often sit in front of large datasets. It’s inefficient (and sometimes dangerous) to return everything at once.

Use query parameters to filter and paginate results:

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const employees = [
  { firstName: 'Jack', lastName: 'Black', age: 20 },
  { firstName: 'John', lastName: 'Black', age: 30 },
  // More employees...
];

app.use(bodyParser.json());

app.get("/employees", (req, res) => {
  const { firstName, lastName, age } = req.query;
  let results = [...employees];

  if (firstName) results = results.filter(e => e.firstName === firstName);
  if (lastName) results = results.filter(e => e.lastName === lastName);
  if (age) results = results.filter(e => e.age === +age);

  res.json(results);
});
```

**Example request:**

```bash
/employees?lastName=Black&age=30
```

#### Pagination Example

For pagination, include `page` and `limit` parameters:

```js
app.get("/employees", (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const start = (page - 1) * limit;
  const paginated = employees.slice(start, start + Number(limit));
  res.json(paginated);
});
```

---

### 🚀 Caching for Performance

Repeatedly querying your database for the same data is expensive. Caching helps return data faster and reduces server load. There are a lot of different ways to do caching. If you're using Express, this is an easy way to do it. 

Using `apicache` with Express:

```js
const express = require('express');
const bodyParser = require('body-parser');
const apicache = require('apicache');

const app = express();
let cache = apicache.middleware;

app.use(cache('5 minutes')); // Cache all responses for 5 minutes
app.use(bodyParser.json());

const employees = [
  { firstName: 'Jane', lastName: 'Smith', age: 20 },
  { firstName: 'John', lastName: 'Smith', age: 30 },
  { firstName: 'Mary', lastName: 'Green', age: 50 },
];

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

You can also set Cache-Control headers or use Redis/memory stores for more advanced caching.

---

## 🧠 Final Thoughts

Designing good REST APIs isn’t about reinventing the wheel—it’s about doing the simple things consistently:

- Stick to conventions
- Use HTTP status codes properly
- Return JSON
- Optimize for performance through pagination, filtering, and caching
- Make it easy for developers to use your API

And most importantly, design for scale and clarity from day one.

Thanks for reading!