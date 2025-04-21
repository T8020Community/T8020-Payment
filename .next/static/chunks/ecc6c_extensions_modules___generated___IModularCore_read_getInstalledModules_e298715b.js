(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/thirdweb/dist/esm/extensions/modules/__generated__/IModularCore/read/getInstalledModules.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FN_SELECTOR": (()=>FN_SELECTOR),
    "decodeGetInstalledModulesResult": (()=>decodeGetInstalledModulesResult),
    "getInstalledModules": (()=>getInstalledModules),
    "isGetInstalledModulesSupported": (()=>isGetInstalledModulesSupported)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/transaction/read-contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/viem/_esm/utils/abi/decodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$detectExtension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/utils/bytecode/detectExtension.js [app-client] (ecmascript)");
;
;
;
const FN_SELECTOR = "0x3e429396";
const FN_INPUTS = [];
const FN_OUTPUTS = [
    {
        type: "tuple[]",
        components: [
            {
                type: "address",
                name: "implementation"
            },
            {
                type: "tuple",
                name: "config",
                components: [
                    {
                        type: "bool",
                        name: "registerInstallationCallback"
                    },
                    {
                        type: "bytes4[]",
                        name: "requiredInterfaces"
                    },
                    {
                        type: "bytes4[]",
                        name: "supportedInterfaces"
                    },
                    {
                        type: "tuple[]",
                        name: "callbackFunctions",
                        components: [
                            {
                                type: "bytes4",
                                name: "selector"
                            }
                        ]
                    },
                    {
                        type: "tuple[]",
                        name: "fallbackFunctions",
                        components: [
                            {
                                type: "bytes4",
                                name: "selector"
                            },
                            {
                                type: "uint256",
                                name: "permissionBits"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
function isGetInstalledModulesSupported(availableSelectors) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$utils$2f$bytecode$2f$detectExtension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectMethod"])({
        availableSelectors,
        method: [
            FN_SELECTOR,
            FN_INPUTS,
            FN_OUTPUTS
        ]
    });
}
function decodeGetInstalledModulesResult(result) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeAbiParameters"])(FN_OUTPUTS, result)[0];
}
async function getInstalledModules(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])({
        contract: options.contract,
        method: [
            FN_SELECTOR,
            FN_INPUTS,
            FN_OUTPUTS
        ],
        params: []
    });
} //# sourceMappingURL=getInstalledModules.js.map
}}),
}]);

//# sourceMappingURL=ecc6c_extensions_modules___generated___IModularCore_read_getInstalledModules_e298715b.js.map