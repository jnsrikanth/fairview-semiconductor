"use client";

import { FormEvent, useState } from "react";

export function DesignInForm() {
  const [status, setStatus] = useState("");
  const [tone, setTone] = useState<"ok" | "err" | "">("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setStatus("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/design-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Request failed");
      setTone("ok");
      setStatus("Received. Engineering will reply from the design-in address.");
      form.reset();
    } catch (err) {
      setTone("err");
      setStatus(err instanceof Error ? err.message : "Could not send.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required minLength={2} />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="interest">Interest</label>
        <select id="interest" name="interest" required defaultValue="">
          <option value="" disabled>
            Select a path
          </option>
          <option value="gallium-h4">Gallium-H4 attach</option>
          <option value="gallium-s4">Gallium-S4 / SPHBM4</option>
          <option value="gallium-ip">Gallium controller IP</option>
          <option value="stallion-s100">Stallion S100 package</option>
          <option value="stallion-s80i">Stallion S80I inference</option>
          <option value="other">Other / not sure</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">What are you locking?</label>
        <textarea id="message" name="message" required minLength={12} />
      </div>
      <button className="btn btn-primary" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Submit design-in"}
      </button>
      <p className="form-status" data-tone={tone} role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
