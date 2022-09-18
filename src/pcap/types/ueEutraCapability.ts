import { SimpleValue } from ".";

export type UeEutraCapability = {
  "rf-Parameters": RfParameters;
  nonCriticalExtension?: UeEutraCapabilityV920Ies;
};

type RfParameters = {
  supportedBandListEUTRA: SupportedBandListEutra;
};

type SupportedBandListEutra = SupportedBandEutra[];

type SupportedBandEutra = {
  bandEUTRA: FreqBandIndicator;
  halfDuplex: SimpleValue;
};

type FreqBandIndicator = SimpleValue;

type UeEutraCapabilityV920Ies = {
  nonCriticalExtension?: UeEutraCapabilityV940Ies;
};

type UeEutraCapabilityV940Ies = {
  lateNonCriticalExtension?: {
    [key: string]: UeEutraCapabilityV9a0Ies;
  };
  nonCriticalExtension?: UeEutraCapabilityV1020Ies;
};

type UeEutraCapabilityV9a0Ies = {
  nonCriticalExtension?: UeEutraCapabilityV9c0Ies;
};

type UeEutraCapabilityV9c0Ies = {
  nonCriticalExtension?: UeEutraCapabilityV9d0Ies;
};

type UeEutraCapabilityV9d0Ies = {
  nonCriticalExtension?: UeEutraCapabilityV9e0Ies;
};

type UeEutraCapabilityV9e0Ies = {
  "rf-Parameters-v9e0"?: RfParametersV9e0;
  nonCriticalExtension?: UeEutraCapabilityV9h0Ies;
};

type RfParametersV9e0 = {
  "supportedBandListEUTRA-v9e0"?: SupportedBandListEutraV9e0;
};

type SupportedBandListEutraV9e0 = SupportedBandEutraV9e0[];

type SupportedBandEutraV9e0 = {
  "bandEUTRA-v9e0"?: FreqBandIndicatorV9e0;
};

type FreqBandIndicatorV9e0 = SimpleValue;

type UeEutraCapabilityV9h0Ies = {
  nonCriticalExtension?: UeEutraCapabilityV10c0Ies;
};

type UeEutraCapabilityV10c0Ies = {
  nonCriticalExtension?: UeEutraCapabilityV10f0Ies;
};

/**
 * RF-Parameters-v10f0 is not captured
 * since there is no band combination related capabilities
 */
type UeEutraCapabilityV10f0Ies = {
  "rf-Parameters-v10f0"?: never;
  nonCriticalExtension?: UeEutraCapabilityV10i0Ies;
};

type UeEutraCapabilityV10i0Ies = {
  "rf-Parameters-v10i0"?: RfParametersV10i0;
  lateNonCriticalExtension?: never;
  nonCriticalExtension?: UeEutraCapabilityV11d0Ies;
};

type UeEutraCapabilityV11d0Ies = {
  "rf-Parameters-v11d0"?: RfParametersV11d0;
  nonCriticalExtension?: UeEutraCapabilityV11x0Ies;
};

type RfParametersV11d0 = {
  "supportedBandCombinationAdd-v11d0"?: SupportedBandCombinationAddV11d0;
};

type SupportedBandCombinationAddV11d0 = BandCombinationParametersV10i0[];

type BandCombinationParametersV10i0 = {
  "bandParameterList-v10i0"?: BandParametersV10ie[];
};

type BandParametersV10ie = {
  "bandParametersDL-v10i0": CaMimoParametersDlV10i0[];
};

type CaMimoParametersDlV10i0 = {
  "fourLayerTM3-TM4-r10"?: SimpleValue;
};

type UeEutraCapabilityV11x0Ies = {
  nonCriticalExtension?: UeEutraCapabilityV12b0Ies;
};

type UeEutraCapabilityV12b0Ies = {
  "rf-Parameters-v12b0"?: RfParametersV12b0;
  nonCriticalExtension?: UeEutraCapabilityV12x0Ies;
};

type RfParametersV12b0 = {
  "maxLayersMIMO-Indication-r12"?: SimpleValue;
};

type UeEutraCapabilityV12x0Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1370Ies;
};

type UeEutraCapabilityV1370Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1380Ies;
};

type UeEutraCapabilityV1380Ies = {
  "rf-Parameters-v1380"?: never;
  nonCriticalExtension?: UeEutraCapabilityV1390Ies;
};

type UeEutraCapabilityV1390Ies = {
  "rf-Parameters-v1390"?: RfParametersV1390;
  nonCriticalExtension?: UeEutraCapabilityV13e0aIes;
};

type RfParametersV1390 = {
  "supportedBandCombination-v1390"?: SupportedBandCombinationV1390;
  "supportedBandCombinationAdd-v1390"?: SupportedBandCombinationAddV1390;
  "supportedBandCombinationReduced-v1390"?: SupportedBandCombinationReducedV1390;
};

type SupportedBandCombinationV1390 = BandCombinationParametersV1390[];

type BandCombinationParametersV1390 = {
  "ue-CA-PowerClass-N-r13"?: SimpleValue;
};

type SupportedBandCombinationAddV1390 = BandCombinationParametersV1390[];

type SupportedBandCombinationReducedV1390 = BandCombinationParametersV1390[];

/**
 * late non-critical extension is not captured
 * since there is no band combination related capabilities
 */
type UeEutraCapabilityV13e0aIes = {
  nonCriticalExtension?: UeEutraCapabilityV1470Ies;
};

type UeEutraCapabilityV1470Ies = {
  "rf-Parameters-v1470"?: never;
  nonCriticalExtension?: UeEutraCapabilityV14a0Ies;
};

type UeEutraCapabilityV14a0Ies = {
  nonCriticalExtension?: UeEutraCapabilityV14b0Ies;
};

type UeEutraCapabilityV14b0Ies = {
  "rf-Parameters-v14b0"?: never;
};

type RfParametersV10i0 = {
  "supportedBandCombination-v10i0"?: SupportedBandCombinationV10i0;
};

type SupportedBandCombinationV10i0 = BandCombinationParametersV10i0[];

type UeEutraCapabilityV1020Ies = {
  "rf-Parameters-v1020"?: RfParametersV1020;
  nonCriticalExtension?: UeEutraCapabilityV1060Ies;
};

type RfParametersV1020 = {
  "supportedBandCombination-r10": SupportedBandCombinationR10;
};

type SupportedBandCombinationR10 = BandCombinationParametersR10[];

type BandCombinationParametersR10 = BandParametersR10[];

type BandParametersR10 = {
  "bandEUTRA-r10": FreqBandIndicator;
  "bandParametersUL-r10"?: BandParametersUlR10;
  "bandParametersDL-r10"?: BandParametersDlR10;
};

type BandParametersUlR10 = CaMimoParametersUlR10[];

type CaMimoParametersUlR10 = {
  "ca-BandwidthClassUL-r10": CaBandwidthClassR10;
  "supportedMIMO-CapabilityUL-r10"?: MimoCapabilityUlR10;
};

type CaBandwidthClassR10 = SimpleValue;

type MimoCapabilityUlR10 = SimpleValue;

type BandParametersDlR10 = CaMimoParametersDlR10[];

type CaMimoParametersDlR10 = {
  "ca-BandwidthClassDL-r10": CaBandwidthClassR10;
  "supportedMIMO-CapabilityDL-r13"?: MimoCapabilityDlR10;
  "fourLayerTM3-TM4-r13"?: SimpleValue;
  "intraBandContiguousCC-InfoList-r13": IntraBandContiguousCcInfoR12[];
};

type MimoCapabilityDlR10 = SimpleValue;

type IntraBandContiguousCcInfoR12 = {
  "fourLayerTM3-TM4-perCC-r12"?: SimpleValue;
  "supportedMIMO-CapabilityDL-r12": SimpleValue;
};

type UeEutraCapabilityV1060Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1090Ies;
};

type UeEutraCapabilityV1090Ies = {
  "rf-Parameters-v1090"?: RfParametersV1090;
  nonCriticalExtension?: UeEutraCapabilityV1130Ies;
};

type RfParametersV1090 = {
  "supportedBandCombination-v1090"?: SupportedBandCombinationV1090;
};

type SupportedBandCombinationV1090 = BandCombinationParametersV1090[];

type BandCombinationParametersV1090 = BandParametersV1090[];

type BandParametersV1090 = {
  "bandEUTRA-v1090"?: FreqBandIndicatorV9e0;
};

type UeEutraCapabilityV1130Ies = {
  "rf-Parameters-v1130": RfParametersV1130;
  nonCriticalExtension?: UeEutraCapabilityV1170Ies;
};

type RfParametersV1130 = {
  "supportedBandCombination-v1130"?: SupportedBandCombinationV1130;
};

type SupportedBandCombinationV1130 = BandCombinationParametersV1130[];

type BandCombinationParametersV1130 = {
  "multipleTimingAdvance-r11"?: SimpleValue;
  "simultaneousRx-Tx-r11"?: SimpleValue;
  "bandParameterList-r11"?: BandParametersV1130[];
};

type BandParametersV1130 = never;

type UeEutraCapabilityV1170Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1180Ies;
};

type UeEutraCapabilityV1180Ies = {
  "rf-Parameters-v1180"?: RfParametersV1180;
  nonCriticalExtension?: UeEutraCapabilityV11a0Ies;
};

type RfParametersV1180 = {
  "supportedBandCombinationAdd-r11"?: SupportedBandCombinationAddR11;
};

type SupportedBandCombinationAddR11 = BandCombinationParametersR11;

type BandCombinationParametersR11 = {
  "bandParameterList-r11": BandParametersR11[];
  "supportedBandwidthCombinationSet-r11"?: SupportedBandwidthCombinationSetR10;
  "multipleTimingAdvance-r11"?: SimpleValue;
  "simultaneousRx-Tx-r11"?: SimpleValue;
};

type BandParametersR11 = {
  "bandEUTRA-r11": FreqBandIndicatorR11;
  "bandParametersUL-r11"?: BandParametersUlR10;
  "bandParametersDL-r11"?: BandParametersDlR10;
};

type FreqBandIndicatorR11 = SimpleValue;

type SupportedBandwidthCombinationSetR10 = SimpleValue;

type UeEutraCapabilityV11a0Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1250Ies;
};

type UeEutraCapabilityV1250Ies = {
  "rf-Parameters-v1250"?: RfParametersV1250;
  nonCriticalExtension?: UeEutraCapabilityV1260Ies;
};

type RfParametersV1250 = {
  "supportedBandListEUTRA-v1250"?: SupportedBandListEutraV1250;
  "supportedBandCombination-v1250"?: never;
  "supportedBandCombinationAdd-v1250"?: never;
};

type SupportedBandListEutraV1250 = SupportedBandEutraV1250[];

type SupportedBandEutraV1250 = {
  "dl-256QAM-r12"?: SimpleValue;
  "ul-64QAM-r12"?: SimpleValue;
};

type UeEutraCapabilityV1260Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1270Ies;
};

type UeEutraCapabilityV1270Ies = {
  "rf-Parameters-v1270"?: RfParametersV1270;
  nonCriticalExtension?: UeEutraCapabilityV1280Ies;
};

type RfParametersV1270 = {
  "supportedBandCombination-v1270"?: SupportedBandCombinationV1270;
  "supportedBandCombinationAdd-v1270"?: SupportedBandCombinationAddV1270;
};

type SupportedBandCombinationV1270 = BandCombinationParametersV1270[];

type SupportedBandCombinationAddV1270 = BandCombinationParametersV1270[];

type BandCombinationParametersV1270 = {
  "bandParameterList-v1270"?: BandParametersV1270[];
};

type BandParametersV1270 = {
  "bandParametersDL-v1270": CaMimoParametersDlV1270[];
};

type CaMimoParametersDlV1270 = {
  "intraBandContiguousCC-InfoList-r12": IntraBandContiguousCcInfoR12[];
};

type UeEutraCapabilityV1280Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1310Ies;
};

type UeEutraCapabilityV1310Ies = {
  "rf-Parameters-v1310"?: RfParametersV1310;
  nonCriticalExtension?: UeEutraCapabilityV1320Ies;
};

type RfParametersV1310 = {
  "skipFallbackCombinations-r13"?: SimpleValue;
  "reducedIntNonContComb-r13"?: SimpleValue;
  "supportedBandListEUTRA-v1310"?: never;
  "supportedBandCombinationReduced-r13"?: SupportedBandCombinationReducedR13;
};

type SupportedBandCombinationReducedR13 = BandCombinationParametersR13[];

type BandCombinationParametersR13 = {
  "differentFallbackSupported-r13"?: SimpleValue;
  "bandParameterList-r13": BandParametersR13[];
  "supportedBandwidthCombinationSet-r13"?: SupportedBandwidthCombinationSetR10;
};

type BandParametersR13 = {
  "bandEUTRA-r13": FreqBandIndicatorR11;
  "bandParametersUL-r13"?: BandParametersUlR13;
  "bandParametersDL-r13"?: BandParametersDlR13;
};

type BandParametersUlR13 = CaMimoParametersUlR10;

type BandParametersDlR13 = CaMimoParametersDlR10;

type UeEutraCapabilityV1320Ies = {
  "rf-Parameters-v1320"?: RfParametersV1320;
  nonCriticalExtension?: UeEutraCapabilityV1330Ies;
};

type RfParametersV1320 = {
  "supportedBandListEUTRA-v1320"?: SupportedBandListEutraV1320;
  "supportedBandCombination-v1320"?: never;
  "supportedBandCombinationAdd-v1320"?: never;
  "supportedBandCombinationReduced-v1320"?: never;
};

type SupportedBandListEutraV1320 = SupportedBandEutraV1320[];

type SupportedBandEutraV1320 = {
  "ue-PowerClass-N-r13"?: SimpleValue;
};

type UeEutraCapabilityV1330Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1340Ies;
};

type UeEutraCapabilityV1340Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1350Ies;
};

type UeEutraCapabilityV1350Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1360Ies;
};

type UeEutraCapabilityV1360Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1430Ies;
};

type UeEutraCapabilityV1430Ies = {
  "rf-Parameters-v1430"?: RfParametersV1430;
  nonCriticalExtension?: UeEutraCapabilityV1440Ies;
};

type RfParametersV1430 = {
  "supportedBandCombination-v1430"?: SupportedBandCombinationV1430;
  "supportedBandCombinationAdd-v1430"?: SupportedBandCombinationAddV1430;
  "supportedBandCombinationReduced-v1430"?: SupportedBandCombinationReducedV1430;
  "eNB-RequestedParameters-v1430"?: {
    "requestedDiffFallbackCombList-r14": BandCombinationListR14;
  };
  "diffFallbackCombReport-r14"?: SimpleValue;
};

type SupportedBandCombinationV1430 = BandCombinationParametersV1430[];

type BandCombinationParametersV1430 = {
  "bandParameterList-v1430"?: BandParametersV1430[];
};

type BandParametersV1430 = {
  "bandParametersDL-v1430"?: MimoCaParametersPerBoBcV1430;
  "ul-256QAM-r14"?: SimpleValue;
  "ul-256QAM-perCC-InfoList-r14"?: Ul256QamPerCcInfoR14[];
};

type MimoCaParametersPerBoBcV1430 = {
  "parametersTM9-v1430"?: never;
  "parametersTM10-v1430"?: never;
};

type Ul256QamPerCcInfoR14 = {
  "ul-256QAM-perCC-r14"?: SimpleValue;
};

type SupportedBandCombinationAddV1430 = BandCombinationParametersV1430[];

type SupportedBandCombinationReducedV1430 = BandCombinationParametersV1430[];

type BandCombinationListR14 = BandCombinationR14[];

type BandCombinationR14 = BandIndicationR14[];

type BandIndicationR14 = {
  "bandEUTRA-r14": FreqBandIndicatorR11;
  "ca-BandwidthClassDL-r14": CaBandwidthClassR10;
  "ca-BandwidthClassUL-r14"?: CaBandwidthClassR10;
};

type UeEutraCapabilityV1440Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1450Ies;
};

type UeEutraCapabilityV1450Ies = {
  "rf-Parameters-v1450"?: never;
  nonCriticalExtension?: UeEutraCapabilityV1460Ies;
};

type UeEutraCapabilityV1460Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1510Ies;
};

type UeEutraCapabilityV1510Ies = {
  "featureSetsEUTRA-r15"?: FeatureSetsEutraR15;
  nonCriticalExtension?: UeEutraCapabilityV1520Ies;
};

type FeatureSetsEutraR15 = {
  "featureSetsDL-r15"?: FeatureSetDlR15[];
  "featureSetsDL-PerCC-r15"?: FeatureSetDlPerCcR15[];
  "featureSetsUL-r15"?: FeatureSetUlR15[];
  "featureSetsUL-PerCC-r15"?: FeatureSetUlPerCcR15[];
  "featureSetsDL-v1550"?: FeatureSetDlV1550[];
};

type FeatureSetDlR15 = {
  "mimo-CA-ParametersPerBoBC-r15"?: MimoCaParametersPerBoBcR15;
  "featureSetPerCC-ListDL-r15"?: FeatureSetDlPerCcIdR15[];
};

type MimoCaParametersPerBoBcR15 = {
  "parametersTM9-r15"?: never;
  "parametersTM10-r15"?: never;
};

type FeatureSetDlPerCcIdR15 = SimpleValue;

type FeatureSetDlPerCcR15 = {
  "fourLayerTM3-TM4-r15"?: SimpleValue;
  "supportedMIMO-CapabilityDL-MRDC-r15"?: MimoCapabilityDlR10;
};

type FeatureSetUlR15 = {
  "featureSetPerCC-ListUL-r15": FeatureSetUlPerCcIdR15[];
};

type FeatureSetUlPerCcIdR15 = SimpleValue;

type FeatureSetUlPerCcR15 = {
  "supportedMIMO-CapabilityUL-r15"?: MimoCapabilityUlR10;
  "ul-256QAM-r15"?: SimpleValue;
};

type FeatureSetDlV1550 = {
  "dl-1024QAM-r15"?: SimpleValue;
};

type UeEutraCapabilityV1520Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1530Ies;
};

type UeEutraCapabilityV1530Ies = {
  "rf-Parameters-v1530"?: RfParametersV1530;
  nonCriticalExtension?: UeEutraCapabilityV1540Ies;
};

type RfParametersV1530 = {
  "supportedBandCombination-v1530"?: SupportedBandCombinationV1530;
  "supportedBandCombinationAdd-v1530"?: SupportedBandCombinationAddV1530;
  "supportedBandCombinationReduced-v1530"?: SupportedBandCombinationReducedV1530;
};

type SupportedBandCombinationV1530 = BandCombinationParametersV1530[];

type BandCombinationParametersV1530 = {
  "bandParameterList-v1530"?: BandParametersV1530[];
};

type BandParametersV1530 = {
  "dl-1024QAM-r15"?: SimpleValue;
};

type SupportedBandCombinationAddV1530 = BandCombinationParametersV1530[];

type SupportedBandCombinationReducedV1530 = BandCombinationParametersV1530[];

type UeEutraCapabilityV1540Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1550Ies;
};

type UeEutraCapabilityV1550Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1560Ies;
};

type UeEutraCapabilityV1560Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1570Ies;
};

type UeEutraCapabilityV1570Ies = {
  "rf-Parameters-v1570"?: RfParametersV1570;
  nonCriticalExtension?: UeEutraCapabilityV15a0Ies;
};

type RfParametersV1570 = {
  "dl-1024QAM-ScalingFactor-r15": SimpleValue;
  "dl-1024QAM-TotalWeightedLayers-r15": SimpleValue;
};

type UeEutraCapabilityV15a0Ies = {
  nonCriticalExtension?: UeEutraCapabilityV1610Ies;
};

type UeEutraCapabilityV1610Ies = {
  "rf-Parameters-v1610"?: never;
  nonCriticalExtension?: UeEutraCapabilityV1630Ies;
};

type UeEutraCapabilityV1630Ies = {
  "rf-Parameters-v1630"?: never;
  nonCriticalExtension?: never;
};
