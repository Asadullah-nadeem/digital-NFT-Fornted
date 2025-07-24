import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";

const Hero = () => {
const [walletAddress, setWalletAddress] = useState(null);
  const [message, setMessage] = useState("");

  const nftId = 2;
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userWallet = accounts[0];
        setWalletAddress(userWallet);
        setMessage(`✅ Wallet connected: ${userWallet}`);

        await window.ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: "0x000000000000000000000000000000000000dEaD",
              symbol: "OfWolf",
              decimals: 18,
            },
          },
        });

        // Prepare backend post payload
        const postData = {
          wallet: "0x000000000000000000000000000000000000dEaD",
          nftId: nftId,
          accessKey: "A@$*42343424",
        };

        const response = await fetch("http://10.53.7.74:8081/api/nfts/buy", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to purchase NFT.");
        }

        const result = await response.json();
        setMessage(`🎉 NFT purchase successful: ${JSON.stringify(result)}`);

        setTimeout(() => {
          window.open(
            "https://opensea.io/assets/ethereum/0x1234567890abcdef/101",
            "_blank"
          );
        }, 1500);
      } catch (err) {
        console.error(err);
        setMessage(
          "❌ Wallet connection rejected or error occurred: " + err.message
        );
      }
    } else {
      setMessage("❗ MetaMask not found. Please install it.");
    }
  };
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center min-h-screen py-10 gap-10">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight bg-gradient-to-r from-white to-[#c0c0ff] bg-clip-text text-transparent mb-4">
          Collect Your Digital Assets NFTs
        </h1>
        <h2 className="text-lg md:text-2xl text-white/80 mb-8 leading-relaxed">
          Marketplace for{" "}
          <span className="text-[#00bfff] font-semibold">
            OopsFire Wolf character collections
          </span>{" "}
          non fungible token NFTs.
        </h2>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
          <button
            onClick={connectWallet}
            className="border-2 border-[#F6851B] text-white py-4 px-6 rounded-full uppercase font-semibold flex items-center hover:scale-105 transition"
          >
            <img
              src="http://10.53.7.74:8081/assets/mm.png"
              alt="MetaMask"
              className="w-6 h-6 mr-2"
            />
            METAMASK
          </button>

          <a
            href="https://opensea.io"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#0086FF] text-white py-4 px-6 rounded-full uppercase font-semibold flex items-center hover:scale-105 transition"
          >
            <img
              src="http://10.53.7.74:8081/assets/sw.png"
              alt="OpenSea"
              className="w-6 h-6 mr-2"
            />
            OPENSEA
          </a>
        </div>

        {message && (
          <div className="mt-4 text-sm text-green-300 font-mono">{message}</div>
        )}
      </div>

      <div className="w-full lg:w-1/2 relative">
        <img
          src="http://10.53.7.74:8081/assets/nfts.png"
          alt="NFT Collection"
          className="rounded-xl shadow-lg w-full"
        />

        <div className="absolute bottom-5 right-5 bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-purple-500/30 text-white">
          <div className="text-xl font-bold flex items-center gap-2">
            <FaEthereum size={20} />
            0.03 ETH
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
