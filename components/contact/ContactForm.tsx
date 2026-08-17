"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-4 w-full rounded-[9px] bg-navy py-[0.7rem] text-[0.9rem] font-semibold text-white disabled:opacity-60"
    >
      {pending ? "Sending…" : "Request a conversation"}
    </button>
  );
}

export function ContactForm({ open }: { open: boolean }) {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  if (!open) return null;

  return (
    <div
      id="contact-card"
      className="mx-auto mt-7 max-w-md rounded-2xl bg-surface p-7 text-left shadow-card-lg"
    >
      {state.status === "success" ? (
        <div className="py-2 text-center">
          <p className="font-display font-bold text-success">✓ Request received</p>
          <p className="mx-auto mt-2 max-w-[34ch] text-ink-soft">
            Thanks for reaching out. We&rsquo;ll be in touch.
          </p>
        </div>
      ) : (
        <form ref={formRef} action={formAction}>
          <h3 className="font-display text-[1.02rem] font-semibold">Let&rsquo;s talk</h3>

          <div className="mt-3.5">
            <label htmlFor="cName" className="mb-1.5 block text-[0.8rem] font-semibold text-ink-soft">
              Name
            </label>
            <input
              id="cName"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border-[1.5px] border-line bg-surface-3 px-3 py-2.5 text-[0.88rem] text-ink"
            />
          </div>

          <div className="mt-3.5">
            <label htmlFor="cEmail" className="mb-1.5 block text-[0.8rem] font-semibold text-ink-soft">
              Work email
            </label>
            <input
              id="cEmail"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border-[1.5px] border-line bg-surface-3 px-3 py-2.5 text-[0.88rem] text-ink"
            />
          </div>

          <div className="mt-3.5">
            <label
              htmlFor="cOrg"
              className="mb-1.5 block text-[0.8rem] font-semibold text-ink-soft"
            >
              Organization
            </label>
            <input
              id="cOrg"
              name="organization"
              type="text"
              required
              className="w-full rounded-lg border-[1.5px] border-line bg-surface-3 px-3 py-2.5 text-[0.88rem] text-ink"
            />
          </div>

          <div className="mt-3.5">
            <label htmlFor="cGoal" className="mb-1.5 block text-[0.8rem] font-semibold text-ink-soft">
              What are you looking to improve?
            </label>
            <textarea
              id="cGoal"
              name="goal"
              rows={3}
              className="w-full resize-y rounded-lg border-[1.5px] border-line bg-surface-3 px-3 py-2.5 text-[0.88rem] text-ink"
            />
          </div>

          {state.status === "error" && (
            <p role="alert" className="mt-3 text-[0.82rem] font-semibold text-danger">
              {state.message}
            </p>
          )}

          <SubmitButton />
        </form>
      )}
    </div>
  );
}
