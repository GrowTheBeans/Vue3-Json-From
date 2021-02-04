export const SvgIocn = (type) => (
  <svg class="icon" aria-hidden="true">
    <use xlink:href={`#icon-${type}`} />
  </svg>
);
