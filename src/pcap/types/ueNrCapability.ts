import { SimpleValue } from ".";

export type UeNrCapability = {
  "rf-Parameters": RfParameters;
  featureSets?: FeatureSets;
  featureSetCombinations?: FeatureSetCombination[];
  lateNonCriticalExtension?: {
    [key: string]: UeNrCapabilityV15c0;
  };
  nonCriticalExtension?: never;
};

type RfParameters = {
  supportedBandListNR: BandNr[];
  supportedBandCombinationList?: BandCombinationList;
  "supportedBandCombinationList-v1540"?: never;
  "supportedBandCombinationList-v1550"?: never;
  "supportedBandCombinationList-v1560"?: never;
  "supportedBandCombinationList-v1610"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-r16"?: BandCombinationListUplinkTxSwitchR16;
  "supportedBandCombinationList-v1630"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-v1630"?: never;
  "supportedBandCombinationList-v1640"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-v1640"?: never;
  "supportedBandCombinationList-v1650"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-v1650"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-v1670"?: BandCombinationListUplinkTxSwitchV1670;
  "supportedBandCombinationList-v1690"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-v1690"?: never;
  "supportedBandCombinationList-v1700"?: never;
  "supportedBandCombinationList-UplinkTxSwitch-v1700"?: never;
};

type BandNr = {
  bandNr: FreqBandIndicatorNr;
  "channelBWs-DL"?:
    | {
        "fr1 (0)": {
          "scs-15kHz"?: SimpleValue;
          "scs-30kHz"?: SimpleValue;
          "scs-60kHz"?: SimpleValue;
        };
      }
    | {
        "fr2 (1)": {
          "scs-60kHz"?: SimpleValue;
          "scs-120kHz"?: SimpleValue;
        };
      };
  "channelBWs-UL"?:
    | {
        "fr1 (0)": {
          "scs-15kHz"?: SimpleValue;
          "scs-30kHz"?: SimpleValue;
          "scs-60kHz"?: SimpleValue;
        };
      }
    | {
        "fr2 (1)": {
          "scs-60kHz"?: SimpleValue;
          "scs-120kHz"?: SimpleValue;
        };
      };
  "channelBWs-DL-v1590"?:
    | {
        "fr1 (0)": {
          "scs-15kHz"?: SimpleValue;
          "scs-30kHz"?: SimpleValue;
          "scs-60kHz"?: SimpleValue;
        };
      }
    | {
        "fr2 (1)": {
          "scs-60kHz"?: SimpleValue;
          "scs-120kHz"?: SimpleValue;
        };
      };
  "channelBWs-UL-v1590"?:
    | {
        "fr1 (0)": {
          "scs-15kHz"?: SimpleValue;
          "scs-30kHz"?: SimpleValue;
          "scs-60kHz"?: SimpleValue;
        };
      }
    | {
        "fr2 (1)": {
          "scs-60kHz"?: SimpleValue;
          "scs-120kHz"?: SimpleValue;
        };
      };
  asymmetricBandwidthCombinationSet?: SimpleValue;
};

type UeNrCapabilityV15c0 = {
  nonCriticalExtension?: UeNrCapabilityV15g0;
};

type FeatureSets = {
  featureSetsDownlink?: FeatureSetDownlink[];
  featureSetsDownlinkPerCC?: FeatureSetDownlinkPerCc[];
  featureSetsUplink?: FeatureSetUplink[];
  featureSetsUplinkPerCC?: FeatureSetUplinkPerCc[];
};

type FeatureSetDownlink = {
  featureSetListPerDownlinkCC: FeatureSetDownlinkPerCcId[];
};

type FeatureSetDownlinkPerCcId = SimpleValue;

type FeatureSetDownlinkPerCc = {
  supportedSubcarrierSpacingDL: SubcarrierSpacing;
  supportedBandwidthDL: SupportedBandwidth;
  "channelBW-90mhz"?: SimpleValue;
};

type SubcarrierSpacing = SimpleValue;

type SupportedBandwidth =
  | {
      "fr1 (0)": SimpleValue;
    }
  | {
      "fr2 (1)": SimpleValue;
    };

type FeatureSetUplink = {
  featureSetListPerUplinkCC: FeatureSetUplinkPerCcId[];
};

type FeatureSetUplinkPerCcId = SimpleValue;

type FeatureSetUplinkPerCc = {
  supportedSubcarrierSpacingUL: SubcarrierSpacing;
  supportedBandwidthUL: SupportedBandwidth;
  "channelBW-90mhz"?: SimpleValue;
};

type UeNrCapabilityV15g0 = {
  "rf-Parameters-v15g0"?: RfParametersV15g0;
};

type RfParametersV15g0 = {
  "supportedBandCombinationList-v15g0"?: BandCombinationListV15g0;
};

export type BandCombinationList = BandCombination[];

type BandCombination = {
  bandList: BandParameters[];
  featureSetCombination: FeatureSetCombinationId;
  "ca-ParametersEUTRA"?: CaParametersEutra;
  "ca-ParametersNR"?: never;
  "mrdc-Parameters"?: MrdcParameters;
  supportedBandwidthCombinationSet?: SimpleValue;
  "powerClass-v1530"?: SimpleValue;
};

type BandParameters =
  | {
      "eutra (0)": {
        bandEUTRA: FreqBandIndicatorEutra;
        "ca-BandwidthClassDL-EUTRA"?: CaBandwidthClassEutra;
        "ca-BandwidthClassUL-EUTRA"?: CaBandwidthClassEutra;
      };
    }
  | {
      "nr (1)": {
        bandNR: FreqBandIndicatorNr;
        "ca-BandwidthClassDL-NR"?: CaBandwidthCalssNr;
        "ca-BandwidthClassUL-NR"?: CaBandwidthCalssNr;
      };
    };

type FreqBandIndicatorEutra = SimpleValue;

type CaBandwidthClassEutra = SimpleValue;

type FreqBandIndicatorNr = SimpleValue;

type CaBandwidthCalssNr = SimpleValue;

type FeatureSetCombinationId = SimpleValue;

type CaParametersEutra = {
  "supportedBandwidthCombinationSetEUTRA-v1530"?: SimpleValue;
};

type MrdcParameters = {
  "singleUL-Transmission"?: SimpleValue;
  dynamicPowerSharingENDC?: SimpleValue;
  simultaneousRxTxInterBandENDC?: SimpleValue;
  "intraBandENDC-Support"?: SimpleValue;
};

export type FeatureSetCombination = FeatureSetsPerBand[];

type FeatureSetsPerBand = FeatureSet[];

type FeatureSet =
  | {
      "eutra (0)": {
        downlinkSetEUTRA: FeatureSetEutraDownlinkId;
        uplinkSetEUTRA: FeatureSetEutraUplinkId;
      };
    }
  | {
      "nr (1)": {
        downlinkSetNR: FeatureSetDownlinkId;
        uplinkSetNR: FeatureSetUplinkId;
      };
    };

type FeatureSetEutraDownlinkId = SimpleValue;

type FeatureSetEutraUplinkId = SimpleValue;

type FeatureSetDownlinkId = SimpleValue;

type FeatureSetUplinkId = SimpleValue;

export type BandCombinationListV1590 = BandCombinationV1590[];

type BandCombinationV1590 = {
  supportedBandwidthCombinationSetIntraENDC?: SimpleValue;
  "mrdc-Parameters-v1590": never;
};

export type BandCombinationListUplinkTxSwitchR16 =
  BandCombinationUplinkTxSwitchR16[];

type BandCombinationUplinkTxSwitchR16 = {
  "bandCombination-r16": BandCombination;
  "bandCombination-v1540"?: never;
  "bandCombination-v1560"?: never;
  "bandCombination-v1570"?: never;
  "bandCombination-v1580"?: never;
  "bandCombination-v1590"?: BandCombinationV1590;
  "bandCombination-v1610"?: never;
  "supportedBandPairListNR-r16": never[];
};

export type BandCombinationListV15g0 = BandCombinationV15g0[];

type BandCombinationV15g0 = {
  "ca-ParametersNR-v15g0"?: CaParametersNrV15g0;
  "ca-ParametersNRDC-v15g0"?: CaParametersNrdcV15g0;
  "mrdc-Parameters-v15g0"?: MrdcParamtersV15g0;
};

type CaParametersNrV15g0 = {
  simultaneousRxTxInterBandCAPerBandPair?: SimultaneousRxTxPerBandPair;
};

type SimultaneousRxTxPerBandPair = SimpleValue;

type CaParametersNrdcV15g0 = {
  "ca-ParametersNR-ForDC-v15g0"?: CaParametersNrV15g0;
};

type MrdcParamtersV15g0 = {
  simultaneousRxTxInterBandENDCPerBandPair?: SimultaneousRxTxPerBandPair;
};

export type BandCombinationListUplinkTxSwitchV1670 =
  BandCombinationUplinkTxSwtichV1670[];

type BandCombinationUplinkTxSwtichV1670 = {
  "bandCombination-v15g0"?: BandCombinationV15g0;
};
