
export type UserIdentity = {
  fullName: string;
  phoneNumber: string;
  telegramHandle?: string;
  province: string;
  city: string;
  areaDetail: string;
};

export type UsageType = {
  home: boolean;
  freelance: boolean;
  trading: boolean;
  server: boolean;
  streaming: boolean;
  enterprise: boolean;
};

export type CurrentStatus = {
  operator: string;
  downloadSpeed: string;
  ping: string;
  mainIssue: 'filtering' | 'instability' | 'low_speed' | 'high_ping' | 'none';
};

export type InstallationDetails = {
  buildingType: 'apartment' | 'villa' | 'office' | 'industrial';
  unitFloor: string;
  totalFloors: string;
  roofAccess: 'easy' | 'needs_key' | 'impossible';
  outdoorSpace: 'roof' | 'terrace' | 'yard';
  powerOnRoof: 'yes' | 'no' | 'unknown';
  cableEstimate: 'under_20m' | '20_50m' | 'over_50m';
};

export type Expectations = {
  minSpeed: string;
  stabilityImportance: 'critical' | 'high' | 'medium';
  staticIpNeeded: 'yes' | 'no' | 'consult';
};

export type Scheduling = {
  preferredDays: string[];
  timeSlot: string;
  description?: string;
};

export type FormData = {
  identity: UserIdentity;
  usage: UsageType;
  currentStatus: CurrentStatus;
  installation: InstallationDetails;
  expectations: Expectations;
  scheduling: Scheduling;
  confirmed: boolean;
};

export enum FormStep {
  Identity = 0,
  TechnicalUsage = 1,
  CurrentNetwork = 2,
  PhysicalFeasibility = 3,
  Expectations = 4,
  Scheduling = 5,
  Review = 6,
  Success = 7
}

export const IRAN_PROVINCES = [
  "تهران", "البرز", "اصفهان", "فارس", "خراسان رضوی", "آذربایجان شرقی", "مازندران", "گیلان", "خوزستان", "هرمزگان", "یزد", "کرمان", "بوشهر", "سمنان", "قم", "قزوین", "مرکزی", "همدان", "زنجان", "اردبیل", "کرمانشاه", "کردستان", "لرستان", "سیستان و بلوچستان", "گلستان", "ایلام", "خراسان شمالی", "خراسان جنوبی", "چهارمحال و بختیاری", "کهگیلویه و بویراحمد", "آذربایجان غربی"
];
