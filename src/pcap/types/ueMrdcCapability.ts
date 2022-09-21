import {
  BandCombinationList,
  BandCombinationListUplinkTxSwitchR16,
  BandCombinationListUplinkTxSwitchV1670,
  BandCombinationListV1590,
  BandCombinationListV15g0,
  FeatureSetCombination,
} from "./ueNrCapability";

export type UeMrdcCapability = {
  "rf-ParametersMRDC": RfParametersMrdc;
  featureSetCombinations: { FeatureSetCombination: FeatureSetCombination }[];
  lateNonCriticalExtension?: {
    [key: string]: UeMrdcCapabilityV15g0;
  };
  nonCriticalExtension?: never;
};

type RfParametersMrdc = {
  supportedBandCombinationList?: BandCombinationList;
  "supportedBandCombinationList-v1540"?: never;
  "supportedBandCombinationList-v1550"?: never;
  "supportedBandCombinationList-v1560"?: never;
  "supportedBandCombinationListNEDC-Only"?: BandCombinationList;
  "supportedBandCombinationList-v1570"?: never;
  "supportedBandCombinationList-v1580"?: never;
  "supportedBandCombinationList-v1590"?: BandCombinationListV1590;
  "supportedBandCombinationListNEDC-Only-v15a0"?: {
    "supportedBandCombinationList-v1540"?: never;
    "supportedBandCombinationList-v1560"?: never;
    "supportedBandCombinationList-v1570"?: never;
    "supportedBandCombinationList-v1580"?: never;
    "supportedBandCombinationList-v1590"?: BandCombinationListV1590;
  };
  "supportedBandCombinationList-v1610"?: never;
  "supportedBandCombinationListNEDC-Only-v1610"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-r16"?: BandCombinationListUplinkTxSwitchR16;
  "supportedBandCombinationList-v1630"?: never;
  "supportedBandCombinationListNEDC-Only-v1630"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-v1630"?: never;
  "supportedBandCombinationList-v1640"?: never;
  "supportedBandCombinationListNEDC-Only-v1640"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-v1640"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-v1670"?: BandCombinationListUplinkTxSwitchV1670;
  "supportedBandCombinationList-v1700"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-v1700"?: never;
};

type UeMrdcCapabilityV15g0 = {
  "rf-ParametersMRDC-v15g0": RfParametersMrdcV15g0;
};

type RfParametersMrdcV15g0 = {
  "supportedBandCombinationList-v15g0"?: BandCombinationListV15g0;
  "supportedBandCombinationListNEDC-Only-v15g0"?: BandCombinationListV15g0;
};
