import { WalletContextProvider } from "@mintbase-js/react";
import "../styles/globals.css";
// import { Analytics } from "@vercel/analytics/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Tooltip } from "react-tooltip";
import { NEAR_NETWORKS, mbjs, MINTBASE_CONTRACTS } from "@mintbase-js/sdk";

function MyApp({ Component, pageProps }) {
  const network = process.env.NEXT_PUBLIC_NETWORK || NEAR_NETWORKS.TESTNET;
  const nearNetwork = network || NEAR_NETWORKS.TESTNET;

  // also the store you should be a minter
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  mbjs.config({
    network: "testnet",
    contractAddress: MINTBASE_CONTRACTS.testnet,
  });

  const queryClient = new QueryClient();

  return (
    <>
      <Tooltip id="replicate-tooltip" />
      <Tooltip id="vercel-tooltip" />
      <Tooltip id="bytescale-tooltip" />
      <Tooltip id="github-tooltip" />
      <Tooltip id="youtube-tooltip" />
      <QueryClientProvider client={queryClient}>
        <WalletContextProvider
          contractAddress={contractAddress}
          network={nearNetwork}
        >
          <Component {...pageProps} />
        </WalletContextProvider>
      </QueryClientProvider>
      {/* <Analytics /> */}
    </>
  );
}

export default MyApp;
