import { UeNrCapability } from "../types/ueNrCapability";
import { v } from "../utils";

export type FeatureSets = {
  featureSetsDownlink: {
    featureSetListPerDownlinkCc: number[];
  }[];
  featureSetsUplink: {
    featureSetListPerUplinkCc: number[];
  }[];
};

export function parseFeatureSets(
  ueNrCapability: UeNrCapability
): FeatureSets | undefined {
  const { featureSets } = ueNrCapability;
  if (!featureSets) {
    return undefined;
  }

  const {
    featureSetsDownlink: _featureSetsDownlink,
    featureSetsUplink: _featureSetsUplink,
  } = featureSets;

  const featureSetsDownlink =
    _featureSetsDownlink?.map((featureSetDownlink) => {
      const featureSetListPerDownlinkCc =
        featureSetDownlink.FeatureSetDownlink.featureSetListPerDownlinkCC.map(
          (featureSetDownlinkPerCcId) =>
            +v(featureSetDownlinkPerCcId["FeatureSetDownlinkPerCC-Id"])
        ) ?? [];
      return { featureSetListPerDownlinkCc };
    }) ?? [];

  const featureSetsUplink =
    _featureSetsUplink?.map((featureSetUplink) => {
      const featureSetListPerUplinkCc =
        featureSetUplink.FeatureSetUplink.featureSetListPerUplinkCC.map(
          (featureSetUplinkPerCcId) =>
            +v(featureSetUplinkPerCcId["FeatureSetUplinkPerCC-Id"])
        ) ?? [];
      return { featureSetListPerUplinkCc };
    }) ?? [];

  return { featureSetsDownlink, featureSetsUplink };
}
