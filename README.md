# CLIENT

## Step 1 - Install Vite

create folder client
```bash
pwd and cd to current directory
npm create vite .
npm install
npm run dev
```

## Step 2 - Install Tailwindcss
https://tailwindcss.com/docs/installation/using-vite
```bash
npm install tailwindcss @tailwindcss/vite
```
check in package.json if tailwind is installed in dependencies.

edit vite.config.js
```js
//vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  
})
```

in index.css
```js
@import "tailwindcss";
```

test this code in App.jsx
```js
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
```

## Step 3 - Install React Router
```bash
npm i react-router
```

in main.jsx
```js
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
<>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</>
)
```

## Step 4- Create AppRoutes.jsx in src
```js
import React from 'react'
import { Route, Routes } from 'react-router'

function AppRoutes() {
  return (
    <>
        <Routes>
            {/* Public */}
            <Route path="/" element={<h1> Home </h1>} />
            <Route path="about" element={<h1> About </h1>} />
            <Route path="register" element={<h1> Register </h1>} />
            <Route path="login" element={<h1> Log in </h1>} />

            {/* Private [USER] */}
            <Route path="user" element={<h1> Home User </h1>} />

            {/* Private [ADMIN] */}

            <Route path="dashboard" element={<h1> Dashboard </h1>} />
            <Route path="manage" element={<h1> Manage </h1>} />
        
            <Route path="*" element={<h1> 404 Not found </h1>} />
        
        </Routes>
    </>
  )
}

export default AppRoutes
```