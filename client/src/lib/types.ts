enum FormatEnum {
  VHS = 'VHS',
  DVD = 'DVD',
  Streaming = 'Streaming'
}

export interface IMovie {
  id: number;
  title: string;
  format: FormatEnum;
  length: number;
  releaseYear: number;
  rating: number;
}
