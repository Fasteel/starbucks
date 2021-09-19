import { IconProps } from ".";

function Pin({ width, height }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="pin_svg__valign-middle"
      aria-hidden="true"
      width={width}
      height={height}
    >
      <path d="M12 11.475c-1.479 0-2.679-1.176-2.679-2.625s1.2-2.625 2.679-2.625c1.479 0 2.679 1.176 2.679 2.625s-1.2 2.625-2.679 2.625M12 1.5c-4.146 0-7.5 3.287-7.5 7.35C4.5 14.363 12 22.5 12 22.5s7.5-8.137 7.5-13.65c0-4.063-3.354-7.35-7.5-7.35" />
    </svg>
  );
}

export default Pin;
