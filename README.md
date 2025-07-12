# JustTix – Movie Ticket Booking Platform


A full-stack movie ticket booking website built using the **MERN Stack** (MongoDB, Express, React, Node.js), with modern authentication via **Clerk**, background jobs via **Inngest**, and real-time movie data from the **TMDB API**.

🔗 [JustTix](https://just-tix.vercel.app/) <!-- Replace with actual link -->

---

## Overview

**JustTix** is your one-stop solution for effortless movie ticket bookings. Designed with a modern tech stack and powerful real-time integrations, JustTix lets users discover movies, pick seats, and book with ease — all while admins manage bookings like a pro.

Built using **MongoDB, Express, React, and Node.js**, and powered by tools like **Clerk**, **Inngest**, and **Stripe**, JustTix blends performance with seamless user experience.

---

## Features

### User
- Authentication via Clerk (Email/Password, OTP, Google)
- Browse movie listings with real-time TMDB integration
- Dynamic seat selection
- Secure payments via Stripe
- Retry payment with seat hold for 10 minutes
- Email confirmations and reminders

### Admin
- Add or remove movies
- View all bookings in a dedicated dashboard

### Background Jobs (via Inngest)
- Email all users when a new movie is added
- Send booking confirmation emails
- Send reminder emails before showtime
- Auto-release unconfirmed bookings after 10 minutes

---

## Tech Stack

| Layer          | Technologies                               |
|----------------|--------------------------------------------|
| Frontend       | React.js, Tailwind CSS                     |
| Backend        | Node.js, Express.js, MongoDB               |
| Authentication | [Clerk](https://clerk.dev)                 |
| Background Jobs| [Inngest](https://www.inngest.com)         |
| Email Service  | [Resend](https://www.npmjs.com/package/resend) |
| Payments       | [Stripe](https://stripe.com)               |

---

## User Sync with Clerk

We use **Inngest** to automatically sync user data from **Clerk** to our MongoDB database, ensuring real-time consistency without manual intervention.

---

##  Screenshots
**Home Page** 
<img width="1906" height="863" alt="Screenshot 2025-07-12 201017" src="https://github.com/user-attachments/assets/3c83dfb6-9606-4f8c-ae29-692a5a625def" />

**Movie Page**
<img width="1837" height="863" alt="Screenshot 2025-07-12 201050" src="https://github.com/user-attachments/assets/63ef1ce9-721d-4b41-ba10-fb7ae01de5d7" />

**Seat Selection Layout**
<img width="1716" height="862" alt="image" src="https://github.com/user-attachments/assets/4edd2059-ab41-4734-98f7-345cd2545701" />


## Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/sakshiji-here">
        <img src="https://avatars.githubusercontent.com/sakshiji-here" width="75px;" alt="Sakshi Singh" />
        <br />
        <sub><b>Sakshi Singh</b></sub>
      </a>
      <br />
      Frontend, Inngest
    </td>
    <td align="center">
      <a href="https://github.com/iamkrvishal07">
        <img src="https://avatars.githubusercontent.com/iamkrvishal07" width="75px;" alt="Vishal Kumar" />
        <br />
        <sub><b>Vishal Kumar</b></sub>
      </a>
      <br />
      Backend, Logic
    </td>
  </tr>
</table>
