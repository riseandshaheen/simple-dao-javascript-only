import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xa83D787Bbd089Acd563a67CFD35592ACB174b512",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Thinker NFT",
        description: "This NFT will give you access to ThinkerDAO!",
        image: readFileSync("scripts/assets/nft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()