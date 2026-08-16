export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fairview-semiconductor.vercel.app";

export function absUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
