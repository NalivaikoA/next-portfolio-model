const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/next-portfolio-model" : "";

export const images = [
  `${basePath}/images/gallery/photo1.jpg`,
  `${basePath}/images/gallery/photo2.jpg`,
  `${basePath}/images/gallery/photo3.jpg`,
  `${basePath}/images/gallery/photo4.jpg`,
  `${basePath}/images/gallery/photo5.jpg`,
  `${basePath}/images/gallery/photo6.jpg`,
  `${basePath}/images/gallery/photo7.jpg`,
  `${basePath}/images/gallery/photo8.jpg`,
  `${basePath}/images/gallery/photo9.jpg`,
  `${basePath}/images/gallery/photo10.jpg`,
  `${basePath}/images/gallery/photo11.jpg`,
  `${basePath}/images/gallery/photo12.jpg`,
  `${basePath}/images/gallery/photo13.jpg`,
  `${basePath}/images/gallery/photo14.jpg`,
];

export const responsive = {
  ultra_wide: {
    breakpoint: { max: 5000, min: 3500 },
    items: 7,
    partialVisibilityGutter: 50,
  },
  desktop_xxl: {
    breakpoint: { max: 3499, min: 3001 },
    items: 6,
    partialVisibilityGutter: 45,
  },
  desktop_xl: {
    breakpoint: { max: 3000, min: 2700 },
    items: 5,
    partialVisibilityGutter: 45,
  },
  desktop_l: {
    breakpoint: { max: 2699, min: 2200 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  desktop_m: {
    breakpoint: { max: 2199, min: 1920 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  laptop: {
    breakpoint: { max: 1919, min: 1600 },
    items: 3,
    partialVisibilityGutter: 35,
  },
  laptop_sm: {
    breakpoint: { max: 1599, min: 1366 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  tablet_l: {
    breakpoint: { max: 1365, min: 1024 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  tablet_m: {
    breakpoint: { max: 1023, min: 768 },
    items: 2,
    partialVisibilityGutter: 25,
  },
  tablet_sm: {
    breakpoint: { max: 767, min: 600 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile_l: {
    breakpoint: { max: 599, min: 480 },
    items: 1,
  },
  mobile_m: {
    breakpoint: { max: 479, min: 360 },
    items: 1,
  },
  mobile_s: {
    breakpoint: { max: 359, min: 0 },
    items: 1,
  },
};
