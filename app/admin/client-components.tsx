"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { createAdminToken, login } from "./actions";
import { Label } from "@/components/ui/label";

type Status = "idle" | "loading" | "success" | "error";

const loginStatusMap = {
  idle: "Login",
  loading: "Loading...",
  success: "Success!",
  error: "Error",
};

type LoginFormProps = {
  onLogin: () => void;
};

export function LoginForm({ onLogin }: LoginFormProps) {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleLogin() {
    setStatus("loading");

    try {
      const success = await login(token);
      if (success) {
        setStatus("success");
        onLogin();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Access Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <Button onClick={handleLogin} disabled={status === "loading"}>
        {loginStatusMap[status]}
      </Button>
    </div>
  );
}

const uploadStatusMap = {
  idle: "Upload",
  loading: "Loading...",
  success: "Success!",
  error: "Error",
};

export function UploadForm() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleCreate() {
    setStatus("loading");

    try {
      await createAdminToken(token);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-4">
      <Label className="font-semibold">Create Access Token</Label>
      <div className="flex items-center gap-2">
        <Input
          placeholder="Access Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <Button onClick={handleCreate} disabled={status === "loading"}>
          {uploadStatusMap[status]}
        </Button>
      </div>
    </div>
  );
}
