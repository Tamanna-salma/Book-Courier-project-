1.. Book Courier – Full Stack Web Application

Book Courier is a role-based full stack web application where users can browse and order books, librarians can manage books, and admins can manage users and content.

---

 Features ****

2... Authentication
- Email & Password Registration/Login (Firebase)
- Google Sign In
- JWT-based authorization
- Protected routes

3 ... Role Based Access
- ***Customer**
  - View books
  - Place orders
  - View invoices
  - Manage wish list

- **Librarian**
  - Add new books
  - Manage own books
  - View orders

- **Admin**
  - Manage users
  - Manage all books

4... Book Management
- Add books with image upload
- Category, tags, price, stock
- Role-based visibility

---

##  Tech Stack

5... Frontend
- React
- React Router
- Tailwind CSS + DaisyUI
- React Hook Form
- Axios
- SweetAlert2

6... Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

7... Authentication
- Firebase Authentication

---

8... Authentication Flow

1. User registers/logs in using Firebase
2. Backend generates JWT token
3. Protected routes use `axiosSecure`
4. Role is fetched from backend

---

 Folder Structure (Frontend)

