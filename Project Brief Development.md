Project Brief & Development Rules
Product Vision
Minimalist Design: The website's design will be clean and uncluttered, with a focus on product images.

Color Palette: The dominant color will be white (#FFFFFF). Secondary colors will be pastel tones to create a soft, elegant feel.

Responsiveness: The design will be fully responsive and optimized for all devices, from mobile phones to desktops.

User Experience (UX): Navigation should be intuitive, and the checkout process should be simple and fast.

Brand Identity: The site should reflect a sense of luxury, quality, and timeless style.

Technical Decisions
Frontend
Framework: React. This choice provides a component-based architecture, which is ideal for building reusable UI elements.

Styling: Tailwind CSS. Its utility-first approach allows for rapid, consistent styling without leaving the HTML/JSX.

State Management: For a minimal app, we can start with React's built-in state management and Context API. If complexity increases, we can consider more robust solutions like Zustand.

Backend
Primary Language: Rust. Its performance and safety features are excellent for a scalable e-commerce backend, especially for critical services.

Secondary Language: Node.js. This can be used for services that require a quick build time or leverage the vast ecosystem of existing npm libraries.

Database: We will use a cloud-based NoSQL solution like Firebase Firestore for its scalability and ease of integration.

API: Our Rust backend will act as an API to handle business logic and interact with Firestore.

AI & Image Processing
Image Storage: We will use a cloud storage solution like Firebase Storage to host product images and videos. This offloads the burden from our application servers and is designed for web-scale serving.

Image-to-Model: To create "virtual mannequin" images, we will explore models and techniques. My recommendation would be to first try Midjourney or DALL-E for generating AI models from your product images. The Flux and Veo models you mentioned are also great but may require a more hands-on approach. We can create a separate AI service for this.

Development Rules
Version Control: All code changes will be managed via Git and hosted on GitHub.

Branching Strategy: We will use a simple feature-based branching strategy (main, develop, feat/new-feature).

Code Review: All pull requests (PRs) must be reviewed and approved by at least one team member before merging.

Documentation: Code must be well-commented, and any new features or changes to the architecture must be documented in a corresponding file (e.g., in this file or a separate docs folder).

API Design: Backend APIs will be RESTful and well-documented. We can use a tool like Swagger to generate API documentation.

UML Diagrams: We will generate UML diagrams (e.g., component diagrams, sequence diagrams) as the project evolves to keep the architecture clear.

AI Agent Workflow: An AI agent can take over the project by reading the entire repository content (code, docs, todos). The special "zipped message" will contain the state of the conversation and the project's current status, enabling seamless continuation.

Last Updated: September 9, 2025
