import { redirect } from 'next/navigation';

export async function qedixUnsafeServerRedirect(
  target: string,
) {
  'use server';

  redirect(target);
}