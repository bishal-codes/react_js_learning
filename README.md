# Frontend Interview Kit

This repository contains a collection of resources for frontend developers prepared to get into the software industry. This is intended to be a guide for frontend developers to prepare for interviews and to get a better understanding of frontend development. It is not a complete and comprehensive guide, and is documented and shared in the site while self-learning and preparing for interviews.

## Table of Contents

- [Basics Setup](#basics-setup)
  - [Project Setup](#project-setup)
- [Web Fundamentals](#web-fundamentals)
  - [HTML](#html)
  - [CSS](#css)
    - [CSS Properties](#css-properties)
  - [JavaScript](#javascript)
    - [DOM Properties](#dom-properties)
  - [Project 1 - Create a simple calculator](#simple-calculator)
- [Frontend Frameworks/Libraries](#frontend-frameworks-libraries)
  - [Tailwind CSS](#tailwind-css)
  - [Shadcn/UI tailwind CSS Library](#shadcnui-tailwind-css-library)
- [Frontend Tools (Build Tools, Package Managers, etc.)](#frontend-tools)
- [Resources](#resources)

# Basics Setup

Before you start with the frontend development, you need to set up your environment. Here are some of the tools you need to install:

> Node.js, npm, Visual Studio Code, Git, Chrome Browser.

1. **Node.js**

   - a `JavaScript runtime` built on Chrome's V8 JavaScript engine.
   - helps to execute JavaScript code outside of a browser.
     You can download it from [here](https://nodejs.org/en/).
     To check if Node.js is installed, run the following command in your terminal:

     ```bash
         node -v
     ```

   - If you see the version of Node.js, it means it is installed.

2. **npm**

   - a package manager for JavaScript.
   - installed automatically when you install Node.js.
     To check if npm is installed, run the following command in your terminal:

     ```bash
         npm -v
     ```

   - If you see the version of npm, it means it is installed.

3. **Visual Studio Code**

   - a source-code editor developed by Microsoft.
   - you can download it from [here](https://code.visualstudio.com/).

4. **Git**

   - a distributed version-control system
   - tracks changes in source code during software development.
   - you can download it from [here](https://git-scm.com/).
     To check if Git is installed, run the following command in your terminal:

     ```bash
         git --version
     ```

   - If you see the version of Git, it means it is installed.

5. **Chrome Browser**

   - a web browser developed by Google.
   - chrome dev tools are very useful for frontend developers.
   - you can download it from [here](https://www.google.com/chrome/).

[Back to Top](#table-of-contents)

### Project Setup

After installing the above tools, you need to set up a project to start with frontend development. Here are the steps to set up a project:

1. **Create a new directory**

   - Create a new directory for your project.
   - To create a new directory, run the following command in your terminal:

     ```bash
         mkdir project-name
     ```

   - Replace `project-name` with the name of your project.

> `Note: all the topics will be covered in their respective sections.`

2. **Navigate to the project directory**

   - Navigate to the project directory.
   - To navigate to the project directory, run the following command in your terminal:

     ```bash
         cd project-name
         // open the project in visual studio code
         code .
     ```

   - Replace `project-name` with the name of your project.

3. **Initialize the project**

   - Initialize the project with npm.
   - To initialize the project with npm, run the following command in your terminal:

     ```bash
         npm init -y
     ```

     - This will create a `package.json` file in your project directory.

4. [**Install Vite.js**](#vitejs)
5. **Navigate to the project directory**

   ```bash
       cd project-name
   ```

   - Replace `project-name` with the name of your project.

6. **Install dependencies**

   - Install the dependencies required for the project.
   - To install the dependencies, run the following command in your terminal:

   ```bash
         npm install
   ```

7. **Start the development server**

   - Start the development server to see the output.
   - To start the development server, run the following command in your terminal:

     ```bash
         npm run dev
     ```

   - This will start the development server and open the browser with the output.

8. [**Setup the styling framework**](#tailwind-css)
9. [**Install Shadcn/UI tailwind CSS Library**](#shadcnui-tailwind-css-library)

[Back to Top](#table-of-contents)

# Web Fundamentals

Before you start with frontend development, you need to understand the basics of web development. Here are some of the fundamentals of web development:

### HTML

- HTML stands for `HyperText Markup Language`.
- It is the standard markup language for creating web pages.
- It describes the structure of web pages using markup.

[Back to Top](#table-of-contents)

### CSS

- CSS stands for `Cascading Style Sheets`.
- It describes how HTML elements are to be displayed on the screen.
- It is used to style the layout of web pages.

### CSS Properties

- `box-shadow`: adds shadow to an element.

  ```css
  box-shadow: 10px 10px 5px grey; /* horizontal offset, vertical offset, blur radius/spread, color */
  ```

- `backdrop-filter`: applies a filter to the backdrop of the element.

  ```css
  backdrop-filter: blur(10px); /* applies a blur effect to the backdrop */
  ```

- `display`: specifies the display behavior of an element.

  ```css
  display: block; /* displays an element as a block element */
  display: inline; /* displays an element as an inline element */
  display: inline-block; /* displays an element as an inline-level block container */
  display: none; /* hides an element */
  ```

- `grid`: a layout system that consists of columns and rows.

  ```css
  display: grid; /* displays an element as a grid container */
  grid-template-columns: 100px 100px 100px; /* defines the columns of the grid */
  grid-template-rows: 100px 100px 100px; /* defines the rows of the grid */
  ```

- `grid-column/row`: specifies the grid lines on which an item will be placed.

  ```css
  grid-column: 1 / 3; /* places an item from column line 1 to column line 3 */
  grid-row: 1 / 3; /* places an item from row line 1 to row line 3 */
  ```

[Back to Top](#table-of-contents)

### JavaScript

- JavaScript is a `high-level programming language`.
- It is used to make web pages interactive.
- It is used to create dynamic content on web pages.

### DOM Properties

- `innerText`: sets or returns the text content of an element.

  - focuses on the rendered text content (visible text) of an element.

  ```javascript
  document.getElementById("demo").innerText = "Hello, World!";
  ```

- `innerHTML`: sets or returns the HTML content of an element.

  - focuses on the HTML content (including tags) of an element.

  ```javascript
  document.getElementById("demo").innerHTML = "<h1>Hello, World!</h1>";
  ```

- `textContent`: sets or returns the text content of an element.

  - ignores all HTML tags and returns only the text.

  ```javascript
  document.getElementById("demo").textContent = "Hello, World!";
  ```

  | innerText                                                                        | textContent                                                                                                          |
  | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
  | reads text rendered on the screen                                                | reads text as it is in the markup                                                                                    |
  | returns the content rendered on the screen                                       | returns the content as it is in the markup                                                                           |
  | ignores all the HTML tags and the hidden element (display: none)                 | returns the content as it is in the markup but does not consider the style and returns text even though it is hidden |
  | ignores html markup, but recognizes formatting like line breaks and white spaces | ignores markup, line breaks, and white spaces, and all text is printed on same line                                  |

  [Back to Top](#table-of-contents)

  ### String Methods

  - `slice()`: extracts a part of a string and returns a new string.

    - StartIndex: The position where to begin the extraction. First character is at index 0. If negative, it is treated as str.length + StartIndex. it includes the character at this position.
    - EndIndex: The position where to end the extraction. The character at this position will not be included.

    ```javascript
    let str = "Hello, World!";
    let res = str.slice(7, 12); // returns "World"
    ```

[Back to Top](#table-of-contents)

### Simple Calculator

- learn HTML, CSS, and JavaScript by creating a simple calculator.

[Back to Top](#table-of-contents)

# Frontend Frameworks Libraries

### Vite.js

- a frontend build tool.
- provides a faster and leaner development experience for modern web projects.
- makes use of native ES module imports to handle dependencies.
- provides features like hot module replacement, optimized build, and more.

  - To install Vite.js, run the following command in your terminal:

    ```bash
        npm create vite@latest project-name -- --template react
    ```

  - can choose the template based on your project requirements. Here, we are using the react template.

    > template options: vue, react, preact, lit-element, svelte, vanilla.

  - Replace `project-name` with the name of your project.
  - use . in the place of project-name to install in the current directory.

  - To start the development server, run the following command in your terminal:

    ```bash
        npm run dev
    ```

  - This will start the development server and open the browser with the output.

### Tailwind CSS

- a utility-first CSS framework.
- provides low-level utility classes to build custom designs.
- can be used to build modern web applications.

  - To install Tailwind CSS, run the following command in your terminal:

    ```bash
        npm install tailwindcss@latest postcss@latest autoprefixer@latest
    ```

  - Create a `tailwind.config.js` file in the root directory of your project.

    ```bash
        npx tailwindcss init -p
    ```

  - Create a `postcss.config.js` file in the root directory of your project.

    ```bash
     /** @type {import('tailwindcss').Config} */
     export default {
     content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
        extend: {},
     },
     plugins: [],
     }
    ```

  - Create a `styles.css` file in the `src` directory of your project.

    ```bash
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ```

  - Import the `styles.css` file in the `index.js` file.

    ```bash
        import './styles.css';
    ```

  - Now, you can use Tailwind CSS classes in your project.

  [For more and latest](https://tailwindcss.com/docs/guides/vite)

[Back to Top](#table-of-contents)

### Shadcn/UI tailwind CSS Library

- a collection of components built using Tailwind CSS.
- provides a set of components that can be used to build modern web applications.

  - To install Shadcn/UI tailwind CSS Library, run the following command in your terminal:

    ```bash
        npm install @shadcn/ui
    ```

  - Edit tsconfig.json file

    ```bash
     {
    "files": [],
    "references": [
     {
        "path": "./tsconfig.app.json"
     },
     {
        "path": "./tsconfig.node.json"
     }
    ],
    "compilerOptions": {
     "baseUrl": ".",
     "paths": {
        "@/*": ["./src/*"]
     }
    }
    }
    ```

  - Edit tsconfig.app.json file

  ```bash
     {
  "compilerOptions": {
     // ...
     "baseUrl": ".",
     "paths": {
        "@/*": [
        "./src/*"
        ]
     }
     // ...
  }
  }
  ```

  [For more and latest](https://ui.shadcn.com/docs/installation/vite)

[Back to Top](#table-of-contents)

# Resources

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [Chrome Browser](https://www.google.com/chrome/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Vite.js](https://vitejs.dev/guide/)
- [Tailwind CSS installation in VITE.js](https://tailwindcss.com/docs/guides/vite)
- [Shadcn/UI tailwind CSS Library](https://ui.shadcn.com/docs/installation)

[Back to Top](#table-of-contents)
