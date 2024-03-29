interface Node {
    atom: string;
    nodes: Node[];
    type: string;
    filename?: string;
    toString(): string;
    toHtml(): string;
}

declare class Element implements Node {
    atom: string;
    type: string;
    filename?: string;
    nodes: Node[];
    attributes: {};
    constructor(el: any);
    toString(): string;
    toHtml(): string;
}
declare function NewElement(atom: string, attrs?: any): Element;

declare class Cmd extends Element {
    expected_exit: number;
    args?: string[];
    timeout?: string;
    constructor(c: any);
}

declare class Document extends Element {
    id: string;
    root: string;
    title: string;
    filename: string;
    section_id?: number;
    snippets?: {};
    parser?: {
        root: string;
        snippets?: {};
        section?: number;
    };
    constructor(el: any);
    toString(): string;
    toHtml(): string;
}

type NodeParseFn = (n: any) => Node[];
declare class Parser {
    handlers: {
        [key: string]: NodeParseFn;
    };
    constructor();
    parse(data: any): Document;
    parseError(data: any): any;
    private parseNodes;
}

declare class CmdError {
    args: string[];
    env: string[];
    error: any;
    exit: number;
    filename: string;
    output: string;
    root: string;
    constructor(data: any, parser?: Parser);
}

declare class CmdResult extends Element {
    result: {
        args: string[];
        dir: string;
        stdout: string;
        duration: number;
        exit: number;
        stderr: string;
    };
    constructor(cr: any);
}

declare class Toc extends Element {
    ids: string[];
    nodes: Node[];
    constructor();
    perform(doc: Document, gen?: () => string): void;
}

declare class Module {
    id: string;
    filepath: string;
    dir: string;
    name: string;
    parser: Parser;
    doc: Document;
    toc: Toc;
    constructor(doc: any, parser?: Parser);
    title(): string;
    toString(): string;
}

declare function EmptyModule(): Module;

declare class ExecuteError {
    filename: string;
    root: string;
    error: any;
    constructor(data: any, parser?: Parser);
}

declare class FencedCode extends Element {
    lang: string;
    constructor(fc: any);
}

declare class FigCaption extends Element {
    constructor(fc: any);
}

declare class Figure extends Element {
    pos: number;
    style?: string;
    section_id?: number;
    constructor(f: any);
}

declare class Heading extends Element {
    text: string;
    level: number;
    constructor(n: any);
}

declare class Image extends Element {
    constructor(img: any);
}

declare class Include extends Element {
    dir?: string;
    constructor(el: any);
}

declare class InlineCode extends Element {
    constructor(t: any);
}

declare class LI extends Element {
    constructor(li: any);
}

declare class Link extends Element {
    url: string;
    constructor(l: any);
}
declare function NewLink(url: string, attrs?: any): Link;

declare class Modules {
    current: Module;
    private mods;
    constructor();
    add(mod: Module): Module[];
    list(): Module[];
    get(file: string): Module;
}

declare class Text {
    type: string;
    text: string;
    atom: string;
    nodes: Node[];
    constructor(t: any);
    toString(): string;
    toHtml(): string;
}
declare function NewText(text: string): Text;

declare class UL extends Element {
    constructor(ul: any);
}
declare function NewUL(attrs?: any): UL;

declare class OL extends Element {
    constructor(ol: any);
}

declare class Page extends Element {
    constructor(n: any);
}

declare class ParseError {
    filename: string;
    root: string;
    error: any;
    constructor(data: any, parser?: Parser);
}

declare class Ref extends Element {
    constructor(r: any);
}

declare class Snippet extends Element {
    content: string;
    lang: string;
    name: string;
    start?: number;
    end?: number;
    constructor(s: any);
    toString(): string;
}

declare class SourceCode extends Element {
    lang: string;
    constructor(sc: any);
}

declare class Table extends Element {
    constructor(t: any);
}

type VisitNode = (n: Node) => void;

declare function VisitAtom(atom: string | string[], n: Node, fn: VisitNode): void;

declare let atoms: {
    A: string;
    Abbr: string;
    Accept: string;
    AcceptCharset: string;
    Accesskey: string;
    Acronym: string;
    Action: string;
    Address: string;
    Align: string;
    Allowfullscreen: string;
    Allowpaymentrequest: string;
    Allowusermedia: string;
    Alt: string;
    Annotation: string;
    AnnotationXml: string;
    Applet: string;
    Area: string;
    Article: string;
    As: string;
    Aside: string;
    Async: string;
    Audio: string;
    Autocomplete: string;
    Autofocus: string;
    Autoplay: string;
    B: string;
    Base: string;
    Basefont: string;
    Bdi: string;
    Bdo: string;
    Bgsound: string;
    Big: string;
    Blink: string;
    Blockquote: string;
    Body: string;
    Br: string;
    Button: string;
    Canvas: string;
    Caption: string;
    Center: string;
    Challenge: string;
    Charset: string;
    Checked: string;
    Cite: string;
    Class: string;
    Cmd: string;
    Code: string;
    Col: string;
    Colgroup: string;
    Color: string;
    Cols: string;
    Colspan: string;
    Command: string;
    Content: string;
    Contenteditable: string;
    Contextmenu: string;
    Controls: string;
    Coords: string;
    Crossorigin: string;
    Data: string;
    Datalist: string;
    Datetime: string;
    Dd: string;
    Default: string;
    Defer: string;
    Del: string;
    Desc: string;
    Details: string;
    Dfn: string;
    Dialog: string;
    Dir: string;
    Dirname: string;
    Disabled: string;
    Div: string;
    Dl: string;
    Download: string;
    Draggable: string;
    Dropzone: string;
    Dt: string;
    Em: string;
    Embed: string;
    Enctype: string;
    Face: string;
    Fieldset: string;
    Figcaption: string;
    Figure: string;
    File: string;
    Filegroup: string;
    Font: string;
    Footer: string;
    For: string;
    ForeignObject: string;
    Foreignobject: string;
    Form: string;
    Formaction: string;
    Formenctype: string;
    Formmethod: string;
    Formnovalidate: string;
    Formtarget: string;
    Frame: string;
    Frameset: string;
    Go: string;
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
    H6: string;
    HTML: string;
    HTTPEquiv: string;
    Head: string;
    Header: string;
    Headers: string;
    Headings: string[];
    Height: string;
    Hgroup: string;
    Hidden: string;
    High: string;
    Hr: string;
    Href: string;
    Hreflang: string;
    I: string;
    ID: string;
    Icon: string;
    Iframe: string;
    Image: string;
    Img: string;
    Include: string;
    Input: string;
    Inputmode: string;
    Ins: string;
    Integrity: string;
    Is: string;
    Isindex: string;
    Ismap: string;
    Itemid: string;
    Itemprop: string;
    Itemref: string;
    Itemscope: string;
    Itemtype: string;
    Kbd: string;
    Keygen: string;
    Keytype: string;
    Kind: string;
    Label: string;
    Lang: string;
    Legend: string;
    Li: string;
    Link: string;
    List: string;
    Listing: string;
    Loop: string;
    Low: string;
    Main: string;
    Malignmark: string;
    Manifest: string;
    Map: string;
    Mark: string;
    Marquee: string;
    Math: string;
    Max: string;
    Maxlength: string;
    Media: string;
    Mediagroup: string;
    Menu: string;
    Menuitem: string;
    Meta: string;
    Metadata: string;
    Meter: string;
    Method: string;
    Mglyph: string;
    Mi: string;
    Min: string;
    Minlength: string;
    Mn: string;
    Mo: string;
    Ms: string;
    Mtext: string;
    Multiple: string;
    Muted: string;
    Name: string;
    Nav: string;
    Nobr: string;
    Noembed: string;
    Noframes: string;
    Nomodule: string;
    Nonce: string;
    Noscript: string;
    Novalidate: string;
    Object: string;
    Ol: string;
    Onabort: string;
    Onafterprint: string;
    Onautocomplete: string;
    Onautocompleteerror: string;
    Onauxclick: string;
    Onbeforeprint: string;
    Onbeforeunload: string;
    Onblur: string;
    Oncancel: string;
    Oncanplay: string;
    Oncanplaythrough: string;
    Onchange: string;
    Onclick: string;
    Onclose: string;
    Oncontextmenu: string;
    Oncopy: string;
    Oncuechange: string;
    Oncut: string;
    Ondblclick: string;
    Ondrag: string;
    Ondragend: string;
    Ondragenter: string;
    Ondragexit: string;
    Ondragleave: string;
    Ondragover: string;
    Ondragstart: string;
    Ondrop: string;
    Ondurationchange: string;
    Onemptied: string;
    Onended: string;
    Onerror: string;
    Onfocus: string;
    Onhashchange: string;
    Oninput: string;
    Oninvalid: string;
    Onkeydown: string;
    Onkeypress: string;
    Onkeyup: string;
    Onlanguagechange: string;
    Onload: string;
    Onloadeddata: string;
    Onloadedmetadata: string;
    Onloadend: string;
    Onloadstart: string;
    Onmessage: string;
    Onmessageerror: string;
    Onmousedown: string;
    Onmouseenter: string;
    Onmouseleave: string;
    Onmousemove: string;
    Onmouseout: string;
    Onmouseover: string;
    Onmouseup: string;
    Onmousewheel: string;
    Onoffline: string;
    Ononline: string;
    Onpagehide: string;
    Onpageshow: string;
    Onpaste: string;
    Onpause: string;
    Onplay: string;
    Onplaying: string;
    Onpopstate: string;
    Onprogress: string;
    Onratechange: string;
    Onrejectionhandled: string;
    Onreset: string;
    Onresize: string;
    Onscroll: string;
    Onsecuritypolicyviolation: string;
    Onseeked: string;
    Onseeking: string;
    Onselect: string;
    Onshow: string;
    Onsort: string;
    Onstalled: string;
    Onstorage: string;
    Onsubmit: string;
    Onsuspend: string;
    Ontimeupdate: string;
    Ontoggle: string;
    Onunhandledrejection: string;
    Onunload: string;
    Onvolumechange: string;
    Onwaiting: string;
    Onwheel: string;
    Open: string;
    Optgroup: string;
    Optimum: string;
    Option: string;
    Output: string;
    P: string;
    Page: string;
    Param: string;
    Pattern: string;
    Picture: string;
    Ping: string;
    Placeholder: string;
    Plaintext: string;
    Playsinline: string;
    Poster: string;
    Pre: string;
    Preload: string;
    Progress: string;
    Prompt: string;
    Public: string;
    Q: string;
    Radiogroup: string;
    Rb: string;
    Readonly: string;
    Ref: string;
    Referrerpolicy: string;
    Rel: string;
    Required: string;
    Reversed: string;
    Rows: string;
    Rowspan: string;
    Rp: string;
    Rt: string;
    Rtc: string;
    Ruby: string;
    S: string;
    Samp: string;
    Sandbox: string;
    Scope: string;
    Scoped: string;
    Script: string;
    Seamless: string;
    Section: string;
    Select: string;
    Selected: string;
    Shape: string;
    Size: string;
    Sizes: string;
    Slot: string;
    Small: string;
    Sortable: string;
    Sorted: string;
    Source: string;
    Spacer: string;
    Span: string;
    Spellcheck: string;
    Src: string;
    Srcdoc: string;
    Srclang: string;
    Srcset: string;
    Start: string;
    Step: string;
    Strike: string;
    Strong: string;
    Style: string;
    Sub: string;
    Summary: string;
    Sup: string;
    Svg: string;
    System: string;
    Tabindex: string;
    Table: string;
    Target: string;
    Tbody: string;
    Td: string;
    Template: string;
    Textarea: string;
    Tfoot: string;
    Th: string;
    Thead: string;
    Time: string;
    Title: string;
    Tr: string;
    Track: string;
    Translate: string;
    Tt: string;
    Type: string;
    Typemustmatch: string;
    U: string;
    Ul: string;
    Unknown: string;
    Updateviacache: string;
    Usemap: string;
    Value: string;
    Var: string;
    Video: string;
    Wbr: string;
    Width: string;
    Workertype: string;
    Wrap: string;
    Xmp: string;
};

declare let gotypes: {
    Atom: string;
    Atomable: string;
    AtomableNode: string;
    AttrNode: string;
    Attributes: string;
    Body: string;
    Cmd: string;
    CmdResult: string;
    Comment: string;
    Document: string;
    Documents: string;
    Element: string;
    EmptyableNode: string;
    ExecutableNode: string;
    FencedCode: string;
    Figcaption: string;
    Figure: string;
    HTMLNode: string;
    Heading: string;
    Image: string;
    Include: string;
    InlineCode: string;
    LI: string;
    Link: string;
    MDNode: string;
    Metadata: string;
    Node: string;
    Nodes: string;
    Now: string;
    OL: string;
    Page: string;
    Paragraph: string;
    Parser: string;
    PostExecuter: string;
    PostParser: string;
    PreExecuter: string;
    PreParser: string;
    PreParsers: string;
    Ref: string;
    RefProcessor: string;
    Snippet: string;
    Snippets: string;
    SourceCode: string;
    TD: string;
    TH: string;
    THead: string;
    TR: string;
    Table: string;
    Tag: string;
    Tags: string;
    Text: string;
    ToC: string;
    UL: string;
    Var: string;
    WaitGrouper: string;
};

export { Cmd, CmdError, CmdResult, Document, Element, EmptyModule, ExecuteError, FencedCode, FigCaption, Figure, Heading, Image, Include, InlineCode, LI, Link, Module, Modules, NewElement, NewLink, NewText, NewUL, type Node, OL, Page, ParseError, Parser, Ref, Snippet, SourceCode, Table, Text, Toc, UL, VisitAtom, type VisitNode, atoms, gotypes };
