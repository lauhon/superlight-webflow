export interface MailjetContactResponse {
  Count: number;
  Data: Datum[];
  Total: number;
}

export interface MailjetContact {
  ID: number;
  IsExcludedFromCampaigns: boolean;
  Name: string;
  CreatedAt: string;
  DeliveredCount: number;
  Email: string;
  ExclusionFromCampaignsUpdatedAt: string;
  IsOptInPending: boolean;
  IsSpamComplaining: boolean;
  LastActivityAt: string;
  LastUpdateAt: string;
}

export interface Datum {
  IsExcludedFromCampaigns: boolean;
  Name: string;
  CreatedAt: Date;
  DeliveredCount: number;
  Email: string;
  ExclusionFromCampaignsUpdatedAt: Date;
  ID: number;
  IsOptInPending: boolean;
  IsSpamComplaining: boolean;
  LastActivityAt: Date;
  LastUpdateAt: Date;
  UnsubscribedAt: Date;
  UnsubscribedBy: Date;
}

export interface MailjetError {
  ErrorInfo: string;
  ErrorMessage: string;
  StatusCode: number;
}

export interface MailjetSendRequest {
  Messages: MailjetMessage[];
}

export interface MailjetMessage {
  From?: MailjetEmail;
  To: MailjetEmail[];
  Subject: string;
  TextPart?: string;
  HTMLPart?: string;
  TemplateID?: number;
  CustomCampaign?: string;
  TemplateLanguage?: boolean;
  DeduplicateCampaign?: boolean;
  Variables: unknown;
}

export interface MailjetEmail {
  Email: string;
  Name: string;
}
