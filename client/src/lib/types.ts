export enum FormatEnum {
  VHS = 'VHS',
  DVD = 'DVD',
  Streaming = 'Streaming'
}

export interface Movie {
  title: string;
  format: FormatEnum;
  length: number;
  releaseYear: number;
  rating: number;
}

export interface DBMovie extends Movie {
  id: number;
}
