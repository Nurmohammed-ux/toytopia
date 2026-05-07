🧸 ToyTopia

A modern, responsive toy store website built with React and Tailwind CSS. This project showcases a beautiful e-commerce frontend for a toy store, featuring an interactive slider, product cards, and contact information.
Since ToyTopia is for kids/parents, try to keep the language warm but trustworthy. Use words like "Verified," "Premium," and "Safety" alongside fun words like "Joy," "Discovery," and "Playtime."

* React Tailwind CSS Vite


✨ Features

Responsive Design - Fully responsive layout that works on mobile, tablet, and desktop.

Image Slider - Auto-playing carousel showcasing featured toys using Slider style.

Product Cards - Beautiful cards displaying toy categories with images,price,ratings and available quantity.

Product Details - A page dedicated for product description with image,price,ratings and a button to add toy in your personal collecton name as "MyToys".Also a custom form with name and email to notify the manufacturer.

Profile - After login you'll see personal profile for user.Here, user can update his/her photo and name

My Toys - Here you can see how much toy you add in your collection and you can remove an item form there.

Modern UI - Clean and modern user interface with Tailwind CSS styling.


🛠️ Tech Stack

Frontend Framework: React v19.2.6
Styling: Tailwind CSS 4.2
Build Tool: Vite v8.0.10
Animation: AOS animation
Package Manager: npm
Icon: React Icon
Authentication: Firebase Authentication
Hosting: Firebase


📁 Project Structure

toytopia/

├─ src/ 

│  ├─ assets

│  ├─ components/

│  │  ├─ Footer

│  │  ├─ ForgetPassword

│  │  ├─ MyProfile

│  │  ├─ MyToys

│  │  ├─ Navbar

│  │  ├─ SocialLogin

│  │  ├─ ToyCard

│  │  └─ ToyDetails

│  ├─ context

│  ├─ firebase

│  ├─ layouts

│  ├─ pages

│  ├─ routes

│  ├─ App.css

│  ├─ App.jsx

│  ├─ index.css

│  └─ main.jsx

├─ index.html

├── package.json


🚀 Getting Started
 Prerequisites
1. Node.js (v18 or higher recommended)
   npm or yarn
   Installation
   Clone the repository:

2. git clone https://github.com/yourusername/toytopia.git
   cd toystore
   Install dependencies:

3. npm install
   Start the development server:

4. npm run dev
   Open your browser and visit http://localhost:5173


🎨 Components

Header
Navigation component with links to Home, Toys, and Contact sections.

SliderList
An auto-playing image carousel featuring highlighted toys and promotions.

CardList
A responsive grid of product cards showcasing different toy categories:

Educational - Wooden train sets and learning toys
Plush - Soft toys and teddy bears
Firebase Authentication System
ContactList
Contact information section with location, email, and phone details.
├── vite.config.js
└── eslint.config.js
