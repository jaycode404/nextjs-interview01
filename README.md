## Drodat, Inc. Technical Assessment

Welcome to the Drodat, Inc. technical interview project. The purpose of this project is to evaluate your ability to work with modern web technologies in a practical setting. You'll be enhancing a map-based application built with Next.js, integrating Firebase authentication and Firestore. The project simulates real-world development tasks where you'll need to understand existing code, implement new features, and follow best practices for state management and component architecture. Your changes should demonstrate clean code, performance optimization, and thoughtful UI/UX decisions.

## Getting Started

First, run the development server:

```bash
npm install && npm  run dev
# or
yarn install && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

## Property Risk Dashboard

### Duration: 
2-4 hours
### Goal: 
Create a property risk assessment dashboard that displays and visualizes property data using modern web technologies
### Pay: 
This technical assessment is paid. You will be paid for 4 hours of work whether we hire you or not at a rate of 200mxn per hour. The total pay on the project is 800mxn.

### Project Overview
Create a web application using NextJS that displays a set of pre-defined properties on a map, shows their risk assessments, and allows users to view detailed property information. The application should demonstrate your ability to work with maps, handle data visualization, and create a responsive user interface.

### Technical Requirements
- Tech Stack<br />
- Next.js 14+<br />
- TypeScript<br />
- Firebase Authentication<br />
- Google Maps API<br />
- Tailwind CSS<br />
- Git version control<br />

### Core Features
- Authentication<br />
- Implement email/password authentication using Firebase<br />
- Protected dashboard route for authenticated users<br />
- Sign-in/sign-out functionality<br />

### Map Dashboard
- Display Google Map with 3-4 pre-defined properties from firestore database<br />
- Custom markers for each property found in the database<br />
- Click handling to show property details<br />

### Property Details Panel Or Popup
- Property information card<br />
- All of the following data is found in the firestore database for each property. This will demonstrate your ability to read from the firestore database and display relative data within the platform.<br />
- Risk score (0-100)<br />
- Roof type<br />
- Image<br />
- Color-coded risk levels (this is not included in the firestore database, you should create a function of some sort that tells you which color to display based on the damage score)<br />
- Number of times property has been viewed<br />
- This is preset to a value of 0 in the firestore database<br />
- This will demonstrate your ability to write to the firestore database for user actions on the web app<br />
- When someone clicks on a pin on the map, you should increase the relative field in Firestore by one<br />
- You should make the total number of views visible on the property details panel or popup you create<br />

### Required API Integration
- Google Maps JavaScript API<br />
- Firebase<br />

### UI Requirements
- Responsive design (mobile and desktop)<br />
- Loading states for data fetching<br />
- Error handling<br />

### Project Setup

1. In this project there are 3 pre-made pages:
```
src/app/sign-up/page.tsx
src/app/sign-in/page.tsx
src/app/page.tsx
```
And one file with the firebase credentials:
```
src/app/lib/firebase.ts
```

2. Add user sign up functionality to 'src/app/sign-up/page.tsx' using firebase authentication.

3. Connect firebase authentication to 'src/app/sign-in/page.tsx' to allow users to sign in.

4. Build out an interactive map by editing the files in the src/app/map folder to update the page at 'src/app/page.tsx'.

5. Implement a sign up / sign in flow to correctly redirect a new user to the correct pages.
