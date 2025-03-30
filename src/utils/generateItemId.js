import crypto from "crypto";

const generateItemId = () => {
  const randomId = "HMM" + crypto.randomBytes(4).toString("hex").toUpperCase();
  return randomId;
}

export default generateItemId;