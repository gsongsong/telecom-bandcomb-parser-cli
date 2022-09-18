import { UeEutraCapability } from "./ueEutraCapability";
import { UeMrdcCapability } from "./ueMrdcCapability";
import { UeNrCapability } from "./ueNrCapability";

export type Capabilities = {
  eutra?: UeEutraCapability;
  mrdc?: UeMrdcCapability;
  nr?: UeNrCapability;
};
