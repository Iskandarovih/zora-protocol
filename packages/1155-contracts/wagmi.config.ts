import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "package/wagmiGenerated.ts",
  plugins: [
    foundry({
      forge: {
        build: false,
      },
      include: [
        "ZoraCreator1155FactoryImpl",
        "ZoraCreator1155Impl",
        "ZoraCreatorFixedPriceSaleStrategy",
        "ZoraCreatorMerkleMinterStrategy",
        "ZoraCreatorRedeemMinterFactory",
        "ZoraCreatorRedeemMinterStrategy",
        "ZoraCreator1155PremintExecutorImpl",
        "DeterministicProxyDeployer",
        "IImmutableCreate2Factory",
        "ProtocolRewards",
        "ERC20Minter",
      ].map((contractName) => `${contractName}.json`),
    }),
  ],
});
