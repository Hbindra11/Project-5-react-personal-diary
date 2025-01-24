# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Group Project 5: the Personal Diary project (source: LMS)

This project is designed to enhance your skills in React by building a basic-yet-useful, interactive diary application. You will create a user-friendly interface that displays daily entries sorted by date, with each entry presented as a card featuring a preview image and title. Users can click on a card to view full details in a modal window. Additionally, you will implement functionality to add new entries, ensuring they are validated and stored in localStorage. Utilizing TailwindCSS for styling, this project will also provide valuable experience in managing state and effects in a React application. 

- Features:-
 - Homepage:
Display a list of diary entries sorted by date (newest first).
Each entry should be displayed as a card with a preview image, date and title.
Clicking on a card should open a modal with the full entry details (title, date, image, content).
☝️This can be achieved by setting the desired card data in a state variable 😉
 - Add Entry Modal:
Action button “Add Entry” to open a modal for adding a new entry.
Check if there’s already an entry for the day. If so, prompt the user to return the next day.
If not, show a form asking for:
Title
Date
Image URL
Content
Validate that all fields are populated before submission.
On form submission, add the entry to a localStorage item as an array item.
 - Loading Entries:
On app load, load diary entries from localStorage.

And finally, Deploy the application as a static site on Render.
