// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, rarity) {
    let nft = {
        name: name,
        description: description,
        rarity: rarity
    };
    nftCollection.push(nft);
}

// Create a function that will print all of your NFTs metadata to the console
function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Rarity: " + nft.rarity);
        console.log("----------------------");
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs: " + nftCollection.length);
}

// Call your functions below this line
mintNFT("Dragon", "A fierce dragon artwork", "Legendary");
mintNFT("Unicorn", "A magical unicorn artwork", "Rare");
mintNFT("Phoenix", "A majestic phoenix artwork", "Epic");

listNFTs();
getTotalSupply();
