"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFeatureSets = void 0;
const utils_1 = require("../utils");
function parseFeatureSets(ueNrCapability) {
    var _a, _b;
    const { featureSets } = ueNrCapability;
    if (!featureSets) {
        return undefined;
    }
    const { featureSetsDownlink: _featureSetsDownlink, featureSetsUplink: _featureSetsUplink, } = featureSets;
    const featureSetsDownlink = (_a = _featureSetsDownlink === null || _featureSetsDownlink === void 0 ? void 0 : _featureSetsDownlink.map((featureSetDownlink) => {
        var _a;
        const featureSetListPerDownlinkCc = (_a = featureSetDownlink.FeatureSetDownlink.featureSetListPerDownlinkCC.map((featureSetDownlinkPerCcId) => +(0, utils_1.v)(featureSetDownlinkPerCcId["FeatureSetDownlinkPerCC-Id"]))) !== null && _a !== void 0 ? _a : [];
        return { featureSetListPerDownlinkCc };
    })) !== null && _a !== void 0 ? _a : [];
    const featureSetsUplink = (_b = _featureSetsUplink === null || _featureSetsUplink === void 0 ? void 0 : _featureSetsUplink.map((featureSetUplink) => {
        var _a;
        const featureSetListPerUplinkCc = (_a = featureSetUplink.FeatureSetUplink.featureSetListPerUplinkCC.map((featureSetUplinkPerCcId) => +(0, utils_1.v)(featureSetUplinkPerCcId["FeatureSetUplinkPerCC-Id"]))) !== null && _a !== void 0 ? _a : [];
        return { featureSetListPerUplinkCc };
    })) !== null && _b !== void 0 ? _b : [];
    return { featureSetsDownlink, featureSetsUplink };
}
exports.parseFeatureSets = parseFeatureSets;
//# sourceMappingURL=nr.js.map