# React Apollo Client Project

This project is a React-based frontend application using **Vite**, **TypeScript**, and **Apollo Client** to interact with a GraphQL API.

## 🚀 Technologies Used

- **Vite**: Fast and modern build tool for frontend development.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed JavaScript for better maintainability and developer experience.
- **Apollo Client**: State management and data fetching for GraphQL.
- **Tailwind CSS** (Optional): Utility-first CSS framework for rapid UI development.

---

## 🌐 Live Demo

You can view the live version of this project at:  
[https://mehdiblog.vercel.app/](https://mehdiblog.vercel.app/)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

Ensure you have **Node.js** and **npm** or **yarn** installed on your machine.

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 3. Create a `.env.local` File

Create a `.env.local` file in the root of your project and add the following environment variables:

```
VITE_BASE_API=https://api.bettermode.com
VITE_AUTH_TOKEN=your-auth-token-here
```

- **VITE_BASE_API**: The base URL for the API.
- **VITE_AUTH_TOKEN**: Your API authentication token.

### 4. Run the Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

This will start the development server at [http://localhost:3000](http://localhost:3000) (or another port if specified).

### 5. Build for Production

To create an optimized build for production:

```bash
# Using npm
npm run build

# Using yarn
yarn build
```

The production-ready files will be generated in the `dist` folder.

### 6. Preview Production Build

To preview the production build locally:

```bash
# Using npm
npm run preview

# Using yarn
yarn preview
```

---

## 📂 Project Structure

```bash
.
├── src
│   ├── assets          # Project assets include icons
│   ├── components      # React components
│   ├── graphql         # GraphQL queries, mutations, and fragments
│   ├── hooks           # Custom React hooks
│   ├── pages           # Page components
│   ├── services        # Services like apollo client
│   ├── types           # Application types declrations and enums
│   ├── App.tsx         # Main app component
│   ├── global.css      # Global styles
│   └── main.tsx        # Create app root
├── public              # Public assets
├── .env.local          # Environment variables
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

---

## 📝 Notes

- Ensure that your **auth token** is kept secure and not exposed in any public repository.
- If you encounter any issues, check your environment variables and API connectivity.

---

## 📧 Contact

If you have any questions or need support, feel free to reach out to the project maintainers.
