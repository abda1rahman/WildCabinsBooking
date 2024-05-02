## Cabins Booking Project 🏕️

### Overview
This project is a full-stack cabins booking platform developed with Next.js. It is designed for the city of Jordan and allows any user to book cabins, manage bookings, and provides an admin interface for managing cabins.

### Getting Started

<br/>
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

##Technologies Used
**Frontend**: Next.js, TypeScript, Tailwind CSS
**Backend**: MongoDB, Prisma ORM
**Authentication**: NextAuth.js (supports Google OAuth and GitHub OAuth)

## Features

- User authentication with Google and NextAuth
- Booking cabins for specific dates
- Admin dashboard for managing cabins and bookings
- Responsive design with Tailwind CSS

## Image Previews

| <img src="https://private-user-images.githubusercontent.com/115384907/327417757-83f4fd63-63ac-4578-94ef-a1bbd174840a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ2NTA5MzksIm5iZiI6MTcxNDY1MDYzOSwicGF0aCI6Ii8xMTUzODQ5MDcvMzI3NDE3NzU3LTgzZjRmZDYzLTYzYWMtNDU3OC05NGVmLWExYmJkMTc0ODQwYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUwMlQxMTUwMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNzc5N2ZjOTEyNmM3NThlOGVkNDY4NGUzMTM4MDExNTZlMDYyMzI3MjgwMjAwNDJiMmIzMTE2ZGM2OWYyMDI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Y1ZPRRVsU8YFPuJGl9zc6RO0jF9DxHJ2d6epVH4C3mw" alt="Mobile Image" width="200"> | <img src="https://private-user-images.githubusercontent.com/115384907/327417763-e58cb763-2eb0-42cc-84c8-147c8a2c135d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ2NTA5MzksIm5iZiI6MTcxNDY1MDYzOSwicGF0aCI6Ii8xMTUzODQ5MDcvMzI3NDE3NzYzLWU1OGNiNzYzLTJlYjAtNDJjYy04NGM4LTE0N2M4YTJjMTM1ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUwMlQxMTUwMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NWQwYzRhOGY2MzhiM2FiMWM1YTI0YTgzZjk4NTBmMDliMmQ5ZTA5NWNjNGYyOWFkNTc2NGVhYWYzZmNlZjQ3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.s9cWreY0Kar_9dDzzKbQl3tvFXcKjyRxNpuRntxwVaM" alt="Desktop Image" width="100%"> |

<br/>

## Demo

You can try out the live demo of the Cabins Booking Project by visiting the following link:

[Live Demo](https://cabins-booking-app.vercel.app/)
