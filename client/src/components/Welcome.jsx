import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum, SiBitcoin, SiStripe, SiLitecoin, SiChainlink, SiDogecoin } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] hover:cursor-pointer hover:font-bold hover:bg-slate-800/[.8] flex justify-center items-center border-[0.5px] border-slate-600 text-sm font-light text-slate-400";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  //"text-6xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white tracking-tighter py-1 font-bold"

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex lg:flex-row flex-col items-start justify-between lg:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-6xl sm:text-6xl text-white p-1 py-1 font-bold">
            <span className=" bg-slate-800 leading-normal p-2"> Direct Carbon <br/> Capture Now </span>
          </h1>
          <p className="text-left mt-5 text-slate-400 font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and <span className="text-sky-400"> sell </span> cryptocurrencies very <span className="text-sky-400"> very </span> very easily on
            Clouds.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#4ba3e3] p-3 rounded-md cursor-pointer hover:bg-slate-400"
            >
              <p className="text-white font-semibold text-sm">Connect Wallet</p>
            </button> 
          )}

          <div className="grid sm:grid-cols-3 font-semibold grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
            <SiEthereum className="pr-2" fontSize={25} color="#96a3b7" /> Ethereum
            </div>
            <div className={companyCommonStyles}> <SiBitcoin className="pr-2" fontSize={25} color="#96a3b7" /> Bitcoin </div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
            <SiStripe className="pr-2" fontSize={20} color="#96a3b7" /> Stripe
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
            <SiChainlink className="pr-2" fontSize={25} color="#96a3b7" /> ChainLink
            </div>
            <div className={companyCommonStyles}>
            <SiDogecoin className="pr-2" fontSize={25} color="#96a3b7" />Doge</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
            <SiLitecoin className="pr-2" fontSize={25} color="#96a3b7" />Litecoin
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full lg:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle className="hover:cursor-pointer" fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-extralight text-sm">0xasda...fda54</p>
                <p className="text-white font-semibold text-lg mt-1">
                  via Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 text-white w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-slate-600 my-2" />

            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white hover:text-sky-450 hover:bg-slate-800 w-full mt-2 border-[1px] p-2 border-slate-600 rounded-lg cursor-pointer"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
