/** Get Ethereum address from public key
 * 1. take the first byte off the public key
 * - use slice method to slice the first byte off the publicKey, return the remaining 64 bytes
 *
 * first byte indicates the format of the key, either compressed or uncompressed
 * the publicKey is a Uint8Array of 64 bytes (32 bytes for x and 32 bytes for y)
 * - compressed public key: first byte is 0x02 or 0x03
 * - uncompressed public key: first byte is 0x04
 *
 * 2. hash the publicKey using keccak hash function (keccak256)
 * - keccak256: cryptographic hash function that takes an input and produces a fixed-size string of bytes
 * - input: Uint8Array (publicKey)
 * - output: Uint8Array(32) - 32-byte hash value
 * - example: keccak256(Uint8Array(64 bytes) [1, 2, 3, ...]) => Uint8Array(32) [7, 249, 31, 179, ...]
 * - note: keccak256 produces a 32-byte hash value (256 bits) for the input bytes array
 *
 * 3. take the last 20 bytes of the hash
 * - use slice method to slice the last 20 bytes off the hash, return the remaining 12 bytes
 * - Ethereum address is the last 20 bytes of the hash
 * - Ethereum address is 40 characters long (checksummed hexadecimal string representation of 20 bytes)
 * - Ethereum address is used to receive funds on the Ethereum network
 */

import secp from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";

// compressed public key
// const compressedPublicKey = new Uint8Array(65);
// compressedPublicKey[0] = 0x02;

// uncompressed public key
// const uncompressedPublicKey = new Uint8Array(65);
// uncompressedPublicKey[0] = 0x04;

const publicKey = new Uint8Array(65);
// console.log("publicKey:", publicKey);

export function getAddress(publicKey) {
  // 1. take the first byte (0x02, 0x03, or 0x04) off the publicKey
  const publicKeyWithoutFirstByte = publicKey.slice(1);
  //   console.log("publicKeyWithoutFirstByte:", publicKeyWithoutFirstByte);

  // 2. hash the publicKey using keccak256
  const hash = keccak256(publicKeyWithoutFirstByte);
  //   console.log("hash:", hash);

  // 3. take the last 20 bytes of the hash
  const address = hash.slice(-20);
  //   console.log("address:", address);

  return address;
}

getAddress(publicKey);
