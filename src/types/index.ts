export type SessionStatus = "completed" | "current" | "open" | "locked";

export type SessionFormat = "frontal" | "virtual" | "external";

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
  facilitator?: string;
}

export interface DigitalTool {
  name: string;
  description: string;
  url?: string;
  icon?: string;
}

export interface Session {
  id: number;
  title: string;
  subtitle: string;
  format: SessionFormat;
  duration: string;
  participants?: string;
  date: string;
  status: SessionStatus;
  location?: string;
  agenda: AgendaItem[];
  digitalTools: DigitalTool[];
  homework: string;
  nextSessionPrep?: string;
  description: string;
}
