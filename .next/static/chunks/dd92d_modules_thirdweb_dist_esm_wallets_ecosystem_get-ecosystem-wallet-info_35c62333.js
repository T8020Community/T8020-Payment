(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/thirdweb/dist/esm/wallets/ecosystem/get-ecosystem-wallet-info.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getEcosystemWalletInfo": (()=>getEcosystemWalletInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$get$2d$ecosystem$2d$wallet$2d$auth$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/wallets/ecosystem/get-ecosystem-wallet-auth-options.js [app-client] (ecmascript)");
;
async function getEcosystemWalletInfo(walletId) {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$ecosystem$2f$get$2d$ecosystem$2d$wallet$2d$auth$2d$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEcosystemInfo"])(walletId);
    return {
        id: walletId,
        name: data.name,
        image_id: data.imageUrl || "",
        homepage: data.homepage || "",
        rdns: null,
        app: {
            browser: null,
            ios: null,
            android: null,
            mac: null,
            windows: null,
            linux: null,
            opera: null,
            chrome: null,
            firefox: null,
            safari: null,
            edge: null
        },
        mobile: {
            native: null,
            universal: null
        },
        desktop: {
            native: null,
            universal: null
        }
    };
} //# sourceMappingURL=get-ecosystem-wallet-info.js.map
}}),
}]);

//# sourceMappingURL=dd92d_modules_thirdweb_dist_esm_wallets_ecosystem_get-ecosystem-wallet-info_35c62333.js.map