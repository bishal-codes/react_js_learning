import * as secp from "ethereum-cryptography/secp256k1";
import { TextEncoder, TextDecoder } from "util";
import { getAddress } from "../../crypto-hashes/public-key-to-address";
import { toHex } from "ethereum-cryptography/utils";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
import { expect } from "vitest";
import { keccak256 } from "ethereum-cryptography/keccak";

// Test case for address generation
describe("get Ethereum address from public key", () => {
  // Define a private key in hex format
  //   const privateKey = Uint8Array.from([
  //     1, 35, 69, 103, 137, 171, 205, 239, 1, 35, 69, 103, 137, 171, 205, 239, 1,
  //     35, 69, 103, 137, 171, 205, 239, 1, 35, 69, 103, 137, 171, 205, 239,
  //   ]);

  const publicKey = new Uint8Array(65);

  // Test case to ensure the derived address is correct
  it("should return the correct Ethereum address", () => {
    // 1. Generate the public key from the private key
    const publicKeyWithoutFirstByte = publicKey.slice(1);

    // 2. Hash the public key using keccak256
    const hash = keccak256(publicKeyWithoutFirstByte);

    // 3. Take the last 20 bytes of the hash
    const address = hash.slice(-20);

    // Expected address
    const expectedAddress = address;

    // Get the address from the public key
    const generatedAddress = getAddress(publicKey);

    // Compare the generated address with the expected address
    expect(generatedAddress).toEqual(expectedAddress);
  });
});
