# Cordia - Chat

This is the frontend side of a real-time groupal chat app, based on discord, which I made purely as an academical project.

[API Repository](https://github.com/chrisdadev13/Cordia-API)

[Live Demo](http://cordia.vercel.app) :point_left:

Secret code for The Odin Project Group - 63e5a8c757610474dea176c5

## Features

## Users

- [x] Register / Log in / Log out
- [x] Create a chatroom
- [x] Join a chatroom
- [ ] Leave a chatroom
- [ ] Share group secret code

## Groups

- [x] Store members
- [x] Receive messages in real-time
- [x] Show messages in real-time
- [ ] Alert if an user joined
- [ ] Alert if an user is typing

### TODO

- [ ] Store messages in database
- [ ] Show messages history in chatrooms
- [ ] Allow users to communicate with other users

## Technologies used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://pi.reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [SocketIO](https://socket.io)

## Getting started

### Clone repository

```
git clone https://github.com/chrisdadev13/Cordia.git
cd Cordia
```

### Set up environment variables

```
VITE_API_URL=<Address of the server, e.g. http://localhost:8000/>
```

### Install packages and start client

```
npm i
npm run build
npm run preview
```
