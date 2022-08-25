import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import {
  SiEthereum,
  SiBitcoin,
  SiStripe,
  SiLitecoin,
  SiChainlink,
  SiDogecoin,
} from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";

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
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  //"text-6xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white tracking-tighter py-1 font-bold"

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex lg:flex-row flex-col items-start justify-between lg:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10 order-2 lg:order-1">
          <h1 className="text-6xl sm:text-6xl text-white p-1 py-1 font-bold">
            <span className=" bg-slate-800 leading-normal p-2">
              {" "}
              Direct Carbon <br /> Capture Now{" "}
            </span>
          </h1>
          <p className="text-left mt-5 text-slate-400 font-light md:w-9/12 w-11/12 text-base">
            A utility firs css <span className="text-sky-400"> framework </span>{" "}
            packed with classes like that can be composed and any design
          </p>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full lg:mt-0 mt-10 order-1 lg:order-2">
          <div className="p-5 sm:w-96 text-white w-full h-80 flex flex-col justify-start items-center bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
