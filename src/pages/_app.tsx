import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "@/components/ErrorBoundary";
import { SWRConfig } from "swr";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <ErrorBoundary>
        <SWRConfig
          value={{
            // Keep data in cache even when window is not focused
            revalidateOnFocus: false,
            // Retry failed requests 3 times
            errorRetryCount: 3,
            // Cache the data for better performance
            provider: () => new Map(),
            // Fetch new data when user comes back online
            revalidateOnReconnect: true,
          }}
        >
          <Toaster position="bottom-center" />
          <Component {...pageProps} />
        </SWRConfig>
      </ErrorBoundary>
    </main>
  );
}
