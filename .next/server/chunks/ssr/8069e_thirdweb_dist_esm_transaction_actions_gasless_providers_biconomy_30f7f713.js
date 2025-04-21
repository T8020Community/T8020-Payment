module.exports = {

"[project]/node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/biconomy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "prepareBiconomyTransaction": (()=>prepareBiconomyTransaction),
    "relayBiconomyTransaction": (()=>relayBiconomyTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/constants/addresses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/utils/address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$hashing$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/utils/hashing/keccak256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/utils/json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/transaction/read-contract.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// we do not send multiple batches so this stays consistent
const BATCH_ID = 0n;
async function prepareBiconomyTransaction({ account, serializableTransaction, transaction, gasless }) {
    const forwarderContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContract"])({
        address: gasless.relayerForwarderAddress,
        chain: transaction.chain,
        client: transaction.client
    });
    // get the nonce
    const nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])({
        contract: forwarderContract,
        method: "function getNonce(address,uint256) view returns (uint256)",
        params: [
            account.address,
            BATCH_ID
        ]
    });
    const deadline = Math.floor(Date.now() / 1000) + (gasless.deadlineSeconds ?? 3600);
    const request = {
        from: account.address,
        to: serializableTransaction.to,
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$constants$2f$addresses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZERO_ADDRESS"],
        txGas: serializableTransaction.gas,
        tokenGasPrice: 0n,
        batchId: BATCH_ID,
        batchNonce: nonce,
        deadline: deadline,
        data: serializableTransaction.data
    };
    if (!request.to) {
        throw new Error("Cannot send a transaction without a `to` address");
    }
    if (!request.txGas) {
        throw new Error("Cannot send a transaction without a `gas` value");
    }
    if (!request.data) {
        throw new Error("Cannot send a transaction without a `data` value");
    }
    // create the hash
    const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeAbiParameters"])([
        {
            type: "address"
        },
        {
            type: "address"
        },
        {
            type: "address"
        },
        {
            type: "uint256"
        },
        {
            type: "uint256"
        },
        {
            type: "uint256"
        },
        {
            type: "uint256"
        },
        {
            type: "bytes32"
        }
    ], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(request.from),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(request.to),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddress"])(request.token),
        request.txGas,
        request.tokenGasPrice,
        request.batchId,
        request.batchNonce,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$hashing$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(request.data)
    ]);
    const signature = await account.signMessage({
        message
    });
    return [
        request,
        signature
    ];
}
async function relayBiconomyTransaction(options) {
    const [request, signature] = await prepareBiconomyTransaction(options);
    // send the transaction to the biconomy api
    const response = await fetch("https://api.biconomy.io/api/v2/meta-tx/native", {
        method: "POST",
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])({
            apiId: options.gasless.apiId,
            params: [
                request,
                signature
            ],
            from: request.from,
            to: request.to,
            gasLimit: request.txGas
        }),
        headers: {
            "x-api-key": options.gasless.apiKey,
            "Content-Type": "application/json;charset=utf-8"
        }
    });
    if (!response.ok) {
        response.body?.cancel();
        throw new Error(`Failed to send transaction: ${await response.text()}`);
    }
    const json = await response.json();
    const transactionHash = json.txHash;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$encoding$2f$helpers$2f$is$2d$hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(transactionHash)) {
        return {
            transactionHash: transactionHash,
            chain: options.transaction.chain,
            client: options.transaction.client
        };
    }
    throw new Error(`Failed to send transaction: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(json)}`);
} //# sourceMappingURL=biconomy.js.map
}}),

};

//# sourceMappingURL=8069e_thirdweb_dist_esm_transaction_actions_gasless_providers_biconomy_30f7f713.js.map