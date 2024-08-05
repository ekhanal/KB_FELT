declare module "@splidejs/react-splide" {
  import { ComponentType, ReactNode } from "react";

  export interface SplideProps {
    options?: Record<string, any>;
    className?: string;
    children?: ReactNode; // Include children prop
  }

  export interface SplideSlideProps {
    className?: string;
    children?: ReactNode; // Include children prop
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}
