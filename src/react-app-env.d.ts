/// <reference types="react-scripts" />

// Added to import videos in components
declare module "*.mp4" {
  const src: string;
  export default src;
}
