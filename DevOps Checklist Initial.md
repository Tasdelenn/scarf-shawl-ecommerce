DevOps Checklist & Initial Setup (Phase 1)
1. GitHub Repository Setup
[x] Create a new repository on GitHub.

Name the repository (e.g., scarf-shawl-ecommerce).

Initialize with a README.md file.

Choose a .gitignore template for Node.js and Rust.

[x] Clone the repository to your local machine.

Use the command: git clone <repository_url>

[x] Copy initial project files.

Move the README.md, project_brief_and_development_rules.md, and todos.md files into the cloned local repository folder.

[x] Commit and push the initial files.

git add .

git commit -m "Initial project setup and documentation"

git push origin main

22. Frontend Project Setup (React)
[x] Create the React app.

[x] Install Tailwind CSS.

[ ] Configure Tailwind CSS.

Crucial Step: Update the tailwind.config.js file with the specified content to configure the file paths.

[ ] Add Tailwind directives to CSS.

Crucial Step: Open scarf-web/src/index.css and replace all existing content with the three @tailwind directives below. This is the entry point for all Tailwind styles.

[ ] Test the setup.

Add a simple Tailwind class to a component (e.g., <h1 className="text-3xl font-bold underline">Hello world!</h1>) to confirm it's working.

3. Backend Project Setup (Rust)
[ ] Install Rust.

If not already installed, use rustup: curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

[ ] Create a new Rust project.

cargo new scarf-api --bin

cd scarf-api

[ ] Add a web framework.

For this project, we can start with axum for simplicity and performance:

Add axum to your Cargo.toml file under [dependencies].

[ ] Test the API setup.

Write a basic "Hello World" endpoint to ensure the server runs.

4. Cloud & Database Setup (Firebase)
[ ] Create a Firebase project.

Go to the Firebase console and create a new project.

[ ] Set up Firestore and Storage.

Enable Firestore and create a new database. Choose "Start in production mode" for security and set the location.

Enable Firebase Storage.

[ ] Generate credentials for Rust.

In Firebase console, go to Project Settings > Service Accounts.

Generate a new private key JSON file. IMPORTANT: DO NOT commit this file to GitHub!

Next Steps: After completing these steps, we can move on to implementing the first tasks from the todos.md file.
