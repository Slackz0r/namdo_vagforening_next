export interface INavigationLinks {
  id: number;
  category: string;
  subCategory: ISubLink[];
}

export interface ISubLink {
  href: string;
  title: string;
}
