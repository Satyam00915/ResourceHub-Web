# Resource Hub

Welcome to the Resource Hub project! This application is designed to allow users to share and access various resources.

![Resource Hub Home](./Client/public/main.png)
_Home Page_
![SignUp](./Client/public/image.png)
_SignUp Page_
![Dashboard](./Client/public/dashboard.png)
_Dashboard Page_
![Upload](./Client/public/upload.png)
_Upload Page_
![MyContributions](./Client/public/MyContributions.png)
_Contributions Page_

## Features

- User authentication and authorization
- Resource sharing and management
- Responsive design for all devices
- Backend API with Node.js, Express, PostgreSQL, Zod, and Prisma

## Technologies Used

### Frontend

- React
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express
- PostgreSQL
- Prisma
- Zod

# Project Structure

````plaintext
project-root/
├── server/
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   ├── src/
│   │   ├── prisma.ts/
│   ├── Routes/
│   │   ├── index.js/
│   │   ├── Resource.js/
│   │   ├── User.js/
│   ├── zod/
│   │   ├── zod.js/
│   ├── middleware/
│   │   ├── middleware.js/
│   ├── index.js/
│   │
├── client/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   └── tailwind.config.js
├── .gitignore
├── README.md
└── package.json


## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Cloning the Repository

```bash
git clone https://github.com/yourusername/resource-hub.git
cd resource-hub

````
