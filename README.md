# Drive Now - Car Rental Reservation System

Welcome to **Drive Now**, a user-friendly and responsive car rental reservation platform that offers a smooth experience for customers and administrators. This system enables seamless browsing, booking, and management of cars while providing administrators with powerful tools to manage inventory and reservations.

## Table of Contents

- [Drive Now - Car Rental Reservation System](#drive-now---car-rental-reservation-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Public Pages](#public-pages)
    - [User Pages](#user-pages)
    - [Admin Pages](#admin-pages)
    - [Bonus Features](#bonus-features)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
    - [Running Tests](#running-tests)
    - [Building for Production](#building-for-production)
  - [Pages Overview](#pages-overview)
  - [Technology Stack](#technology-stack)
  - [Responsive Design](#responsive-design)
  - [Bonus Features](#bonus-features-1)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Features

### Public Pages
- **Home Page:** Browse and book cars, explore featured cars, and read customer testimonials.
- **Car Listing Page:** Filter and view all available cars with detailed descriptions and pricing.
- **Car Details Page:** View detailed information, images, and options for additional features.
- **About Us Page:** Learn about the company's history, team, and fleet.
- **Error Page:** Friendly 404 page and error messages from backend API.
- **User Authentication Pages:** Secure sign-up and sign-in forms with real-time validation.

### User Pages
- **User Dashboard:** Manage personal information, booking history, and payments.
- **Booking Page:** Search for cars, view details, and book cars with confirmation.

### Admin Pages
- **Admin Dashboard:** Manage cars, bookings, and user accounts. Approve or cancel bookings, handle returns, and generate reports.

### Bonus Features
- **Payment System:** Integrated payment gateway for secure transactions.
- **Theme Switcher:** Dark/light/system theme options for a personalized experience.

## Installation

### Prerequisites
- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/drive-now.git
   ```
2. Navigate to the project directory:
   ```bash
   cd drive-now
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your environment variables (e.g., API keys, database URLs).

5. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

6. Open your browser and visit `http://localhost:3000`.

## Usage

### Running Tests
To run tests, use the following command:
```bash
npm test
```
or
```bash
yarn test
```

### Building for Production
To create a production build, use:
```bash
npm run build
```
or
```bash
yarn build
```

## Pages Overview

- **Home Page:** Includes a banner, car search, featured cars, and customer testimonials.
- **Car Listing Page:** Displays available cars with filters.
- **Car Details Page:** Shows detailed car information and booking options.
- **About Us Page:** Company history, team, and fleet information.
- **User Dashboard:** Manage bookings, profile, and payments.
- **Admin Dashboard:** Manage inventory, bookings, and user accounts.

## Technology Stack

- **Frontend:** React, Redux, Tailwind CSS, shadcn
- **Backend:** Node.js, Express (for API integration)
- **Database:** MongoDB (or your chosen database)
- **Authentication:** JWT for secure user authentication
- **Payment Gateway:** AmarPay/SSLCommerz
- **Version Control:** Git

## Responsive Design

Drive Now is fully responsive and provides a seamless experience across all devices, including mobile, tablet, and desktop. The design is intuitive, user-friendly, and consistent with the brand's identity.

## Bonus Features

- **Payment System:** After returning a car, users can pay the rental amount via a secure payment gateway. Multiple payment methods are supported.
- **Theme Switcher:** Users can switch between dark, light, or system themes for a personalized experience.

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes. Make sure to write clear, concise commit messages and update the documentation if necessary.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please reach out to us at [support@drivenow.com](mailto:support@drivenow.com).