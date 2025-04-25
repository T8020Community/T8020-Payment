import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { config } from 'dotenv';
config();

async function lazyMintNFT() {
  const sdk = new ThirdwebSDK('polygon', {
    clientId: '05d4ba7f2fd3d230c2ee3bb54a257c85',
  });

  const contract = await sdk.getContract('0xC0B53e8f255D0Cf2FA4303789C1b4a62D11392df', 'edition-drop');

  const result = await contract.erc1155.lazyMint([
    {
      metadata: 'ipfs://bafkreihanhx4x4rtim57ifylbv2bvz2hvpqxqc6aowg3ibvmbshmwlehv4',
      supply: 100,
    },
  ]);

  console.log('Lazy minted NFT with TokenID:', result[0].id);
}

lazyMintNFT().catch(console.error);