# Module 3: Front end Development with React.
  To develop a To Do app, we will use React, a JavaScript library for building user interfaces.
  The Todo app will allow users to add a task,delete it and move up or down based on the priority.
  The list is stored in local storage, so it will persist even after the page is refreshed.
## Project Setup
1. Create a folder for the project and navigate to it in the command line.
2. Run the command `npm init -y` to create a package.json file.
  
3. Create folder and then run `npm create vite` commmand in the command line.Then give the project name, and then select REACT as framework, and javascript as variant. This will create all the file setup.
4. 1. Navigate to your `package.json` and modify the `scripts` object so that it looks like this example:

```json
  "scripts": {
    "dev": "vite",
    "start": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
```

* Note the addition of the `"start": "vite"` script.

2. Navigate to the `vite.config.js` file and edit the export object so that it looks like this example:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```
3.Install dependencies and start development.
##usage
1. Run `npm install` to install the dependencies.
2. Run `npm run dev` to start the development server.
3. Open your browser and navigate to `http://localhost:3000` to view the app.