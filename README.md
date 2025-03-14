# Project 5: Personal Diary App

## Overview
The Personal Diary project is a web application built using React for the frontend framework and TailwindCSS for styling. The application allows users to maintain a personal diary by adding, viewing, and managing diary entries. The entries are stored in the browser's localStorage, ensuring data persistence across sessions.

## Features
- Display Diary Entries: The homepage displays a list of diary entries sorted by date, with the newest entries appearing first.
- Entry Cards: Each diary entry is displayed as a card that includes a preview image, date, and title.
- Entry Modal: Clicking on a card opens a modal that shows the full details of the entry, including the title, date, image, and content. This is achieved by setting the desired card data in a state variable.
## Add Entry Modal
- Add Entry Button: An action button labeled "Add Entry" opens a modal for adding a new diary entry.
- Entry Form: If no entry exists for the selected date, a form is displayed asking for the following details:
--Title
--Date
--Image URL
--Content

-Form Validation: All fields must be populated before the form can be submitted.
Form Submission: On submission, the new entry is added to a localStorage item as an array item.

##Loading Entries
- Initial Load: On application load, diary entries are loaded from localStorage and displayed on the homepage.

## State and Effects
- State Management: The application uses React's state management to handle the display and interaction of diary entries.
- Effects: React's useEffect hook is used to load diary entries from localStorage when the application mounts.

## Styling
- TailwindCSS: The application is styled using TailwindCSS, providing a modern and responsive design.

## Deployment
- Static Site: The application is deployed as a static site on Render: https://project-5-react-personal-diary.onrender.com/

## Conclusion
The Personal Diary project is a simple yet powerful application that demonstrates the use of React, TailwindCSS, and localStorage to create a functional and user-friendly diary application.
