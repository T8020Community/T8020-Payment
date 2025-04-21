module.exports = {

"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/regex.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// TODO: This looks cool. Need to check the performance of `new RegExp` versus defined inline though.
// https://twitter.com/GabrielVergnaud/status/1622906834343366657
__turbopack_context__.s({
    "bytesRegex": (()=>bytesRegex),
    "execTyped": (()=>execTyped),
    "integerRegex": (()=>integerRegex),
    "isTupleRegex": (()=>isTupleRegex)
});
function execTyped(regex, string) {
    const match = regex.exec(string);
    return match?.groups;
}
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const isTupleRegex = /^\(.+?\).*?$/; //# sourceMappingURL=regex.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatAbiParameter": (()=>formatAbiParameter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/regex.js [app-ssr] (ecmascript)");
;
// https://regexr.com/7f7rv
const tupleRegex = /^tuple(?<array>(\[(\d*)\])*)$/;
function formatAbiParameter(abiParameter) {
    let type = abiParameter.type;
    if (tupleRegex.test(abiParameter.type) && 'components' in abiParameter) {
        type = '(';
        const length = abiParameter.components.length;
        for(let i = 0; i < length; i++){
            const component = abiParameter.components[i];
            type += formatAbiParameter(component);
            if (i < length - 1) type += ', ';
        }
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(tupleRegex, abiParameter.type);
        type += `)${result?.array ?? ''}`;
        return formatAbiParameter({
            ...abiParameter,
            type
        });
    }
    // Add `indexed` to type if in `abiParameter`
    if ('indexed' in abiParameter && abiParameter.indexed) type = `${type} indexed`;
    // Return human-readable ABI parameter
    if (abiParameter.name) return `${type} ${abiParameter.name}`;
    return type;
} //# sourceMappingURL=formatAbiParameter.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatAbiParameters": (()=>formatAbiParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/formatAbiParameter.js [app-ssr] (ecmascript)");
;
function formatAbiParameters(abiParameters) {
    let params = '';
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        params += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameter"])(abiParameter);
        if (i !== length - 1) params += ', ';
    }
    return params;
} //# sourceMappingURL=formatAbiParameters.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/version.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "version": (()=>version)
});
const version = '1.0.8'; //# sourceMappingURL=version.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BaseError": (()=>BaseError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/version.js [app-ssr] (ecmascript)");
;
class BaseError extends Error {
    constructor(shortMessage, args = {}){
        const details = args.cause instanceof BaseError ? args.cause.details : args.cause?.message ? args.cause.message : args.details;
        const docsPath = args.cause instanceof BaseError ? args.cause.docsPath || args.docsPath : args.docsPath;
        const message = [
            shortMessage || 'An error occurred.',
            '',
            ...args.metaMessages ? [
                ...args.metaMessages,
                ''
            ] : [],
            ...docsPath ? [
                `Docs: https://abitype.dev${docsPath}`
            ] : [],
            ...details ? [
                `Details: ${details}`
            ] : [],
            `Version: abitype@${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
        ].join('\n');
        super(message);
        Object.defineProperty(this, "details", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "docsPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiTypeError'
        });
        if (args.cause) this.cause = args.cause;
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.shortMessage = shortMessage;
    }
} //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidAbiParameterError": (()=>InvalidAbiParameterError),
    "InvalidAbiParametersError": (()=>InvalidAbiParametersError),
    "InvalidAbiTypeParameterError": (()=>InvalidAbiTypeParameterError),
    "InvalidFunctionModifierError": (()=>InvalidFunctionModifierError),
    "InvalidModifierError": (()=>InvalidModifierError),
    "InvalidParameterError": (()=>InvalidParameterError),
    "SolidityProtectedKeywordError": (()=>SolidityProtectedKeywordError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)");
;
class InvalidAbiParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param }){
        super('Failed to parse ABI parameter.', {
            details: `parseAbiParameter(${JSON.stringify(param, null, 2)})`,
            docsPath: '/api/human#parseabiparameter-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParameterError'
        });
    }
}
class InvalidAbiParametersError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ params }){
        super('Failed to parse ABI parameters.', {
            details: `parseAbiParameters(${JSON.stringify(params, null, 2)})`,
            docsPath: '/api/human#parseabiparameters-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiParametersError'
        });
    }
}
class InvalidParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param }){
        super('Invalid ABI parameter.', {
            details: param
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParameterError'
        });
    }
}
class SolidityProtectedKeywordError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, name }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `"${name}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SolidityProtectedKeywordError'
        });
    }
}
class InvalidModifierError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidModifierError'
        });
    }
}
class InvalidFunctionModifierError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ param, type, modifier }){
        super('Invalid ABI parameter.', {
            details: param,
            metaMessages: [
                `Modifier "${modifier}" not allowed${type ? ` in "${type}" type` : ''}.`,
                `Data location can only be specified for array, struct, or mapping types, but "${modifier}" was given.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidFunctionModifierError'
        });
    }
}
class InvalidAbiTypeParameterError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ abiParameter }){
        super('Invalid ABI parameter.', {
            details: JSON.stringify(abiParameter, null, 2),
            metaMessages: [
                'ABI parameter type is invalid.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiTypeParameterError'
        });
    }
} //# sourceMappingURL=abiParameter.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "eventModifiers": (()=>eventModifiers),
    "execConstructorSignature": (()=>execConstructorSignature),
    "execErrorSignature": (()=>execErrorSignature),
    "execEventSignature": (()=>execEventSignature),
    "execFallbackSignature": (()=>execFallbackSignature),
    "execFunctionSignature": (()=>execFunctionSignature),
    "execStructSignature": (()=>execStructSignature),
    "functionModifiers": (()=>functionModifiers),
    "isConstructorSignature": (()=>isConstructorSignature),
    "isErrorSignature": (()=>isErrorSignature),
    "isEventSignature": (()=>isEventSignature),
    "isFallbackSignature": (()=>isFallbackSignature),
    "isFunctionSignature": (()=>isFunctionSignature),
    "isReceiveSignature": (()=>isReceiveSignature),
    "isStructSignature": (()=>isStructSignature),
    "modifiers": (()=>modifiers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/regex.js [app-ssr] (ecmascript)");
;
// https://regexr.com/7gmok
const errorSignatureRegex = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isErrorSignature(signature) {
    return errorSignatureRegex.test(signature);
}
function execErrorSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(errorSignatureRegex, signature);
}
// https://regexr.com/7gmoq
const eventSignatureRegex = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function isEventSignature(signature) {
    return eventSignatureRegex.test(signature);
}
function execEventSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(eventSignatureRegex, signature);
}
// https://regexr.com/7gmot
const functionSignatureRegex = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function isFunctionSignature(signature) {
    return functionSignatureRegex.test(signature);
}
function execFunctionSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(functionSignatureRegex, signature);
}
// https://regexr.com/7gmp3
const structSignatureRegex = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function isStructSignature(signature) {
    return structSignatureRegex.test(signature);
}
function execStructSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(structSignatureRegex, signature);
}
// https://regexr.com/78u01
const constructorSignatureRegex = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function isConstructorSignature(signature) {
    return constructorSignatureRegex.test(signature);
}
function execConstructorSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(constructorSignatureRegex, signature);
}
// https://regexr.com/7srtn
const fallbackSignatureRegex = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function isFallbackSignature(signature) {
    return fallbackSignatureRegex.test(signature);
}
function execFallbackSignature(signature) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(fallbackSignatureRegex, signature);
}
// https://regexr.com/78u1k
const receiveSignatureRegex = /^receive\(\) external payable$/;
function isReceiveSignature(signature) {
    return receiveSignatureRegex.test(signature);
}
const modifiers = new Set([
    'memory',
    'indexed',
    'storage',
    'calldata'
]);
const eventModifiers = new Set([
    'indexed'
]);
const functionModifiers = new Set([
    'calldata',
    'memory',
    'storage'
]); //# sourceMappingURL=signatures.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidAbiItemError": (()=>InvalidAbiItemError),
    "UnknownSolidityTypeError": (()=>UnknownSolidityTypeError),
    "UnknownTypeError": (()=>UnknownTypeError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)");
;
class InvalidAbiItemError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Failed to parse ABI item.', {
            details: `parseAbiItem(${JSON.stringify(signature, null, 2)})`,
            docsPath: '/api/human#parseabiitem-1'
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidAbiItemError'
        });
    }
}
class UnknownTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownTypeError'
        });
    }
}
class UnknownSolidityTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Unknown type.', {
            metaMessages: [
                `Type "${type}" is not a valid ABI type.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSolidityTypeError'
        });
    }
} //# sourceMappingURL=abiItem.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidSignatureError": (()=>InvalidSignatureError),
    "InvalidStructSignatureError": (()=>InvalidStructSignatureError),
    "UnknownSignatureError": (()=>UnknownSignatureError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)");
;
class InvalidSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature, type }){
        super(`Invalid ${type} signature.`, {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidSignatureError'
        });
    }
}
class UnknownSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Unknown signature.', {
            details: signature
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownSignatureError'
        });
    }
}
class InvalidStructSignatureError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ signature }){
        super('Invalid struct signature.', {
            details: signature,
            metaMessages: [
                'No properties exist.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidStructSignatureError'
        });
    }
} //# sourceMappingURL=signature.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/struct.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CircularReferenceError": (()=>CircularReferenceError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)");
;
class CircularReferenceError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super('Circular reference detected.', {
            metaMessages: [
                `Struct "${type}" is a circular reference.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'CircularReferenceError'
        });
    }
} //# sourceMappingURL=struct.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/splitParameters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidParenthesisError": (()=>InvalidParenthesisError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/errors.js [app-ssr] (ecmascript)");
;
class InvalidParenthesisError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ current, depth }){
        super('Unbalanced parentheses.', {
            metaMessages: [
                `"${current.trim()}" has too many ${depth > 0 ? 'opening' : 'closing'} parentheses.`
            ],
            details: `Depth "${depth}"`
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParenthesisError'
        });
    }
} //# sourceMappingURL=splitParameters.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/cache.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Gets {@link parameterCache} cache key namespaced by {@link type}. This prevents parameters from being accessible to types that don't allow them (e.g. `string indexed foo` not allowed outside of `type: 'event'`).
 * @param param ABI parameter string
 * @param type ABI parameter type
 * @returns Cache key for {@link parameterCache}
 */ __turbopack_context__.s({
    "getParameterCacheKey": (()=>getParameterCacheKey),
    "parameterCache": (()=>parameterCache)
});
function getParameterCacheKey(param, type, structs) {
    let structKey = '';
    if (structs) for (const struct of Object.entries(structs)){
        if (!struct) continue;
        let propertyKey = '';
        for (const property of struct[1]){
            propertyKey += `[${property.type}${property.name ? `:${property.name}` : ''}]`;
        }
        structKey += `(${struct[0]}{${propertyKey}})`;
    }
    if (type) return `${type}:${param}${structKey}`;
    return param;
}
const parameterCache = new Map([
    // Unnamed
    [
        'address',
        {
            type: 'address'
        }
    ],
    [
        'bool',
        {
            type: 'bool'
        }
    ],
    [
        'bytes',
        {
            type: 'bytes'
        }
    ],
    [
        'bytes32',
        {
            type: 'bytes32'
        }
    ],
    [
        'int',
        {
            type: 'int256'
        }
    ],
    [
        'int256',
        {
            type: 'int256'
        }
    ],
    [
        'string',
        {
            type: 'string'
        }
    ],
    [
        'uint',
        {
            type: 'uint256'
        }
    ],
    [
        'uint8',
        {
            type: 'uint8'
        }
    ],
    [
        'uint16',
        {
            type: 'uint16'
        }
    ],
    [
        'uint24',
        {
            type: 'uint24'
        }
    ],
    [
        'uint32',
        {
            type: 'uint32'
        }
    ],
    [
        'uint64',
        {
            type: 'uint64'
        }
    ],
    [
        'uint96',
        {
            type: 'uint96'
        }
    ],
    [
        'uint112',
        {
            type: 'uint112'
        }
    ],
    [
        'uint160',
        {
            type: 'uint160'
        }
    ],
    [
        'uint192',
        {
            type: 'uint192'
        }
    ],
    [
        'uint256',
        {
            type: 'uint256'
        }
    ],
    // Named
    [
        'address owner',
        {
            type: 'address',
            name: 'owner'
        }
    ],
    [
        'address to',
        {
            type: 'address',
            name: 'to'
        }
    ],
    [
        'bool approved',
        {
            type: 'bool',
            name: 'approved'
        }
    ],
    [
        'bytes _data',
        {
            type: 'bytes',
            name: '_data'
        }
    ],
    [
        'bytes data',
        {
            type: 'bytes',
            name: 'data'
        }
    ],
    [
        'bytes signature',
        {
            type: 'bytes',
            name: 'signature'
        }
    ],
    [
        'bytes32 hash',
        {
            type: 'bytes32',
            name: 'hash'
        }
    ],
    [
        'bytes32 r',
        {
            type: 'bytes32',
            name: 'r'
        }
    ],
    [
        'bytes32 root',
        {
            type: 'bytes32',
            name: 'root'
        }
    ],
    [
        'bytes32 s',
        {
            type: 'bytes32',
            name: 's'
        }
    ],
    [
        'string name',
        {
            type: 'string',
            name: 'name'
        }
    ],
    [
        'string symbol',
        {
            type: 'string',
            name: 'symbol'
        }
    ],
    [
        'string tokenURI',
        {
            type: 'string',
            name: 'tokenURI'
        }
    ],
    [
        'uint tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint8 v',
        {
            type: 'uint8',
            name: 'v'
        }
    ],
    [
        'uint256 balance',
        {
            type: 'uint256',
            name: 'balance'
        }
    ],
    [
        'uint256 tokenId',
        {
            type: 'uint256',
            name: 'tokenId'
        }
    ],
    [
        'uint256 value',
        {
            type: 'uint256',
            name: 'value'
        }
    ],
    // Indexed
    [
        'event:address indexed from',
        {
            type: 'address',
            name: 'from',
            indexed: true
        }
    ],
    [
        'event:address indexed to',
        {
            type: 'address',
            name: 'to',
            indexed: true
        }
    ],
    [
        'event:uint indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ],
    [
        'event:uint256 indexed tokenId',
        {
            type: 'uint256',
            name: 'tokenId',
            indexed: true
        }
    ]
]); //# sourceMappingURL=cache.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isSolidityKeyword": (()=>isSolidityKeyword),
    "isSolidityType": (()=>isSolidityType),
    "isValidDataLocation": (()=>isValidDataLocation),
    "parseAbiParameter": (()=>parseAbiParameter),
    "parseConstructorSignature": (()=>parseConstructorSignature),
    "parseErrorSignature": (()=>parseErrorSignature),
    "parseEventSignature": (()=>parseEventSignature),
    "parseFallbackSignature": (()=>parseFallbackSignature),
    "parseFunctionSignature": (()=>parseFunctionSignature),
    "parseSignature": (()=>parseSignature),
    "splitParameters": (()=>splitParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/regex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$splitParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/splitParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/cache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function parseSignature(signature, structs = {}) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunctionSignature"])(signature)) return parseFunctionSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEventSignature"])(signature)) return parseEventSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isErrorSignature"])(signature)) return parseErrorSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isConstructorSignature"])(signature)) return parseConstructorSignature(signature, structs);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFallbackSignature"])(signature)) return parseFallbackSignature(signature);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReceiveSignature"])(signature)) return {
        type: 'receive',
        stateMutability: 'payable'
    };
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownSignatureError"]({
        signature
    });
}
function parseFunctionSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execFunctionSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'function'
    });
    const inputParams = splitParameters(match.parameters);
    const inputs = [];
    const inputLength = inputParams.length;
    for(let i = 0; i < inputLength; i++){
        inputs.push(parseAbiParameter(inputParams[i], {
            modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionModifiers"],
            structs,
            type: 'function'
        }));
    }
    const outputs = [];
    if (match.returns) {
        const outputParams = splitParameters(match.returns);
        const outputLength = outputParams.length;
        for(let i = 0; i < outputLength; i++){
            outputs.push(parseAbiParameter(outputParams[i], {
                modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionModifiers"],
                structs,
                type: 'function'
            }));
        }
    }
    return {
        name: match.name,
        type: 'function',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs,
        outputs
    };
}
function parseEventSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execEventSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'event'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventModifiers"],
        structs,
        type: 'event'
    }));
    return {
        name: match.name,
        type: 'event',
        inputs: abiParameters
    };
}
function parseErrorSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execErrorSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'error'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'error'
    }));
    return {
        name: match.name,
        type: 'error',
        inputs: abiParameters
    };
}
function parseConstructorSignature(signature, structs = {}) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execConstructorSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'constructor'
    });
    const params = splitParameters(match.parameters);
    const abiParameters = [];
    const length = params.length;
    for(let i = 0; i < length; i++)abiParameters.push(parseAbiParameter(params[i], {
        structs,
        type: 'constructor'
    }));
    return {
        type: 'constructor',
        stateMutability: match.stateMutability ?? 'nonpayable',
        inputs: abiParameters
    };
}
function parseFallbackSignature(signature) {
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execFallbackSignature"])(signature);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
        signature,
        type: 'fallback'
    });
    return {
        type: 'fallback',
        stateMutability: match.stateMutability ?? 'nonpayable'
    };
}
const abiParameterWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const abiParameterWithTupleRegex = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/;
const dynamicIntegerRegex = /^u?int$/;
function parseAbiParameter(param, options) {
    // optional namespace cache by `type`
    const parameterCacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParameterCacheKey"])(param, options?.type, options?.structs);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parameterCache"].has(parameterCacheKey)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parameterCache"].get(parameterCacheKey);
    const isTuple = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTupleRegex"].test(param);
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(isTuple ? abiParameterWithTupleRegex : abiParameterWithoutTupleRegex, param);
    if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidParameterError"]({
        param
    });
    if (match.name && isSolidityKeyword(match.name)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolidityProtectedKeywordError"]({
        param,
        name: match.name
    });
    const name = match.name ? {
        name: match.name
    } : {};
    const indexed = match.modifier === 'indexed' ? {
        indexed: true
    } : {};
    const structs = options?.structs ?? {};
    let type;
    let components = {};
    if (isTuple) {
        type = 'tuple';
        const params = splitParameters(match.type);
        const components_ = [];
        const length = params.length;
        for(let i = 0; i < length; i++){
            // remove `modifiers` from `options` to prevent from being added to tuple components
            components_.push(parseAbiParameter(params[i], {
                structs
            }));
        }
        components = {
            components: components_
        };
    } else if (match.type in structs) {
        type = 'tuple';
        components = {
            components: structs[match.type]
        };
    } else if (dynamicIntegerRegex.test(match.type)) {
        type = `${match.type}256`;
    } else {
        type = match.type;
        if (!(options?.type === 'struct') && !isSolidityType(type)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownSolidityTypeError"]({
            type
        });
    }
    if (match.modifier) {
        // Check if modifier exists, but is not allowed (e.g. `indexed` in `functionModifiers`)
        if (!options?.modifiers?.has?.(match.modifier)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidModifierError"]({
            param,
            type: options?.type,
            modifier: match.modifier
        });
        // Check if resolved `type` is valid if there is a function modifier
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionModifiers"].has(match.modifier) && !isValidDataLocation(type, !!match.array)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidFunctionModifierError"]({
            param,
            type: options?.type,
            modifier: match.modifier
        });
    }
    const abiParameter = {
        type: `${type}${match.array ?? ''}`,
        ...name,
        ...indexed,
        ...components
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$cache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parameterCache"].set(parameterCacheKey, abiParameter);
    return abiParameter;
}
function splitParameters(params, result = [], current = '', depth = 0) {
    const length = params.trim().length;
    // biome-ignore lint/correctness/noUnreachable: recursive
    for(let i = 0; i < length; i++){
        const char = params[i];
        const tail = params.slice(i + 1);
        switch(char){
            case ',':
                return depth === 0 ? splitParameters(tail, [
                    ...result,
                    current.trim()
                ]) : splitParameters(tail, result, `${current}${char}`, depth);
            case '(':
                return splitParameters(tail, result, `${current}${char}`, depth + 1);
            case ')':
                return splitParameters(tail, result, `${current}${char}`, depth - 1);
            default:
                return splitParameters(tail, result, `${current}${char}`, depth);
        }
    }
    if (current === '') return result;
    if (depth !== 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$splitParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidParenthesisError"]({
        current,
        depth
    });
    result.push(current.trim());
    return result;
}
function isSolidityType(type) {
    return type === 'address' || type === 'bool' || type === 'function' || type === 'string' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesRegex"].test(type) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"].test(type);
}
const protectedKeywordsRegex = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function isSolidityKeyword(name) {
    return name === 'address' || name === 'bool' || name === 'function' || name === 'string' || name === 'tuple' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesRegex"].test(name) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"].test(name) || protectedKeywordsRegex.test(name);
}
function isValidDataLocation(type, isArray) {
    return isArray || type === 'bytes' || type === 'string' || type === 'tuple';
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseStructs": (()=>parseStructs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/regex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/signature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$struct$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/struct.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function parseStructs(signatures) {
    // Create "shallow" version of each struct (and filter out non-structs or invalid structs)
    const shallowStructs = {};
    const signaturesLength = signatures.length;
    for(let i = 0; i < signaturesLength; i++){
        const signature = signatures[i];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
        const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execStructSignature"])(signature);
        if (!match) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidSignatureError"]({
            signature,
            type: 'struct'
        });
        const properties = match.properties.split(';');
        const components = [];
        const propertiesLength = properties.length;
        for(let k = 0; k < propertiesLength; k++){
            const property = properties[k];
            const trimmed = property.trim();
            if (!trimmed) continue;
            const abiParameter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameter"])(trimmed, {
                type: 'struct'
            });
            components.push(abiParameter);
        }
        if (!components.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$signature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidStructSignatureError"]({
            signature
        });
        shallowStructs[match.name] = components;
    }
    // Resolve nested structs inside each parameter
    const resolvedStructs = {};
    const entries = Object.entries(shallowStructs);
    const entriesLength = entries.length;
    for(let i = 0; i < entriesLength; i++){
        const [name, parameters] = entries[i];
        resolvedStructs[name] = resolveStructs(parameters, shallowStructs);
    }
    return resolvedStructs;
}
const typeWithoutTupleRegex = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function resolveStructs(abiParameters, structs, ancestors = new Set()) {
    const components = [];
    const length = abiParameters.length;
    for(let i = 0; i < length; i++){
        const abiParameter = abiParameters[i];
        const isTuple = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTupleRegex"].test(abiParameter.type);
        if (isTuple) components.push(abiParameter);
        else {
            const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["execTyped"])(typeWithoutTupleRegex, abiParameter.type);
            if (!match?.type) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAbiTypeParameterError"]({
                abiParameter
            });
            const { array, type } = match;
            if (type in structs) {
                if (ancestors.has(type)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$struct$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircularReferenceError"]({
                    type
                });
                components.push({
                    ...abiParameter,
                    type: `tuple${array ?? ''}`,
                    components: resolveStructs(structs[type] ?? [], structs, new Set([
                        ...ancestors,
                        type
                    ]))
                });
            } else {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolidityType"])(type)) components.push(abiParameter);
                else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnknownTypeError"]({
                    type
                });
            }
        }
    }
    return components;
} //# sourceMappingURL=structs.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseAbiParameters": (()=>parseAbiParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/abiParameter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
function parseAbiParameters(params) {
    const abiParameters = [];
    if (typeof params === 'string') {
        const parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitParameters"])(params);
        const length = parameters.length;
        for(let i = 0; i < length; i++){
            abiParameters.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameter"])(parameters[i], {
                modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modifiers"]
            }));
        }
    } else {
        const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseStructs"])(params);
        const length = params.length;
        for(let i = 0; i < length; i++){
            const signature = params[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
            const parameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitParameters"])(signature);
            const length = parameters.length;
            for(let k = 0; k < length; k++){
                abiParameters.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameter"])(parameters[k], {
                    modifiers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modifiers"],
                    structs
                }));
            }
        }
    }
    if (abiParameters.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiParameter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAbiParametersError"]({
        params
    });
    return abiParameters;
} //# sourceMappingURL=parseAbiParameters.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/parseAbiItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseAbiItem": (()=>parseAbiItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/errors/abiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function parseAbiItem(signature) {
    let abiItem;
    if (typeof signature === 'string') abiItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSignature"])(signature);
    else {
        const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseStructs"])(signature);
        const length = signature.length;
        for(let i = 0; i < length; i++){
            const signature_ = signature[i];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStructSignature"])(signature_)) continue;
            abiItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSignature"])(signature_, structs);
            break;
        }
    }
    if (!abiItem) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$errors$2f$abiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAbiItemError"]({
        signature
    });
    return abiItem;
} //# sourceMappingURL=parseAbiItem.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatAbiItem": (()=>formatAbiItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-ssr] (ecmascript)");
;
function formatAbiItem(abiItem) {
    if (abiItem.type === 'function') return `function ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})${abiItem.stateMutability && abiItem.stateMutability !== 'nonpayable' ? ` ${abiItem.stateMutability}` : ''}${abiItem.outputs?.length ? ` returns (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.outputs)})` : ''}`;
    if (abiItem.type === 'event') return `event ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})`;
    if (abiItem.type === 'error') return `error ${abiItem.name}(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})`;
    if (abiItem.type === 'constructor') return `constructor(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(abiItem.inputs)})${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    if (abiItem.type === 'fallback') return `fallback() external${abiItem.stateMutability === 'payable' ? ' payable' : ''}`;
    return 'receive() external payable';
} //# sourceMappingURL=formatAbiItem.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/formatAbi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatAbi": (()=>formatAbi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/formatAbiItem.js [app-ssr] (ecmascript)");
;
function formatAbi(abi) {
    const signatures = [];
    const length = abi.length;
    for(let i = 0; i < length; i++){
        const abiItem = abi[i];
        const signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiItem"])(abiItem);
        signatures.push(signature);
    }
    return signatures;
} //# sourceMappingURL=formatAbi.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseAbi": (()=>parseAbi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/signatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/structs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/runtime/utils.js [app-ssr] (ecmascript)");
;
;
;
function parseAbi(signatures) {
    const structs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$structs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseStructs"])(signatures);
    const abi = [];
    const length = signatures.length;
    for(let i = 0; i < length; i++){
        const signature = signatures[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$signatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStructSignature"])(signature)) continue;
        abi.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$runtime$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseSignature"])(signature, structs));
    }
    return abi;
} //# sourceMappingURL=parseAbi.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/ox/_esm/core/internal/lru.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @internal
 *
 * Map with a LRU (Least recently used) policy.
 * @see https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
 */ __turbopack_context__.s({
    "LruMap": (()=>LruMap)
});
class LruMap extends Map {
    constructor(size){
        super();
        Object.defineProperty(this, "maxSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.maxSize = size;
    }
    get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== undefined) {
            this.delete(key);
            super.set(key, value);
        }
        return value;
    }
    set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
            const firstKey = this.keys().next().value;
            if (firstKey) this.delete(firstKey);
        }
        return this;
    }
} //# sourceMappingURL=lru.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Caches.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checksum": (()=>checksum),
    "clear": (()=>clear)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/internal/lru.js [app-ssr] (ecmascript)");
;
const caches = {
    checksum: /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$lru$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LruMap"](8192)
};
const checksum = caches.checksum;
function clear() {
    for (const cache of Object.values(caches))cache.clear();
} //# sourceMappingURL=Caches.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Hash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "keccak256": (()=>keccak256),
    "ripemd160": (()=>ripemd160),
    "sha256": (()=>sha256),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/ripemd160.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/sha3.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/sha256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
;
;
;
;
;
function keccak256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak_256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(value));
    if (as === 'Bytes') return bytes;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(bytes);
}
function ripemd160(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$ripemd160$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ripemd160"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(value));
    if (as === 'Bytes') return bytes;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(bytes);
}
function sha256(value, options = {}) {
    const { as = typeof value === 'string' ? 'Hex' : 'Bytes' } = options;
    const bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(value));
    if (as === 'Bytes') return bytes;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(bytes);
}
function validate(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(value) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value) === 32;
} //# sourceMappingURL=Hash.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/ox/_esm/core/PublicKey.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidCompressedPrefixError": (()=>InvalidCompressedPrefixError),
    "InvalidError": (()=>InvalidError),
    "InvalidPrefixError": (()=>InvalidPrefixError),
    "InvalidSerializedSizeError": (()=>InvalidSerializedSizeError),
    "InvalidUncompressedPrefixError": (()=>InvalidUncompressedPrefixError),
    "assert": (()=>assert),
    "compress": (()=>compress),
    "from": (()=>from),
    "fromBytes": (()=>fromBytes),
    "fromHex": (()=>fromHex),
    "toBytes": (()=>toBytes),
    "toHex": (()=>toHex),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Json.js [app-ssr] (ecmascript)");
;
;
;
;
function assert(publicKey, options = {}) {
    const { compressed } = options;
    const { prefix, x, y } = publicKey;
    // Uncompressed
    if (compressed === false || typeof x === 'bigint' && typeof y === 'bigint') {
        if (prefix !== 4) throw new InvalidPrefixError({
            prefix,
            cause: new InvalidUncompressedPrefixError()
        });
        return;
    }
    // Compressed
    if (compressed === true || typeof x === 'bigint' && typeof y === 'undefined') {
        if (prefix !== 3 && prefix !== 2) throw new InvalidPrefixError({
            prefix,
            cause: new InvalidCompressedPrefixError()
        });
        return;
    }
    // Unknown/invalid
    throw new InvalidError({
        publicKey
    });
}
function compress(publicKey) {
    const { x, y } = publicKey;
    return {
        prefix: y % 2n === 0n ? 2 : 3,
        x
    };
}
function from(value) {
    const publicKey = (()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(value)) return fromHex(value);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(value)) return fromBytes(value);
        const { prefix, x, y } = value;
        if (typeof x === 'bigint' && typeof y === 'bigint') return {
            prefix: prefix ?? 0x04,
            x,
            y
        };
        return {
            prefix,
            x
        };
    })();
    assert(publicKey);
    return publicKey;
}
function fromBytes(publicKey) {
    return fromHex((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(publicKey));
}
function fromHex(publicKey) {
    if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68) throw new InvalidSerializedSizeError({
        publicKey
    });
    if (publicKey.length === 130) {
        const x = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 0, 32));
        const y = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 32, 64));
        return {
            prefix: 4,
            x,
            y
        };
    }
    if (publicKey.length === 132) {
        const prefix = Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 0, 1));
        const x = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 1, 33));
        const y = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 33, 65));
        return {
            prefix,
            x,
            y
        };
    }
    const prefix = Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 0, 1));
    const x = BigInt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(publicKey, 1, 33));
    return {
        prefix,
        x
    };
}
function toBytes(publicKey, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromHex"])(toHex(publicKey, options));
}
function toHex(publicKey, options = {}) {
    assert(publicKey);
    const { prefix, x, y } = publicKey;
    const { includePrefix = true } = options;
    const publicKey_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(includePrefix ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(prefix, {
        size: 1
    }) : '0x', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(x, {
        size: 32
    }), // If the public key is not compressed, add the y coordinate.
    typeof y === 'bigint' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(y, {
        size: 32
    }) : '0x');
    return publicKey_;
}
function validate(publicKey, options = {}) {
    try {
        assert(publicKey, options);
        return true;
    } catch (error) {
        return false;
    }
}
class InvalidError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ publicKey }){
        super(`Value \`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(publicKey)}\` is not a valid public key.`, {
            metaMessages: [
                'Public key must contain:',
                '- an `x` and `prefix` value (compressed)',
                '- an `x`, `y`, and `prefix` value (uncompressed)'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidError'
        });
    }
}
class InvalidPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ prefix, cause }){
        super(`Prefix "${prefix}" is invalid.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidPrefixError'
        });
    }
}
class InvalidCompressedPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Prefix must be 2 or 3 for compressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidCompressedPrefixError'
        });
    }
}
class InvalidUncompressedPrefixError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Prefix must be 4 for uncompressed public keys.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidUncompressedPrefixError'
        });
    }
}
class InvalidSerializedSizeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ publicKey }){
        super(`Value \`${publicKey}\` is an invalid public key size.`, {
            metaMessages: [
                'Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).',
                `Received ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["from"])(publicKey))} bytes.`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'PublicKey.InvalidSerializedSizeError'
        });
    }
} //# sourceMappingURL=PublicKey.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InvalidAddressError": (()=>InvalidAddressError),
    "InvalidChecksumError": (()=>InvalidChecksumError),
    "InvalidInputError": (()=>InvalidInputError),
    "assert": (()=>assert),
    "checksum": (()=>checksum),
    "from": (()=>from),
    "fromPublicKey": (()=>fromPublicKey),
    "isEqual": (()=>isEqual),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Caches.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/PublicKey.js [app-ssr] (ecmascript)");
;
;
;
;
;
const addressRegex = /*#__PURE__*/ /^0x[a-fA-F0-9]{40}$/;
function assert(value, options = {}) {
    const { strict = true } = options;
    if (!addressRegex.test(value)) throw new InvalidAddressError({
        address: value,
        cause: new InvalidInputError()
    });
    if (strict) {
        if (value.toLowerCase() === value) return;
        if (checksum(value) !== value) throw new InvalidAddressError({
            address: value,
            cause: new InvalidChecksumError()
        });
    }
}
function checksum(address) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksum"].has(address)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksum"].get(address);
    assert(address, {
        strict: false
    });
    const hexAddress = address.substring(2).toLowerCase();
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(hexAddress), {
        as: 'Bytes'
    });
    const characters = hexAddress.split('');
    for(let i = 0; i < 40; i += 2){
        if (hash[i >> 1] >> 4 >= 8 && characters[i]) {
            characters[i] = characters[i].toUpperCase();
        }
        if ((hash[i >> 1] & 0x0f) >= 8 && characters[i + 1]) {
            characters[i + 1] = characters[i + 1].toUpperCase();
        }
    }
    const result = `0x${characters.join('')}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Caches$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksum"].set(address, result);
    return result;
}
function from(address, options = {}) {
    const { checksum: checksumVal = false } = options;
    assert(address);
    if (checksumVal) return checksum(address);
    return address;
}
function fromPublicKey(publicKey, options = {}) {
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(`0x${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$PublicKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(publicKey).slice(4)}`).substring(26);
    return from(`0x${address}`, options);
}
function isEqual(addressA, addressB) {
    assert(addressA, {
        strict: false
    });
    assert(addressB, {
        strict: false
    });
    return addressA.toLowerCase() === addressB.toLowerCase();
}
function validate(address, options = {}) {
    const { strict = true } = options ?? {};
    try {
        assert(address, {
            strict
        });
        return true;
    } catch  {
        return false;
    }
}
class InvalidAddressError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address, cause }){
        super(`Address "${address}" is invalid.`, {
            cause
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidAddressError'
        });
    }
}
class InvalidInputError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Address is not a 20 byte (40 hexadecimal character) value.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidInputError'
        });
    }
}
class InvalidChecksumError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Address does not match its checksum counterpart.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Address.InvalidChecksumError'
        });
    }
} //# sourceMappingURL=Address.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Solidity.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "arrayRegex": (()=>arrayRegex),
    "bytesRegex": (()=>bytesRegex),
    "integerRegex": (()=>integerRegex),
    "maxInt104": (()=>maxInt104),
    "maxInt112": (()=>maxInt112),
    "maxInt120": (()=>maxInt120),
    "maxInt128": (()=>maxInt128),
    "maxInt136": (()=>maxInt136),
    "maxInt144": (()=>maxInt144),
    "maxInt152": (()=>maxInt152),
    "maxInt16": (()=>maxInt16),
    "maxInt160": (()=>maxInt160),
    "maxInt168": (()=>maxInt168),
    "maxInt176": (()=>maxInt176),
    "maxInt184": (()=>maxInt184),
    "maxInt192": (()=>maxInt192),
    "maxInt200": (()=>maxInt200),
    "maxInt208": (()=>maxInt208),
    "maxInt216": (()=>maxInt216),
    "maxInt224": (()=>maxInt224),
    "maxInt232": (()=>maxInt232),
    "maxInt24": (()=>maxInt24),
    "maxInt240": (()=>maxInt240),
    "maxInt248": (()=>maxInt248),
    "maxInt256": (()=>maxInt256),
    "maxInt32": (()=>maxInt32),
    "maxInt40": (()=>maxInt40),
    "maxInt48": (()=>maxInt48),
    "maxInt56": (()=>maxInt56),
    "maxInt64": (()=>maxInt64),
    "maxInt72": (()=>maxInt72),
    "maxInt8": (()=>maxInt8),
    "maxInt80": (()=>maxInt80),
    "maxInt88": (()=>maxInt88),
    "maxInt96": (()=>maxInt96),
    "maxUint104": (()=>maxUint104),
    "maxUint112": (()=>maxUint112),
    "maxUint120": (()=>maxUint120),
    "maxUint128": (()=>maxUint128),
    "maxUint136": (()=>maxUint136),
    "maxUint144": (()=>maxUint144),
    "maxUint152": (()=>maxUint152),
    "maxUint16": (()=>maxUint16),
    "maxUint160": (()=>maxUint160),
    "maxUint168": (()=>maxUint168),
    "maxUint176": (()=>maxUint176),
    "maxUint184": (()=>maxUint184),
    "maxUint192": (()=>maxUint192),
    "maxUint200": (()=>maxUint200),
    "maxUint208": (()=>maxUint208),
    "maxUint216": (()=>maxUint216),
    "maxUint224": (()=>maxUint224),
    "maxUint232": (()=>maxUint232),
    "maxUint24": (()=>maxUint24),
    "maxUint240": (()=>maxUint240),
    "maxUint248": (()=>maxUint248),
    "maxUint256": (()=>maxUint256),
    "maxUint32": (()=>maxUint32),
    "maxUint40": (()=>maxUint40),
    "maxUint48": (()=>maxUint48),
    "maxUint56": (()=>maxUint56),
    "maxUint64": (()=>maxUint64),
    "maxUint72": (()=>maxUint72),
    "maxUint8": (()=>maxUint8),
    "maxUint80": (()=>maxUint80),
    "maxUint88": (()=>maxUint88),
    "maxUint96": (()=>maxUint96),
    "minInt104": (()=>minInt104),
    "minInt112": (()=>minInt112),
    "minInt120": (()=>minInt120),
    "minInt128": (()=>minInt128),
    "minInt136": (()=>minInt136),
    "minInt144": (()=>minInt144),
    "minInt152": (()=>minInt152),
    "minInt16": (()=>minInt16),
    "minInt160": (()=>minInt160),
    "minInt168": (()=>minInt168),
    "minInt176": (()=>minInt176),
    "minInt184": (()=>minInt184),
    "minInt192": (()=>minInt192),
    "minInt200": (()=>minInt200),
    "minInt208": (()=>minInt208),
    "minInt216": (()=>minInt216),
    "minInt224": (()=>minInt224),
    "minInt232": (()=>minInt232),
    "minInt24": (()=>minInt24),
    "minInt240": (()=>minInt240),
    "minInt248": (()=>minInt248),
    "minInt256": (()=>minInt256),
    "minInt32": (()=>minInt32),
    "minInt40": (()=>minInt40),
    "minInt48": (()=>minInt48),
    "minInt56": (()=>minInt56),
    "minInt64": (()=>minInt64),
    "minInt72": (()=>minInt72),
    "minInt8": (()=>minInt8),
    "minInt80": (()=>minInt80),
    "minInt88": (()=>minInt88),
    "minInt96": (()=>minInt96)
});
const arrayRegex = /^(.*)\[([0-9]*)\]$/;
const bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
const integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
const maxInt8 = 2n ** (8n - 1n) - 1n;
const maxInt16 = 2n ** (16n - 1n) - 1n;
const maxInt24 = 2n ** (24n - 1n) - 1n;
const maxInt32 = 2n ** (32n - 1n) - 1n;
const maxInt40 = 2n ** (40n - 1n) - 1n;
const maxInt48 = 2n ** (48n - 1n) - 1n;
const maxInt56 = 2n ** (56n - 1n) - 1n;
const maxInt64 = 2n ** (64n - 1n) - 1n;
const maxInt72 = 2n ** (72n - 1n) - 1n;
const maxInt80 = 2n ** (80n - 1n) - 1n;
const maxInt88 = 2n ** (88n - 1n) - 1n;
const maxInt96 = 2n ** (96n - 1n) - 1n;
const maxInt104 = 2n ** (104n - 1n) - 1n;
const maxInt112 = 2n ** (112n - 1n) - 1n;
const maxInt120 = 2n ** (120n - 1n) - 1n;
const maxInt128 = 2n ** (128n - 1n) - 1n;
const maxInt136 = 2n ** (136n - 1n) - 1n;
const maxInt144 = 2n ** (144n - 1n) - 1n;
const maxInt152 = 2n ** (152n - 1n) - 1n;
const maxInt160 = 2n ** (160n - 1n) - 1n;
const maxInt168 = 2n ** (168n - 1n) - 1n;
const maxInt176 = 2n ** (176n - 1n) - 1n;
const maxInt184 = 2n ** (184n - 1n) - 1n;
const maxInt192 = 2n ** (192n - 1n) - 1n;
const maxInt200 = 2n ** (200n - 1n) - 1n;
const maxInt208 = 2n ** (208n - 1n) - 1n;
const maxInt216 = 2n ** (216n - 1n) - 1n;
const maxInt224 = 2n ** (224n - 1n) - 1n;
const maxInt232 = 2n ** (232n - 1n) - 1n;
const maxInt240 = 2n ** (240n - 1n) - 1n;
const maxInt248 = 2n ** (248n - 1n) - 1n;
const maxInt256 = 2n ** (256n - 1n) - 1n;
const minInt8 = -(2n ** (8n - 1n));
const minInt16 = -(2n ** (16n - 1n));
const minInt24 = -(2n ** (24n - 1n));
const minInt32 = -(2n ** (32n - 1n));
const minInt40 = -(2n ** (40n - 1n));
const minInt48 = -(2n ** (48n - 1n));
const minInt56 = -(2n ** (56n - 1n));
const minInt64 = -(2n ** (64n - 1n));
const minInt72 = -(2n ** (72n - 1n));
const minInt80 = -(2n ** (80n - 1n));
const minInt88 = -(2n ** (88n - 1n));
const minInt96 = -(2n ** (96n - 1n));
const minInt104 = -(2n ** (104n - 1n));
const minInt112 = -(2n ** (112n - 1n));
const minInt120 = -(2n ** (120n - 1n));
const minInt128 = -(2n ** (128n - 1n));
const minInt136 = -(2n ** (136n - 1n));
const minInt144 = -(2n ** (144n - 1n));
const minInt152 = -(2n ** (152n - 1n));
const minInt160 = -(2n ** (160n - 1n));
const minInt168 = -(2n ** (168n - 1n));
const minInt176 = -(2n ** (176n - 1n));
const minInt184 = -(2n ** (184n - 1n));
const minInt192 = -(2n ** (192n - 1n));
const minInt200 = -(2n ** (200n - 1n));
const minInt208 = -(2n ** (208n - 1n));
const minInt216 = -(2n ** (216n - 1n));
const minInt224 = -(2n ** (224n - 1n));
const minInt232 = -(2n ** (232n - 1n));
const minInt240 = -(2n ** (240n - 1n));
const minInt248 = -(2n ** (248n - 1n));
const minInt256 = -(2n ** (256n - 1n));
const maxUint8 = 2n ** 8n - 1n;
const maxUint16 = 2n ** 16n - 1n;
const maxUint24 = 2n ** 24n - 1n;
const maxUint32 = 2n ** 32n - 1n;
const maxUint40 = 2n ** 40n - 1n;
const maxUint48 = 2n ** 48n - 1n;
const maxUint56 = 2n ** 56n - 1n;
const maxUint64 = 2n ** 64n - 1n;
const maxUint72 = 2n ** 72n - 1n;
const maxUint80 = 2n ** 80n - 1n;
const maxUint88 = 2n ** 88n - 1n;
const maxUint96 = 2n ** 96n - 1n;
const maxUint104 = 2n ** 104n - 1n;
const maxUint112 = 2n ** 112n - 1n;
const maxUint120 = 2n ** 120n - 1n;
const maxUint128 = 2n ** 128n - 1n;
const maxUint136 = 2n ** 136n - 1n;
const maxUint144 = 2n ** 144n - 1n;
const maxUint152 = 2n ** 152n - 1n;
const maxUint160 = 2n ** 160n - 1n;
const maxUint168 = 2n ** 168n - 1n;
const maxUint176 = 2n ** 176n - 1n;
const maxUint184 = 2n ** 184n - 1n;
const maxUint192 = 2n ** 192n - 1n;
const maxUint200 = 2n ** 200n - 1n;
const maxUint208 = 2n ** 208n - 1n;
const maxUint216 = 2n ** 216n - 1n;
const maxUint224 = 2n ** 224n - 1n;
const maxUint232 = 2n ** 232n - 1n;
const maxUint240 = 2n ** 240n - 1n;
const maxUint248 = 2n ** 248n - 1n;
const maxUint256 = 2n ** 256n - 1n; //# sourceMappingURL=Solidity.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/ox/_esm/core/internal/abiParameters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "decodeAddress": (()=>decodeAddress),
    "decodeArray": (()=>decodeArray),
    "decodeBool": (()=>decodeBool),
    "decodeBytes": (()=>decodeBytes),
    "decodeNumber": (()=>decodeNumber),
    "decodeParameter": (()=>decodeParameter),
    "decodeString": (()=>decodeString),
    "decodeTuple": (()=>decodeTuple),
    "encode": (()=>encode),
    "encodeAddress": (()=>encodeAddress),
    "encodeArray": (()=>encodeArray),
    "encodeBoolean": (()=>encodeBoolean),
    "encodeBytes": (()=>encodeBytes),
    "encodeNumber": (()=>encodeNumber),
    "encodeString": (()=>encodeString),
    "encodeTuple": (()=>encodeTuple),
    "getArrayComponents": (()=>getArrayComponents),
    "hasDynamicChild": (()=>hasDynamicChild),
    "prepareParameter": (()=>prepareParameter),
    "prepareParameters": (()=>prepareParameters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Solidity.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function decodeParameter(cursor, param, options) {
    const { checksumAddress, staticPosition } = options;
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return decodeArray(cursor, {
            ...param,
            type
        }, {
            checksumAddress,
            length,
            staticPosition
        });
    }
    if (param.type === 'tuple') return decodeTuple(cursor, param, {
        checksumAddress,
        staticPosition
    });
    if (param.type === 'address') return decodeAddress(cursor, {
        checksum: checksumAddress
    });
    if (param.type === 'bool') return decodeBool(cursor);
    if (param.type.startsWith('bytes')) return decodeBytes(cursor, param, {
        staticPosition
    });
    if (param.type.startsWith('uint') || param.type.startsWith('int')) return decodeNumber(cursor, param);
    if (param.type === 'string') return decodeString(cursor, {
        staticPosition
    });
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidTypeError"](param.type);
}
const sizeOfLength = 32;
const sizeOfOffset = 32;
function decodeAddress(cursor, options = {}) {
    const { checksum = false } = options;
    const value = cursor.readBytes(32);
    const wrap = (address)=>checksum ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checksum"])(address) : address;
    return [
        wrap((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(value, -20))),
        32
    ];
}
function decodeArray(cursor, param, options) {
    const { checksumAddress, length, staticPosition } = options;
    // If the length of the array is not known in advance (dynamic array),
    // this means we will need to wonder off to the pointer and decode.
    if (!length) {
        // Dealing with a dynamic type, so get the offset of the array data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const startOfData = start + sizeOfLength;
        // Get the length of the array from the offset.
        cursor.setPosition(start);
        const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(sizeOfLength));
        // Check if the array has any dynamic children.
        const dynamicChild = hasDynamicChild(param);
        let consumed = 0;
        const value = [];
        for(let i = 0; i < length; ++i){
            // If any of the children is dynamic, then all elements will be offset pointer, thus size of one slot (32 bytes).
            // Otherwise, elements will be the size of their encoding (consumed bytes).
            cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed));
            const [data, consumed_] = decodeParameter(cursor, param, {
                checksumAddress,
                staticPosition: startOfData
            });
            consumed += consumed_;
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the length of the array is known in advance,
    // and the length of an element deeply nested in the array is not known,
    // we need to decode the offset of the array data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the array data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(sizeOfOffset));
        // Start is the static position of current slot + offset.
        const start = staticPosition + offset;
        const value = [];
        for(let i = 0; i < length; ++i){
            // Move cursor along to the next slot (next offset pointer).
            cursor.setPosition(start + i * 32);
            const [data] = decodeParameter(cursor, param, {
                checksumAddress,
                staticPosition: start
            });
            value.push(data);
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the length of the array is known in advance and the array is deeply static,
    // then we can just decode each element in sequence.
    let consumed = 0;
    const value = [];
    for(let i = 0; i < length; ++i){
        const [data, consumed_] = decodeParameter(cursor, param, {
            checksumAddress,
            staticPosition: staticPosition + consumed
        });
        consumed += consumed_;
        value.push(data);
    }
    return [
        value,
        consumed
    ];
}
function decodeBool(cursor) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBoolean"])(cursor.readBytes(32), {
            size: 32
        }),
        32
    ];
}
function decodeBytes(cursor, param, { staticPosition }) {
    const [_, size] = param.type.split('bytes');
    if (!size) {
        // Dealing with dynamic types, so get the offset of the bytes data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(32));
        // Set position of the cursor to start of bytes data.
        cursor.setPosition(staticPosition + offset);
        const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(32));
        // If there is no length, we have zero data.
        if (length === 0) {
            // As we have gone wondering, restore to the original position + next slot.
            cursor.setPosition(staticPosition + 32);
            return [
                '0x',
                32
            ];
        }
        const data = cursor.readBytes(length);
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(data),
            32
        ];
    }
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(cursor.readBytes(Number.parseInt(size), 32));
    return [
        value,
        32
    ];
}
function decodeNumber(cursor, param) {
    const signed = param.type.startsWith('int');
    const size = Number.parseInt(param.type.split('int')[1] || '256');
    const value = cursor.readBytes(32);
    return [
        size > 48 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBigInt"])(value, {
            signed
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(value, {
            signed
        }),
        32
    ];
}
function decodeTuple(cursor, param, options) {
    const { checksumAddress, staticPosition } = options;
    // Tuples can have unnamed components (i.e. they are arrays), so we must
    // determine whether the tuple is named or unnamed. In the case of a named
    // tuple, the value will be an object where each property is the name of the
    // component. In the case of an unnamed tuple, the value will be an array.
    const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name })=>!name);
    // Initialize the value to an object or an array, depending on whether the
    // tuple is named or unnamed.
    const value = hasUnnamedChild ? [] : {};
    let consumed = 0;
    // If the tuple has a dynamic child, we must first decode the offset to the
    // tuple data.
    if (hasDynamicChild(param)) {
        // Dealing with dynamic types, so get the offset of the tuple data.
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(sizeOfOffset));
        // Start is the static position of referencing slot + offset.
        const start = staticPosition + offset;
        for(let i = 0; i < param.components.length; ++i){
            const component = param.components[i];
            cursor.setPosition(start + consumed);
            const [data, consumed_] = decodeParameter(cursor, component, {
                checksumAddress,
                staticPosition: start
            });
            consumed += consumed_;
            value[hasUnnamedChild ? i : component?.name] = data;
        }
        // As we have gone wondering, restore to the original position + next slot.
        cursor.setPosition(staticPosition + 32);
        return [
            value,
            32
        ];
    }
    // If the tuple has static children, we can just decode each component
    // in sequence.
    for(let i = 0; i < param.components.length; ++i){
        const component = param.components[i];
        const [data, consumed_] = decodeParameter(cursor, component, {
            checksumAddress,
            staticPosition
        });
        value[hasUnnamedChild ? i : component?.name] = data;
        consumed += consumed_;
    }
    return [
        value,
        consumed
    ];
}
function decodeString(cursor, { staticPosition }) {
    // Get offset to start of string data.
    const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(32));
    // Start is the static position of current slot + offset.
    const start = staticPosition + offset;
    cursor.setPosition(start);
    const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNumber"])(cursor.readBytes(32));
    // If there is no length, we have zero data (empty string).
    if (length === 0) {
        cursor.setPosition(staticPosition + 32);
        return [
            '',
            32
        ];
    }
    const data = cursor.readBytes(length, 32);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trimLeft"])(data));
    // As we have gone wondering, restore to the original position + next slot.
    cursor.setPosition(staticPosition + 32);
    return [
        value,
        32
    ];
}
function prepareParameters({ checksumAddress, parameters, values }) {
    const preparedParameters = [];
    for(let i = 0; i < parameters.length; i++){
        preparedParameters.push(prepareParameter({
            checksumAddress,
            parameter: parameters[i],
            value: values[i]
        }));
    }
    return preparedParameters;
}
function prepareParameter({ checksumAddress = false, parameter: parameter_, value }) {
    const parameter = parameter_;
    const arrayComponents = getArrayComponents(parameter.type);
    if (arrayComponents) {
        const [length, type] = arrayComponents;
        return encodeArray(value, {
            checksumAddress,
            length,
            parameter: {
                ...parameter,
                type
            }
        });
    }
    if (parameter.type === 'tuple') {
        return encodeTuple(value, {
            checksumAddress,
            parameter: parameter
        });
    }
    if (parameter.type === 'address') {
        return encodeAddress(value, {
            checksum: checksumAddress
        });
    }
    if (parameter.type === 'bool') {
        return encodeBoolean(value);
    }
    if (parameter.type.startsWith('uint') || parameter.type.startsWith('int')) {
        const signed = parameter.type.startsWith('int');
        const [, , size = '256'] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"].exec(parameter.type) ?? [];
        return encodeNumber(value, {
            signed,
            size: Number(size)
        });
    }
    if (parameter.type.startsWith('bytes')) {
        return encodeBytes(value, {
            type: parameter.type
        });
    }
    if (parameter.type === 'string') {
        return encodeString(value);
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidTypeError"](parameter.type);
}
function encode(preparedParameters) {
    // 1. Compute the size of the static part of the parameters.
    let staticSize = 0;
    for(let i = 0; i < preparedParameters.length; i++){
        const { dynamic, encoded } = preparedParameters[i];
        if (dynamic) staticSize += 32;
        else staticSize += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(encoded);
    }
    // 2. Split the parameters into static and dynamic parts.
    const staticParameters = [];
    const dynamicParameters = [];
    let dynamicSize = 0;
    for(let i = 0; i < preparedParameters.length; i++){
        const { dynamic, encoded } = preparedParameters[i];
        if (dynamic) {
            staticParameters.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(staticSize + dynamicSize, {
                size: 32
            }));
            dynamicParameters.push(encoded);
            dynamicSize += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(encoded);
        } else {
            staticParameters.push(encoded);
        }
    }
    // 3. Concatenate static and dynamic parts.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value, options) {
    const { checksum = false } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(value, {
        strict: checksum
    });
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])(value.toLowerCase())
    };
}
function encodeArray(value, options) {
    const { checksumAddress, length, parameter } = options;
    const dynamic = length === null;
    if (!Array.isArray(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidArrayError"](value);
    if (!dynamic && value.length !== length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrayLengthMismatchError"]({
        expectedLength: length,
        givenLength: value.length,
        type: `${parameter.type}[${length}]`
    });
    let dynamicChild = false;
    const preparedParameters = [];
    for(let i = 0; i < value.length; i++){
        const preparedParam = prepareParameter({
            checksumAddress,
            parameter,
            value: value[i]
        });
        if (preparedParam.dynamic) dynamicChild = true;
        preparedParameters.push(preparedParam);
    }
    if (dynamic || dynamicChild) {
        const data = encode(preparedParameters);
        if (dynamic) {
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(preparedParameters.length, {
                size: 32
            });
            return {
                dynamic: true,
                encoded: preparedParameters.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(length, data) : length
            };
        }
        if (dynamicChild) return {
            dynamic: true,
            encoded: data
        };
    }
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...preparedParameters.map(({ encoded })=>encoded))
    };
}
function encodeBytes(value, { type }) {
    const [, parametersize] = type.split('bytes');
    const bytesSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value);
    if (!parametersize) {
        let value_ = value;
        // If the size is not divisible by 32 bytes, pad the end
        // with empty bytes to the ceiling 32 bytes.
        if (bytesSize % 32 !== 0) value_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
        return {
            dynamic: true,
            encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(bytesSize, {
                size: 32
            })), value_)
        };
    }
    if (bytesSize !== Number.parseInt(parametersize)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BytesSizeMismatchError"]({
        expectedSize: Number.parseInt(parametersize),
        value
    });
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])(value)
    };
}
function encodeBoolean(value) {
    if (typeof value !== 'boolean') throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"](`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBoolean"])(value))
    };
}
function encodeNumber(value, { signed, size }) {
    if (typeof size === 'number') {
        const max = 2n ** (BigInt(size) - (signed ? 1n : 0n)) - 1n;
        const min = signed ? -max - 1n : 0n;
        if (value > max || value < min) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IntegerOutOfRangeError"]({
            max: max.toString(),
            min: min.toString(),
            signed,
            size: size / 8,
            value: value.toString()
        });
    }
    return {
        dynamic: false,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(value, {
            size: 32,
            signed
        })
    };
}
function encodeString(value) {
    const hexValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(value);
    const partsLength = Math.ceil((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(hexValue) / 32);
    const parts = [];
    for(let i = 0; i < partsLength; i++){
        parts.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["slice"])(hexValue, i * 32, (i + 1) * 32)));
    }
    return {
        dynamic: true,
        encoded: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(hexValue), {
            size: 32
        })), ...parts)
    };
}
function encodeTuple(value, options) {
    const { checksumAddress, parameter } = options;
    let dynamic = false;
    const preparedParameters = [];
    for(let i = 0; i < parameter.components.length; i++){
        const param_ = parameter.components[i];
        const index = Array.isArray(value) ? i : param_.name;
        const preparedParam = prepareParameter({
            checksumAddress,
            parameter: param_,
            value: value[index]
        });
        preparedParameters.push(preparedParam);
        if (preparedParam.dynamic) dynamic = true;
    }
    return {
        dynamic,
        encoded: dynamic ? encode(preparedParameters) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...preparedParameters.map(({ encoded })=>encoded))
    };
}
function getArrayComponents(type) {
    const matches = type.match(/^(.*)\[(\d+)?\]$/);
    return matches ? [
        matches[2] ? Number(matches[2]) : null,
        matches[1]
    ] : undefined;
}
function hasDynamicChild(param) {
    const { type } = param;
    if (type === 'string') return true;
    if (type === 'bytes') return true;
    if (type.endsWith('[]')) return true;
    if (type === 'tuple') return param.components?.some(hasDynamicChild);
    const arrayComponents = getArrayComponents(param.type);
    if (arrayComponents && hasDynamicChild({
        ...param,
        type: arrayComponents[1]
    })) return true;
    return false;
} //# sourceMappingURL=abiParameters.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/ox/_esm/core/internal/cursor.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NegativeOffsetError": (()=>NegativeOffsetError),
    "PositionOutOfBoundsError": (()=>PositionOutOfBoundsError),
    "RecursiveReadLimitExceededError": (()=>RecursiveReadLimitExceededError),
    "create": (()=>create)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
;
const staticCursor = /*#__PURE__*/ {
    bytes: new Uint8Array(),
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map(),
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit () {
        if (this.recursiveReadCount >= this.recursiveReadLimit) throw new RecursiveReadLimitExceededError({
            count: this.recursiveReadCount + 1,
            limit: this.recursiveReadLimit
        });
    },
    assertPosition (position) {
        if (position < 0 || position > this.bytes.length - 1) throw new PositionOutOfBoundsError({
            length: this.bytes.length,
            position
        });
    },
    decrementPosition (offset) {
        if (offset < 0) throw new NegativeOffsetError({
            offset
        });
        const position = this.position - offset;
        this.assertPosition(position);
        this.position = position;
    },
    getReadCount (position) {
        return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition (offset) {
        if (offset < 0) throw new NegativeOffsetError({
            offset
        });
        const position = this.position + offset;
        this.assertPosition(position);
        this.position = position;
    },
    inspectByte (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectBytes (length, position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + length - 1);
        return this.bytes.subarray(position, position + length);
    },
    inspectUint8 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position);
        return this.bytes[position];
    },
    inspectUint16 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 1);
        return this.dataView.getUint16(position);
    },
    inspectUint24 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 2);
        return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
    },
    inspectUint32 (position_) {
        const position = position_ ?? this.position;
        this.assertPosition(position + 3);
        return this.dataView.getUint32(position);
    },
    pushByte (byte) {
        this.assertPosition(this.position);
        this.bytes[this.position] = byte;
        this.position++;
    },
    pushBytes (bytes) {
        this.assertPosition(this.position + bytes.length - 1);
        this.bytes.set(bytes, this.position);
        this.position += bytes.length;
    },
    pushUint8 (value) {
        this.assertPosition(this.position);
        this.bytes[this.position] = value;
        this.position++;
    },
    pushUint16 (value) {
        this.assertPosition(this.position + 1);
        this.dataView.setUint16(this.position, value);
        this.position += 2;
    },
    pushUint24 (value) {
        this.assertPosition(this.position + 2);
        this.dataView.setUint16(this.position, value >> 8);
        this.dataView.setUint8(this.position + 2, value & ~4294967040);
        this.position += 3;
    },
    pushUint32 (value) {
        this.assertPosition(this.position + 3);
        this.dataView.setUint32(this.position, value);
        this.position += 4;
    },
    readByte () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectByte();
        this.position++;
        return value;
    },
    readBytes (length, size) {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectBytes(length);
        this.position += size ?? length;
        return value;
    },
    readUint8 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint8();
        this.position += 1;
        return value;
    },
    readUint16 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint16();
        this.position += 2;
        return value;
    },
    readUint24 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint24();
        this.position += 3;
        return value;
    },
    readUint32 () {
        this.assertReadLimit();
        this._touch();
        const value = this.inspectUint32();
        this.position += 4;
        return value;
    },
    get remaining () {
        return this.bytes.length - this.position;
    },
    setPosition (position) {
        const oldPosition = this.position;
        this.assertPosition(position);
        this.position = position;
        return ()=>this.position = oldPosition;
    },
    _touch () {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
        const count = this.getReadCount();
        this.positionReadCount.set(this.position, count + 1);
        if (count > 0) this.recursiveReadCount++;
    }
};
function create(bytes, { recursiveReadLimit = 8_192 } = {}) {
    const cursor = Object.create(staticCursor);
    cursor.bytes = bytes;
    cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    cursor.positionReadCount = new Map();
    cursor.recursiveReadLimit = recursiveReadLimit;
    return cursor;
}
class NegativeOffsetError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ offset }){
        super(`Offset \`${offset}\` cannot be negative.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.NegativeOffsetError'
        });
    }
}
class PositionOutOfBoundsError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ length, position }){
        super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.PositionOutOfBoundsError'
        });
    }
}
class RecursiveReadLimitExceededError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ count, limit }){
        super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Cursor.RecursiveReadLimitExceededError'
        });
    }
} //# sourceMappingURL=cursor.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrayLengthMismatchError": (()=>ArrayLengthMismatchError),
    "BytesSizeMismatchError": (()=>BytesSizeMismatchError),
    "DataSizeTooSmallError": (()=>DataSizeTooSmallError),
    "InvalidArrayError": (()=>InvalidArrayError),
    "InvalidTypeError": (()=>InvalidTypeError),
    "LengthMismatchError": (()=>LengthMismatchError),
    "ZeroDataError": (()=>ZeroDataError),
    "decode": (()=>decode),
    "encode": (()=>encode),
    "encodePacked": (()=>encodePacked),
    "format": (()=>format),
    "from": (()=>from)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/formatAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/parseAbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Solidity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/internal/abiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/internal/cursor.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function decode(parameters, data, options = {}) {
    const { as = 'Array', checksumAddress = false } = options;
    const bytes = typeof data === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromHex"])(data) : data;
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])(bytes);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(bytes) === 0 && parameters.length > 0) throw new ZeroDataError();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(bytes) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(bytes) < 32) throw new DataSizeTooSmallError({
        data: typeof data === 'string' ? data : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBytes"])(data),
        parameters: parameters,
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(bytes)
    });
    let consumed = 0;
    const values = as === 'Array' ? [] : {};
    for(let i = 0; i < parameters.length; ++i){
        const param = parameters[i];
        cursor.setPosition(consumed);
        const [data, consumed_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeParameter"])(cursor, param, {
            checksumAddress,
            staticPosition: 0
        });
        consumed += consumed_;
        if (as === 'Array') values.push(data);
        else values[param.name ?? i] = data;
    }
    return values;
}
function encode(parameters, values, options) {
    const { checksumAddress = false } = options ?? {};
    if (parameters.length !== values.length) throw new LengthMismatchError({
        expectedLength: parameters.length,
        givenLength: values.length
    });
    // Prepare the parameters to determine dynamic types to encode.
    const preparedParameters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareParameters"])({
        checksumAddress,
        parameters: parameters,
        values: values
    });
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$internal$2f$abiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(preparedParameters);
    if (data.length === 0) return '0x';
    return data;
}
function encodePacked(types, values) {
    if (types.length !== values.length) throw new LengthMismatchError({
        expectedLength: types.length,
        givenLength: values.length
    });
    const data = [];
    for(let i = 0; i < types.length; i++){
        const type = types[i];
        const value = values[i];
        data.push(encodePacked.encode(type, value));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...data);
}
(function(encodePacked) {
    // eslint-disable-next-line jsdoc/require-jsdoc
    function encode(type, value, isArray = false) {
        if (type === 'address') {
            const address = value;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assert"])(address);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])(address.toLowerCase(), isArray ? 32 : 0);
        }
        if (type === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(value);
        if (type === 'bytes') return value;
        if (type === 'bool') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padLeft"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromBoolean"])(value), isArray ? 32 : 1);
        const intMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"]);
        if (intMatch) {
            const [_type, baseType, bits = '256'] = intMatch;
            const size = Number.parseInt(bits) / 8;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(value, {
                size: isArray ? 32 : size,
                signed: baseType === 'int'
            });
        }
        const bytesMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesRegex"]);
        if (bytesMatch) {
            const [_type, size] = bytesMatch;
            if (Number.parseInt(size) !== (value.length - 2) / 2) throw new BytesSizeMismatchError({
                expectedSize: Number.parseInt(size),
                value: value
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRight"])(value, isArray ? 32 : 0);
        }
        const arrayMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayRegex"]);
        if (arrayMatch && Array.isArray(value)) {
            const [_type, childType] = arrayMatch;
            const data = [];
            for(let i = 0; i < value.length; i++){
                data.push(encode(childType, value[i], true));
            }
            if (data.length === 0) return '0x';
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...data);
        }
        throw new InvalidTypeError(type);
    }
    encodePacked.encode = encode;
})(encodePacked || (encodePacked = {}));
function format(parameters) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(parameters);
}
function from(parameters) {
    if (Array.isArray(parameters) && typeof parameters[0] === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameters"])(parameters);
    if (typeof parameters === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiParameters"])(parameters);
    return parameters;
}
class DataSizeTooSmallError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ data, parameters, size }){
        super(`Data size of ${size} bytes is too small for given parameters.`, {
            metaMessages: [
                `Params: (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$formatAbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAbiParameters"])(parameters)})`,
                `Data:   ${data} (${size} bytes)`
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.DataSizeTooSmallError'
        });
    }
}
class ZeroDataError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Cannot decode zero data ("0x") with ABI parameters.');
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.ZeroDataError'
        });
    }
}
class ArrayLengthMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedLength, givenLength, type }){
        super(`Array length mismatch for type \`${type}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.ArrayLengthMismatchError'
        });
    }
}
class BytesSizeMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedSize, value }){
        super(`Size of bytes "${value}" (bytes${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value)}) does not match expected size (bytes${expectedSize}).`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.BytesSizeMismatchError'
        });
    }
}
class LengthMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedLength, givenLength }){
        super([
            'ABI encoding parameters/values length mismatch.',
            `Expected length (parameters): ${expectedLength}`,
            `Given length (values): ${givenLength}`
        ].join('\n'));
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.LengthMismatchError'
        });
    }
}
class InvalidArrayError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(value){
        super(`Value \`${value}\` is not a valid array.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.InvalidArrayError'
        });
    }
}
class InvalidTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(type){
        super(`Type \`${type}\` is not a valid ABI Type.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'AbiParameters.InvalidTypeError'
        });
    }
} //# sourceMappingURL=AbiParameters.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/ox/_esm/core/TypedData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BytesSizeMismatchError": (()=>BytesSizeMismatchError),
    "InvalidDomainError": (()=>InvalidDomainError),
    "InvalidPrimaryTypeError": (()=>InvalidPrimaryTypeError),
    "InvalidStructTypeError": (()=>InvalidStructTypeError),
    "assert": (()=>assert),
    "domainSeparator": (()=>domainSeparator),
    "encode": (()=>encode),
    "encodeData": (()=>encodeData),
    "encodeField": (()=>encodeField),
    "encodeType": (()=>encodeType),
    "extractEip712DomainTypes": (()=>extractEip712DomainTypes),
    "findTypeDependencies": (()=>findTypeDependencies),
    "getSignPayload": (()=>getSignPayload),
    "hashDomain": (()=>hashDomain),
    "hashStruct": (()=>hashStruct),
    "hashType": (()=>hashType),
    "serialize": (()=>serialize),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/AbiParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Address.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Bytes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Hash.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Hex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/ox/_esm/core/Solidity.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function assert(value) {
    const { domain, message, primaryType, types } = value;
    const validateData = (struct, data)=>{
        for (const param of struct){
            const { name, type } = param;
            const value = data[name];
            const integerMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integerRegex"]);
            if (integerMatch && (typeof value === 'number' || typeof value === 'bigint')) {
                const [, base, size_] = integerMatch;
                // If number cannot be cast to a sized hex value, it is out of range
                // and will throw.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromNumber"])(value, {
                    signed: base === 'int',
                    size: Number.parseInt(size_ ?? '') / 8
                });
            }
            if (type === 'address' && typeof value === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
                address: value,
                cause: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Address$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvalidInputError"]()
            });
            const bytesMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Solidity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bytesRegex"]);
            if (bytesMatch) {
                const [, size] = bytesMatch;
                if (size && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value) !== Number.parseInt(size)) throw new BytesSizeMismatchError({
                    expectedSize: Number.parseInt(size),
                    givenSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["size"])(value)
                });
            }
            const struct = types[type];
            if (struct) {
                validateReference(type);
                validateData(struct, value);
            }
        }
    };
    // Validate domain types.
    if (types.EIP712Domain && domain) {
        if (typeof domain !== 'object') throw new InvalidDomainError({
            domain
        });
        validateData(types.EIP712Domain, domain);
    }
    // Validate message types.
    if (primaryType !== 'EIP712Domain') {
        if (types[primaryType]) validateData(types[primaryType], message);
        else throw new InvalidPrimaryTypeError({
            primaryType,
            types
        });
    }
}
function domainSeparator(domain) {
    return hashDomain({
        domain
    });
}
function encode(value) {
    const { domain = {}, message, primaryType } = value;
    const types = {
        EIP712Domain: extractEip712DomainTypes(domain),
        ...value.types
    };
    // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
    // as we can't statically check this with TypeScript.
    assert({
        domain,
        message,
        primaryType,
        types
    });
    // Typed Data Format: `0x19 ‖ 0x01 ‖ domainSeparator ‖ hashStruct(message)`
    const parts = [
        '0x19',
        '0x01'
    ];
    if (domain) parts.push(hashDomain({
        domain,
        types
    }));
    if (primaryType !== 'EIP712Domain') parts.push(hashStruct({
        data: message,
        primaryType,
        types
    }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(...parts);
}
function encodeType(value) {
    const { primaryType, types } = value;
    let result = '';
    const unsortedDeps = findTypeDependencies({
        primaryType,
        types
    });
    unsortedDeps.delete(primaryType);
    const deps = [
        primaryType,
        ...Array.from(unsortedDeps).sort()
    ];
    for (const type of deps){
        result += `${type}(${(types[type] ?? []).map(({ name, type: t })=>`${t} ${name}`).join(',')})`;
    }
    return result;
}
function extractEip712DomainTypes(domain) {
    return [
        typeof domain?.name === 'string' && {
            name: 'name',
            type: 'string'
        },
        domain?.version && {
            name: 'version',
            type: 'string'
        },
        typeof domain?.chainId === 'number' && {
            name: 'chainId',
            type: 'uint256'
        },
        domain?.verifyingContract && {
            name: 'verifyingContract',
            type: 'address'
        },
        domain?.salt && {
            name: 'salt',
            type: 'bytes32'
        }
    ].filter(Boolean);
}
function getSignPayload(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(encode(value));
}
function hashDomain(value) {
    const { domain, types } = value;
    return hashStruct({
        data: domain,
        primaryType: 'EIP712Domain',
        types: {
            ...types,
            EIP712Domain: types?.EIP712Domain || extractEip712DomainTypes(domain)
        }
    });
}
function hashStruct(value) {
    const { data, primaryType, types } = value;
    const encoded = encodeData({
        data,
        primaryType,
        types
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(encoded);
}
function serialize(value) {
    const { domain: domain_, message: message_, primaryType, types } = value;
    const normalizeData = (struct, value)=>{
        const data = {
            ...value
        };
        for (const param of struct){
            const { name, type } = param;
            if (type === 'address') data[name] = data[name].toLowerCase();
        }
        return data;
    };
    const domain = (()=>{
        if (!domain_) return {};
        const type = types.EIP712Domain ?? extractEip712DomainTypes(domain_);
        return normalizeData(type, domain_);
    })();
    const message = (()=>{
        if (primaryType === 'EIP712Domain') return undefined;
        if (!types[primaryType]) return {};
        return normalizeData(types[primaryType], message_);
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])({
        domain,
        message,
        primaryType,
        types
    }, (_, value)=>{
        if (typeof value === 'bigint') return value.toString();
        return value;
    });
}
function validate(value) {
    try {
        assert(value);
        return true;
    } catch  {
        return false;
    }
}
class BytesSizeMismatchError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ expectedSize, givenSize }){
        super(`Expected bytes${expectedSize}, got bytes${givenSize}.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TypedData.BytesSizeMismatchError'
        });
    }
}
class InvalidDomainError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ domain }){
        super(`Invalid domain "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(domain)}".`, {
            metaMessages: [
                'Must be a valid EIP-712 domain.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TypedData.InvalidDomainError'
        });
    }
}
class InvalidPrimaryTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ primaryType, types }){
        super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
            metaMessages: [
                'Check that the primary type is a key in `types`.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TypedData.InvalidPrimaryTypeError'
        });
    }
}
class InvalidStructTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super(`Struct type "${type}" is invalid.`, {
            metaMessages: [
                'Struct type must not be a Solidity type.'
            ]
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TypedData.InvalidStructTypeError'
        });
    }
}
function encodeData(value) {
    const { data, primaryType, types } = value;
    const encodedTypes = [
        {
            type: 'bytes32'
        }
    ];
    const encodedValues = [
        hashType({
            primaryType,
            types
        })
    ];
    for (const field of types[primaryType] ?? []){
        const [type, value] = encodeField({
            types,
            name: field.name,
            type: field.type,
            value: data[field.name]
        });
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(encodedTypes, encodedValues);
}
function hashType(value) {
    const { primaryType, types } = value;
    const encodedHashType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(encodeType({
        primaryType,
        types
    }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(encodedHashType);
}
function encodeField(properties) {
    let { types, name, type, value } = properties;
    if (types[type] !== undefined) return [
        {
            type: 'bytes32'
        },
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(encodeData({
            data: value,
            primaryType: type,
            types
        }))
    ];
    if (type === 'bytes') {
        const prepend = value.length % 2 ? '0' : '';
        value = `0x${prepend + value.slice(2)}`;
        return [
            {
                type: 'bytes32'
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])(value, {
                as: 'Hex'
            })
        ];
    }
    if (type === 'string') return [
        {
            type: 'bytes32'
        },
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Bytes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(value), {
            as: 'Hex'
        })
    ];
    if (type.lastIndexOf(']') === type.length - 1) {
        const parsedType = type.slice(0, type.lastIndexOf('['));
        const typeValuePairs = value.map((item)=>encodeField({
                name,
                type: parsedType,
                types,
                value: item
            }));
        return [
            {
                type: 'bytes32'
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$Hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(typeValuePairs.map(([t])=>t), typeValuePairs.map(([, v])=>v)))
        ];
    }
    return [
        {
            type
        },
        value
    ];
}
function findTypeDependencies(value, results = new Set()) {
    const { primaryType: primaryType_, types } = value;
    const match = primaryType_.match(/^\w*/u);
    const primaryType = match?.[0];
    if (results.has(primaryType) || types[primaryType] === undefined) return results;
    results.add(primaryType);
    for (const field of types[primaryType])findTypeDependencies({
        primaryType: field.type,
        types
    }, results);
    return results;
}
/** @internal */ function validateReference(type) {
    // Struct type must not be a Solidity type.
    if (type === 'address' || type === 'bool' || type === 'string' || type.startsWith('bytes') || type.startsWith('uint') || type.startsWith('int')) throw new InvalidStructTypeError({
        type
    });
} //# sourceMappingURL=TypedData.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/_md.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Internal Merkle-Damgard hash utils.
 * @module
 */ __turbopack_context__.s({
    "Chi": (()=>Chi),
    "HashMD": (()=>HashMD),
    "Maj": (()=>Maj),
    "setBigUint64": (()=>setBigUint64)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/_assert.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
;
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
function Chi(a, b, c) {
    return a & b ^ ~a & c;
}
function Maj(a, b, c) {
    return a & b ^ a & c ^ b & c;
}
class HashMD extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hash"] {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(this.buffer);
    }
    update(data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aexists"])(this);
        const { view, buffer, blockLen } = this;
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBytes"])(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aexists"])(this);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_assert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aoutput"])(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in
        // current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createView"])(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
} //# sourceMappingURL=_md.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/ripemd160.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * RIPEMD-160 legacy hash function.
 * https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
 * https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
 * @module
 */ __turbopack_context__.s({
    "RIPEMD160": (()=>RIPEMD160),
    "ripemd160": (()=>ripemd160)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/_md.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
;
const Rho = /* @__PURE__ */ new Uint8Array([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
]);
const Id = /* @__PURE__ */ new Uint8Array(new Array(16).fill(0).map((_, i)=>i));
const Pi = /* @__PURE__ */ Id.map((i)=>(9 * i + 5) % 16);
let idxL = [
    Id
];
let idxR = [
    Pi
];
for(let i = 0; i < 4; i++)for (let j of [
    idxL,
    idxR
])j.push(j[i].map((k)=>Rho[k]));
const shifts = /* @__PURE__ */ [
    [
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8
    ],
    [
        12,
        13,
        11,
        15,
        6,
        9,
        9,
        7,
        12,
        15,
        11,
        13,
        7,
        8,
        7,
        7
    ],
    [
        13,
        15,
        14,
        11,
        7,
        7,
        6,
        8,
        13,
        14,
        13,
        12,
        5,
        5,
        6,
        9
    ],
    [
        14,
        11,
        12,
        14,
        8,
        6,
        5,
        5,
        15,
        12,
        15,
        14,
        9,
        9,
        8,
        6
    ],
    [
        15,
        12,
        13,
        13,
        9,
        5,
        8,
        6,
        14,
        11,
        12,
        11,
        8,
        6,
        5,
        5
    ]
].map((i)=>new Uint8Array(i));
const shiftsL = /* @__PURE__ */ idxL.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const shiftsR = /* @__PURE__ */ idxR.map((idx, i)=>idx.map((j)=>shifts[i][j]));
const Kl = /* @__PURE__ */ new Uint32Array([
    0x00000000,
    0x5a827999,
    0x6ed9eba1,
    0x8f1bbcdc,
    0xa953fd4e
]);
const Kr = /* @__PURE__ */ new Uint32Array([
    0x50a28be6,
    0x5c4dd124,
    0x6d703ef3,
    0x7a6d76e9,
    0x00000000
]);
// It's called f() in spec.
function f(group, x, y, z) {
    if (group === 0) return x ^ y ^ z;
    else if (group === 1) return x & y | ~x & z;
    else if (group === 2) return (x | ~y) ^ z;
    else if (group === 3) return x & z | y & ~z;
    else return x ^ (y | ~z);
}
// Temporary buffer, not used to store anything between runs
const R_BUF = /* @__PURE__ */ new Uint32Array(16);
class RIPEMD160 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(){
        super(64, 20, 8, true);
        this.h0 = 0x67452301 | 0;
        this.h1 = 0xefcdab89 | 0;
        this.h2 = 0x98badcfe | 0;
        this.h3 = 0x10325476 | 0;
        this.h4 = 0xc3d2e1f0 | 0;
    }
    get() {
        const { h0, h1, h2, h3, h4 } = this;
        return [
            h0,
            h1,
            h2,
            h3,
            h4
        ];
    }
    set(h0, h1, h2, h3, h4) {
        this.h0 = h0 | 0;
        this.h1 = h1 | 0;
        this.h2 = h2 | 0;
        this.h3 = h3 | 0;
        this.h4 = h4 | 0;
    }
    process(view, offset) {
        for(let i = 0; i < 16; i++, offset += 4)R_BUF[i] = view.getUint32(offset, true);
        // prettier-ignore
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        // Instead of iterating 0 to 80, we split it into 5 groups
        // And use the groups in constants, functions, etc. Much simpler
        for(let group = 0; group < 5; group++){
            const rGroup = 4 - group;
            const hbl = Kl[group], hbr = Kr[group]; // prettier-ignore
            const rl = idxL[group], rr = idxR[group]; // prettier-ignore
            const sl = shiftsL[group], sr = shiftsR[group]; // prettier-ignore
            for(let i = 0; i < 16; i++){
                const tl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotl"])(al + f(group, bl, cl, dl) + R_BUF[rl[i]] + hbl, sl[i]) + el | 0;
                al = el, el = dl, dl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotl"])(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for(let i = 0; i < 16; i++){
                const tr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotl"])(ar + f(rGroup, br, cr, dr) + R_BUF[rr[i]] + hbr, sr[i]) + er | 0;
                ar = er, er = dr, dr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotl"])(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
            }
        }
        // Add the compressed chunk to the current hash value
        this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
    }
    roundClean() {
        R_BUF.fill(0);
    }
    destroy() {
        this.destroyed = true;
        this.buffer.fill(0);
        this.set(0, 0, 0, 0, 0);
    }
}
const ripemd160 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new RIPEMD160()); //# sourceMappingURL=ripemd160.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/sha256.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * SHA2-256 a.k.a. sha256. In JS, it is the fastest hash, even faster than Blake3.
 *
 * To break sha256 using birthday attack, attackers need to try 2^128 hashes.
 * BTC network is doing 2^70 hashes/sec (2^95 hashes/year) as per 2025.
 *
 * Check out [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf).
 * @module
 */ __turbopack_context__.s({
    "SHA256": (()=>SHA256),
    "sha224": (()=>sha224),
    "sha256": (()=>sha256)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/_md.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@noble/hashes/esm/utils.js [app-ssr] (ecmascript)");
;
;
/** Round constants: first 32 bits of fractional parts of the cube roots of the first 64 primes 2..311). */ // prettier-ignore
const SHA256_K = /* @__PURE__ */ new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/** Initial state: first 32 bits of fractional parts of the square roots of the first 8 primes 2..19. */ // prettier-ignore
const SHA256_IV = /* @__PURE__ */ new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
/**
 * Temporary buffer, not used to store anything between runs.
 * Named this way because it matches specification.
 */ const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HashMD"] {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = SHA256_IV[0] | 0;
        this.B = SHA256_IV[1] | 0;
        this.C = SHA256_IV[2] | 0;
        this.D = SHA256_IV[3] | 0;
        this.E = SHA256_IV[4] | 0;
        this.F = SHA256_IV[5] | 0;
        this.G = SHA256_IV[6] | 0;
        this.H = SHA256_IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W15, 7) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W15, 18) ^ W15 >>> 3;
            const s1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W2, 17) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 6) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 11) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(E, 25);
            const T1 = H + sigma1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chi"])(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 2) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 13) ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rotr"])(A, 22);
            const T2 = sigma0 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$_md$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Maj"])(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
/**
 * Constants taken from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf.
 */ class SHA224 extends SHA256 {
    constructor(){
        super();
        this.A = 0xc1059ed8 | 0;
        this.B = 0x367cd507 | 0;
        this.C = 0x3070dd17 | 0;
        this.D = 0xf70e5939 | 0;
        this.E = 0xffc00b31 | 0;
        this.F = 0x68581511 | 0;
        this.G = 0x64f98fa7 | 0;
        this.H = 0xbefa4fa4 | 0;
        this.outputLen = 28;
    }
}
const sha256 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new SHA256());
const sha224 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapConstructor"])(()=>new SHA224()); //# sourceMappingURL=sha256.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/@emotion/styled/base/dist/emotion-styled-base.development.esm.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>createStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__w__as__withEmotionCache$3e$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript) <export w as withEmotionCache>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__T__as__ThemeContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/dist/emotion-element-782f682d.development.esm.js [app-ssr] (ecmascript) <export T as ThemeContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/utils/dist/emotion-utils.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var isBrowser = typeof document !== 'undefined';
var isDevelopment = true;
var testOmitPropsOnStringTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
    return key !== 'theme';
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
    var shouldForwardProp;
    if (options) {
        var optionsShouldForwardProp = options.shouldForwardProp;
        shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
            return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
        } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp !== 'function' && isReal) {
        shouldForwardProp = tag.__emotion_forwardProp;
    }
    return shouldForwardProp;
};
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerStyles"])(cache, serialized, isStringTag);
    var rules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInsertionEffectAlwaysWithSyncFallback"])(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["insertStyles"])(cache, serialized, isStringTag);
    });
    if (!isBrowser && rules !== undefined) {
        var _ref2;
        var serializedNames = serialized.name;
        var next = serialized.next;
        while(next !== undefined){
            serializedNames += ' ' + next.name;
            next = next.next;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
            __html: rules
        }, _ref2.nonce = cache.sheet.nonce, _ref2));
    }
    return null;
};
var createStyled = function createStyled(tag, options) {
    {
        if (tag === undefined) {
            throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
        }
    }
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== undefined) {
        identifierName = options.label;
        targetClassName = options.target;
    }
    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    return function() {
        // eslint-disable-next-line prefer-rest-params
        var args = arguments;
        var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
        if (identifierName !== undefined) {
            styles.push("label:" + identifierName + ";");
        }
        if (args[0] == null || args[0].raw === undefined) {
            // eslint-disable-next-line prefer-spread
            styles.push.apply(styles, args);
        } else {
            var templateStringsArr = args[0];
            if (templateStringsArr[0] === undefined) {
                console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
            }
            styles.push(templateStringsArr[0]);
            var len = args.length;
            var i = 1;
            for(; i < len; i++){
                if (templateStringsArr[i] === undefined) {
                    console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
                }
                styles.push(args[i], templateStringsArr[i]);
            }
        }
        var Styled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__w__as__withEmotionCache$3e$__["withEmotionCache"])(function(props, cache, ref) {
            var FinalTag = shouldUseAs && props.as || baseTag;
            var className = '';
            var classInterpolations = [];
            var mergedProps = props;
            if (props.theme == null) {
                mergedProps = {};
                for(var key in props){
                    mergedProps[key] = props[key];
                }
                mergedProps.theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$782f682d$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__T__as__ThemeContext$3e$__["ThemeContext"]);
            }
            if (typeof props.className === 'string') {
                className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegisteredStyles"])(cache.registered, classInterpolations, props.className);
            } else if (props.className != null) {
                className = props.className + " ";
            }
            var serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeStyles"])(styles.concat(classInterpolations), cache.registered, mergedProps);
            className += cache.key + "-" + serialized.name;
            if (targetClassName !== undefined) {
                className += " " + targetClassName;
            }
            var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
            var newProps = {};
            for(var _key in props){
                if (shouldUseAs && _key === 'as') continue;
                if (finalShouldForwardProp(_key)) {
                    newProps[_key] = props[_key];
                }
            }
            newProps.className = className;
            if (ref) {
                newProps.ref = ref;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(Insertion, {
                cache: cache,
                serialized: serialized,
                isStringTag: typeof FinalTag === 'string'
            }), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(FinalTag, newProps));
        });
        Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
        Styled.defaultProps = tag.defaultProps;
        Styled.__emotion_real = Styled;
        Styled.__emotion_base = baseTag;
        Styled.__emotion_styles = styles;
        Styled.__emotion_forwardProp = shouldForwardProp;
        Object.defineProperty(Styled, 'toString', {
            value: function value() {
                if (targetClassName === undefined && isDevelopment) {
                    return 'NO_COMPONENT_SELECTOR';
                }
                return "." + targetClassName;
            }
        });
        Styled.withComponent = function(nextTag, nextOptions) {
            var newStyled = createStyled(nextTag, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, options, nextOptions, {
                shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
            }));
            return newStyled.apply(void 0, styles);
        };
        return Styled;
    };
};
;
}}),
"[project]/node_modules/thirdweb/node_modules/@emotion/styled/dist/emotion-styled.development.esm.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>newStyled)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$emotion$2f$styled$2f$base$2f$dist$2f$emotion$2d$styled$2d$base$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@emotion/styled/base/dist/emotion-styled-base.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@babel/runtime/helpers/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$serialize$2f$dist$2f$emotion$2d$serialize$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2f$dist$2f$emotion$2d$use$2d$insertion$2d$effect$2d$with$2d$fallbacks$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$utils$2f$dist$2f$emotion$2d$utils$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/utils/dist/emotion-utils.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var tags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
];
// bind it to avoid mutating the original function
var newStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$emotion$2f$styled$2f$base$2f$dist$2f$emotion$2d$styled$2d$base$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bind(null);
tags.forEach(function(tagName) {
    newStyled[tagName] = newStyled(tagName);
});
;
}}),
"[project]/node_modules/thirdweb/node_modules/@walletconnect/types/dist/index.es.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ICore": (()=>h),
    "ICrypto": (()=>g),
    "IEchoClient": (()=>O),
    "IEngine": (()=>V),
    "IEngineEvents": (()=>K),
    "IEventClient": (()=>R),
    "IExpirer": (()=>S),
    "IJsonRpcHistory": (()=>I),
    "IKeyChain": (()=>j),
    "IMessageTracker": (()=>y),
    "IPairing": (()=>$),
    "IPublisher": (()=>m),
    "IRelayer": (()=>d),
    "ISignClient": (()=>J),
    "ISignClientEvents": (()=>H),
    "IStore": (()=>f),
    "ISubscriber": (()=>P),
    "ISubscriberTopicMap": (()=>C),
    "IVerify": (()=>M)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/events/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/events/dist/esm/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
;
;
var a = Object.defineProperty, u = (e, s, r)=>s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, c = (e, s, r)=>u(e, typeof s != "symbol" ? s + "" : s, r);
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super(), this.opts = s, c(this, "protocol", "wc"), c(this, "version", 2);
    }
}
class g {
    constructor(s, r, t){
        this.core = s, this.logger = r;
    }
}
var p = Object.defineProperty, b = (e, s, r)=>s in e ? p(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, v = (e, s, r)=>b(e, typeof s != "symbol" ? s + "" : s, r);
class I extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r, v(this, "records", new Map);
    }
}
class y {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super();
    }
}
class f {
    constructor(s, r, t, q){
        this.core = s, this.logger = r, this.name = t;
    }
}
var E = Object.defineProperty, x = (e, s, r)=>s in e ? E(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, w = (e, s, r)=>x(e, typeof s != "symbol" ? s + "" : s, r);
class C {
    constructor(){
        w(this, "map", new Map);
    }
}
class P extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class j {
    constructor(s, r){
        this.core = s, this.logger = r;
    }
}
class S extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r;
    }
}
class $ {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class M {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.store = t;
    }
}
class O {
    constructor(s, r){
        this.projectId = s, this.logger = r;
    }
}
class R {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.telemetryEnabled = t;
    }
}
var T = Object.defineProperty, k = (e, s, r)=>s in e ? T(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, i = (e, s, r)=>k(e, typeof s != "symbol" ? s + "" : s, r);
class H extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["default"] {
    constructor(){
        super();
    }
}
class J {
    constructor(s){
        this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
    }
}
class K extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"] {
    constructor(){
        super();
    }
}
class V {
    constructor(s){
        this.client = s;
    }
}
;
 //# sourceMappingURL=index.es.js.map
}}),
"[project]/node_modules/thirdweb/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    const BASE_MAP = new Uint8Array(256);
    for(let j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(let i = 0; i < ALPHABET.length; i++){
        const x = ALPHABET.charAt(i);
        const xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    const BASE = ALPHABET.length;
    const LEADER = ALPHABET.charAt(0);
    const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        // eslint-disable-next-line no-empty
        if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
            throw new TypeError('Expected Uint8Array');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        let zeroes = 0;
        let length = 0;
        let pbegin = 0;
        const pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        const b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            let carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            let i = 0;
            for(let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        let it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        let str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return new Uint8Array();
        }
        let psz = 0;
        // Skip and count leading '1's.
        let zeroes = 0;
        let length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        const size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        const b256 = new Uint8Array(size);
        // Process the characters.
        while(psz < source.length){
            // Find code of next character
            const charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            let carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            let i = 0;
            for(let it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        let it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        const vch = new Uint8Array(zeroes + (size - it4));
        let j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        const buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode,
        decodeUnsafe,
        decode
    };
}
const __TURBOPACK__default__export__ = base;
}}),
"[project]/node_modules/thirdweb/node_modules/bs58/src/esm/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}}),
"[project]/node_modules/thirdweb/node_modules/@walletconnect/utils/dist/index.es.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BASE10": (()=>Ot),
    "BASE16": (()=>V),
    "BASE64": (()=>At),
    "BASE64URL": (()=>ti),
    "COLON": (()=>Gr),
    "DEFAULT_DEPTH": (()=>Qe),
    "EMPTY_SPACE": (()=>Le),
    "ENV_MAP": (()=>H),
    "INTERNAL_ERRORS": (()=>mr),
    "MemoryStore": (()=>ec),
    "ONE_THOUSAND": (()=>Wr),
    "REACT_NATIVE_PRODUCT": (()=>Ft),
    "RELAYER_DEFAULT_PROTOCOL": (()=>sr),
    "SDK_ERRORS": (()=>yr),
    "SDK_TYPE": (()=>Gt),
    "SLASH": (()=>qt),
    "TYPE_0": (()=>Nt),
    "TYPE_1": (()=>Oe),
    "TYPE_2": (()=>_e),
    "UTF8": (()=>Ie),
    "addResourceToRecap": (()=>$n),
    "appendToQueryString": (()=>Wt),
    "assertType": (()=>to),
    "assignAbilityToActions": (()=>ft),
    "base64Decode": (()=>_n),
    "base64Encode": (()=>Un),
    "buildApprovedNamespaces": (()=>$i),
    "buildAuthObject": (()=>Qo),
    "buildNamespacesFromAuth": (()=>Ri),
    "buildRecapStatement": (()=>Pn),
    "calcExpiry": (()=>po),
    "capitalize": (()=>co),
    "capitalizeWord": (()=>Qt),
    "createDelayedPromise": (()=>ao),
    "createEncodedRecap": (()=>rs),
    "createExpiringPromise": (()=>uo),
    "createRecap": (()=>Tn),
    "decodeRecap": (()=>oe),
    "decodeTypeByte": (()=>fe),
    "decodeTypeTwoEnvelope": (()=>li),
    "decrypt": (()=>ui),
    "deriveSymKey": (()=>si),
    "deserialize": (()=>Fe),
    "encodeRecap": (()=>De),
    "encodeTypeByte": (()=>Ut),
    "encodeTypeTwoEnvelope": (()=>fi),
    "encrypt": (()=>ai),
    "engineEvent": (()=>yo),
    "enumify": (()=>io),
    "extractSolanaTransactionId": (()=>qo),
    "formatAccountId": (()=>Mt),
    "formatAccountWithChain": (()=>Vr),
    "formatChainId": (()=>Dt),
    "formatDeeplinkUrl": (()=>en),
    "formatExpirerTarget": (()=>tt),
    "formatIdTarget": (()=>lo),
    "formatMessage": (()=>On),
    "formatMessageContext": (()=>no),
    "formatRelayParams": (()=>ar),
    "formatRelayRpcUrl": (()=>Qr),
    "formatStatementFromRecap": (()=>dt),
    "formatTopicTarget": (()=>fo),
    "formatUA": (()=>Yt),
    "formatUri": (()=>vi),
    "fromBase64": (()=>rt),
    "generateKeyPair": (()=>ri),
    "generateRandomBytes32": (()=>oi),
    "getAccountsChains": (()=>le),
    "getAccountsFromNamespaces": (()=>Kr),
    "getAddressFromAccount": (()=>Vt),
    "getAddressesFromAccounts": (()=>Hr),
    "getAppId": (()=>Yr),
    "getAppMetadata": (()=>Xr),
    "getBrowserOnlineStatus": (()=>Ur),
    "getChainFromAccount": (()=>Ht),
    "getChainsFromAccounts": (()=>Kt),
    "getChainsFromNamespace": (()=>Be),
    "getChainsFromNamespaces": (()=>Fr),
    "getChainsFromRecap": (()=>is),
    "getChainsFromRequiredNamespaces": (()=>qr),
    "getCommonValuesInArrays": (()=>nt),
    "getCryptoKeyFromKeyData": (()=>or),
    "getDecodedRecapFromResources": (()=>An),
    "getDeepLink": (()=>bo),
    "getDidAddress": (()=>ut),
    "getDidAddressSegments": (()=>ke),
    "getDidChainId": (()=>xn),
    "getEnvironment": (()=>ue),
    "getHttpUrl": (()=>eo),
    "getInternalError": (()=>te),
    "getJavascriptID": (()=>Jt),
    "getJavascriptOS": (()=>zt),
    "getLastItems": (()=>Zt),
    "getLinkModeURL": (()=>xi),
    "getMethodsFromRecap": (()=>ss),
    "getNamespacedDidChainId": (()=>In),
    "getNamespacesChains": (()=>lr),
    "getNamespacesEventsForChainId": (()=>hr),
    "getNamespacesFromAccounts": (()=>gr),
    "getNamespacesMethodsForChainId": (()=>dr),
    "getNodeOnlineStatus": (()=>Tr),
    "getReCapActions": (()=>Sn),
    "getReactNativeOnlineStatus": (()=>_r),
    "getRecapAbilitiesFromResource": (()=>ns),
    "getRecapFromResources": (()=>Me),
    "getRecapResource": (()=>Nn),
    "getRelayClientMetadata": (()=>Zr),
    "getRelayProtocolApi": (()=>wi),
    "getRelayProtocolName": (()=>bi),
    "getRequiredNamespacesFromNamespaces": (()=>Ti),
    "getSdkError": (()=>de),
    "getSearchParamFromURL": (()=>wo),
    "getUniqueValues": (()=>Ze),
    "handleDeeplinkRedirect": (()=>mo),
    "hasOverlap": (()=>re),
    "hashEthereumMessage": (()=>ct),
    "hashKey": (()=>ii),
    "hashMessage": (()=>ci),
    "isAndroid": (()=>zr),
    "isBrowser": (()=>Ae),
    "isCaipNamespace": (()=>Tt),
    "isConformingNamespaces": (()=>Nr),
    "isExpired": (()=>go),
    "isIframe": (()=>rn),
    "isIos": (()=>Jr),
    "isNode": (()=>et),
    "isOnline": (()=>Zi),
    "isProposalStruct": (()=>Li),
    "isReactNative": (()=>ne),
    "isRecap": (()=>lt),
    "isSessionCompatible": (()=>Pi),
    "isSessionStruct": (()=>ji),
    "isTelegram": (()=>nn),
    "isTestRun": (()=>vo),
    "isTypeOneEnvelope": (()=>hi),
    "isTypeTwoEnvelope": (()=>pi),
    "isUndefined": (()=>ae),
    "isValidAccountId": (()=>br),
    "isValidAccounts": (()=>vr),
    "isValidActions": (()=>Ir),
    "isValidArray": (()=>$e),
    "isValidChainId": (()=>Re),
    "isValidChains": (()=>wr),
    "isValidController": (()=>Ci),
    "isValidEip1271Signature": (()=>bn),
    "isValidEip191Signature": (()=>mn),
    "isValidErrorReason": (()=>Hi),
    "isValidEvent": (()=>qi),
    "isValidId": (()=>Mi),
    "isValidNamespaceAccounts": (()=>xr),
    "isValidNamespaceActions": (()=>Pt),
    "isValidNamespaceChains": (()=>Er),
    "isValidNamespaceMethodsOrEvents": (()=>Rt),
    "isValidNamespaces": (()=>Or),
    "isValidNamespacesChainId": (()=>Gi),
    "isValidNamespacesEvent": (()=>zi),
    "isValidNamespacesRequest": (()=>Wi),
    "isValidNumber": (()=>Ge),
    "isValidObject": (()=>qe),
    "isValidParams": (()=>Vi),
    "isValidRecap": (()=>Y),
    "isValidRelay": (()=>Ar),
    "isValidRelays": (()=>Di),
    "isValidRequest": (()=>Ki),
    "isValidRequestExpiry": (()=>Xi),
    "isValidRequiredNamespaces": (()=>ki),
    "isValidResponse": (()=>Fi),
    "isValidString": (()=>q),
    "isValidUrl": (()=>Bi),
    "mapEntries": (()=>so),
    "mapToObj": (()=>ro),
    "mergeArrays": (()=>Q),
    "mergeEncodedRecaps": (()=>os),
    "mergeRecaps": (()=>Rn),
    "normalizeNamespaces": (()=>$t),
    "objToMap": (()=>oo),
    "openDeeplink": (()=>tn),
    "parseAccountId": (()=>Xe),
    "parseChainId": (()=>Ye),
    "parseContextNames": (()=>Xt),
    "parseExpirerTarget": (()=>ho),
    "parseNamespaceKey": (()=>pr),
    "parseRelayParams": (()=>ir),
    "parseTopic": (()=>cr),
    "parseUri": (()=>Ei),
    "populateAuthPayload": (()=>es),
    "recapHasResource": (()=>ts),
    "serialize": (()=>_t),
    "sleep": (()=>xo),
    "subscribeToBrowserNetworkChange": (()=>$r),
    "subscribeToNetworkChange": (()=>Qi),
    "subscribeToReactNativeNetworkChange": (()=>Rr),
    "toBase64": (()=>on),
    "uuidv4": (()=>Eo),
    "validateDecoding": (()=>di),
    "validateEncoding": (()=>rr),
    "validateSignedCacao": (()=>Zo),
    "verifyP256Jwt": (()=>mi),
    "verifySignature": (()=>yn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$detect$2d$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/detect-browser/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/time/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/window-getters/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$metadata$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/window-metadata/dist/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$bs58$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/thirdweb/node_modules/bs58/src/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/relay-auth/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/uint8arrays/esm/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uint8arrays/esm/src/from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uint8arrays/esm/src/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/elliptic/lib/elliptic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$api$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@walletconnect/relay-api/dist/index.es.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const Pe = ":";
function Ye(e) {
    const [t, n] = e.split(Pe);
    return {
        namespace: t,
        reference: n
    };
}
function Dt(e) {
    const { namespace: t, reference: n } = e;
    return [
        t,
        n
    ].join(Pe);
}
function Xe(e) {
    const [t, n, r] = e.split(Pe);
    return {
        namespace: t,
        reference: n,
        address: r
    };
}
function Mt(e) {
    const { namespace: t, reference: n, address: r } = e;
    return [
        t,
        n,
        r
    ].join(Pe);
}
function Ze(e, t) {
    const n = [];
    return e.forEach((r)=>{
        const o = t(r);
        n.includes(o) || n.push(o);
    }), n;
}
function Vt(e) {
    const { address: t } = Xe(e);
    return t;
}
function Ht(e) {
    const { namespace: t, reference: n } = Xe(e);
    return Dt({
        namespace: t,
        reference: n
    });
}
function Vr(e, t) {
    const { namespace: n, reference: r } = Ye(t);
    return Mt({
        namespace: n,
        reference: r,
        address: e
    });
}
function Hr(e) {
    return Ze(e, Vt);
}
function Kt(e) {
    return Ze(e, Ht);
}
function Kr(e, t = []) {
    const n = [];
    return Object.keys(e).forEach((r)=>{
        if (t.length && !t.includes(r)) return;
        const o = e[r];
        n.push(...o.accounts);
    }), n;
}
function Fr(e, t = []) {
    const n = [];
    return Object.keys(e).forEach((r)=>{
        if (t.length && !t.includes(r)) return;
        const o = e[r];
        n.push(...Kt(o.accounts));
    }), n;
}
function qr(e, t = []) {
    const n = [];
    return Object.keys(e).forEach((r)=>{
        if (t.length && !t.includes(r)) return;
        const o = e[r];
        n.push(...Be(r, o));
    }), n;
}
function Be(e, t) {
    return e.includes(":") ? [
        e
    ] : t.chains || [];
}
const Ft = "ReactNative", H = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}, Le = " ", Gr = ":", qt = "/", Qe = 2, Wr = 1e3, Gt = "js";
function et() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function ne() {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocument"])() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNavigator"])() && navigator.product === Ft;
}
function zr() {
    return ne() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function Jr() {
    return ne() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function Ae() {
    return !et() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNavigator"])() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocument"])();
}
function ue() {
    return ne() ? H.reactNative : et() ? H.node : Ae() ? H.browser : H.unknown;
}
function Yr() {
    var e;
    try {
        return ne() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e = global.Application) == null ? void 0 : e.applicationId : void 0;
    } catch  {
        return;
    }
}
function Wt(e, t) {
    const n = new URLSearchParams(e);
    for (const r of Object.keys(t).sort())if (t.hasOwnProperty(r)) {
        const o = t[r];
        o !== void 0 && n.set(r, o);
    }
    return n.toString();
}
function Xr() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$metadata$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWindowMetadata"])() || {
        name: "",
        description: "",
        url: "",
        icons: [
            ""
        ]
    };
}
function Zr(e, t) {
    var n;
    const r = ue(), o = {
        protocol: e,
        version: t,
        env: r
    };
    return r === "browser" && (o.host = ((n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocation"])()) == null ? void 0 : n.host) || "unknown"), o;
}
function zt() {
    if (ue() === H.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
        const { OS: n, Version: r } = global.Platform;
        return [
            n,
            r
        ].join("-");
    }
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$detect$2d$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detect"])();
    if (e === null) return "unknown";
    const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
    return e.type === "browser" ? [
        t,
        e.name,
        e.version
    ].join("-") : [
        t,
        e.version
    ].join("-");
}
function Jt() {
    var e;
    const t = ue();
    return t === H.browser ? [
        t,
        ((e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocation"])()) == null ? void 0 : e.host) || "unknown"
    ].join(":") : t;
}
function Yt(e, t, n) {
    const r = zt(), o = Jt();
    return [
        [
            e,
            t
        ].join("-"),
        [
            Gt,
            n
        ].join("-"),
        r,
        o
    ].join("/");
}
function Qr({ protocol: e, version: t, relayUrl: n, sdkVersion: r, auth: o, projectId: s, useOnCloseEvent: i, bundleId: c, packageName: u }) {
    const a = n.split("?"), l = Yt(e, t, r), f = {
        auth: o,
        ua: l,
        projectId: s,
        useOnCloseEvent: i || void 0,
        packageName: u || void 0,
        bundleId: c || void 0
    }, d = Wt(a[1] || "", f);
    return a[0] + "?" + d;
}
function eo(e) {
    let t = (e.match(/^[^:]+(?=:\/\/)/gi) || [])[0];
    const n = typeof t < "u" ? e.split("://")[1] : e;
    return t = t === "wss" ? "https" : "http", [
        t,
        n
    ].join("://");
}
function to(e, t, n) {
    if (!e[t] || typeof e[t] !== n) throw new Error(`Missing or invalid "${t}" param`);
}
function Xt(e, t = Qe) {
    return Zt(e.split(qt), t);
}
function no(e) {
    return Xt(e).join(Le);
}
function re(e, t) {
    return e.filter((n)=>t.includes(n)).length === e.length;
}
function Zt(e, t = Qe) {
    return e.slice(Math.max(e.length - t, 0));
}
function ro(e) {
    return Object.fromEntries(e.entries());
}
function oo(e) {
    return new Map(Object.entries(e));
}
function so(e, t) {
    const n = {};
    return Object.keys(e).forEach((r)=>{
        n[r] = t(e[r]);
    }), n;
}
const io = (e)=>e;
function Qt(e) {
    return e.trim().replace(/^\w/, (t)=>t.toUpperCase());
}
function co(e) {
    return e.split(Le).map((t)=>Qt(t)).join(Le);
}
function ao(e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"], t) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(e || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]);
    let r, o, s, i;
    return {
        resolve: (c)=>{
            s && r && (clearTimeout(s), r(c), i = Promise.resolve(c));
        },
        reject: (c)=>{
            s && o && (clearTimeout(s), o(c));
        },
        done: ()=>new Promise((c, u)=>{
                if (i) return c(i);
                s = setTimeout(()=>{
                    const a = new Error(t);
                    i = Promise.reject(a), u(a);
                }, n), r = c, o = u;
            })
    };
}
function uo(e, t, n) {
    return new Promise(async (r, o)=>{
        const s = setTimeout(()=>o(new Error(n)), t);
        try {
            const i = await e;
            r(i);
        } catch (i) {
            o(i);
        }
        clearTimeout(s);
    });
}
function tt(e, t) {
    if (typeof t == "string" && t.startsWith(`${e}:`)) return t;
    if (e.toLowerCase() === "topic") {
        if (typeof t != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${t}`;
    } else if (e.toLowerCase() === "id") {
        if (typeof t != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${t}`;
    }
    throw new Error(`Unknown expirer target type: ${e}`);
}
function fo(e) {
    return tt("topic", e);
}
function lo(e) {
    return tt("id", e);
}
function ho(e) {
    const [t, n] = e.split(":"), r = {
        id: void 0,
        topic: void 0
    };
    if (t === "topic" && typeof n == "string") r.topic = n;
    else if (t === "id" && Number.isInteger(Number(n))) r.id = Number(n);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);
    return r;
}
function po(e, t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromMiliseconds"])((t || Date.now()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(e));
}
function go(e) {
    return Date.now() >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMiliseconds"])(e);
}
function yo(e, t) {
    return `${e}${t ? `:${t}` : ""}`;
}
function Q(e = [], t = []) {
    return [
        ...new Set([
            ...e,
            ...t
        ])
    ];
}
async function mo({ id: e, topic: t, wcDeepLink: n }) {
    var r;
    try {
        if (!n) return;
        const o = typeof n == "string" ? JSON.parse(n) : n, s = o?.href;
        if (typeof s != "string") return;
        const i = en(s, e, t), c = ue();
        if (c === H.browser) {
            if (!((r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocument"])()) != null && r.hasFocus())) {
                console.warn("Document does not have focus, skipping deeplink.");
                return;
            }
            tn(i);
        } else c === H.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i);
    } catch (o) {
        console.error(o);
    }
}
function en(e, t, n) {
    const r = `requestId=${t}&sessionTopic=${n}`;
    e.endsWith("/") && (e = e.slice(0, -1));
    let o = `${e}`;
    if (e.startsWith("https://t.me")) {
        const s = e.includes("?") ? "&startapp=" : "?startapp=";
        o = `${o}${s}${on(r, !0)}`;
    } else o = `${o}/wc?${r}`;
    return o;
}
function tn(e) {
    let t = "_self";
    rn() ? t = "_top" : (nn() || e.startsWith("https://") || e.startsWith("http://")) && (t = "_blank"), window.open(e, t, "noreferrer noopener");
}
async function bo(e, t) {
    let n = "";
    try {
        if (Ae() && (n = localStorage.getItem(t), n)) return n;
        n = await e.getItem(t);
    } catch (r) {
        console.error(r);
    }
    return n;
}
function nt(e, t) {
    return e.filter((n)=>t.includes(n));
}
function wo(e, t) {
    if (!e.includes(t)) return null;
    const n = e.split(/([&,?,=])/), r = n.indexOf(t);
    return n[r + 2];
}
function Eo() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e)=>{
        const t = Math.random() * 16 | 0;
        return (e === "x" ? t : t & 3 | 8).toString(16);
    });
}
function vo() {
    return typeof process < "u" && process.env.IS_VITEST === "true";
}
function nn() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function rn() {
    try {
        return window.self !== window.top;
    } catch  {
        return !1;
    }
}
function on(e, t = !1) {
    const n = Buffer.from(e).toString("base64");
    return t ? n.replace(/[=]/g, "") : n;
}
function rt(e) {
    return Buffer.from(e, "base64").toString("utf-8");
}
function xo(e) {
    return new Promise((t)=>setTimeout(t, e));
}
function Ne(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e);
}
function Io(e) {
    return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function je(e, ...t) {
    if (!Io(e)) throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function ot(e) {
    if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    Ne(e.outputLen), Ne(e.blockLen);
}
function me(e, t = !0) {
    if (e.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function sn(e, t) {
    je(e);
    const n = t.outputLen;
    if (e.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
}
const Ce = BigInt(2 ** 32 - 1), cn = BigInt(32);
function Oo(e, t = !1) {
    return t ? {
        h: Number(e & Ce),
        l: Number(e >> cn & Ce)
    } : {
        h: Number(e >> cn & Ce) | 0,
        l: Number(e & Ce) | 0
    };
}
function Ao(e, t = !1) {
    let n = new Uint32Array(e.length), r = new Uint32Array(e.length);
    for(let o = 0; o < e.length; o++){
        const { h: s, l: i } = Oo(e[o], t);
        [n[o], r[o]] = [
            s,
            i
        ];
    }
    return [
        n,
        r
    ];
}
const No = (e, t, n)=>e << n | t >>> 32 - n, So = (e, t, n)=>t << n | e >>> 32 - n, Uo = (e, t, n)=>t << n - 32 | e >>> 64 - n, _o = (e, t, n)=>e << n - 32 | t >>> 64 - n, be = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function To(e) {
    return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
}
function st(e) {
    return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function J(e, t) {
    return e << 32 - t | e >>> t;
}
const an = new Uint8Array(new Uint32Array([
    287454020
]).buffer)[0] === 68;
function $o(e) {
    return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
}
function un(e) {
    for(let t = 0; t < e.length; t++)e[t] = $o(e[t]);
}
function Ro(e) {
    if (typeof e != "string") throw new Error("utf8ToBytes expected string, got " + typeof e);
    return new Uint8Array(new TextEncoder().encode(e));
}
function we(e) {
    return typeof e == "string" && (e = Ro(e)), je(e), e;
}
class it {
    clone() {
        return this._cloneInto();
    }
}
function fn(e) {
    const t = (r)=>e().update(we(r)).digest(), n = e();
    return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = ()=>e(), t;
}
function Se(e = 32) {
    if (be && typeof be.getRandomValues == "function") return be.getRandomValues(new Uint8Array(e));
    if (be && typeof be.randomBytes == "function") return be.randomBytes(e);
    throw new Error("crypto.getRandomValues must be defined");
}
const ln = [], dn = [], hn = [], Po = BigInt(0), Ue = BigInt(1), Bo = BigInt(2), Lo = BigInt(7), jo = BigInt(256), Co = BigInt(113);
for(let e = 0, t = Ue, n = 1, r = 0; e < 24; e++){
    [n, r] = [
        r,
        (2 * n + 3 * r) % 5
    ], ln.push(2 * (5 * r + n)), dn.push((e + 1) * (e + 2) / 2 % 64);
    let o = Po;
    for(let s = 0; s < 7; s++)t = (t << Ue ^ (t >> Lo) * Co) % jo, t & Bo && (o ^= Ue << (Ue << BigInt(s)) - Ue);
    hn.push(o);
}
const [ko, Do] = Ao(hn, !0), pn = (e, t, n)=>n > 32 ? Uo(e, t, n) : No(e, t, n), gn = (e, t, n)=>n > 32 ? _o(e, t, n) : So(e, t, n);
function Mo(e, t = 24) {
    const n = new Uint32Array(10);
    for(let r = 24 - t; r < 24; r++){
        for(let i = 0; i < 10; i++)n[i] = e[i] ^ e[i + 10] ^ e[i + 20] ^ e[i + 30] ^ e[i + 40];
        for(let i = 0; i < 10; i += 2){
            const c = (i + 8) % 10, u = (i + 2) % 10, a = n[u], l = n[u + 1], f = pn(a, l, 1) ^ n[c], d = gn(a, l, 1) ^ n[c + 1];
            for(let g = 0; g < 50; g += 10)e[i + g] ^= f, e[i + g + 1] ^= d;
        }
        let o = e[2], s = e[3];
        for(let i = 0; i < 24; i++){
            const c = dn[i], u = pn(o, s, c), a = gn(o, s, c), l = ln[i];
            o = e[l], s = e[l + 1], e[l] = u, e[l + 1] = a;
        }
        for(let i = 0; i < 50; i += 10){
            for(let c = 0; c < 10; c++)n[c] = e[i + c];
            for(let c = 0; c < 10; c++)e[i + c] ^= ~n[(c + 2) % 10] & n[(c + 4) % 10];
        }
        e[0] ^= ko[r], e[1] ^= Do[r];
    }
    n.fill(0);
}
class Lt extends it {
    constructor(t, n, r, o = !1, s = 24){
        if (super(), this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = o, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Ne(r), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200), this.state32 = To(this.state);
    }
    keccak() {
        an || un(this.state32), Mo(this.state32, this.rounds), an || un(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(t) {
        me(this);
        const { blockLen: n, state: r } = this;
        t = we(t);
        const o = t.length;
        for(let s = 0; s < o;){
            const i = Math.min(n - this.pos, o - s);
            for(let c = 0; c < i; c++)r[this.pos++] ^= t[s++];
            this.pos === n && this.keccak();
        }
        return this;
    }
    finish() {
        if (this.finished) return;
        this.finished = !0;
        const { state: t, suffix: n, pos: r, blockLen: o } = this;
        t[r] ^= n, (n & 128) !== 0 && r === o - 1 && this.keccak(), t[o - 1] ^= 128, this.keccak();
    }
    writeInto(t) {
        me(this, !1), je(t), this.finish();
        const n = this.state, { blockLen: r } = this;
        for(let o = 0, s = t.length; o < s;){
            this.posOut >= r && this.keccak();
            const i = Math.min(r - this.posOut, s - o);
            t.set(n.subarray(this.posOut, this.posOut + i), o), this.posOut += i, o += i;
        }
        return t;
    }
    xofInto(t) {
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(t);
    }
    xof(t) {
        return Ne(t), this.xofInto(new Uint8Array(t));
    }
    digestInto(t) {
        if (sn(t, this), this.finished) throw new Error("digest() was already called");
        return this.writeInto(t), this.destroy(), t;
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
        this.destroyed = !0, this.state.fill(0);
    }
    _cloneInto(t) {
        const { blockLen: n, suffix: r, outputLen: o, rounds: s, enableXOF: i } = this;
        return t || (t = new Lt(n, r, o, i, s)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s, t.suffix = r, t.outputLen = o, t.enableXOF = i, t.destroyed = this.destroyed, t;
    }
}
const Vo = (e, t, n)=>fn(()=>new Lt(t, e, n)), Ho = Vo(1, 136, 256 / 8), Ko = "https://rpc.walletconnect.org/v1";
function ct(e) {
    const t = `Ethereum Signed Message:
${e.length}`, n = new TextEncoder().encode(t + e);
    return "0x" + Buffer.from(Ho(n)).toString("hex");
}
async function yn(e, t, n, r, o, s) {
    switch(n.t){
        case "eip191":
            return await mn(e, t, n.s);
        case "eip1271":
            return await bn(e, t, n.s, r, o, s);
        default:
            throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n.t}`);
    }
}
async function mn(e, t, n) {
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f40$walletconnect$2f$utils$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recoverAddress"])({
        hash: ct(t),
        signature: n
    })).toLowerCase() === e.toLowerCase();
}
async function bn(e, t, n, r, o, s) {
    const i = Ye(r);
    if (!i.namespace || !i.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r}`);
    try {
        const c = "0x1626ba7e", u = "0000000000000000000000000000000000000000000000000000000000000040", a = "0000000000000000000000000000000000000000000000000000000000000041", l = n.substring(2), f = ct(t).substring(2), d = c + f + u + a + l, g = await fetch(`${s || Ko}/?chainId=${r}&projectId=${o}`, {
            method: "POST",
            body: JSON.stringify({
                id: Fo(),
                jsonrpc: "2.0",
                method: "eth_call",
                params: [
                    {
                        to: e,
                        data: d
                    },
                    "latest"
                ]
            })
        }), { result: y } = await g.json();
        return y ? y.slice(0, c.length).toLowerCase() === c.toLowerCase() : !1;
    } catch (c) {
        return console.error("isValidEip1271Signature: ", c), !1;
    }
}
function Fo() {
    return Date.now() + Math.floor(Math.random() * 1e3);
}
function qo(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for(let i = 0; i < t.length; i++)n[i] = t.charCodeAt(i);
    const r = n[0];
    if (r === 0) throw new Error("No signatures found");
    const o = 1 + r * 64;
    if (n.length < o) throw new Error("Transaction data too short for claimed signature count");
    if (n.length < 100) throw new Error("Transaction too short");
    const s = Buffer.from(e, "base64").slice(1, 65);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$thirdweb$2f$node_modules$2f$bs58$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].encode(s);
}
var Go = Object.defineProperty, Wo = Object.defineProperties, zo = Object.getOwnPropertyDescriptors, wn = Object.getOwnPropertySymbols, Jo = Object.prototype.hasOwnProperty, Yo = Object.prototype.propertyIsEnumerable, En = (e, t, n)=>t in e ? Go(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, at = (e, t)=>{
    for(var n in t || (t = {}))Jo.call(t, n) && En(e, n, t[n]);
    if (wn) for (var n of wn(t))Yo.call(t, n) && En(e, n, t[n]);
    return e;
}, vn = (e, t)=>Wo(e, zo(t));
const Xo = "did:pkh:", ke = (e)=>e?.split(":"), xn = (e)=>{
    const t = e && ke(e);
    if (t) return e.includes(Xo) ? t[3] : t[1];
}, In = (e)=>{
    const t = e && ke(e);
    if (t) return t[2] + ":" + t[3];
}, ut = (e)=>{
    const t = e && ke(e);
    if (t) return t.pop();
};
async function Zo(e) {
    const { cacao: t, projectId: n } = e, { s: r, p: o } = t, s = On(o, o.iss), i = ut(o.iss);
    return await yn(i, s, r, In(o.iss), n);
}
const On = (e, t)=>{
    const n = `${e.domain} wants you to sign in with your Ethereum account:`, r = ut(t);
    if (!e.aud && !e.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let o = e.statement || void 0;
    const s = `URI: ${e.aud || e.uri}`, i = `Version: ${e.version}`, c = `Chain ID: ${xn(t)}`, u = `Nonce: ${e.nonce}`, a = `Issued At: ${e.iat}`, l = e.exp ? `Expiration Time: ${e.exp}` : void 0, f = e.nbf ? `Not Before: ${e.nbf}` : void 0, d = e.requestId ? `Request ID: ${e.requestId}` : void 0, g = e.resources ? `Resources:${e.resources.map((h)=>`
- ${h}`).join("")}` : void 0, y = Me(e.resources);
    if (y) {
        const h = oe(y);
        o = dt(o, h);
    }
    return [
        n,
        r,
        "",
        o,
        "",
        s,
        i,
        c,
        u,
        a,
        l,
        f,
        d,
        g
    ].filter((h)=>h != null).join(`
`);
};
function Qo(e, t, n) {
    return n.includes("did:pkh:") || (n = `did:pkh:${n}`), {
        h: {
            t: "caip122"
        },
        p: {
            iss: n,
            domain: e.domain,
            aud: e.aud,
            version: e.version,
            nonce: e.nonce,
            iat: e.iat,
            statement: e.statement,
            requestId: e.requestId,
            resources: e.resources,
            nbf: e.nbf,
            exp: e.exp
        },
        s: t
    };
}
function es(e) {
    var t;
    const { authPayload: n, chains: r, methods: o } = e, s = n.statement || "";
    if (!(r != null && r.length)) return n;
    const i = n.chains, c = nt(i, r);
    if (!(c != null && c.length)) throw new Error("No supported chains");
    const u = An(n.resources);
    if (!u) return n;
    Y(u);
    const a = Nn(u, "eip155");
    let l = n?.resources || [];
    if (a != null && a.length) {
        const f = Sn(a), d = nt(f, o);
        if (!(d != null && d.length)) throw new Error(`Supported methods don't satisfy the requested: ${JSON.stringify(f)}, supported: ${JSON.stringify(o)}`);
        const g = ft("request", d, {
            chains: c
        }), y = $n(u, "eip155", g);
        l = ((t = n?.resources) == null ? void 0 : t.slice(0, -1)) || [], l.push(De(y));
    }
    return vn(at({}, n), {
        statement: Pn(s, Me(l)),
        chains: c,
        resources: n != null && n.resources || l.length > 0 ? l : void 0
    });
}
function An(e) {
    const t = Me(e);
    if (t && lt(t)) return oe(t);
}
function ts(e, t) {
    var n;
    return (n = e?.att) == null ? void 0 : n.hasOwnProperty(t);
}
function Nn(e, t) {
    var n, r;
    return (n = e?.att) != null && n[t] ? Object.keys((r = e?.att) == null ? void 0 : r[t]) : [];
}
function ns(e) {
    return e?.map((t)=>Object.keys(t)) || [];
}
function Sn(e) {
    return e?.map((t)=>{
        var n;
        return (n = t.split("/")) == null ? void 0 : n[1];
    }) || [];
}
function Un(e) {
    return Buffer.from(JSON.stringify(e)).toString("base64");
}
function _n(e) {
    return JSON.parse(Buffer.from(e, "base64").toString("utf-8"));
}
function Y(e) {
    if (!e) throw new Error("No recap provided, value is undefined");
    if (!e.att) throw new Error("No `att` property found");
    const t = Object.keys(e.att);
    if (!(t != null && t.length)) throw new Error("No resources found in `att` property");
    t.forEach((n)=>{
        const r = e.att[n];
        if (Array.isArray(r)) throw new Error(`Resource must be an object: ${n}`);
        if (typeof r != "object") throw new Error(`Resource must be an object: ${n}`);
        if (!Object.keys(r).length) throw new Error(`Resource object is empty: ${n}`);
        Object.keys(r).forEach((o)=>{
            const s = r[o];
            if (!Array.isArray(s)) throw new Error(`Ability limits ${o} must be an array of objects, found: ${s}`);
            if (!s.length) throw new Error(`Value of ${o} is empty array, must be an array with objects`);
            s.forEach((i)=>{
                if (typeof i != "object") throw new Error(`Ability limits (${o}) must be an array of objects, found: ${i}`);
            });
        });
    });
}
function Tn(e, t, n, r = {}) {
    return n?.sort((o, s)=>o.localeCompare(s)), {
        att: {
            [e]: ft(t, n, r)
        }
    };
}
function $n(e, t, n) {
    var r;
    e.att[t] = at({}, n);
    const o = (r = Object.keys(e.att)) == null ? void 0 : r.sort((i, c)=>i.localeCompare(c)), s = {
        att: {}
    };
    return o.reduce((i, c)=>(i.att[c] = e.att[c], i), s);
}
function ft(e, t, n = {}) {
    t = t?.sort((o, s)=>o.localeCompare(s));
    const r = t.map((o)=>({
            [`${e}/${o}`]: [
                n
            ]
        }));
    return Object.assign({}, ...r);
}
function De(e) {
    return Y(e), `urn:recap:${Un(e).replace(/=/g, "")}`;
}
function oe(e) {
    const t = _n(e.replace("urn:recap:", ""));
    return Y(t), t;
}
function rs(e, t, n) {
    const r = Tn(e, t, n);
    return De(r);
}
function lt(e) {
    return e && e.includes("urn:recap:");
}
function os(e, t) {
    const n = oe(e), r = oe(t), o = Rn(n, r);
    return De(o);
}
function Rn(e, t) {
    Y(e), Y(t);
    const n = Object.keys(e.att).concat(Object.keys(t.att)).sort((o, s)=>o.localeCompare(s)), r = {
        att: {}
    };
    return n.forEach((o)=>{
        var s, i;
        Object.keys(((s = e.att) == null ? void 0 : s[o]) || {}).concat(Object.keys(((i = t.att) == null ? void 0 : i[o]) || {})).sort((c, u)=>c.localeCompare(u)).forEach((c)=>{
            var u, a;
            r.att[o] = vn(at({}, r.att[o]), {
                [c]: ((u = e.att[o]) == null ? void 0 : u[c]) || ((a = t.att[o]) == null ? void 0 : a[c])
            });
        });
    }), r;
}
function dt(e = "", t) {
    Y(t);
    const n = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (e.includes(n)) return e;
    const r = [];
    let o = 0;
    Object.keys(t.att).forEach((c)=>{
        const u = Object.keys(t.att[c]).map((f)=>({
                ability: f.split("/")[0],
                action: f.split("/")[1]
            }));
        u.sort((f, d)=>f.action.localeCompare(d.action));
        const a = {};
        u.forEach((f)=>{
            a[f.ability] || (a[f.ability] = []), a[f.ability].push(f.action);
        });
        const l = Object.keys(a).map((f)=>(o++, `(${o}) '${f}': '${a[f].join("', '")}' for '${c}'.`));
        r.push(l.join(", ").replace(".,", "."));
    });
    const s = r.join(" "), i = `${n}${s}`;
    return `${e ? e + " " : ""}${i}`;
}
function ss(e) {
    var t;
    const n = oe(e);
    Y(n);
    const r = (t = n.att) == null ? void 0 : t.eip155;
    return r ? Object.keys(r).map((o)=>o.split("/")[1]) : [];
}
function is(e) {
    const t = oe(e);
    Y(t);
    const n = [];
    return Object.values(t.att).forEach((r)=>{
        Object.values(r).forEach((o)=>{
            var s;
            (s = o?.[0]) != null && s.chains && n.push(o[0].chains);
        });
    }), [
        ...new Set(n.flat())
    ];
}
function Pn(e, t) {
    if (!t) return e;
    const n = oe(t);
    return Y(n), dt(e, n);
}
function Me(e) {
    if (!e) return;
    const t = e?.[e.length - 1];
    return lt(t) ? t : void 0;
}
function ht(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e);
}
function Bn(e) {
    return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function F(e, ...t) {
    if (!Bn(e)) throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Ln(e, t = !0) {
    if (e.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function cs(e, t) {
    F(e);
    const n = t.outputLen;
    if (e.length < n) throw new Error("digestInto() expects output buffer of length at least " + n);
}
function jn(e) {
    if (typeof e != "boolean") throw new Error(`boolean expected, not ${e}`);
}
const se = (e)=>new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), as = (e)=>new DataView(e.buffer, e.byteOffset, e.byteLength), us = new Uint8Array(new Uint32Array([
    287454020
]).buffer)[0] === 68;
if (!us) throw new Error("Non little-endian hardware is not supported");
function fs(e) {
    if (typeof e != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(e));
}
function pt(e) {
    if (typeof e == "string") e = fs(e);
    else if (Bn(e)) e = gt(e);
    else throw new Error("Uint8Array expected, got " + typeof e);
    return e;
}
function ls(e, t) {
    if (t == null || typeof t != "object") throw new Error("options must be defined");
    return Object.assign(e, t);
}
function ds(e, t) {
    if (e.length !== t.length) return !1;
    let n = 0;
    for(let r = 0; r < e.length; r++)n |= e[r] ^ t[r];
    return n === 0;
}
const hs = (e, t)=>{
    function n(r, ...o) {
        if (F(r), e.nonceLength !== void 0) {
            const l = o[0];
            if (!l) throw new Error("nonce / iv required");
            e.varSizeNonce ? F(l) : F(l, e.nonceLength);
        }
        const s = e.tagLength;
        s && o[1] !== void 0 && F(o[1]);
        const i = t(r, ...o), c = (l, f)=>{
            if (f !== void 0) {
                if (l !== 2) throw new Error("cipher output not supported");
                F(f);
            }
        };
        let u = !1;
        return {
            encrypt (l, f) {
                if (u) throw new Error("cannot encrypt() twice with same key + nonce");
                return u = !0, F(l), c(i.encrypt.length, f), i.encrypt(l, f);
            },
            decrypt (l, f) {
                if (F(l), s && l.length < s) throw new Error("invalid ciphertext length: smaller than tagLength=" + s);
                return c(i.decrypt.length, f), i.decrypt(l, f);
            }
        };
    }
    return Object.assign(n, e), n;
};
function Cn(e, t, n = !0) {
    if (t === void 0) return new Uint8Array(e);
    if (t.length !== e) throw new Error("invalid output length, expected " + e + ", got: " + t.length);
    if (n && !ps(t)) throw new Error("invalid output, must be aligned");
    return t;
}
function kn(e, t, n, r) {
    if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, n, r);
    const o = BigInt(32), s = BigInt(4294967295), i = Number(n >> o & s), c = Number(n & s), u = r ? 4 : 0, a = r ? 0 : 4;
    e.setUint32(t + u, i, r), e.setUint32(t + a, c, r);
}
function ps(e) {
    return e.byteOffset % 4 === 0;
}
function gt(e) {
    return Uint8Array.from(e);
}
function Ee(...e) {
    for(let t = 0; t < e.length; t++)e[t].fill(0);
}
const Dn = (e)=>Uint8Array.from(e.split("").map((t)=>t.charCodeAt(0))), gs = Dn("expand 16-byte k"), ys = Dn("expand 32-byte k"), ms = se(gs), bs = se(ys);
function x(e, t) {
    return e << t | e >>> 32 - t;
}
function yt(e) {
    return e.byteOffset % 4 === 0;
}
const Ve = 64, ws = 16, Mn = 2 ** 32 - 1, Vn = new Uint32Array;
function Es(e, t, n, r, o, s, i, c) {
    const u = o.length, a = new Uint8Array(Ve), l = se(a), f = yt(o) && yt(s), d = f ? se(o) : Vn, g = f ? se(s) : Vn;
    for(let y = 0; y < u; i++){
        if (e(t, n, r, l, i, c), i >= Mn) throw new Error("arx: counter overflow");
        const h = Math.min(Ve, u - y);
        if (f && h === Ve) {
            const m = y / 4;
            if (y % 4 !== 0) throw new Error("arx: invalid block position");
            for(let L = 0, b; L < ws; L++)b = m + L, g[b] = d[b] ^ l[L];
            y += Ve;
            continue;
        }
        for(let m = 0, L; m < h; m++)L = y + m, s[L] = o[L] ^ a[m];
        y += h;
    }
}
function vs(e, t) {
    const { allowShortKeys: n, extendNonceFn: r, counterLength: o, counterRight: s, rounds: i } = ls({
        allowShortKeys: !1,
        counterLength: 8,
        counterRight: !1,
        rounds: 20
    }, t);
    if (typeof e != "function") throw new Error("core must be a function");
    return ht(o), ht(i), jn(s), jn(n), (c, u, a, l, f = 0)=>{
        F(c), F(u), F(a);
        const d = a.length;
        if (l === void 0 && (l = new Uint8Array(d)), F(l), ht(f), f < 0 || f >= Mn) throw new Error("arx: counter overflow");
        if (l.length < d) throw new Error(`arx: output (${l.length}) is shorter than data (${d})`);
        const g = [];
        let y = c.length, h, m;
        if (y === 32) g.push(h = gt(c)), m = bs;
        else if (y === 16 && n) h = new Uint8Array(32), h.set(c), h.set(c, 16), m = ms, g.push(h);
        else throw new Error(`arx: invalid 32-byte key, got length=${y}`);
        yt(u) || g.push(u = gt(u));
        const L = se(h);
        if (r) {
            if (u.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
            r(m, L, se(u.subarray(0, 16)), L), u = u.subarray(16);
        }
        const b = 16 - o;
        if (b !== u.length) throw new Error(`arx: nonce must be ${b} or 16 bytes`);
        if (b !== 12) {
            const O = new Uint8Array(12);
            O.set(u, s ? 0 : 12 - u.length), u = O, g.push(u);
        }
        const _ = se(u);
        return Es(e, m, L, _, a, l, f, i), Ee(...g), l;
    };
}
const M = (e, t)=>e[t++] & 255 | (e[t++] & 255) << 8;
class xs {
    constructor(t){
        this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = !1, t = pt(t), F(t, 32);
        const n = M(t, 0), r = M(t, 2), o = M(t, 4), s = M(t, 6), i = M(t, 8), c = M(t, 10), u = M(t, 12), a = M(t, 14);
        this.r[0] = n & 8191, this.r[1] = (n >>> 13 | r << 3) & 8191, this.r[2] = (r >>> 10 | o << 6) & 7939, this.r[3] = (o >>> 7 | s << 9) & 8191, this.r[4] = (s >>> 4 | i << 12) & 255, this.r[5] = i >>> 1 & 8190, this.r[6] = (i >>> 14 | c << 2) & 8191, this.r[7] = (c >>> 11 | u << 5) & 8065, this.r[8] = (u >>> 8 | a << 8) & 8191, this.r[9] = a >>> 5 & 127;
        for(let l = 0; l < 8; l++)this.pad[l] = M(t, 16 + 2 * l);
    }
    process(t, n, r = !1) {
        const o = r ? 0 : 2048, { h: s, r: i } = this, c = i[0], u = i[1], a = i[2], l = i[3], f = i[4], d = i[5], g = i[6], y = i[7], h = i[8], m = i[9], L = M(t, n + 0), b = M(t, n + 2), _ = M(t, n + 4), O = M(t, n + 6), k = M(t, n + 8), E = M(t, n + 10), B = M(t, n + 12), j = M(t, n + 14);
        let v = s[0] + (L & 8191), I = s[1] + ((L >>> 13 | b << 3) & 8191), w = s[2] + ((b >>> 10 | _ << 6) & 8191), R = s[3] + ((_ >>> 7 | O << 9) & 8191), A = s[4] + ((O >>> 4 | k << 12) & 8191), T = s[5] + (k >>> 1 & 8191), N = s[6] + ((k >>> 14 | E << 2) & 8191), S = s[7] + ((E >>> 11 | B << 5) & 8191), U = s[8] + ((B >>> 8 | j << 8) & 8191), $ = s[9] + (j >>> 5 | o), p = 0, C = p + v * c + I * (5 * m) + w * (5 * h) + R * (5 * y) + A * (5 * g);
        p = C >>> 13, C &= 8191, C += T * (5 * d) + N * (5 * f) + S * (5 * l) + U * (5 * a) + $ * (5 * u), p += C >>> 13, C &= 8191;
        let D = p + v * u + I * c + w * (5 * m) + R * (5 * h) + A * (5 * y);
        p = D >>> 13, D &= 8191, D += T * (5 * g) + N * (5 * d) + S * (5 * f) + U * (5 * l) + $ * (5 * a), p += D >>> 13, D &= 8191;
        let P = p + v * a + I * u + w * c + R * (5 * m) + A * (5 * h);
        p = P >>> 13, P &= 8191, P += T * (5 * y) + N * (5 * g) + S * (5 * d) + U * (5 * f) + $ * (5 * l), p += P >>> 13, P &= 8191;
        let G = p + v * l + I * a + w * u + R * c + A * (5 * m);
        p = G >>> 13, G &= 8191, G += T * (5 * h) + N * (5 * y) + S * (5 * g) + U * (5 * d) + $ * (5 * f), p += G >>> 13, G &= 8191;
        let X = p + v * f + I * l + w * a + R * u + A * c;
        p = X >>> 13, X &= 8191, X += T * (5 * m) + N * (5 * h) + S * (5 * y) + U * (5 * g) + $ * (5 * d), p += X >>> 13, X &= 8191;
        let Z = p + v * d + I * f + w * l + R * a + A * u;
        p = Z >>> 13, Z &= 8191, Z += T * c + N * (5 * m) + S * (5 * h) + U * (5 * y) + $ * (5 * g), p += Z >>> 13, Z &= 8191;
        let he = p + v * g + I * d + w * f + R * l + A * a;
        p = he >>> 13, he &= 8191, he += T * u + N * c + S * (5 * m) + U * (5 * h) + $ * (5 * y), p += he >>> 13, he &= 8191;
        let pe = p + v * y + I * g + w * d + R * f + A * l;
        p = pe >>> 13, pe &= 8191, pe += T * a + N * u + S * c + U * (5 * m) + $ * (5 * h), p += pe >>> 13, pe &= 8191;
        let ge = p + v * h + I * y + w * g + R * d + A * f;
        p = ge >>> 13, ge &= 8191, ge += T * l + N * a + S * u + U * c + $ * (5 * m), p += ge >>> 13, ge &= 8191;
        let ye = p + v * m + I * h + w * y + R * g + A * d;
        p = ye >>> 13, ye &= 8191, ye += T * f + N * l + S * a + U * u + $ * c, p += ye >>> 13, ye &= 8191, p = (p << 2) + p | 0, p = p + C | 0, C = p & 8191, p = p >>> 13, D += p, s[0] = C, s[1] = D, s[2] = P, s[3] = G, s[4] = X, s[5] = Z, s[6] = he, s[7] = pe, s[8] = ge, s[9] = ye;
    }
    finalize() {
        const { h: t, pad: n } = this, r = new Uint16Array(10);
        let o = t[1] >>> 13;
        t[1] &= 8191;
        for(let c = 2; c < 10; c++)t[c] += o, o = t[c] >>> 13, t[c] &= 8191;
        t[0] += o * 5, o = t[0] >>> 13, t[0] &= 8191, t[1] += o, o = t[1] >>> 13, t[1] &= 8191, t[2] += o, r[0] = t[0] + 5, o = r[0] >>> 13, r[0] &= 8191;
        for(let c = 1; c < 10; c++)r[c] = t[c] + o, o = r[c] >>> 13, r[c] &= 8191;
        r[9] -= 8192;
        let s = (o ^ 1) - 1;
        for(let c = 0; c < 10; c++)r[c] &= s;
        s = ~s;
        for(let c = 0; c < 10; c++)t[c] = t[c] & s | r[c];
        t[0] = (t[0] | t[1] << 13) & 65535, t[1] = (t[1] >>> 3 | t[2] << 10) & 65535, t[2] = (t[2] >>> 6 | t[3] << 7) & 65535, t[3] = (t[3] >>> 9 | t[4] << 4) & 65535, t[4] = (t[4] >>> 12 | t[5] << 1 | t[6] << 14) & 65535, t[5] = (t[6] >>> 2 | t[7] << 11) & 65535, t[6] = (t[7] >>> 5 | t[8] << 8) & 65535, t[7] = (t[8] >>> 8 | t[9] << 5) & 65535;
        let i = t[0] + n[0];
        t[0] = i & 65535;
        for(let c = 1; c < 8; c++)i = (t[c] + n[c] | 0) + (i >>> 16) | 0, t[c] = i & 65535;
        Ee(r);
    }
    update(t) {
        Ln(this);
        const { buffer: n, blockLen: r } = this;
        t = pt(t);
        const o = t.length;
        for(let s = 0; s < o;){
            const i = Math.min(r - this.pos, o - s);
            if (i === r) {
                for(; r <= o - s; s += r)this.process(t, s);
                continue;
            }
            n.set(t.subarray(s, s + i), this.pos), this.pos += i, s += i, this.pos === r && (this.process(n, 0, !1), this.pos = 0);
        }
        return this;
    }
    destroy() {
        Ee(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(t) {
        Ln(this), cs(t, this), this.finished = !0;
        const { buffer: n, h: r } = this;
        let { pos: o } = this;
        if (o) {
            for(n[o++] = 1; o < 16; o++)n[o] = 0;
            this.process(n, 0, !0);
        }
        this.finalize();
        let s = 0;
        for(let i = 0; i < 8; i++)t[s++] = r[i] >>> 0, t[s++] = r[i] >>> 8;
        return t;
    }
    digest() {
        const { buffer: t, outputLen: n } = this;
        this.digestInto(t);
        const r = t.slice(0, n);
        return this.destroy(), r;
    }
}
function Is(e) {
    const t = (r, o)=>e(o).update(pt(r)).digest(), n = e(new Uint8Array(32));
    return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = (r)=>e(r), t;
}
const Os = Is((e)=>new xs(e));
function As(e, t, n, r, o, s = 20) {
    let i = e[0], c = e[1], u = e[2], a = e[3], l = t[0], f = t[1], d = t[2], g = t[3], y = t[4], h = t[5], m = t[6], L = t[7], b = o, _ = n[0], O = n[1], k = n[2], E = i, B = c, j = u, v = a, I = l, w = f, R = d, A = g, T = y, N = h, S = m, U = L, $ = b, p = _, C = O, D = k;
    for(let G = 0; G < s; G += 2)E = E + I | 0, $ = x($ ^ E, 16), T = T + $ | 0, I = x(I ^ T, 12), E = E + I | 0, $ = x($ ^ E, 8), T = T + $ | 0, I = x(I ^ T, 7), B = B + w | 0, p = x(p ^ B, 16), N = N + p | 0, w = x(w ^ N, 12), B = B + w | 0, p = x(p ^ B, 8), N = N + p | 0, w = x(w ^ N, 7), j = j + R | 0, C = x(C ^ j, 16), S = S + C | 0, R = x(R ^ S, 12), j = j + R | 0, C = x(C ^ j, 8), S = S + C | 0, R = x(R ^ S, 7), v = v + A | 0, D = x(D ^ v, 16), U = U + D | 0, A = x(A ^ U, 12), v = v + A | 0, D = x(D ^ v, 8), U = U + D | 0, A = x(A ^ U, 7), E = E + w | 0, D = x(D ^ E, 16), S = S + D | 0, w = x(w ^ S, 12), E = E + w | 0, D = x(D ^ E, 8), S = S + D | 0, w = x(w ^ S, 7), B = B + R | 0, $ = x($ ^ B, 16), U = U + $ | 0, R = x(R ^ U, 12), B = B + R | 0, $ = x($ ^ B, 8), U = U + $ | 0, R = x(R ^ U, 7), j = j + A | 0, p = x(p ^ j, 16), T = T + p | 0, A = x(A ^ T, 12), j = j + A | 0, p = x(p ^ j, 8), T = T + p | 0, A = x(A ^ T, 7), v = v + I | 0, C = x(C ^ v, 16), N = N + C | 0, I = x(I ^ N, 12), v = v + I | 0, C = x(C ^ v, 8), N = N + C | 0, I = x(I ^ N, 7);
    let P = 0;
    r[P++] = i + E | 0, r[P++] = c + B | 0, r[P++] = u + j | 0, r[P++] = a + v | 0, r[P++] = l + I | 0, r[P++] = f + w | 0, r[P++] = d + R | 0, r[P++] = g + A | 0, r[P++] = y + T | 0, r[P++] = h + N | 0, r[P++] = m + S | 0, r[P++] = L + U | 0, r[P++] = b + $ | 0, r[P++] = _ + p | 0, r[P++] = O + C | 0, r[P++] = k + D | 0;
}
const Ns = vs(As, {
    counterRight: !1,
    counterLength: 4,
    allowShortKeys: !1
}), Ss = new Uint8Array(16), Hn = (e, t)=>{
    e.update(t);
    const n = t.length % 16;
    n && e.update(Ss.subarray(n));
}, Us = new Uint8Array(32);
function Kn(e, t, n, r, o) {
    const s = e(t, n, Us), i = Os.create(s);
    o && Hn(i, o), Hn(i, r);
    const c = new Uint8Array(16), u = as(c);
    kn(u, 0, BigInt(o ? o.length : 0), !0), kn(u, 8, BigInt(r.length), !0), i.update(c);
    const a = i.digest();
    return Ee(s, c), a;
}
const _s = (e)=>(t, n, r)=>({
            encrypt (s, i) {
                const c = s.length;
                i = Cn(c + 16, i, !1), i.set(s);
                const u = i.subarray(0, -16);
                e(t, n, u, u, 1);
                const a = Kn(e, t, n, u, r);
                return i.set(a, c), Ee(a), i;
            },
            decrypt (s, i) {
                i = Cn(s.length - 16, i, !1);
                const c = s.subarray(0, -16), u = s.subarray(-16), a = Kn(e, t, n, c, r);
                if (!ds(u, a)) throw new Error("invalid tag");
                return i.set(s.subarray(0, -16)), e(t, n, i, i, 1), Ee(a), i;
            }
        }), Fn = hs({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
}, _s(Ns));
class qn extends it {
    constructor(t, n){
        super(), this.finished = !1, this.destroyed = !1, ot(t);
        const r = we(n);
        if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const o = this.blockLen, s = new Uint8Array(o);
        s.set(r.length > o ? t.create().update(r).digest() : r);
        for(let i = 0; i < s.length; i++)s[i] ^= 54;
        this.iHash.update(s), this.oHash = t.create();
        for(let i = 0; i < s.length; i++)s[i] ^= 106;
        this.oHash.update(s), s.fill(0);
    }
    update(t) {
        return me(this), this.iHash.update(t), this;
    }
    digestInto(t) {
        me(this), je(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
    }
    digest() {
        const t = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(t), t;
    }
    _cloneInto(t) {
        t || (t = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash: n, iHash: r, finished: o, destroyed: s, blockLen: i, outputLen: c } = this;
        return t = t, t.finished = o, t.destroyed = s, t.blockLen = i, t.outputLen = c, t.oHash = n._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t;
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
    }
}
const mt = (e, t, n)=>new qn(e, t).update(n).digest();
mt.create = (e, t)=>new qn(e, t);
function Ts(e, t, n) {
    return ot(e), n === void 0 && (n = new Uint8Array(e.outputLen)), mt(e, we(n), we(t));
}
const bt = new Uint8Array([
    0
]), Gn = new Uint8Array;
function $s(e, t, n, r = 32) {
    if (ot(e), Ne(r), r > 255 * e.outputLen) throw new Error("Length should be <= 255*HashLen");
    const o = Math.ceil(r / e.outputLen);
    n === void 0 && (n = Gn);
    const s = new Uint8Array(o * e.outputLen), i = mt.create(e, t), c = i._cloneInto(), u = new Uint8Array(i.outputLen);
    for(let a = 0; a < o; a++)bt[0] = a + 1, c.update(a === 0 ? Gn : u).update(n).update(bt).digestInto(u), s.set(u, e.outputLen * a), i._cloneInto(c);
    return i.destroy(), c.destroy(), u.fill(0), bt.fill(0), s.slice(0, r);
}
const Rs = (e, t, n, r, o)=>$s(e, Ts(e, t, n), r, o);
function Ps(e, t, n, r) {
    if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, n, r);
    const o = BigInt(32), s = BigInt(4294967295), i = Number(n >> o & s), c = Number(n & s), u = r ? 4 : 0, a = r ? 0 : 4;
    e.setUint32(t + u, i, r), e.setUint32(t + a, c, r);
}
function Bs(e, t, n) {
    return e & t ^ ~e & n;
}
function Ls(e, t, n) {
    return e & t ^ e & n ^ t & n;
}
class js extends it {
    constructor(t, n, r, o){
        super(), this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = o, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = st(this.buffer);
    }
    update(t) {
        me(this);
        const { view: n, buffer: r, blockLen: o } = this;
        t = we(t);
        const s = t.length;
        for(let i = 0; i < s;){
            const c = Math.min(o - this.pos, s - i);
            if (c === o) {
                const u = st(t);
                for(; o <= s - i; i += o)this.process(u, i);
                continue;
            }
            r.set(t.subarray(i, i + c), this.pos), this.pos += c, i += c, this.pos === o && (this.process(n, 0), this.pos = 0);
        }
        return this.length += t.length, this.roundClean(), this;
    }
    digestInto(t) {
        me(this), sn(t, this), this.finished = !0;
        const { buffer: n, view: r, blockLen: o, isLE: s } = this;
        let { pos: i } = this;
        n[i++] = 128, this.buffer.subarray(i).fill(0), this.padOffset > o - i && (this.process(r, 0), i = 0);
        for(let f = i; f < o; f++)n[f] = 0;
        Ps(r, o - 8, BigInt(this.length * 8), s), this.process(r, 0);
        const c = st(t), u = this.outputLen;
        if (u % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const a = u / 4, l = this.get();
        if (a > l.length) throw new Error("_sha2: outputLen bigger than state");
        for(let f = 0; f < a; f++)c.setUint32(4 * f, l[f], s);
    }
    digest() {
        const { buffer: t, outputLen: n } = this;
        this.digestInto(t);
        const r = t.slice(0, n);
        return this.destroy(), r;
    }
    _cloneInto(t) {
        t || (t = new this.constructor), t.set(...this.get());
        const { blockLen: n, buffer: r, length: o, finished: s, destroyed: i, pos: c } = this;
        return t.length = o, t.pos = c, t.finished = s, t.destroyed = i, o % n && t.buffer.set(r), t;
    }
}
const Cs = new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
]), ie = new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
]), ce = new Uint32Array(64);
class ks extends js {
    constructor(){
        super(64, 32, 8, !1), this.A = ie[0] | 0, this.B = ie[1] | 0, this.C = ie[2] | 0, this.D = ie[3] | 0, this.E = ie[4] | 0, this.F = ie[5] | 0, this.G = ie[6] | 0, this.H = ie[7] | 0;
    }
    get() {
        const { A: t, B: n, C: r, D: o, E: s, F: i, G: c, H: u } = this;
        return [
            t,
            n,
            r,
            o,
            s,
            i,
            c,
            u
        ];
    }
    set(t, n, r, o, s, i, c, u) {
        this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = o | 0, this.E = s | 0, this.F = i | 0, this.G = c | 0, this.H = u | 0;
    }
    process(t, n) {
        for(let f = 0; f < 16; f++, n += 4)ce[f] = t.getUint32(n, !1);
        for(let f = 16; f < 64; f++){
            const d = ce[f - 15], g = ce[f - 2], y = J(d, 7) ^ J(d, 18) ^ d >>> 3, h = J(g, 17) ^ J(g, 19) ^ g >>> 10;
            ce[f] = h + ce[f - 7] + y + ce[f - 16] | 0;
        }
        let { A: r, B: o, C: s, D: i, E: c, F: u, G: a, H: l } = this;
        for(let f = 0; f < 64; f++){
            const d = J(c, 6) ^ J(c, 11) ^ J(c, 25), g = l + d + Bs(c, u, a) + Cs[f] + ce[f] | 0, h = (J(r, 2) ^ J(r, 13) ^ J(r, 22)) + Ls(r, o, s) | 0;
            l = a, a = u, u = c, c = i + g | 0, i = s, s = o, o = r, r = g + h | 0;
        }
        r = r + this.A | 0, o = o + this.B | 0, s = s + this.C | 0, i = i + this.D | 0, c = c + this.E | 0, u = u + this.F | 0, a = a + this.G | 0, l = l + this.H | 0, this.set(r, o, s, i, c, u, a, l);
    }
    roundClean() {
        ce.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
}
const He = fn(()=>new ks); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ 
const Wn = BigInt(0);
function wt(e) {
    return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function zn(e) {
    if (!wt(e)) throw new Error("Uint8Array expected");
}
const Ds = Array.from({
    length: 256
}, (e, t)=>t.toString(16).padStart(2, "0"));
function Ms(e) {
    zn(e);
    let t = "";
    for(let n = 0; n < e.length; n++)t += Ds[e[n]];
    return t;
}
function Vs(e) {
    if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
    return e === "" ? Wn : BigInt("0x" + e);
}
const ee = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function Jn(e) {
    if (e >= ee._0 && e <= ee._9) return e - ee._0;
    if (e >= ee.A && e <= ee.F) return e - (ee.A - 10);
    if (e >= ee.a && e <= ee.f) return e - (ee.a - 10);
}
function Yn(e) {
    if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
    const t = e.length, n = t / 2;
    if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
    const r = new Uint8Array(n);
    for(let o = 0, s = 0; o < n; o++, s += 2){
        const i = Jn(e.charCodeAt(s)), c = Jn(e.charCodeAt(s + 1));
        if (i === void 0 || c === void 0) {
            const u = e[s] + e[s + 1];
            throw new Error('hex string expected, got non-hex character "' + u + '" at index ' + s);
        }
        r[o] = i * 16 + c;
    }
    return r;
}
function Xn(e) {
    return zn(e), Vs(Ms(Uint8Array.from(e).reverse()));
}
function Hs(e, t) {
    return Yn(e.toString(16).padStart(t * 2, "0"));
}
function Ks(e, t) {
    return Hs(e, t).reverse();
}
function Zn(e, t, n) {
    let r;
    if (typeof t == "string") try {
        r = Yn(t);
    } catch (s) {
        throw new Error(e + " must be hex string or Uint8Array, cause: " + s);
    }
    else if (wt(t)) r = Uint8Array.from(t);
    else throw new Error(e + " must be hex string or Uint8Array");
    const o = r.length;
    if (typeof n == "number" && o !== n) throw new Error(e + " of length " + n + " expected, got " + o);
    return r;
}
const Et = (e)=>typeof e == "bigint" && Wn <= e;
function Fs(e, t, n) {
    return Et(e) && Et(t) && Et(n) && t <= e && e < n;
}
function Qn(e, t, n, r) {
    if (!Fs(t, n, r)) throw new Error("expected valid " + e + ": " + n + " <= n < " + r + ", got " + t);
}
const qs = {
    bigint: (e)=>typeof e == "bigint",
    function: (e)=>typeof e == "function",
    boolean: (e)=>typeof e == "boolean",
    string: (e)=>typeof e == "string",
    stringOrUint8Array: (e)=>typeof e == "string" || wt(e),
    isSafeInteger: (e)=>Number.isSafeInteger(e),
    array: (e)=>Array.isArray(e),
    field: (e, t)=>t.Fp.isValid(e),
    hash: (e)=>typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
function Gs(e, t, n = {}) {
    const r = (o, s, i)=>{
        const c = qs[s];
        if (typeof c != "function") throw new Error("invalid validator function");
        const u = e[o];
        if (!(i && u === void 0) && !c(u, e)) throw new Error("param " + String(o) + " is invalid. Expected " + s + ", got " + u);
    };
    for (const [o, s] of Object.entries(t))r(o, s, !1);
    for (const [o, s] of Object.entries(n))r(o, s, !0);
    return e;
}
const ve = BigInt(0), Ke = BigInt(1);
function er(e, t) {
    const n = e % t;
    return n >= ve ? n : t + n;
}
function Ws(e, t, n) {
    if (t < ve) throw new Error("invalid exponent, negatives unsupported");
    if (n <= ve) throw new Error("invalid modulus");
    if (n === Ke) return ve;
    let r = Ke;
    for(; t > ve;)t & Ke && (r = r * e % n), e = e * e % n, t >>= Ke;
    return r;
}
function z(e, t, n) {
    let r = e;
    for(; t-- > ve;)r *= r, r %= n;
    return r;
}
BigInt(0), BigInt(1), BigInt(0), BigInt(1), BigInt(2), BigInt(8);
const xe = BigInt(0), vt = BigInt(1);
function zs(e) {
    return Gs(e, {
        a: "bigint"
    }, {
        montgomeryBits: "isSafeInteger",
        nByteLength: "isSafeInteger",
        adjustScalarBytes: "function",
        domain: "function",
        powPminus2: "function",
        Gu: "bigint"
    }), Object.freeze({
        ...e
    });
}
function Js(e) {
    const t = zs(e), { P: n } = t, r = (b)=>er(b, n), o = t.montgomeryBits, s = Math.ceil(o / 8), i = t.nByteLength, c = t.adjustScalarBytes || ((b)=>b), u = t.powPminus2 || ((b)=>Ws(b, n - BigInt(2), n));
    function a(b, _, O) {
        const k = r(b * (_ - O));
        return _ = r(_ - k), O = r(O + k), [
            _,
            O
        ];
    }
    const l = (t.a - BigInt(2)) / BigInt(4);
    function f(b, _) {
        Qn("u", b, xe, n), Qn("scalar", _, xe, n);
        const O = _, k = b;
        let E = vt, B = xe, j = b, v = vt, I = xe, w;
        for(let A = BigInt(o - 1); A >= xe; A--){
            const T = O >> A & vt;
            I ^= T, w = a(I, E, j), E = w[0], j = w[1], w = a(I, B, v), B = w[0], v = w[1], I = T;
            const N = E + B, S = r(N * N), U = E - B, $ = r(U * U), p = S - $, C = j + v, D = j - v, P = r(D * N), G = r(C * U), X = P + G, Z = P - G;
            j = r(X * X), v = r(k * r(Z * Z)), E = r(S * $), B = r(p * (S + r(l * p)));
        }
        w = a(I, E, j), E = w[0], j = w[1], w = a(I, B, v), B = w[0], v = w[1];
        const R = u(B);
        return r(E * R);
    }
    function d(b) {
        return Ks(r(b), s);
    }
    function g(b) {
        const _ = Zn("u coordinate", b, s);
        return i === 32 && (_[31] &= 127), Xn(_);
    }
    function y(b) {
        const _ = Zn("scalar", b), O = _.length;
        if (O !== s && O !== i) {
            let k = "" + s + " or " + i;
            throw new Error("invalid scalar, expected " + k + " bytes, got " + O);
        }
        return Xn(c(_));
    }
    function h(b, _) {
        const O = g(_), k = y(b), E = f(O, k);
        if (E === xe) throw new Error("invalid private or public key received");
        return d(E);
    }
    const m = d(t.Gu);
    function L(b) {
        return h(b, m);
    }
    return {
        scalarMult: h,
        scalarMultBase: L,
        getSharedSecret: (b, _)=>h(b, _),
        getPublicKey: (b)=>L(b),
        utils: {
            randomPrivateKey: ()=>t.randomBytes(t.nByteLength)
        },
        GuBytes: m
    };
}
const xt = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
const Ys = BigInt(1), tr = BigInt(2), Xs = BigInt(3), Zs = BigInt(5);
BigInt(8);
function Qs(e) {
    const t = BigInt(10), n = BigInt(20), r = BigInt(40), o = BigInt(80), s = xt, c = e * e % s * e % s, u = z(c, tr, s) * c % s, a = z(u, Ys, s) * e % s, l = z(a, Zs, s) * a % s, f = z(l, t, s) * l % s, d = z(f, n, s) * f % s, g = z(d, r, s) * d % s, y = z(g, o, s) * g % s, h = z(y, o, s) * g % s, m = z(h, t, s) * l % s;
    return {
        pow_p_5_8: z(m, tr, s) * e % s,
        b2: c
    };
}
function ei(e) {
    return e[0] &= 248, e[31] &= 127, e[31] |= 64, e;
}
const It = Js({
    P: xt,
    a: BigInt(486662),
    montgomeryBits: 255,
    nByteLength: 32,
    Gu: BigInt(9),
    powPminus2: (e)=>{
        const t = xt, { pow_p_5_8: n, b2: r } = Qs(e);
        return er(z(n, Xs, t) * r, t);
    },
    adjustScalarBytes: ei,
    randomBytes: Se
}), Ot = "base10", V = "base16", At = "base64pad", ti = "base64url", Ie = "utf8", Nt = 0, Oe = 1, _e = 2, ni = 0, nr = 1, Te = 12, St = 32;
function ri() {
    const e = It.utils.randomPrivateKey(), t = It.getPublicKey(e);
    return {
        privateKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(e, V),
        publicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(t, V)
    };
}
function oi() {
    const e = Se(St);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(e, V);
}
function si(e, t) {
    const n = It.getSharedSecret((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(e, V), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(t, V)), r = Rs(He, n, void 0, void 0, St);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(r, V);
}
function ii(e) {
    const t = He((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(e, V));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(t, V);
}
function ci(e) {
    const t = He((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(e, Ie));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(t, V);
}
function Ut(e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(`${e}`, Ot);
}
function fe(e) {
    return Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(e, Ot));
}
function ai(e) {
    const t = Ut(typeof e.type < "u" ? e.type : Nt);
    if (fe(t) === Oe && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const n = typeof e.senderPublicKey < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(e.senderPublicKey, V) : void 0, r = typeof e.iv < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(e.iv, V) : Se(Te), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(e.symKey, V), s = Fn(o, r).encrypt((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(e.message, Ie));
    return _t({
        type: t,
        sealed: s,
        iv: r,
        senderPublicKey: n,
        encoding: e.encoding
    });
}
function ui(e) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(e.symKey, V), { sealed: n, iv: r } = Fe(e), o = Fn(t, r).decrypt(n);
    if (o === null) throw new Error("Failed to decrypt");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(o, Ie);
}
function fi(e, t) {
    const n = Ut(_e), r = Se(Te), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(e, Ie);
    return _t({
        type: n,
        sealed: o,
        iv: r,
        encoding: t
    });
}
function li(e, t) {
    const { sealed: n } = Fe({
        encoded: e,
        encoding: t
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(n, Ie);
}
function _t(e) {
    const { encoding: t = At } = e;
    if (fe(e.type) === _e) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
        e.type,
        e.sealed
    ]), t);
    if (fe(e.type) === Oe) {
        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
            e.type,
            e.senderPublicKey,
            e.iv,
            e.sealed
        ]), t);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])([
        e.type,
        e.iv,
        e.sealed
    ]), t);
}
function Fe(e) {
    const { encoded: t, encoding: n = At } = e, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromString"])(t, n), o = r.slice(ni, nr), s = nr;
    if (fe(o) === Oe) {
        const a = s + St, l = a + Te, f = r.slice(s, a), d = r.slice(a, l), g = r.slice(l);
        return {
            type: o,
            sealed: g,
            iv: d,
            senderPublicKey: f
        };
    }
    if (fe(o) === _e) {
        const a = r.slice(s), l = Se(Te);
        return {
            type: o,
            sealed: a,
            iv: l
        };
    }
    const i = s + Te, c = r.slice(s, i), u = r.slice(i);
    return {
        type: o,
        sealed: u,
        iv: c
    };
}
function di(e, t) {
    const n = Fe({
        encoded: e,
        encoding: t?.encoding
    });
    return rr({
        type: fe(n.type),
        senderPublicKey: typeof n.senderPublicKey < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(n.senderPublicKey, V) : void 0,
        receiverPublicKey: t?.receiverPublicKey
    });
}
function rr(e) {
    const t = e?.type || Nt;
    if (t === Oe) {
        if (typeof e?.senderPublicKey > "u") throw new Error("missing sender public key");
        if (typeof e?.receiverPublicKey > "u") throw new Error("missing receiver public key");
    }
    return {
        type: t,
        senderPublicKey: e?.senderPublicKey,
        receiverPublicKey: e?.receiverPublicKey
    };
}
function hi(e) {
    return e.type === Oe && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
function pi(e) {
    return e.type === _e;
}
function or(e) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ec"]("p256").keyFromPublic({
        x: Buffer.from(e.x, "base64").toString("hex"),
        y: Buffer.from(e.y, "base64").toString("hex")
    }, "hex");
}
function gi(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    const n = t.length % 4;
    return n > 0 && (t += "=".repeat(4 - n)), t;
}
function yi(e) {
    return Buffer.from(gi(e), "base64");
}
function mi(e, t) {
    const [n, r, o] = e.split("."), s = yi(o);
    if (s.length !== 64) throw new Error("Invalid signature length");
    const i = s.slice(0, 32).toString("hex"), c = s.slice(32, 64).toString("hex"), u = `${n}.${r}`, a = He(u), l = or(t), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(a, V);
    if (!l.verify(f, {
        r: i,
        s: c
    })) throw new Error("Invalid signature");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeJWT"])(e).payload;
}
const sr = "irn";
function bi(e) {
    return e?.relay || {
        protocol: sr
    };
}
function wi(e) {
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$walletconnect$2f$relay$2d$api$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RELAY_JSONRPC"][e];
    if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
    return t;
}
function ir(e, t = "-") {
    const n = {}, r = "relay" + t;
    return Object.keys(e).forEach((o)=>{
        if (o.startsWith(r)) {
            const s = o.replace(r, ""), i = e[o];
            n[s] = i;
        }
    }), n;
}
function Ei(e) {
    if (!e.includes("wc:")) {
        const a = rt(e);
        a != null && a.includes("wc:") && (e = a);
    }
    e = e.includes("wc://") ? e.replace("wc://", "") : e, e = e.includes("wc:") ? e.replace("wc:", "") : e;
    const t = e.indexOf(":"), n = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, r = e.substring(0, t), o = e.substring(t + 1, n).split("@"), s = typeof n < "u" ? e.substring(n) : "", i = new URLSearchParams(s), c = {};
    i.forEach((a, l)=>{
        c[l] = a;
    });
    const u = typeof c.methods == "string" ? c.methods.split(",") : void 0;
    return {
        protocol: r,
        topic: cr(o[0]),
        version: parseInt(o[1], 10),
        symKey: c.symKey,
        relay: ir(c),
        methods: u,
        expiryTimestamp: c.expiryTimestamp ? parseInt(c.expiryTimestamp, 10) : void 0
    };
}
function cr(e) {
    return e.startsWith("//") ? e.substring(2) : e;
}
function ar(e, t = "-") {
    const n = "relay", r = {};
    return Object.keys(e).forEach((o)=>{
        const s = o, i = n + t + s;
        e[s] && (r[i] = e[s]);
    }), r;
}
function vi(e) {
    const t = new URLSearchParams, n = ar(e.relay);
    Object.keys(n).sort().forEach((o)=>{
        t.set(o, n[o]);
    }), t.set("symKey", e.symKey), e.expiryTimestamp && t.set("expiryTimestamp", e.expiryTimestamp.toString()), e.methods && t.set("methods", e.methods.join(","));
    const r = t.toString();
    return `${e.protocol}:${e.topic}@${e.version}?${r}`;
}
function xi(e, t, n) {
    return `${e}?wc_ev=${n}&topic=${t}`;
}
var Ii = Object.defineProperty, Oi = Object.defineProperties, Ai = Object.getOwnPropertyDescriptors, ur = Object.getOwnPropertySymbols, Ni = Object.prototype.hasOwnProperty, Si = Object.prototype.propertyIsEnumerable, fr = (e, t, n)=>t in e ? Ii(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, Ui = (e, t)=>{
    for(var n in t || (t = {}))Ni.call(t, n) && fr(e, n, t[n]);
    if (ur) for (var n of ur(t))Si.call(t, n) && fr(e, n, t[n]);
    return e;
}, _i = (e, t)=>Oi(e, Ai(t));
function le(e) {
    const t = [];
    return e.forEach((n)=>{
        const [r, o] = n.split(":");
        t.push(`${r}:${o}`);
    }), t;
}
function lr(e) {
    const t = [];
    return Object.values(e).forEach((n)=>{
        t.push(...le(n.accounts));
    }), t;
}
function dr(e, t) {
    const n = [];
    return Object.values(e).forEach((r)=>{
        le(r.accounts).includes(t) && n.push(...r.methods);
    }), n;
}
function hr(e, t) {
    const n = [];
    return Object.values(e).forEach((r)=>{
        le(r.accounts).includes(t) && n.push(...r.events);
    }), n;
}
function Ti(e, t) {
    const n = Or(e, t);
    if (n) throw new Error(n.message);
    const r = {};
    for (const [o, s] of Object.entries(e))r[o] = {
        methods: s.methods,
        events: s.events,
        chains: s.accounts.map((i)=>`${i.split(":")[0]}:${i.split(":")[1]}`)
    };
    return r;
}
function $i(e) {
    const { proposal: { requiredNamespaces: t, optionalNamespaces: n = {} }, supportedNamespaces: r } = e, o = $t(t), s = $t(n), i = {};
    Object.keys(r).forEach((a)=>{
        const l = r[a].chains, f = r[a].methods, d = r[a].events, g = r[a].accounts;
        l.forEach((y)=>{
            if (!g.some((h)=>h.includes(y))) throw new Error(`No accounts provided for chain ${y} in namespace ${a}`);
        }), i[a] = {
            chains: l,
            methods: f,
            events: d,
            accounts: g
        };
    });
    const c = Nr(t, i, "approve()");
    if (c) throw new Error(c.message);
    const u = {};
    return !Object.keys(t).length && !Object.keys(n).length ? i : (Object.keys(o).forEach((a)=>{
        const l = r[a].chains.filter((y)=>{
            var h, m;
            return (m = (h = o[a]) == null ? void 0 : h.chains) == null ? void 0 : m.includes(y);
        }), f = r[a].methods.filter((y)=>{
            var h, m;
            return (m = (h = o[a]) == null ? void 0 : h.methods) == null ? void 0 : m.includes(y);
        }), d = r[a].events.filter((y)=>{
            var h, m;
            return (m = (h = o[a]) == null ? void 0 : h.events) == null ? void 0 : m.includes(y);
        }), g = l.map((y)=>r[a].accounts.filter((h)=>h.includes(`${y}:`))).flat();
        u[a] = {
            chains: l,
            methods: f,
            events: d,
            accounts: g
        };
    }), Object.keys(s).forEach((a)=>{
        var l, f, d, g, y, h;
        if (!r[a]) return;
        const m = (f = (l = s[a]) == null ? void 0 : l.chains) == null ? void 0 : f.filter((O)=>r[a].chains.includes(O)), L = r[a].methods.filter((O)=>{
            var k, E;
            return (E = (k = s[a]) == null ? void 0 : k.methods) == null ? void 0 : E.includes(O);
        }), b = r[a].events.filter((O)=>{
            var k, E;
            return (E = (k = s[a]) == null ? void 0 : k.events) == null ? void 0 : E.includes(O);
        }), _ = m?.map((O)=>r[a].accounts.filter((k)=>k.includes(`${O}:`))).flat();
        u[a] = {
            chains: Q((d = u[a]) == null ? void 0 : d.chains, m),
            methods: Q((g = u[a]) == null ? void 0 : g.methods, L),
            events: Q((y = u[a]) == null ? void 0 : y.events, b),
            accounts: Q((h = u[a]) == null ? void 0 : h.accounts, _)
        };
    }), u);
}
function Tt(e) {
    return e.includes(":");
}
function pr(e) {
    return Tt(e) ? e.split(":")[0] : e;
}
function $t(e) {
    var t, n, r;
    const o = {};
    if (!qe(e)) return o;
    for (const [s, i] of Object.entries(e)){
        const c = Tt(s) ? [
            s
        ] : i.chains, u = i.methods || [], a = i.events || [], l = pr(s);
        o[l] = _i(Ui({}, o[l]), {
            chains: Q(c, (t = o[l]) == null ? void 0 : t.chains),
            methods: Q(u, (n = o[l]) == null ? void 0 : n.methods),
            events: Q(a, (r = o[l]) == null ? void 0 : r.events)
        });
    }
    return o;
}
function gr(e) {
    const t = {};
    return e?.forEach((n)=>{
        var r;
        const [o, s] = n.split(":");
        t[o] || (t[o] = {
            accounts: [],
            chains: [],
            events: [],
            methods: []
        }), t[o].accounts.push(n), (r = t[o].chains) == null || r.push(`${o}:${s}`);
    }), t;
}
function Ri(e, t) {
    t = t.map((r)=>r.replace("did:pkh:", ""));
    const n = gr(t);
    for (const [r, o] of Object.entries(n))o.methods ? o.methods = Q(o.methods, e) : o.methods = e, o.events = [
        "chainChanged",
        "accountsChanged"
    ];
    return n;
}
const yr = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}, mr = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function te(e, t) {
    const { message: n, code: r } = mr[e];
    return {
        message: t ? `${n} ${t}` : n,
        code: r
    };
}
function de(e, t) {
    const { message: n, code: r } = yr[e];
    return {
        message: t ? `${n} ${t}` : n,
        code: r
    };
}
function $e(e, t) {
    return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function qe(e) {
    return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function ae(e) {
    return typeof e > "u";
}
function q(e, t) {
    return t && ae(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function Ge(e, t) {
    return t && ae(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function Pi(e, t) {
    const { requiredNamespaces: n } = t, r = Object.keys(e.namespaces), o = Object.keys(n);
    let s = !0;
    return re(o, r) ? (r.forEach((i)=>{
        const { accounts: c, methods: u, events: a } = e.namespaces[i], l = le(c), f = n[i];
        (!re(Be(i, f), l) || !re(f.methods, u) || !re(f.events, a)) && (s = !1);
    }), s) : !1;
}
function Re(e) {
    return q(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function br(e) {
    if (q(e, !1) && e.includes(":")) {
        const t = e.split(":");
        if (t.length === 3) {
            const n = t[0] + ":" + t[1];
            return !!t[2] && Re(n);
        }
    }
    return !1;
}
function Bi(e) {
    function t(n) {
        try {
            return typeof new URL(n) < "u";
        } catch  {
            return !1;
        }
    }
    try {
        if (q(e, !1)) {
            if (t(e)) return !0;
            const n = rt(e);
            return t(n);
        }
    } catch  {}
    return !1;
}
function Li(e) {
    var t;
    return (t = e?.proposer) == null ? void 0 : t.publicKey;
}
function ji(e) {
    return e?.topic;
}
function Ci(e, t) {
    let n = null;
    return q(e?.publicKey, !1) || (n = te("MISSING_OR_INVALID", `${t} controller public key should be a string`)), n;
}
function Rt(e) {
    let t = !0;
    return $e(e) ? e.length && (t = e.every((n)=>q(n, !1))) : t = !1, t;
}
function wr(e, t, n) {
    let r = null;
    return $e(t) && t.length ? t.forEach((o)=>{
        r || Re(o) || (r = de("UNSUPPORTED_CHAINS", `${n}, chain ${o} should be a string and conform to "namespace:chainId" format`));
    }) : Re(e) || (r = de("UNSUPPORTED_CHAINS", `${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r;
}
function Er(e, t, n) {
    let r = null;
    return Object.entries(e).forEach(([o, s])=>{
        if (r) return;
        const i = wr(o, Be(o, s), `${t} ${n}`);
        i && (r = i);
    }), r;
}
function vr(e, t) {
    let n = null;
    return $e(e) ? e.forEach((r)=>{
        n || br(r) || (n = de("UNSUPPORTED_ACCOUNTS", `${t}, account ${r} should be a string and conform to "namespace:chainId:address" format`));
    }) : n = de("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n;
}
function xr(e, t) {
    let n = null;
    return Object.values(e).forEach((r)=>{
        if (n) return;
        const o = vr(r?.accounts, `${t} namespace`);
        o && (n = o);
    }), n;
}
function Ir(e, t) {
    let n = null;
    return Rt(e?.methods) ? Rt(e?.events) || (n = de("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : n = de("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), n;
}
function Pt(e, t) {
    let n = null;
    return Object.values(e).forEach((r)=>{
        if (n) return;
        const o = Ir(r, `${t}, namespace`);
        o && (n = o);
    }), n;
}
function ki(e, t, n) {
    let r = null;
    if (e && qe(e)) {
        const o = Pt(e, t);
        o && (r = o);
        const s = Er(e, t, n);
        s && (r = s);
    } else r = te("MISSING_OR_INVALID", `${t}, ${n} should be an object with data`);
    return r;
}
function Or(e, t) {
    let n = null;
    if (e && qe(e)) {
        const r = Pt(e, t);
        r && (n = r);
        const o = xr(e, t);
        o && (n = o);
    } else n = te("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
    return n;
}
function Ar(e) {
    return q(e.protocol, !0);
}
function Di(e, t) {
    let n = !1;
    return t && !e ? n = !0 : e && $e(e) && e.length && e.forEach((r)=>{
        n = Ar(r);
    }), n;
}
function Mi(e) {
    return typeof e == "number";
}
function Vi(e) {
    return typeof e < "u" && typeof e !== null;
}
function Hi(e) {
    return !(!e || typeof e != "object" || !e.code || !Ge(e.code, !1) || !e.message || !q(e.message, !1));
}
function Ki(e) {
    return !(ae(e) || !q(e.method, !1));
}
function Fi(e) {
    return !(ae(e) || ae(e.result) && ae(e.error) || !Ge(e.id, !1) || !q(e.jsonrpc, !1));
}
function qi(e) {
    return !(ae(e) || !q(e.name, !1));
}
function Gi(e, t) {
    return !(!Re(t) || !lr(e).includes(t));
}
function Wi(e, t, n) {
    return q(n, !1) ? dr(e, t).includes(n) : !1;
}
function zi(e, t, n) {
    return q(n, !1) ? hr(e, t).includes(n) : !1;
}
function Nr(e, t, n) {
    let r = null;
    const o = Ji(e), s = Yi(t), i = Object.keys(o), c = Object.keys(s), u = Sr(Object.keys(e)), a = Sr(Object.keys(t)), l = u.filter((f)=>!a.includes(f));
    return l.length && (r = te("NON_CONFORMING_NAMESPACES", `${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(t).toString()}`)), re(i, c) || (r = te("NON_CONFORMING_NAMESPACES", `${n} namespaces chains don't satisfy required namespaces.
      Required: ${i.toString()}
      Approved: ${c.toString()}`)), Object.keys(t).forEach((f)=>{
        if (!f.includes(":") || r) return;
        const d = le(t[f].accounts);
        d.includes(f) || (r = te("NON_CONFORMING_NAMESPACES", `${n} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${d.toString()}`));
    }), i.forEach((f)=>{
        r || (re(o[f].methods, s[f].methods) ? re(o[f].events, s[f].events) || (r = te("NON_CONFORMING_NAMESPACES", `${n} namespaces events don't satisfy namespace events for ${f}`)) : r = te("NON_CONFORMING_NAMESPACES", `${n} namespaces methods don't satisfy namespace methods for ${f}`));
    }), r;
}
function Ji(e) {
    const t = {};
    return Object.keys(e).forEach((n)=>{
        var r;
        n.includes(":") ? t[n] = e[n] : (r = e[n].chains) == null || r.forEach((o)=>{
            t[o] = {
                methods: e[n].methods,
                events: e[n].events
            };
        });
    }), t;
}
function Sr(e) {
    return [
        ...new Set(e.map((t)=>t.includes(":") ? t.split(":")[0] : t))
    ];
}
function Yi(e) {
    const t = {};
    return Object.keys(e).forEach((n)=>{
        if (n.includes(":")) t[n] = e[n];
        else {
            const r = le(e[n].accounts);
            r?.forEach((o)=>{
                t[o] = {
                    accounts: e[n].accounts.filter((s)=>s.includes(`${o}:`)),
                    methods: e[n].methods,
                    events: e[n].events
                };
            });
        }
    }), t;
}
function Xi(e, t) {
    return Ge(e, !1) && e <= t.max && e >= t.min;
}
function Zi() {
    const e = ue();
    return new Promise((t)=>{
        switch(e){
            case H.browser:
                t(Ur());
                break;
            case H.reactNative:
                t(_r());
                break;
            case H.node:
                t(Tr());
                break;
            default:
                t(!0);
        }
    });
}
function Ur() {
    return Ae() && navigator?.onLine;
}
async function _r() {
    if (ne() && typeof global < "u" && global != null && global.NetInfo) {
        const e = await (global == null ? void 0 : global.NetInfo.fetch());
        return e?.isConnected;
    }
    return !0;
}
function Tr() {
    return !0;
}
function Qi(e) {
    switch(ue()){
        case H.browser:
            $r(e);
            break;
        case H.reactNative:
            Rr(e);
            break;
        case H.node:
            break;
    }
}
function $r(e) {
    !ne() && Ae() && (window.addEventListener("online", ()=>e(!0)), window.addEventListener("offline", ()=>e(!1)));
}
function Rr(e) {
    ne() && typeof global < "u" && global != null && global.NetInfo && global?.NetInfo.addEventListener((t)=>e(t?.isConnected));
}
const Bt = {};
class ec {
    static get(t) {
        return Bt[t];
    }
    static set(t, n) {
        Bt[t] = n;
    }
    static delete(t) {
        delete Bt[t];
    }
}
;
 //# sourceMappingURL=index.es.js.map
}}),

};

//# sourceMappingURL=0f858_1d61c2b8._.js.map