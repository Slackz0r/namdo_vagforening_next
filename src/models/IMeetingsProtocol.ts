export interface IMeetingProtocol {
  id: number;
  title: string;
  date: string;
  year: number;
  protocol: IProtocolContent;
}

export interface IProtocolContent {
  intro: string;
  items: IProtocolItem[];
}

export interface IProtocolItem {
  no: string;
  title: string;
  body: string;
}
