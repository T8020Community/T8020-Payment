module.exports = {

"[project]/node_modules/thirdweb/dist/esm/extensions/erc721/__generated__/IDropSinglePhase/read/claimCondition.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FN_SELECTOR": (()=>FN_SELECTOR),
    "claimCondition": (()=>claimCondition),
    "decodeClaimConditionResult": (()=>decodeClaimConditionResult),
    "isClaimConditionSupported": (()=>isClaimConditionSupported)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/transaction/read-contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$detectExtension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/utils/bytecode/detectExtension.js [app-ssr] (ecmascript)");
;
;
;
const FN_SELECTOR = "0xd637ed59";
const FN_INPUTS = [];
const FN_OUTPUTS = [
    {
        type: "tuple",
        name: "condition",
        components: [
            {
                type: "uint256",
                name: "startTimestamp"
            },
            {
                type: "uint256",
                name: "maxClaimableSupply"
            },
            {
                type: "uint256",
                name: "supplyClaimed"
            },
            {
                type: "uint256",
                name: "quantityLimitPerWallet"
            },
            {
                type: "bytes32",
                name: "merkleRoot"
            },
            {
                type: "uint256",
                name: "pricePerToken"
            },
            {
                type: "address",
                name: "currency"
            },
            {
                type: "string",
                name: "metadata"
            }
        ]
    }
];
function isClaimConditionSupported(availableSelectors) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$detectExtension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectMethod"])({
        availableSelectors,
        method: [
            FN_SELECTOR,
            FN_INPUTS,
            FN_OUTPUTS
        ]
    });
}
function decodeClaimConditionResult(result) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAbiParameters"])(FN_OUTPUTS, result)[0];
}
async function claimCondition(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])({
        contract: options.contract,
        method: [
            FN_SELECTOR,
            FN_INPUTS,
            FN_OUTPUTS
        ],
        params: []
    });
} //# sourceMappingURL=claimCondition.js.map
}}),

};

//# sourceMappingURL=ecc6c_extensions_erc721___generated___IDropSinglePhase_read_claimCondition_87ddcfb5.js.map