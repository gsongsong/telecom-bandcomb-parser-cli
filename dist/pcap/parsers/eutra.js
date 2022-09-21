"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFeatureSets = void 0;
const utils_1 = require("../utils");
function parseFeatureSets(ueEutraCapability) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    const featureSets = (_z = (_y = (_x = (_w = (_v = (_u = (_t = (_s = (_r = (_q = (_p = (_o = (_m = (_l = (_k = (_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = ueEutraCapability.nonCriticalExtension) === null || _a === void 0 ? void 0 : _a.nonCriticalExtension) === null || _b === void 0 ? void 0 : _b.nonCriticalExtension) === null || _c === void 0 ? void 0 : _c.nonCriticalExtension) === null || _d === void 0 ? void 0 : _d.nonCriticalExtension) === null || _e === void 0 ? void 0 : _e.nonCriticalExtension) === null || _f === void 0 ? void 0 : _f.nonCriticalExtension) === null || _g === void 0 ? void 0 : _g.nonCriticalExtension) === null || _h === void 0 ? void 0 : _h.nonCriticalExtension) === null || _j === void 0 ? void 0 : _j.nonCriticalExtension) === null || _k === void 0 ? void 0 : _k.nonCriticalExtension) === null || _l === void 0 ? void 0 : _l.nonCriticalExtension) === null || _m === void 0 ? void 0 : _m.nonCriticalExtension) === null || _o === void 0 ? void 0 : _o.nonCriticalExtension) === null || _p === void 0 ? void 0 : _p.nonCriticalExtension) === null || _q === void 0 ? void 0 : _q.nonCriticalExtension) === null || _r === void 0 ? void 0 : _r.nonCriticalExtension) === null || _s === void 0 ? void 0 : _s.nonCriticalExtension) === null || _t === void 0 ? void 0 : _t.nonCriticalExtension) === null || _u === void 0 ? void 0 : _u.nonCriticalExtension) === null || _v === void 0 ? void 0 : _v.nonCriticalExtension) === null || _w === void 0 ? void 0 : _w.nonCriticalExtension) === null || _x === void 0 ? void 0 : _x.nonCriticalExtension) === null || _y === void 0 ? void 0 : _y.nonCriticalExtension) === null || _z === void 0 ? void 0 : _z["featureSetsEUTRA-r15"];
    if (!featureSets) {
        return undefined;
    }
    const { "featureSetsDL-r15": featureSetsDlR15, "featureSetsDL-PerCC-r15": featureSetsDlPerCcR15, "featureSetsUL-r15": featureSetsUlR15, "featureSetsUL-PerCC-r15": featureSetsUlPerCc15, } = featureSets;
    const featureSetsDl = (_0 = featureSetsDlR15 === null || featureSetsDlR15 === void 0 ? void 0 : featureSetsDlR15.map((featureSetDl) => {
        var _a, _b;
        const featureSetPerCcListDlR15 = (_b = (_a = featureSetDl["FeatureSetDL-r15"]["featureSetPerCC-ListDL-r15"]) === null || _a === void 0 ? void 0 : _a.map((featureSetDlPerCcIdR15) => +(0, utils_1.v)(featureSetDlPerCcIdR15["FeatureSetDL-PerCC-Id-r15"]))) !== null && _b !== void 0 ? _b : [];
        return { featureSetPerCcListDlR15 };
    })) !== null && _0 !== void 0 ? _0 : [];
    const featureSetsDlPerCc = (_1 = featureSetsDlPerCcR15 === null || featureSetsDlPerCcR15 === void 0 ? void 0 : featureSetsDlPerCcR15.map((featureSetDlPerCc) => {
        const { "supportedMIMO-CapabilityDL-MRDC-r15": _supportedMimoCapabilityDlMrdcR15, } = featureSetDlPerCc["FeatureSetDL-PerCC-r15"];
        const supportedMimoCapabilityDlMrdcR15 = _supportedMimoCapabilityDlMrdcR15
            ? (0, utils_1.v)(_supportedMimoCapabilityDlMrdcR15)
            : undefined;
        return { supportedMimoCapabilityDlMrdcR15 };
    })) !== null && _1 !== void 0 ? _1 : [];
    const featureSetsUl = (_2 = featureSetsUlR15 === null || featureSetsUlR15 === void 0 ? void 0 : featureSetsUlR15.map((featureSetUl) => {
        var _a, _b;
        const featureSetPerCcListUlR15 = (_b = (_a = featureSetUl["FeatureSetUL-r15"]["featureSetPerCC-ListUL-r15"]) === null || _a === void 0 ? void 0 : _a.map((featureSetUlPerCcIdR15) => +(0, utils_1.v)(featureSetUlPerCcIdR15["FeatureSetUL-PerCC-Id-r15"]))) !== null && _b !== void 0 ? _b : [];
        return { featureSetPerCcListUlR15 };
    })) !== null && _2 !== void 0 ? _2 : [];
    const featureSetsUlPerCc = (_3 = featureSetsUlPerCc15 === null || featureSetsUlPerCc15 === void 0 ? void 0 : featureSetsUlPerCc15.map((featureSetUlPerCc) => {
        const { "supportedMIMO-CapabilityUL-r15": _supportedMimoCapabilityUlR15, } = featureSetUlPerCc["FeatureSetUL-PerCC-r15"];
        const supportedMimoCapabilityUlR15 = _supportedMimoCapabilityUlR15
            ? (0, utils_1.v)(_supportedMimoCapabilityUlR15)
            : undefined;
        return { supportedMimoCapabilityUlR15 };
    })) !== null && _3 !== void 0 ? _3 : [];
    return {
        featureSetsDl,
        featureSetsDlPerCc,
        featureSetsUl,
        featureSetsUlPerCc,
    };
}
exports.parseFeatureSets = parseFeatureSets;
//# sourceMappingURL=eutra.js.map