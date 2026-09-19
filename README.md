# Web Components Team Directory

This project is a simple Team Directory web application created using
HTML, CSS, JavaScript, and custom Web Components.

## Features

- Displays team member information using reusable Web Components
- Uses attributes to provide dynamic user information
- Includes simple navigation for Home, Team, and About
- Uses CSS Grid and Flexbox for the page layout
- Includes a responsive layout for smaller screens
- Applies basic usability principles such as readable typography,
  consistent spacing, and clear navigation

## Web Components

The project includes four custom Web Components:

- `<app-header>` - Displays the application header
- `<app-nav>` - Provides navigation links
- `<user-card>` - Displays a team member's name, role, and profile image
- `<app-footer>` - Displays contact and footer information

## UI Design Principles

The components follow the principle of cohesion by giving each component
a specific responsibility. The design also supports the Open/Closed
Principle by using attributes such as `name`, `role`, `img-src`, `title`,
and `email` to customize components without modifying their original
classes.

## Project Structure

    LAB01-WEBCOMPONENTS/
    ├── components/
    │   ├── app-footer.js
    │   ├── app-header.js
    │   ├── app-nav.js
    │   └── user-card.js
    ├── images/
    │   ├── user1.png
    │   ├── user2.png
    │   └── user3.png
    ├── app.js
    ├── index.html
    ├── style.css
    └── README.md

## Running the Project

Because the project uses JavaScript modules, it should be opened through
a local development server such as the Live Server extension in VS Code.

1. Open the project folder in VS Code.
2. Open `index.html`.
3. Select **Open with Live Server**.
4. The Team Directory will open in the browser.

## Author

Leya Varghese
