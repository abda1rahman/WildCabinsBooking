## Cabins Booking Project 🏕️

### Overview
This project is a full-stack cabins booking platform developed with Next.js. It is designed for the city of Jordan and allows any user to book cabins, manage bookings, and provides an admin interface for managing cabins.

### Getting Started

1. Set Up Environment Variables:

- Create a .env file in the root directory of your project.
- Add the following variables.

```
DATABASE_URL="your_mongodb_connection_string"
NEXTAUTH_SECRET="your_nextauth_secret"
GITHUB_ID="your_github_id"
GITHUB_SECRET="your_github_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
```

2. Install Dependencies:

```bash
npm install
```

3. Start the Application:

```bash
npm run dev
```

4. Access the application at http://localhost:3000

## Technologies Used
**Frontend**: Next.js, TypeScript, Tailwind CSS
**Backend**: MongoDB, Prisma ORM
**Authentication**: NextAuth.js (supports Google OAuth and GitHub OAuth)

## Features

- User authentication with Google and NextAuth
- Booking cabins for specific dates
- Admin dashboard for managing cabins and bookings
- Responsive design with Tailwind CSS

## Image Previews

![illustrator-image](https://github.com/abda1rahman/WildCabinsBooking/assets/115384907/be3be2bf-52fb-49fd-88fe-5ae57a15b007)

<br/>

## Demo

You can try out the live demo of the Cabins Booking Project by visiting the following link:

[Live Demo](https://cabins-booking-app.vercel.app/)
