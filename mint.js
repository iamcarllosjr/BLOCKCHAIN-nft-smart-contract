const hre = require("hardhat");

async function main() {
    const MyNFT = await hre.ethers.getContractFactory("MyNFT");
    const URI = "QmZEsepL9XKZjbJNj2B3LEgsDsbx4W4KtsHDRqqNEiEQbG"
    const WALLET_ADDRESS = "0xA5216C6F685c2b8a678A704107760Be652665234"
    const CONTRACT_ADDRESS = "0xC5Ab917c302a910F2C0E98D7b9B0920172F6eeeb"
    const contract = MyNFT.attach(CONTRACT_ADDRESS);

    await contract.safeMint(WALLET_ADDRESS, URI);
    console.log("NFT mintado:", contract);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
})