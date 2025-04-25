const { NFTStorage, File } = require('nft.storage');
const fs = require('fs').promises;
const path = require('path');

const API_KEY = '8359468a.f73c2f2e4fd140c0bd3a6bc524a0b587'; // Replace with your API key
const CSV_PATH = './nfts.csv'; // /workspaces/T8020-Payment/NFT T8020.csv
async function uploadCSV() {
  try {
    const client = new NFTStorage({ token: API_KEY });
    const csvData = await fs.readFile(path.resolve(CSV_PATH));
    const csvFile = new File([csvData], 'nfts.csv', { type: 'text/csv' });
    const cid = await client.storeBlob(csvFile);
    console.log('CSV uploaded successfully! CID:', cid);
    console.log('Check it here: https://ipfs.io/ipfs/' + cid);
    return cid;
  } catch (error) {
    console.error('Error uploading CSV to NFT.Storage:', error);
    throw error;
  }
}

uploadCSV().catch(console.error);