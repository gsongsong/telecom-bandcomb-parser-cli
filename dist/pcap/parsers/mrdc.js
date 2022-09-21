"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFeatureSetCombinations = exports.parseSupportedBandCombinationList = void 0;
const utils_1 = require("../utils");
function parseSupportedBandCombinationList(ueMrdcCapability) {
    const { supportedBandCombinationList } = ueMrdcCapability["rf-ParametersMRDC"];
    if (!supportedBandCombinationList) {
        return [];
    }
    return supportedBandCombinationList.map((supportedBandCombination) => {
        const { BandCombination } = supportedBandCombination;
        const { bandList: _bandList, featureSetCombination: _featureSetCombination, } = BandCombination;
        const bandList = _bandList.map(({ BandParameters }) => getIntraBandContiguousCaString(BandParameters));
        const featureSetCombination = +(0, utils_1.v)(_featureSetCombination);
        return { bandList, featureSetCombination };
    });
}
exports.parseSupportedBandCombinationList = parseSupportedBandCombinationList;
function parseFeatureSetCombinations(ueMrdcCapability) {
    const { featureSetCombinations } = ueMrdcCapability;
    return featureSetCombinations.map((_featureSetCombination) => {
        const { FeatureSetCombination } = _featureSetCombination;
        const featureSetCombination = FeatureSetCombination.map((_featureSetsPerBand) => {
            const { FeatureSetsPerBand } = _featureSetsPerBand;
            const featureSetsPerBand = FeatureSetsPerBand.map(({ FeatureSet }) => {
                return parseFeatureSet(FeatureSet);
            });
            return featureSetsPerBand;
        });
        return featureSetCombination;
    });
}
exports.parseFeatureSetCombinations = parseFeatureSetCombinations;
function parseFeatureSet(featureSet) {
    if ("eutra (0)" in featureSet) {
        const { eutra } = featureSet["eutra (0)"];
        const { downlinkSetEUTRA: _downlinkSetEUTRA, uplinkSetEUTRA: _uplinkSetEUTRA, } = eutra;
        const downlinkSetEUTRA = +(0, utils_1.v)(_downlinkSetEUTRA);
        const uplinkSetEUTRA = +(0, utils_1.v)(_uplinkSetEUTRA);
        return { downlinkSetEUTRA, uplinkSetEUTRA };
    }
    if ("nr (1)" in featureSet) {
        const { nr } = featureSet["nr (1)"];
        const { downlinkSetNR: _downlinkSetNR, uplinkSetNR: _uplinkSetNR } = nr;
        const downlinkSetNR = +(0, utils_1.v)(_downlinkSetNR);
        const uplinkSetNR = +(0, utils_1.v)(_uplinkSetNR);
        return { downlinkSetNR, uplinkSetNR };
    }
    throw Error();
}
function getIntraBandContiguousCaString(bandParameters) {
    if ("eutra (0)" in bandParameters) {
        const { eutra } = bandParameters["eutra (0)"];
        const { bandEUTRA: _bandEUTRA, "ca-BandwidthClassDL-EUTRA": _caBandwidthClassDlEutra, "ca-BandwidthClassUL-EUTRA": _caBandwidthClassUlEutra, } = eutra;
        const bandEUTRA = +(0, utils_1.v)(_bandEUTRA);
        const caBandwidthClassDlEutra = _caBandwidthClassDlEutra
            ? (0, utils_1.v)(_caBandwidthClassDlEutra).substring(0, 1)
            : "*";
        const caBandwidthClassUlEutra = _caBandwidthClassUlEutra
            ? (0, utils_1.v)(_caBandwidthClassUlEutra).substring(0, 1)
            : "";
        return `${bandEUTRA}${caBandwidthClassDlEutra}${caBandwidthClassUlEutra}`;
    }
    if ("nr (1)" in bandParameters) {
        const { nr } = bandParameters["nr (1)"];
        const { bandNR: _bandNR, "ca-BandwidthClassDL-NR": _caBandwidthClassDlNr, "ca-BandwidthClassUL-NR": _caBandwidthClassUlNr, } = nr;
        const bandNR = +(0, utils_1.v)(_bandNR);
        const caBandwidthClassDlNr = _caBandwidthClassDlNr
            ? (0, utils_1.v)(_caBandwidthClassDlNr).substring(0, 1)
            : "*";
        const caBandwidthClassUlNr = _caBandwidthClassUlNr
            ? (0, utils_1.v)(_caBandwidthClassUlNr).substring(0, 1)
            : "";
        return `n${bandNR}${caBandwidthClassDlNr}${caBandwidthClassUlNr}`;
    }
    throw Error();
}
//# sourceMappingURL=mrdc.js.map