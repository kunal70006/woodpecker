export const getRedirectUrl = () => {
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}/`;
  }

  const customDomain = process.env.NEXT_PUBLIC_SITE_URL;
  if (customDomain) {
    return customDomain.endsWith("/") ? customDomain : `${customDomain}/`;
  }

  return "http://localhost:3000/";
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
