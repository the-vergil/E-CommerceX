# E-CommerceX

Welcome to the E-CommerceX project repository! This is an e-commerce web application built using React, Strapi, and Stripe. E-CommerceX is designed to provide a dynamic and responsive shopping experience, offering a wide range of products and categories. Users can browse products, subscribe to newsletters, and make secure payments through Stripe.

[![Watch the video](https://github.com/the-vergil/E-CommerceX/blob/master/project_ss.png)](https://github.com/the-vergil/E-CommerceX/blob/master/project_video.mp4)

## Table of Contents
- Features
- Getting Started
- Prerequisites
- Installation
- Configuration
- Usage
- Contributing
- License

## Features
E-CommerceX offers the following key features:
- Product Catalog: Users can browse a variety of products, organized into categories.
- Subscription: Users can subscribe to a newsletter by providing their email address. Subscribed users will receive updates and promotions.
- Secure Payments: Stripe is integrated as a payment gateway, ensuring secure and seamless payment processing.
- Dynamic and Responsive: The website is designed to be dynamic and responsive, adapting to different screen sizes and providing an engaging user experience.

## Getting Started
Prerequisites
Before you get started with E-CommerceX, make sure you have the following prerequisites installed:

- Node.js: Install Node.js from https://nodejs.org/

### Installation
1. Clone this repository to your local machine:
```
git clone https://github.com/yourusername/e-commercex.git
```
2. Navigate to the project directory:
```
cd e-commercex/client/
```
3. Install the project dependencies using npm:
```
npm install
```

## Configuration
### Strapi Setup
E-CommerceX uses Strapi as a database to store products and categories. Follow these steps to configure Strapi:
1. Install Strapi globally:
```
npm install strapi@beta -g
```
2. Navigate to the api directory in the project and run the Strapi server:
```
cd api
npm run develop
```
3. Follow the Strapi setup wizard to create an admin account and configure the content types (Products, Categories) needed for your store.
4. Configure the Strapi API endpoints in your React application by updating the src/config/api.js file.

## Stripe Configuration
E-CommerceX uses Stripe as the payment gateway. To configure Stripe, follow these steps:
1. Sign up for a Stripe account at https://stripe.com.
2. Obtain your API keys (Publishable and Secret) from your Stripe dashboard.
3. Set your Stripe API keys in the React application by updating the src/config/stripe.js file.

## Usage
To run E-CommerceX, start both the Strapi server and the React application:
1. Start the Strapi server in the api directory:
```
cd api
npm run develop
```
2. In a separate terminal, start the React application from the root directory:
```
npm start
```
The E-CommerceX website should now be accessible at http://localhost:3000.

## Contributing
We welcome contributions to E-CommerceX. If you'd like to contribute, please follow our contribution guidelines.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.
