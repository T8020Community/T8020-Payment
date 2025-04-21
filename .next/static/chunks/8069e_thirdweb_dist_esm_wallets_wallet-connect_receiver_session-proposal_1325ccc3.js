(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-proposal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "acceptSessionProposal": (()=>acceptSessionProposal),
    "disconnectExistingSessions": (()=>disconnectExistingSessions),
    "onSessionProposal": (()=>onSessionProposal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/dist/esm/wallets/wallet-connect/receiver/session-store.js [app-client] (ecmascript)");
;
;
async function onSessionProposal(options) {
    const { wallet, walletConnectClient, event, chains, onConnect } = options;
    const account = wallet.getAccount();
    if (!account) {
        throw new Error("No account connected to provided wallet");
    }
    const origin = event.verifyContext?.verified?.origin;
    if (origin) {
        await disconnectExistingSessions({
            origin,
            walletConnectClient
        });
    }
    const session = await acceptSessionProposal({
        account,
        walletConnectClient,
        sessionProposal: event,
        chains
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveSession"])(session);
    wallet.subscribe("disconnect", ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectWalletConnectSession"])({
            session,
            walletConnectClient
        });
    });
    onConnect?.(session);
}
async function disconnectExistingSessions({ walletConnectClient, origin }) {
    const sessions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$session$2d$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessions"])();
    for (const session of sessions){
        if (session.origin === origin) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$dist$2f$esm$2f$wallets$2f$wallet$2d$connect$2f$receiver$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disconnectWalletConnectSession"])({
                session,
                walletConnectClient
            });
        }
    }
}
async function acceptSessionProposal({ account, walletConnectClient, sessionProposal, chains }) {
    if (!sessionProposal.params.requiredNamespaces?.eip155 && !sessionProposal.params.optionalNamespaces?.eip155) {
        throw new Error("No EIP155 namespace found in Wallet Connect session proposal");
    }
    const namespaces = {
        chains: [
            ...Array.from(new Set([
                ...sessionProposal.params.requiredNamespaces?.eip155?.chains?.map((chain)=>`${chain}:${account.address}`) ?? [],
                ...sessionProposal.params.optionalNamespaces?.eip155?.chains?.map((chain)=>`${chain}:${account.address}`) ?? [],
                ...chains?.map((chain)=>`eip155:${chain.id}:${account.address}`) ?? []
            ]))
        ],
        methods: [
            ...sessionProposal.params.requiredNamespaces?.eip155?.methods ?? [],
            ...sessionProposal.params.optionalNamespaces?.eip155?.methods ?? []
        ],
        events: [
            ...sessionProposal.params.requiredNamespaces?.eip155?.events ?? [],
            ...sessionProposal.params.optionalNamespaces?.eip155?.events ?? []
        ]
    };
    const approval = await walletConnectClient.approve({
        id: sessionProposal.id,
        namespaces: {
            eip155: {
                accounts: namespaces.chains,
                methods: namespaces.methods,
                events: namespaces.events
            }
        }
    });
    const session = await approval.acknowledged();
    return {
        topic: session.topic,
        origin: sessionProposal.verifyContext?.verified?.origin || "Unknown origin"
    };
} //# sourceMappingURL=session-proposal.js.map
}}),
}]);

//# sourceMappingURL=8069e_thirdweb_dist_esm_wallets_wallet-connect_receiver_session-proposal_1325ccc3.js.map