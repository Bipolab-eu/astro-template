interface Formats {
  url: string;
  width: number;
  height: number;
}

interface MediaFormats {
  thumbnail: Formats,
  large: Formats,
  xsmall: Formats,
  small: Formats,
  medium: Formats,
  xlarge: Formats,
}

interface Media {
 alternativeText: string,
 width: number,
 height: number,
 formats: MediaFormats,
 url: string,
}

interface Button {
	label: string,
	url: string
}

export interface CallToAction {
  eyebrow: string,
}

export interface Faq {
  eyebrow: string,
  title: string,
  subtitle: string,
}

export interface Feature {
  eyebrow: string,
}

export interface Header {
  cover: Media,
	eyebrow: string,
	title: string,
	description: string,
}

export interface Hero {
	cover: Media,
	eyebrow: string,
	title: string,
	description: string,
	actions: Button[];
}

export interface LogoCLoud {
  eyebrow: string,
  title: string,
  subtitle: string,
}

export interface Newsletter {
  cover: Media,
  title: string,
  subtitle: string,
  variant: 'Subscribe' | 'Unsubscribe',
}

export interface Team {
  eyebrow: string,
  title: string,
  subtitle: string,
}