## 🎨 OopsFire Wolf — Frontend (React)

This is the **frontend (UI)** for the **OopsFire Wolf NFT Website**, built using **React.js** and **Tailwind CSS**.  
Users can view NFTs, connect their MetaMask wallet, and open NFTs directly on OpenSea.

### 🚀 What This App Does

✅ Connect wallet using MetaMask  
✅ Display NFT from backend image URL  
✅ Open NFT on OpenSea  
✅ Show messages like wallet connected or coin added ✅  
✅ Fully mobile responsive using Tailwind CSS  
✅ Fast ⚡ built with React and optionally Vite  

### 🛠 Tech Stack Used

| Purpose            | Technology         |
|-------------------|--------------------|
| UI framework       | React.js           |
| Styling            | Tailwind CSS       |
| Wallet connection  | MetaMask (Web3)    |
| Icons              | react-icons        |
| Data/API           | Backend (Spring Boot) or mock data |
| Package tool       | npm or yarn        |

### 📁 Folder Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/            # Images like nfts.png
│   ├── components/        # Header, Hero, Footer
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── tailwind.config.js
```

### ⚙️ How to Setup & Run

#### 1️⃣ Open terminal and clone the repo

```bash
git clone https://github.com/Asadullah-nadeem/digital-NFT-Fornted.git
cd frontend
```

#### 2️⃣ Install the dependencies

```bash
npm install
```

#### 3️⃣ Run React app locally

```bash
npm run dev
# or for CRA: npm start
```

Frontend will run at: `http://localhost:5173` or `http://localhost:3000` depending on your setup.

✅ To connect with backend API (Spring Boot), make sure it's running on port `8080`.

### 🖼 Load NFT Image from Backend

React loads this image from backend:
```js
http://localhost:8080/assets/nfts.png
```

You can display it like this:

```jsx

```

Make sure Spring Boot serves the image successfully under `/static/assets/`.

### 🔐 Wallet Connection Example

Connect MetaMask:

```js
if (window.ethereum) {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}
```

Add test coin:

```js
window.ethereum.request({
  method: 'wallet_watchAsset',
  params: {
    type: 'ERC20',
    options: {
      address: '0x000000000000000000000000000000000000dEaD',
      symbol: 'DEMO',
      decimals: 18,
      image: 'http://localhost:8080/assets/nfts.png',
    }
  }
});
```

### 📸 Screenshots (Optional)

You can add screenshots for homepage, MetaMask popup, or NFT view.



### ✅ To-Do & Improvements (optional section)

- Add real smart contract details
- Show real-time token balance
- Add OpenSea live link
- Connect with Spring Boot backend for logs

  
### ✨ Author

Created with ❤️ by [Asadullah Nadeem](https://github.com/asadullah-nadeem)
