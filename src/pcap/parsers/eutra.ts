import { UeEutraCapability } from "../types/ueEutraCapability";
import { v } from "../utils";

export type FeatureSets = {
  featureSetsDl: {
    featureSetPerCcListDlR15: number[];
  }[];
  featureSetsDlPerCc: {
    supportedMimoCapabilityDlMrdcR15: string | undefined;
  }[];
  featureSetsUl: {
    featureSetPerCcListUlR15: number[];
  }[];
  featureSetsUlPerCc: {
    supportedMimoCapabilityUlR15: string | undefined;
  }[];
};

export function parseFeatureSets(
  ueEutraCapability: UeEutraCapability
): FeatureSets | undefined {
  const featureSets =
    ueEutraCapability.nonCriticalExtension?.nonCriticalExtension
      ?.nonCriticalExtension?.nonCriticalExtension?.nonCriticalExtension
      ?.nonCriticalExtension?.nonCriticalExtension?.nonCriticalExtension
      ?.nonCriticalExtension?.nonCriticalExtension?.nonCriticalExtension
      ?.nonCriticalExtension?.nonCriticalExtension?.nonCriticalExtension
      ?.nonCriticalExtension?.nonCriticalExtension?.nonCriticalExtension
      ?.nonCriticalExtension?.nonCriticalExtension?.nonCriticalExtension
      ?.nonCriticalExtension?.nonCriticalExtension?.nonCriticalExtension
      ?.nonCriticalExtension?.["featureSetsEUTRA-r15"];
  if (!featureSets) {
    return undefined;
  }

  const {
    "featureSetsDL-r15": featureSetsDlR15,
    "featureSetsDL-PerCC-r15": featureSetsDlPerCcR15,
    "featureSetsUL-r15": featureSetsUlR15,
    "featureSetsUL-PerCC-r15": featureSetsUlPerCc15,
  } = featureSets;
  const featureSetsDl =
    featureSetsDlR15?.map((featureSetDl) => {
      const featureSetPerCcListDlR15 =
        featureSetDl["FeatureSetDL-r15"]["featureSetPerCC-ListDL-r15"]?.map(
          (featureSetDlPerCcIdR15) =>
            +v(featureSetDlPerCcIdR15["FeatureSetDL-PerCC-Id-r15"])
        ) ?? [];
      return { featureSetPerCcListDlR15 };
    }) ?? [];

  const featureSetsDlPerCc =
    featureSetsDlPerCcR15?.map((featureSetDlPerCc) => {
      const {
        "supportedMIMO-CapabilityDL-MRDC-r15":
          _supportedMimoCapabilityDlMrdcR15,
      } = featureSetDlPerCc["FeatureSetDL-PerCC-r15"];
      const supportedMimoCapabilityDlMrdcR15 = _supportedMimoCapabilityDlMrdcR15
        ? v(_supportedMimoCapabilityDlMrdcR15)
        : undefined;
      return { supportedMimoCapabilityDlMrdcR15 };
    }) ?? [];

  const featureSetsUl =
    featureSetsUlR15?.map((featureSetUl) => {
      const featureSetPerCcListUlR15 =
        featureSetUl["FeatureSetUL-r15"]["featureSetPerCC-ListUL-r15"]?.map(
          (featureSetUlPerCcIdR15) =>
            +v(featureSetUlPerCcIdR15["FeatureSetUL-PerCC-Id-r15"])
        ) ?? [];
      return { featureSetPerCcListUlR15 };
    }) ?? [];

  const featureSetsUlPerCc =
    featureSetsUlPerCc15?.map((featureSetUlPerCc) => {
      const {
        "supportedMIMO-CapabilityUL-r15": _supportedMimoCapabilityUlR15,
      } = featureSetUlPerCc["FeatureSetUL-PerCC-r15"];
      const supportedMimoCapabilityUlR15 = _supportedMimoCapabilityUlR15
        ? v(_supportedMimoCapabilityUlR15)
        : undefined;
      return { supportedMimoCapabilityUlR15 };
    }) ?? [];

  return {
    featureSetsDl,
    featureSetsDlPerCc,
    featureSetsUl,
    featureSetsUlPerCc,
  };
}
