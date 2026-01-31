"use server";

import { cookies } from "next/headers";

export async function login(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (email !== 'admin@test.com' || password !== "1234") {
    throw new Error("Invalid credentials");
  }

  const cookieStore = await cookies();
  cookieStore.set('auth', 'logged-in', {
    httpOnly: true,
    secure: true,
    path: "/",
  });

};
