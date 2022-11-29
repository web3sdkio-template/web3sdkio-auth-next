import { Web3sdkioAuth } from "@web3sdkio/auth/next";

export const { Web3sdkioAuthHandler, getUser } = Web3sdkioAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY || "",
  domain: "example.com",
});

export default Web3sdkioAuthHandler();
