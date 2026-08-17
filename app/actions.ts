"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

/**
 * Handles the "Talk to the CliniDoc Team" form.
 *
 * TODO(integration): this validates and accepts the submission but does not yet
 * deliver it anywhere — wire this up to the real intake path (email via a
 * transactional provider, or a CRM/ticketing webhook) before this form goes live.
 * Keeping it as a Server Action now means the client-side call site won't need to
 * change when that integration is added.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();

  if (!name || !email || !organization) {
    return { status: "error", message: "Please fill in your name, email and organization." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid work email." };
  }

  // Simulated latency — real network calls will land here once wired up.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { status: "success" };
}
