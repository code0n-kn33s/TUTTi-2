const design_svg = [
    {
        title: 'Изогнутая линия',
        subtitle: 'css и svg',
        text: '',
        img: 'ease.png',
        code: `
// NATIVE решение с использованием linearGradient SVG

.container {
  width: 500px;
  height: 200px;
  background:linear-gradient(to bottom right, #de350b, #0065ff);
}
svg {
  width:100%;
}
<div class="container">
  <svg mlns='http://www.w3.org/2000/svg' viewBox="0 0 64 64">
    <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ad3" />
      <stop offset="100%" stop-color="#add" />
    </linearGradient>
  </defs>
    <path d='M0 10 C30 28 38 0 64 10 L64 0 L0 0 Z'  fill="url(#grad)"/>
  </svg>
</div>

// SVG
<svg width="1440px" height="204px" viewBox="0 0 1440 204" version="1.1" class="homepage__features__wave">
  <defs>
    <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">
      <feoffset dx="0" dy="-4" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
      <fegaussianblur stdDeviation="0" in="shadowOffsetOuter1" result="shadowBlurOuter1"></fegaussianblur>
      <fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.056 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></fecolormatrix>
      <femerge>
        <femergenode in="shadowMatrixOuter1"></femergenode>
        <femergenode in="SourceGraphic"></femergenode>
      </femerge>
    </filter>
  </defs>
  <path d="M6.05022984e-08,204 C0.00535896441,203.997351 356.00274,28.000572 720,104 C1084,180 1440,4 1440,4 L0,4 L0,204 L0,4 L1440,4 L1440,204 L0,204 Z" fill="#F9F9F9" filter="url(#filter-1)"></path>
</svg>
        `,
    },

]
