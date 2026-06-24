"use client";

import { useState } from "react";
import { LoginForm, UploadForm } from "./client-components";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <main className="mx-auto pt-32 max-w-7xl">
      {isAuthenticated ? (
        <UploadForm />
      ) : (
        <LoginForm onLogin={() => setIsAuthenticated(true)} />
      )}
    </main>
  );
}
