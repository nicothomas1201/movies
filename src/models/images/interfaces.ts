export interface IMovieImages {
  backdrops: IBackdrop[]
  id: number
  logos: ILogo[]
  posters: IPoster[]
}

export interface IBackdrop {
  aspect_ratio: number
  height: number
  iso_639_1?: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export interface ILogo {
  aspect_ratio: number
  height: number
  iso_639_1: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export interface IPoster {
  aspect_ratio: number
  height: number
  iso_639_1?: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export interface IMovieImagesRepository {
  getLogoPath(movieId: number): Promise<string>
}
