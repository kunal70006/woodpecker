export const getRedirectUrl = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";
  // Make sure to include `https://` when not localhost.
  url = url.startsWith("http") ? url : `https://${url}`;
  // Make sure to include a trailing `/`.
  url = url.endsWith("/") ? url : `${url}/`;
  return url;
};

/**
 * Enhanced fetcher for SWR with built-in error handling
 * and cache-control headers
 */
export const enhancedFetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  // If the status code is not in the range 200-299,
  // throw an error with the status text
  if (!response.ok) {
    const error = new Error(
      response.statusText || "An error occurred while fetching the data"
    );
    throw error;
  }

  return response.json();
};
