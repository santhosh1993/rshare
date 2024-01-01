import { ShareCardInterface } from "@src/components/shareCard/shareCard";

export interface ShareProjectInterface extends ShareCardInterface {
}

export interface ShareProjectCardInterFace extends ShareCardInterface {
  redirectionUrl: string;
}