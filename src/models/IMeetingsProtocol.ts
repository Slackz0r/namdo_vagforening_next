export interface IMeetingProtocol {
  id: number;
  title: string;
  date: string;
  year: number;
  protocol: IProtocolParagraph[];
}

export interface IProtocolParagraph {
  paragraph: string;
}
