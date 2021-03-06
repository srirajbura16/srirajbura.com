--- 
  title: 'Members Only'
  live: 'https://mrgate.herokuapp.com/'
  github: 'https://github.com/srirajbura16/members-only'
---

I always wondered how authentication worked ever since I started learning to code. Because it's the processes we don't see when we log in or register. It happens in a flash, but yet so much goes on beyond the scene. In this Messageboard app, I demonstrate my learnings using passport and session cookies to implement user authentication.

Members-Only is an exclusive clubhouse where members can write anonymous posts. Inside the clubhouse, members can see who the author of a post is, but outside they can only see the story and wonder who wrote it.

The application is created using the following technologies:

- **_Node/Express_**: Creating the server.
- **_MongoDB_**: Storing users and posts.
- **_Mongoose_**: Querying data from MongoDB.
- **_Passport_**: User Authentication.
- **_Pug/Bootstrap_**: Frontend.

Along the way, I also learned to:

- Show errors to the client.
- Add middleware to check user authentication before responding with protected routes.
- Validate and sanitize user inputs.

You can visit the website <a href="https://mrgate.herokuapp.com/" target="_blank">here</a>. (the start-up is slow due to Heroku's free tier.) To become a member, use code _guarma_ and _tahiti_ for admin.
View Code <a href="https://github.com/srirajbura16/members-only" target="_blank">here</a>.
