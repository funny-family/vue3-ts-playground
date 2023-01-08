import type { IntrinsicElementAttributes, AnchorHTMLAttributes } from 'vue';

type A<Type = IntrinsicElementAttributes> = {
  [Property in keyof Type]: (keyof Type[Property])[];
};

// HTMLAttributes
const htmlAttributes = [
  'innerHTML',
  'class',
  'style',
  'accesskey',
  'contenteditable',
  'contextmenu',
  'dir',
  'draggable',
  'hidden',
  'id',
  'lang',
  'placeholder',
  'spellcheck',
  'tabindex',
  'title',
  'translate',
  'radiogroup',
  'role',
  'about',
  'datatype',
  'inlist',
  'prefix',
  'property',
  'resource',
  'typeof',
  'vocab',
  'autocapitalize',
  'autocorrect',
  'autosave',
  'color',
  'itemprop',
  'itemscope',
  'itemtype',
  'itemid',
  'itemref',
  'results',
  'security',
  'unselectable',
  'inputmode',
  'is'
] as const;

export const a = {
  // a: AnchorHTMLAttributes
  a: [
    'download',
    'href',
    'hreflang',
    'media',
    'ping',
    'rel',
    'target',
    'type',
    'referrerpolicy'
  ],
  // abbr: HTMLAttributes
  abbr: htmlAttributes,
  // address: HTMLAttributes
  address: htmlAttributes,
  // area: AreaHTMLAttributes
  // article: HTMLAttributes
  article: htmlAttributes,
  // aside: HTMLAttributes
  aside: htmlAttributes,
  // audio: AudioHTMLAttributes
  // b: HTMLAttributes
  b: htmlAttributes,
  // base: BaseHTMLAttributes
  // bdi: HTMLAttributes
  bdi: htmlAttributes,
  // bdo: HTMLAttributes
  // blockquote: BlockquoteHTMLAttributes
  // body: HTMLAttributes
  body: htmlAttributes,
  // br: HTMLAttributes
  br: htmlAttributes,
  // button: ButtonHTMLAttributes
  // canvas: CanvasHTMLAttributes
  // caption: HTMLAttributes
  caption: htmlAttributes,
  // cite: HTMLAttributes
  cite: htmlAttributes,
  // code: HTMLAttributes
  code: htmlAttributes,
  // col: ColHTMLAttributes
  // colgroup: ColgroupHTMLAttributes
  // data: DataHTMLAttributes
  // datalist: HTMLAttributes
  datalist: htmlAttributes,
  // dd: HTMLAttributes
  dd: htmlAttributes,
  // del: DelHTMLAttributes
  // details: DetailsHTMLAttributes
  // dfn: HTMLAttributes
  dfn: htmlAttributes,
  // dialog: DialogHTMLAttributes
  // div: HTMLAttributes
  div: htmlAttributes,
  // dl: HTMLAttributes
  dl: htmlAttributes,
  // dt: HTMLAttributes
  dt: htmlAttributes,
  // em: HTMLAttributes
  em: htmlAttributes,
  // embed: EmbedHTMLAttributes
  // fieldset: FieldsetHTMLAttributes
  // figcaption: HTMLAttributes
  figcaption: htmlAttributes,
  // figure: HTMLAttributes
  figure: htmlAttributes,
  // footer: HTMLAttributes
  footer: htmlAttributes,
  // form: FormHTMLAttributes
  // h1: HTMLAttributes
  h1: htmlAttributes,
  // h2: HTMLAttributes
  h2: htmlAttributes,
  // h3: HTMLAttributes
  h3: htmlAttributes,
  // h4: HTMLAttributes
  h4: htmlAttributes,
  // h5: HTMLAttributes
  h5: htmlAttributes,
  // h6: HTMLAttributes
  h6: htmlAttributes,
  // head: HTMLAttributes
  head: htmlAttributes,
  // header: HTMLAttributes
  header: htmlAttributes,
  // hgroup: HTMLAttributes
  hgroup: htmlAttributes,
  // hr: HTMLAttributes
  hr: htmlAttributes,
  // html: HtmlHTMLAttributes
  // i: HTMLAttributes
  i: htmlAttributes,
  // iframe: IframeHTMLAttributes
  // img: ImgHTMLAttributes
  // input: InputHTMLAttributes
  // ins: InsHTMLAttributes
  // kbd: HTMLAttributes
  kbd: htmlAttributes,
  // keygen: KeygenHTMLAttributes
  // label: LabelHTMLAttributes
  // legend: HTMLAttributes
  legend: htmlAttributes,
  // li: LiHTMLAttributes
  // link: LinkHTMLAttributes
  // main: HTMLAttributes
  main: htmlAttributes,
  // map: MapHTMLAttributes
  // mark: HTMLAttributes
  // menu: MenuHTMLAttributes
  // meta: MetaHTMLAttributes
  // meter: MeterHTMLAttributes
  // nav: HTMLAttributes
  nav: htmlAttributes,
  // noindex: HTMLAttributes
  noindex: htmlAttributes,
  // noscript: HTMLAttributes
  noscript: htmlAttributes,
  // object: ObjectHTMLAttributes
  // ol: OlHTMLAttributes
  // optgroup: OptgroupHTMLAttributes
  // option: OptionHTMLAttributes
  // output: OutputHTMLAttributes
  // p: HTMLAttributes
  p: htmlAttributes,
  // param: ParamHTMLAttributes
  // picture: HTMLAttributes
  picture: htmlAttributes,
  // pre: HTMLAttributes
  pre: htmlAttributes,
  // progress: ProgressHTMLAttributes
  // q: QuoteHTMLAttributes
  // rp: HTMLAttributes
  rp: htmlAttributes,
  // rt: HTMLAttributes
  rt: htmlAttributes,
  // ruby: HTMLAttributes
  ruby: htmlAttributes,
  // s: HTMLAttributes
  s: htmlAttributes,
  // samp: HTMLAttributes
  samp: htmlAttributes,
  // script: ScriptHTMLAttributes
  // section: HTMLAttributes
  section: htmlAttributes,
  // select: SelectHTMLAttributes
  // small: HTMLAttributes
  small: htmlAttributes,
  // source: SourceHTMLAttributes
  // span: HTMLAttributes
  span: htmlAttributes,
  // strong: HTMLAttributes
  strong: htmlAttributes,
  // style: StyleHTMLAttributes
  // sub: HTMLAttributes
  sub: htmlAttributes,
  // summary: HTMLAttributes
  summary: htmlAttributes,
  // sup: HTMLAttributes
  sup: htmlAttributes,
  // table: TableHTMLAttributes
  // template: HTMLAttributes
  template: htmlAttributes,
  // tbody: HTMLAttributes
  tbody: htmlAttributes,
  // td: TdHTMLAttributes
  // textarea: TextareaHTMLAttributes
  // tfoot: HTMLAttributes
  tfoot: htmlAttributes,
  // th: ThHTMLAttributes
  // thead: HTMLAttributes
  thead: htmlAttributes,
  // time: TimeHTMLAttributes
  // title: HTMLAttributes
  title: htmlAttributes,
  // tr: HTMLAttributes
  tr: htmlAttributes,
  // track: TrackHTMLAttributes
  // u: HTMLAttributes
  u: htmlAttributes,
  // ul: HTMLAttributes
  ul: htmlAttributes,
  // var: HTMLAttributes
  var: htmlAttributes,
  // video: VideoHTMLAttributes
  // wbr: HTMLAttributes
  wbr: htmlAttributes
  // webview: WebViewHTMLAttributes

  // // SVG
  // svg: SVGAttributes

  // animate: SVGAttributes
  // animateMotion: SVGAttributes
  // animateTransform: SVGAttributes
  // circle: SVGAttributes
  // clipPath: SVGAttributes
  // defs: SVGAttributes
  // desc: SVGAttributes
  // ellipse: SVGAttributes
  // feBlend: SVGAttributes
  // feColorMatrix: SVGAttributes
  // feComponentTransfer: SVGAttributes
  // feComposite: SVGAttributes
  // feConvolveMatrix: SVGAttributes
  // feDiffuseLighting: SVGAttributes
  // feDisplacementMap: SVGAttributes
  // feDistantLight: SVGAttributes
  // feDropShadow: SVGAttributes
  // feFlood: SVGAttributes
  // feFuncA: SVGAttributes
  // feFuncB: SVGAttributes
  // feFuncG: SVGAttributes
  // feFuncR: SVGAttributes
  // feGaussianBlur: SVGAttributes
  // feImage: SVGAttributes
  // feMerge: SVGAttributes
  // feMergeNode: SVGAttributes
  // feMorphology: SVGAttributes
  // feOffset: SVGAttributes
  // fePointLight: SVGAttributes
  // feSpecularLighting: SVGAttributes
  // feSpotLight: SVGAttributes
  // feTile: SVGAttributes
  // feTurbulence: SVGAttributes
  // filter: SVGAttributes
  // foreignObject: SVGAttributes
  // g: SVGAttributes
  // image: SVGAttributes
  // line: SVGAttributes
  // linearGradient: SVGAttributes
  // marker: SVGAttributes
  // mask: SVGAttributes
  // metadata: SVGAttributes
  // mpath: SVGAttributes
  // path: SVGAttributes
  // pattern: SVGAttributes
  // polygon: SVGAttributes
  // polyline: SVGAttributes
  // radialGradient: SVGAttributes
  // rect: SVGAttributes
  // stop: SVGAttributes
  // switch: SVGAttributes
  // symbol: SVGAttributes
  // text: SVGAttributes
  // textPath: SVGAttributes
  // tspan: SVGAttributes
  // use: SVGAttributes
  // view: SVGAttributes
} as const;
