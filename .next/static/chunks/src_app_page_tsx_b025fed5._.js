(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$providers$2f$thirdweb$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/providers/thirdweb-provider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$ConnectButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/ConnectButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$PayEmbed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/ui/PayEmbed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$contract$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/core/hooks/contract/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/client/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/contract/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/transaction/read-contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/transaction/actions/send-transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/chains/chain-definitions/polygon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc1155$2f$drops$2f$write$2f$claimTo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/extensions/erc1155/drops/write/claimTo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc1155$2f$read$2f$getNFT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/extensions/erc1155/read/getNFT.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Create thirdweb client
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$client$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createThirdwebClient"])({
    clientId: "c264e68c3ecacdd9c5a24a00bc8bb9e9"
});
const MATIC_ERC20_ADDRESS = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"; // MATIC ERC-20
const USDC_ADDRESS = "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"; // USDC on Polygon
const CONTRACT_ADDRESS = "0xE0269701B0107FfE5C983BE47B2283536EDCC3B1";
const TOKEN_ID = BigInt(0);
const TOKEN_AMOUNT = 1;
const TOKEN_PRICE_POL = "4"; // Price in POL
// ABI for ERC-1155 Edition Drop (updated from thirdweb)
const CONTRACT_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "BatchMintInvalidBatchId",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMintInvalidTokenId",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "batchId",
                "type": "uint256"
            }
        ],
        "name": "BatchMintMetadataFrozen",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ContractMetadataUnauthorized",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "CurrencyTransferLibFailedNativeTransfer",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "expected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "actual",
                "type": "uint256"
            }
        ],
        "name": "DropClaimExceedLimit",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "expected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "actual",
                "type": "uint256"
            }
        ],
        "name": "DropClaimExceedMaxSupply",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "expectedCurrency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "expectedPricePerToken",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "actualCurrency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "actualExpectedPricePerToken",
                "type": "uint256"
            }
        ],
        "name": "DropClaimInvalidTokenPrice",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "expected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "actual",
                "type": "uint256"
            }
        ],
        "name": "DropClaimNotStarted",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DropExceedMaxSupply",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DropNoActiveCondition",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DropUnauthorized",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "LazyMintInvalidAmount",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "LazyMintUnauthorized",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "OwnableUnauthorized",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "PermissionsAlreadyGranted",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "expected",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "actual",
                "type": "address"
            }
        ],
        "name": "PermissionsInvalidPermission",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "neededRole",
                "type": "bytes32"
            }
        ],
        "name": "PermissionsUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "max",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "actual",
                "type": "uint256"
            }
        ],
        "name": "PlatformFeeExceededMaxFeeBps",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "PlatformFeeInvalidRecipient",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PlatformFeeUnauthorized",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "PrimarySaleInvalidRecipient",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "PrimarySaleUnauthorized",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "max",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "actual",
                "type": "uint256"
            }
        ],
        "name": "RoyaltyExceededMaxFeeBps",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "RoyaltyInvalidRecipient",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "RoyaltyUnauthorized",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_toTokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "startTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxClaimableSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "supplyClaimed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantityLimitPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "merkleRoot",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "metadata",
                        "type": "string"
                    }
                ],
                "indexed": false,
                "internalType": "struct IClaimCondition.ClaimCondition[]",
                "name": "claimConditions",
                "type": "tuple[]"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "resetEligibility",
                "type": "bool"
            }
        ],
        "name": "ClaimConditionsUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "prevURI",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "newURI",
                "type": "string"
            }
        ],
        "name": "ContractURIUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "newRoyaltyRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newRoyaltyBps",
                "type": "uint256"
            }
        ],
        "name": "DefaultRoyalty",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "platformFeeRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "flatFee",
                "type": "uint256"
            }
        ],
        "name": "FlatPlatformFeeUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "version",
                "type": "uint8"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "maxTotalSupply",
                "type": "uint256"
            }
        ],
        "name": "MaxTotalSupplyUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "MetadataFrozen",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "prevOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnerUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "platformFeeRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "platformFeeBps",
                "type": "uint256"
            }
        ],
        "name": "PlatformFeeInfoUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "enum IPlatformFee.PlatformFeeType",
                "name": "feeType",
                "type": "uint8"
            }
        ],
        "name": "PlatformFeeTypeUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "PrimarySaleRecipientUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "royaltyRecipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "royaltyBps",
                "type": "uint256"
            }
        ],
        "name": "RoyaltyForToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "saleRecipient",
                "type": "address"
            }
        ],
        "name": "SaleRecipientForTokenUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "claimConditionIndex",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "claimer",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantityClaimed",
                "type": "uint256"
            }
        ],
        "name": "TokensClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "startTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "endTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "baseURI",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "encryptedBaseURI",
                "type": "bytes"
            }
        ],
        "name": "TokensLazyMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            }
        ],
        "name": "TransferBatch",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "TransferSingle",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "value",
                "type": "string"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "URI",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DEFAULT_FEE_RECIPIENT",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "accounts",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            }
        ],
        "name": "balanceOfBatch",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "batchFrozen",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            }
        ],
        "name": "burnBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_currency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_pricePerToken",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bytes32[]",
                        "name": "proof",
                        "type": "bytes32[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantityLimitPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    }
                ],
                "internalType": "struct IDrop1155.AllowlistProof",
                "name": "_allowlistProof",
                "type": "tuple"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "claim",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "claimCondition",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "currentStartId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "count",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractType",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractVersion",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "freezeBatchBaseURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "getActiveClaimConditionId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBaseURICount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getBatchIdAtIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_conditionId",
                "type": "uint256"
            }
        ],
        "name": "getClaimConditionById",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "startTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxClaimableSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "supplyClaimed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantityLimitPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "merkleRoot",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "metadata",
                        "type": "string"
                    }
                ],
                "internalType": "struct IClaimCondition.ClaimCondition",
                "name": "condition",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDefaultRoyaltyInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFlatPlatformFeeInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlatformFeeInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlatformFeeType",
        "outputs": [
            {
                "internalType": "enum IPlatformFee.PlatformFeeType",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
        "outputs": [
            {
                "internalType": "address",
                "name": "member",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleMemberCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "count",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "getRoyaltyInfoForToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_conditionId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_claimer",
                "type": "address"
            }
        ],
        "name": "getSupplyClaimedByWallet",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "supplyClaimedByWallet",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRoleWithSwitch",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_defaultAdmin",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_contractURI",
                "type": "string"
            },
            {
                "internalType": "address[]",
                "name": "_trustedForwarders",
                "type": "address[]"
            },
            {
                "internalType": "address",
                "name": "_saleRecipient",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_royaltyRecipient",
                "type": "address"
            },
            {
                "internalType": "uint128",
                "name": "_royaltyBps",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "_platformFeeBps",
                "type": "uint128"
            },
            {
                "internalType": "address",
                "name": "_platformFeeRecipient",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "forwarder",
                "type": "address"
            }
        ],
        "name": "isTrustedForwarder",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_baseURIForTokens",
                "type": "string"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "lazyMint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "batchId",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "maxTotalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes[]",
                "name": "data",
                "type": "bytes[]"
            }
        ],
        "name": "multicall",
        "outputs": [
            {
                "internalType": "bytes[]",
                "name": "results",
                "type": "bytes[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nextTokenIdToMint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "primarySaleRecipient",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "salePrice",
                "type": "uint256"
            }
        ],
        "name": "royaltyInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "royaltyAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeBatchTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "saleRecipient",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "startTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxClaimableSupply",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "supplyClaimed",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantityLimitPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "merkleRoot",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "metadata",
                        "type": "string"
                    }
                ],
                "internalType": "struct IClaimCondition.ClaimCondition[]",
                "name": "_conditions",
                "type": "tuple[]"
            },
            {
                "internalType": "bool",
                "name": "_resetClaimEligibility",
                "type": "bool"
            }
        ],
        "name": "setClaimConditions",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_uri",
                "type": "string"
            }
        ],
        "name": "setContractURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_royaltyRecipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_royaltyBps",
                "type": "uint256"
            }
        ],
        "name": "setDefaultRoyaltyInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_platformFeeRecipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_flatFee",
                "type": "uint256"
            }
        ],
        "name": "setFlatPlatformFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_maxTotalSupply",
                "type": "uint256"
            }
        ],
        "name": "setMaxTotalSupply",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "setOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_platformFeeRecipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_platformFeeBps",
                "type": "uint256"
            }
        ],
        "name": "setPlatformFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "enum IPlatformFee.PlatformFeeType",
                "name": "_feeType",
                "type": "uint8"
            }
        ],
        "name": "setPlatformFeeType",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_saleRecipient",
                "type": "address"
            }
        ],
        "name": "setPrimarySaleRecipient",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_bps",
                "type": "uint256"
            }
        ],
        "name": "setRoyaltyInfoForToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_saleRecipient",
                "type": "address"
            }
        ],
        "name": "setSaleRecipientForToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_uri",
                "type": "string"
            }
        ],
        "name": "updateBatchBaseURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "uri",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_conditionId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_claimer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_quantity",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_currency",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_pricePerToken",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bytes32[]",
                        "name": "proof",
                        "type": "bytes32[]"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantityLimitPerWallet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "currency",
                        "type": "address"
                    }
                ],
                "internalType": "struct IDrop1155.AllowlistProof",
                "name": "_allowlistProof",
                "type": "tuple"
            }
        ],
        "name": "verifyClaim",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isOverride",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
function Purchase() {
    _s();
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("POL");
    const [isPayEmbedOpen, setIsPayEmbedOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [claimConditions, setClaimConditions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [retryCount, setRetryCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAccount"])();
    const payEmbedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
        client,
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygon"],
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI
    });
    // Fetch NFT metadata
    const { data: nft } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$contract$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc1155$2f$read$2f$getNFT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getNFT"], {
        contract,
        tokenId: TOKEN_ID
    });
    // Fetch claim conditions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Purchase.useEffect": ()=>{
            const fetchClaimConditions = {
                "Purchase.useEffect.fetchClaimConditions": async (attempt = 1)=>{
                    try {
                        const conditionId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])({
                            contract,
                            method: "getActiveClaimConditionId",
                            params: [
                                TOKEN_ID
                            ]
                        });
                        const conditions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$read$2d$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])({
                            contract,
                            method: "getClaimConditionById",
                            params: [
                                TOKEN_ID,
                                conditionId
                            ]
                        });
                        setClaimConditions(conditions);
                        setError(null);
                        setRetryCount(0);
                    } catch (err) {
                        console.error(`Attempt ${attempt} - Error fetching claim conditions:`, err);
                        let errorMsg = err.reason || err.message || "Unknown error";
                        if (err.data) {
                            try {
                                const iface = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.Interface(CONTRACT_ABI);
                                const decodedError = iface.parseError(err.data);
                                errorMsg = `Revert: ${decodedError.name} - ${decodedError.args.join(", ")}`;
                            } catch (decodeErr) {
                                errorMsg = `Execution reverted: ${err.data}`;
                            }
                        }
                        if (attempt < 3) {
                            console.log(`Retrying (${attempt + 1}/3)...`);
                            setTimeout({
                                "Purchase.useEffect.fetchClaimConditions": ()=>{
                                    setRetryCount(attempt);
                                    fetchClaimConditions(attempt + 1);
                                }
                            }["Purchase.useEffect.fetchClaimConditions"], 2000);
                        } else {
                            setError(`Failed to load claim conditions: ${errorMsg}. Run the setup script to initialize tokenId 0 and set claim conditions.`);
                        }
                    }
                }
            }["Purchase.useEffect.fetchClaimConditions"];
            fetchClaimConditions();
        }
    }["Purchase.useEffect"], [
        contract
    ]);
    // Fallback purchase function using sendTransaction
    const handlePurchase = async ()=>{
        if (!account) {
            alert("Please connect your wallet.");
            return;
        }
        if (!claimConditions) {
            alert("Claim conditions not loaded. Run setup script or check thirdweb dashboard.");
            return;
        }
        try {
            setError(null);
            const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc1155$2f$drops$2f$write$2f$claimTo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["claimTo"])({
                contract,
                to: account.address,
                tokenId: TOKEN_ID,
                quantity: BigInt(TOKEN_AMOUNT)
            });
            const receipt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$transaction$2f$actions$2f$send$2d$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])({
                transaction,
                account
            });
            alert("Purchase successful! Transaction hash: " + receipt.transactionHash);
        } catch (error) {
            console.error("Purchase error:", error);
            let revertReason = error.reason || error.message || "Transaction failed.";
            if (error.data) {
                try {
                    const iface = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.Interface(CONTRACT_ABI);
                    const decodedError = iface.parseError(error.data);
                    revertReason = `Revert: ${decodedError.name} - ${decodedError.args.join(", ")}`;
                } catch (decodeErr) {
                    revertReason = `Execution reverted: ${error.data}`;
                }
            }
            setError(`Purchase failed: ${revertReason}`);
        }
    };
    // Prepare transaction for PayEmbed
    const claimTransaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Purchase.useMemo[claimTransaction]": ()=>{
            if (!account) return undefined;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$extensions$2f$erc1155$2f$drops$2f$write$2f$claimTo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["claimTo"])({
                contract,
                to: account.address,
                tokenId: TOKEN_ID,
                quantity: BigInt(TOKEN_AMOUNT)
            });
        }
    }["Purchase.useMemo[claimTransaction]"], [
        contract,
        account
    ]);
    const handlePayButtonClick = ()=>{
        if (!account) {
            alert("Please connect your wallet.");
            return;
        }
        setIsPayEmbedOpen(true);
        setTimeout(()=>{
            if (payEmbedRef.current) {
                payEmbedRef.current.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }, 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "20px",
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "T8020 Orlando Membership Token Purchase"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 2401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$ConnectWallet$2f$ConnectButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectButton"], {
                client: client,
                chain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$chains$2f$chain$2d$definitions$2f$polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygon"]
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 2403,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePayButtonClick,
                disabled: !account || !claimConditions,
                style: {
                    padding: "10px 20px",
                    backgroundColor: account && claimConditions ? "#007bff" : "#ccc",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: account && claimConditions ? "pointer" : "not-allowed",
                    margin: "20px 0",
                    fontSize: "16px"
                },
                children: "T8020 Orlando Membership Tokens"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 2405,
                columnNumber: 7
            }, this),
            isPayEmbedOpen && claimTransaction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: payEmbedRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$ui$2f$PayEmbed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PayEmbed"], {
                    client: client,
                    payOptions: {
                        mode: "transaction",
                        transaction: claimTransaction,
                        metadata: nft?.metadata || {
                            name: "T8020 Orlando Membership Token",
                            image: "https://ipfs.io/ipfs/bafybeigbo6kspwg7z4zqouwzmdi7vxufdjsefmsw4qefe36i6r5wkffyge"
                        },
                        buyWithCrypto: {
                            testMode: true
                        },
                        buyWithFiat: {
                            testMode: true,
                            prefillSource: {
                                currency: "USD"
                            }
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 2423,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 2422,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "20px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Price: ",
                            TOKEN_PRICE_POL,
                            " ",
                            currency
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 2439,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "10px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Currency: "
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 2441,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: currency,
                                onChange: (e)=>setCurrency(e.target.value),
                                style: {
                                    marginLeft: "5px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "POL",
                                        children: "POL (Native)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 2447,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MATIC",
                                        children: "MATIC (ERC-20)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 2448,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "USDC",
                                        children: "USDC (Fiat/Card)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 2449,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 2442,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 2440,
                        columnNumber: 9
                    }, this),
                    claimConditions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Contract Price: ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].utils.formatEther(claimConditions.pricePerToken),
                            " ",
                            claimConditions.currency === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].constants.AddressZero ? "POL" : claimConditions.currency === MATIC_ERC20_ADDRESS ? "MATIC" : "USDC"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 2453,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No claim conditions loaded. Run setup script or check thirdweb dashboard."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 2457,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "red"
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 2459,
                        columnNumber: 19
                    }, this),
                    retryCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Retrying claim conditions load (",
                            retryCount,
                            "/3)..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 2460,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePurchase,
                        disabled: !account || !claimConditions,
                        style: {
                            padding: "10px 20px",
                            backgroundColor: account && claimConditions ? "#007bff" : "#ccc",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: account && claimConditions ? "pointer" : "not-allowed",
                            marginTop: "10px"
                        },
                        children: "Purchase Membership Tokens"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 2462,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 2438,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 2400,
        columnNumber: 5
    }, this);
}
_s(Purchase, "kL9IrqJL7blaWu1QVexYRDw5AT4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$wallets$2f$useActiveAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$core$2f$hooks$2f$contract$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
_c = Purchase;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$providers$2f$thirdweb$2d$provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThirdwebProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Purchase, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 2485,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 2484,
        columnNumber: 5
    }, this);
}
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "Purchase");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_page_tsx_b025fed5._.js.map