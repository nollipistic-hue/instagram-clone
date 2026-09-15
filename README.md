# Instagram Clone

A full-stack Instagram clone built with React, Node.js, and MongoDB.

## Features

- User Authentication (Sign up, Login, Logout)
- Create, Edit, Delete Posts
- Like and Unlike Posts
- Comments on Posts
- Follow/Unfollow Users
- User Profiles
- Feed with Real-time Updates
- Image Upload
- Search Functionality

## Tech Stack

### Frontend
- React.js
- Redux for State Management
- Axios for API Calls
- Tailwind CSS for Styling
- React Router for Navigation

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for Authentication
- Multer for Image Upload
- Cloudinary for Image Storage

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/instagram-clone
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend folder:

```
REACT_APP_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm start
```

## Project Structure

```
instagram-clone/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   └── App.js
│   └── public/
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get post by ID
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `POST /api/users/:id/follow` - Follow user
- `POST /api/users/:id/unfollow` - Unfollow user

### Comments
- `POST /api/posts/:id/comments` - Add comment
- `DELETE /api/comments/:id` - Delete comment

### Likes
- `POST /api/posts/:id/like` - Like post
- `POST /api/posts/:id/unlike` - Unlike post

## License

MIT
