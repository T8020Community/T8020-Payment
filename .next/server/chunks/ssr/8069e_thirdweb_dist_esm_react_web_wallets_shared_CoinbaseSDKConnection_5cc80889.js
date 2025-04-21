module.exports = {

"[project]/node_modules/thirdweb/dist/esm/react/web/wallets/shared/CoinbaseSDKConnection.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$wallets$2f$shared$2f$ConnectingScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectingScreen.js [app-ssr] (ecmascript)");
;
;
;
/**
 * @internal
 */ function ExternalWalletConnectUI(props) {
    const { onBack, done, wallet, walletInfo, onGetStarted, locale } = props;
    const [errorConnecting, setErrorConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setErrorConnecting(false);
        wallet.connect({
            client: props.client,
            chain: props.chain
        }).then(()=>{
            done();
        }).catch((e)=>{
            console.error(e);
            setErrorConnecting(true);
        });
    }, [
        props.client,
        wallet,
        props.chain,
        done
    ]);
    const scanStarted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (scanStarted.current) {
            return;
        }
        scanStarted.current = true;
        connect();
    }, [
        connect
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$react$2f$web$2f$wallets$2f$shared$2f$ConnectingScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectingScreen"], {
        locale: {
            getStartedLink: locale.getStartedLink,
            instruction: locale.connectionScreen.instruction,
            tryAgain: locale.connectionScreen.retry,
            inProgress: locale.connectionScreen.inProgress,
            failed: locale.connectionScreen.failed
        },
        onBack: onBack,
        walletName: walletInfo.name,
        walletId: wallet.id,
        errorConnecting: errorConnecting,
        onRetry: connect,
        onGetStarted: onGetStarted,
        client: props.client,
        size: props.size
    });
}
const __TURBOPACK__default__export__ = ExternalWalletConnectUI;
 //# sourceMappingURL=CoinbaseSDKConnection.js.map
}}),

};

//# sourceMappingURL=8069e_thirdweb_dist_esm_react_web_wallets_shared_CoinbaseSDKConnection_5cc80889.js.map