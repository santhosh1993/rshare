export interface ShareProjectInterface {
  rconName: string
  phoneNo?: string
  userName: string
  rconId: string
}

export interface ShareProjectCardInterFace extends ShareProjectInterface {
  redirectionUrl: string;
}