# Creative Agency - Project Portfolio

This is a React-based SPA built for a creative agency to manage and showcase their work. It's designed to be fast, responsive, and easy to update without needing to touch the code every time a new project drops.

## What it does
* **Live Search**: Filters through titles, descriptions, and tech stacks instantly.
* **Project Management**: A clean form to add new work to the list dynamically.
* **Fully Responsive**: Works on phones, tablets, and desktops using CSS Grid.
* **No-Reload UX**: Everything updates in real-time for a smooth feel.

## Technical Structure
I broke the app down into modular components to keep the code clean and maintainable:

* **State Hub (`App.jsx`)**: Handles the core logic, lifting state for the search and project list so everything stays in sync.
* **Data Flow**: Used props to pass actions (like adding a project) and data (the project list) down the tree.
* **Forms**: Built the project form as a controlled component with local state to handle inputs before pushing them to the main project array.
* **Hierarchy**: 
    `App` -> `ProjectForm` / `SearchBar` / `ProjectList` -> `ProjectCard`

## How to run it
1.  `npm install` to grab the dependencies.
2.  `npm run dev` to start the local server.
3.  Add a project or search through the existing ones to see it in action.

## Built With
* React
* JavaScript (ES6+)
* CSS3 (Grid & Flexbox)
