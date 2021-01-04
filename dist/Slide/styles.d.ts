interface ContainerProps {
    spaceBetweenSlides?: string;
    containerBorderRadius?: string;
}
export declare const Container: import("styled-components").StyledComponent<"div", any, ContainerProps, never>;
interface ImageProps {
    img: string;
    focusSlide?: boolean;
    slideFocusColor?: string;
    slideBorderRadius?: string;
}
export declare const Image: import("styled-components").StyledComponent<"div", any, ImageProps, never>;
export {};
