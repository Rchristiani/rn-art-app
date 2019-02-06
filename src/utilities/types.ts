export interface ArtObject {
  id: string;
  title: string;
  webImage: {
    url: string;
  };
  principalOrFirstMaker: string,
  hasImage: boolean;
}