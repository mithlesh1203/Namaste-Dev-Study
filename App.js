import React from "react";
import { createRoot } from "react-dom/client";

const App = () => <h1>Hello from React</h1>;

const rootEl = document.getElementById('root');
if (rootEl) {
    createRoot(rootEl).render(<App />);
}
