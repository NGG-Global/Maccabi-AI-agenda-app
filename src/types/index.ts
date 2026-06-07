export type SessionStatus = "completed" | "current" | "locked";

export type SessionFormat = "frontal" | "virtual" | "self-learning";

export interface AgendaTool {
  name: string;
  description: string;
  buttonLabel: string;
  url: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  description: string;
  facilitator?: string;
  tool?: AgendaTool;
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
  date: string;
  status: SessionStatus;
  agenda: AgendaItem[];
  digitalTools: DigitalTool[];
  homework: string;
  nextSessionPrep?: string;
  description: string;
}
