
import { ethers } from 'ethers';
import React from 'react';
import './App.css';
import abi from './contract/chai.json';

import { useState, useEffect } from 'react';
import Buy from './components/Buy';
import Memos from './components/Memos';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState('None');

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x65d45908ccea9918dabb4a6a8c9c7d772b8dd272";
      const contractABI = abi;
      try {
        const etherium = window.ethereum;//
        if (etherium) {
          const account = await etherium.request({ method: 'eth_requestAccounts' });//

          etherium.on('chainChanged', () => window.location.reload());

          etherium.on('accountsChanged', () => {
            window.location.reload();
          }
          );

          // const provider = new ethers.providers.Web3Provider(window.ethereum);
          const provider = new ethers.BrowserProvider(etherium);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);

          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert('Please install MetaMask!');
        }
      } catch (error) {
        console.error(error);
      }
    }
    connectWallet();
  }
    , []);

  console.log(state);

  return (
    <div className="App">
      <h1 className="text-center mt-5">Chai Shop</h1>
      <p className="text-center">Account: {account}</p>
      <Buy state={state}></Buy>
      <Memos state={state}></Memos>
    </div>
  );
}

export default App;
