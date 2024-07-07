import CommonStyles from "@/components/CommonStyles";
import "@/styles/global.css";
import { GlobalStyle } from "@/styles/globalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Component {...pageProps} />
        <CommonStyles />
      </QueryClientProvider>
    </SWRConfig>
  );
}
