export type BooksDTO = Book[]
export type BookDTO = BookDetails;

export interface Book {
  kind: string,
  full_sort_key: string,
  title: string,
  url: string,
  cover_color: string,
  author: string,
  cover: string,
  epoch: string,
  href: string,
  has_audio: boolean,
  genre: string,
  simple_thumb: string,
  slug: string,
  cover_thumb: string,
  liked: any | null
}

export interface InformationDetails {
  url?: string,
  href?: string,
  name: string,
  slug?: string,
}

export interface FragmentData {
  title: string,
  /**
   * HTML
   */
  html: string
}

export interface Media {
  url: string,
  director: string,
  type: string,
  name: string,
  artist: string,
}



export interface BookDetails {
  title: string,
  url: string,
  language: string,
  epochs: InformationDetails[]
  genres: InformationDetails[]
  kinds: InformationDetails[]
  authors: InformationDetails[]
  translators: InformationDetails[]
  fragment_data: string,
  children: Book[],
  parent: Book,
  preview: boolean,
  epub: string,
  mobi: string,
  pdf: string,
  html: string,
  txt: string,
  fb2: string,
  xml: string,
  media: Media[],
  audio_length: string,
  cover_color: string,
  simple_cover: string,
  cover_thumb: string,
  cover: string,
  simple_thumb: string,
  isbn_pdf: string,
  isbn_epub: string,
  isbn_mobi: string,
}
