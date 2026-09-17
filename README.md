# Inoki Cafe

A modern full-stack café website demo for Inoki Cafe, Chhindwara.

The project combines a responsive React frontend with a Node.js, Express, and MongoDB backend for dynamic menu data.

## Live Demo

**Website:** https://inoki.vercel.app/

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

## Features

- Responsive café landing page
- Modern café-focused design
- Dynamic menu loaded from MongoDB
- REST API for menu data
- Menu categories, descriptions, and pricing
- Responsive mobile navigation
- Café story and experience sections
- Contact and reservation section
- Google Maps integration
- Instagram and phone call links

## Project Structure

```text
INOKI/
├── README.md
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── lib/
│   │       └── api.js
│   └── ...
│
└── server/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── menuController.js
    ├── models/
    │   └── Menu.js
    ├── routes/
    │   └── menuRoutes.js
    ├── seed.js
    └── server.js
```

## API

The backend provides REST endpoints for menu management.

### Available Endpoints

- `GET /api/menu` — Get all available menu items
- `GET /api/menu/:id` — Get a single menu item
- `POST /api/menu` — Create a menu item
- `PUT /api/menu/:id` — Update a menu item
- `DELETE /api/menu/:id` — Delete a menu item

## Local Development

### Frontend

```bash
cd client
npm install
npm run dev
```

Create `client/.env`:

```env
VITE_API_URL=http://localhost:5000
```

### Backend

Open another terminal:

```bash
cd server
npm install
npm start
```

Create `server/.env`:

```env
MONGO_URI=your_mongodb_connection_string
```

The backend runs locally on:

```text
http://localhost:5000
```

## Database Seeding

The project includes a seed script for loading the initial menu data into MongoDB.

From the `server` directory:

```bash
node seed.js
```

> `seed.js` clears the existing menu collection before inserting the seed data, so it should be used primarily for development and demo setup.

## Environment Variables

### Client

```env
VITE_API_URL=http://localhost:5000
```

### Server

```env
MONGO_URI=your_mongodb_connection_string
```

Never commit real credentials or secret environment variables to GitHub.

## Deployment

The frontend is deployed using Vercel.

The backend uses Express and MongoDB Atlas and is deployed separately.

## Demo Status

This is a demonstration project and can be customized with the café's final branding, menu, contact information, social media accounts, opening hours, imagery, and other business details before production use.

## License

This project is intended as a demonstration project.
