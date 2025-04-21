(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/thirdweb/dist/esm/transaction/actions/gasless/providers/engine.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "prepareEngineTransaction": (()=>prepareEngineTransaction),
    "relayEngineTransaction": (()=>relayEngineTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/utils/json.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/transaction/read-contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$wait$2d$for$2d$tx$2d$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/transaction/actions/wait-for-tx-receipt.js [app-client] (ecmascript)");
;
;
;
;
async function prepareEngineTransaction({ account, serializableTransaction, transaction, gasless }) {
    const forrwaderContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
        address: gasless.relayerForwarderAddress,
        chain: transaction.chain,
        client: transaction.client
    });
    const nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])({
        contract: forrwaderContract,
        method: "function getNonce(address) view returns (uint256)",
        params: [
            account.address
        ]
    });
    const [signature, message] = await (async ()=>{
        // TODO: handle special case for `approve` -> `permit` transactions
        if (!serializableTransaction.to) {
            throw new Error("engine transactions must have a 'to' address");
        }
        if (!serializableTransaction.gas) {
            throw new Error("engine transactions must have a 'gas' value");
        }
        if (!serializableTransaction.data) {
            throw new Error("engine transactions must have a 'data' value");
        }
        // chainless support!
        if (gasless.experimentalChainlessSupport) {
            const message = {
                from: account.address,
                to: serializableTransaction.to,
                value: 0n,
                gas: serializableTransaction.gas,
                nonce: nonce,
                data: serializableTransaction.data,
                chainid: BigInt(transaction.chain.id)
            };
            return [
                await account.signTypedData({
                    domain: {
                        name: "GSNv2 Forwarder",
                        version: "0.0.1",
                        verifyingContract: forrwaderContract.address
                    },
                    message,
                    primaryType: "ForwardRequest",
                    types: {
                        ForwardRequest: ChainAwareForwardRequest
                    }
                }),
                message
            ];
        }
        // else non-chainless support
        const message = {
            from: account.address,
            to: serializableTransaction.to,
            value: 0n,
            gas: serializableTransaction.gas,
            nonce: nonce,
            data: serializableTransaction.data
        };
        return [
            await account.signTypedData({
                domain: {
                    name: gasless.domainName ?? "GSNv2 Forwarder",
                    version: gasless.domainVersion ?? "0.0.1",
                    chainId: transaction.chain.id,
                    verifyingContract: forrwaderContract.address
                },
                message,
                primaryType: "ForwardRequest",
                types: {
                    ForwardRequest
                }
            }),
            message
        ];
    })();
    // TODO: handle special case for `approve` -> `permit`
    const messageType = "forward";
    return {
        message,
        signature,
        messageType
    };
}
const ForwardRequest = [
    {
        name: "from",
        type: "address"
    },
    {
        name: "to",
        type: "address"
    },
    {
        name: "value",
        type: "uint256"
    },
    {
        name: "gas",
        type: "uint256"
    },
    {
        name: "nonce",
        type: "uint256"
    },
    {
        name: "data",
        type: "bytes"
    }
];
const ChainAwareForwardRequest = [
    {
        name: "from",
        type: "address"
    },
    {
        name: "to",
        type: "address"
    },
    {
        name: "value",
        type: "uint256"
    },
    {
        name: "gas",
        type: "uint256"
    },
    {
        name: "nonce",
        type: "uint256"
    },
    {
        name: "data",
        type: "bytes"
    },
    {
        name: "chainid",
        type: "uint256"
    }
];
async function relayEngineTransaction(options) {
    const { message, messageType, signature } = await prepareEngineTransaction(options);
    const response = await fetch(options.gasless.relayerUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$json$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])({
            request: message,
            type: messageType,
            signature,
            forwarderAddress: options.gasless.relayerForwarderAddress
        })
    });
    if (!response.ok) {
        throw new Error(`Failed to send transaction: ${await response.text()}`);
    }
    const json = await response.json();
    if (!json.result) {
        throw new Error(`Relay transaction failed: ${json.message}`);
    }
    const queueId = json.result.queueId;
    // poll for transactionHash
    const timeout = 60000;
    const interval = 1000;
    const endtime = Date.now() + timeout;
    while(Date.now() < endtime){
        const receipt = await fetchReceipt({
            options,
            queueId
        });
        if (receipt) {
            return {
                transactionHash: receipt.transactionHash,
                chain: options.transaction.chain,
                client: options.transaction.client
            };
        }
        await new Promise((resolve)=>setTimeout(resolve, interval));
    }
    throw new Error(`Failed to find relayed transaction after ${timeout}ms`);
}
async function fetchReceipt(args) {
    const { options, queueId } = args;
    const url = options.gasless.relayerUrl.split("/relayer/")[0];
    const res = await fetch(`${url}/transaction/status/${queueId}`, {
        method: "GET"
    });
    const resJson = await res.json();
    if (!res.ok) {
        return null;
    }
    const result = resJson.result;
    if (!result) {
        return null;
    }
    switch(result.status){
        case "errored":
            throw new Error(`Transaction errored with reason: ${result.errorMessage}`);
        case "cancelled":
            throw new Error("Transaction execution cancelled.");
        case "mined":
            {
                const receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$wait$2d$for$2d$tx$2d$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForReceipt"])({
                    client: options.transaction.client,
                    chain: options.transaction.chain,
                    transactionHash: result.transactionHash
                });
                return receipt;
            }
        default:
            {
                return null;
            }
    }
} //# sourceMappingURL=engine.js.map
}}),
}]);

//# sourceMappingURL=dd92d_modules_thirdweb_dist_esm_transaction_actions_gasless_providers_engine_5f20f64a.js.map