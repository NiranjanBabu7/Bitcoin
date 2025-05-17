const snarkjs = require("snarkjs");
const fs = require("fs");

async function run() {
  const circuitDef = JSON.parse(fs.readFileSync("proof.json"));
  const input = { secret: 1234 };

  const { proof, publicSignals } = await snarkjs.groth16.fullProve(input, "proof.wasm", "circuit_final.zkey");

  console.log("Proof:", proof);
  console.log("Public signals:", publicSignals);
}

run().catch(console.error);
