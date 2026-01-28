"use server";

export async function submitContact(formData: FormData) {
  const email = formData.get('email');
  const message = formData.get('message');

  if (!email || !message) {
    throw new Error("Invalid form data");
  }

  console.log("📩 Server Action:", { email, message });
};
