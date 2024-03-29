import { v4 } from 'uuid';
import path from 'path-browserify';

let gotypes = {
    Atom: "hype.Atom",
    Atomable: "hype.Atomable",
    AtomableNode: "hype.AtomableNode",
    AttrNode: "hype.AttrNode",
    Attributes: "hype.Attributes",
    Body: "hype.Body",
    Cmd: "hype.Cmd",
    CmdResult: "hype.CmdResult",
    Comment: "hype.Comment",
    Document: "hype.Document",
    Documents: "hype.Documents",
    Element: "hype.Element",
    EmptyableNode: "hype.EmptyableNode",
    ExecutableNode: "hype.ExecutableNode",
    FencedCode: "hype.FencedCode",
    Figcaption: "hype.Figcaption",
    Figure: "hype.Figure",
    HTMLNode: "hype.HTMLNode",
    Heading: "hype.Heading",
    Image: "hype.Image",
    Include: "hype.Include",
    InlineCode: "hype.InlineCode",
    LI: "hype.LI",
    Link: "hype.Link",
    MDNode: "hype.MDNode",
    Metadata: "hype.Metadata",
    Node: "hype.Node",
    Nodes: "hype.Nodes",
    Now: "hype.Now",
    OL: "hype.OL",
    Page: "hype.Page",
    Paragraph: "hype.Paragraph",
    Parser: "hype.Parser",
    PostExecuter: "hype.PostExecuter",
    PostParser: "hype.PostParser",
    PreExecuter: "hype.PreExecuter",
    PreParser: "hype.PreParser",
    PreParsers: "hype.PreParsers",
    Ref: "hype.Ref",
    RefProcessor: "hype.RefProcessor",
    Snippet: "hype.Snippet",
    Snippets: "hype.Snippets",
    SourceCode: "hype.SourceCode",
    TD: "hype.TD",
    TH: "hype.TH",
    THead: "hype.THead",
    TR: "hype.TR",
    Table: "hype.Table",
    Tag: "hype.Tag",
    Tags: "hype.Tags",
    Text: "hype.Text",
    ToC: "hype.ToC",
    UL: "hype.UL",
    Var: "hype.Var",
    WaitGrouper: "hype.WaitGrouper",
};
let goerrors = {
    CmdError: "hype.CmdError",
    ErrAttrEmpty: "hype.ErrAttrEmpty",
    ErrAttrNotFound: "hype.ErrAttrNotFound",
    ErrIsNil: "hype.ErrIsNil",
    ExecuteError: "hype.ExecuteError",
    ParseError: "hype.ParseError",
    PostExecuteError: "hype.PostExecuteError",
    PostParseError: "hype.PostParseError",
    PreExecuteError: "hype.PreExecuteError",
    PreParseError: "hype.PreParseError",
};

class Element {
    constructor(el) {
        this.attributes = {};
        this.atom = el.atom;
        this.type = el.type;
        this.filename = el.file;
        this.nodes = el.nodes ? el.nodes : [];
        this.attributes = el.attributes ? el.attributes : {};
        if (this.attributes === undefined) {
            this.attributes = {};
        }
    }
    toString() {
        var _a;
        let s = "";
        (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach((n) => {
            if (n === undefined)
                return;
            if (Array.isArray(n)) {
                n.forEach((n) => {
                    s += n.toString();
                });
            }
            else {
                s += n.toString();
            }
        });
        if (this.atom === undefined)
            return s;
        let tag = `<${this.atom}`;
        let ats = this.attributes ? this.attributes : {};
        for (let [key, value] of Object.entries(ats)) {
            tag += ` ${key}="${value}"`;
        }
        tag += `>${s}</${this.atom}>`;
        return tag;
    }
    toHtml() {
        return this.toString() + "\n";
    }
}
function NewElement(atom, attrs) {
    return new Element({
        atom: atom,
        nodes: [],
        type: gotypes.Element,
        attributes: attrs,
    });
}

class Cmd extends Element {
    constructor(c) {
        super(c);
        this.expected_exit = c.expected_exit;
        this.args = c.args ? c.args : [];
        this.timeout = c.timeout ? c.timeout : "30s";
    }
}

class CmdResult extends Element {
    constructor(cr) {
        super(cr);
        this.result = cr.result;
    }
}

class Document extends Element {
    constructor(el) {
        super(el);
        this.id = "";
        this.filename = "module.md";
        this.root = el.root;
        this.title = el.title;
        this.parser = el.parser;
        this.filename = el.file;
        if (this.filename === undefined) {
            this.filename = "module.md";
        }
        this.id = el.id ? el.id : v4();
        this.nodes = el.nodes;
    }
    toString() {
        var _a;
        let s = "";
        (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach((n) => {
            if (Array.isArray(n)) {
                n.forEach((n) => {
                    s += n.toString();
                });
            }
            else {
                s += n.toString();
            }
        });
        return s;
    }
    toHtml() {
        var _a;
        let s = "";
        (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach((n) => {
            s += n.toHtml();
        });
        return s;
    }
}

class ExecuteError {
    constructor(data, parser) {
        this.filename = data.filename;
        this.root = data.root;
        parser = parser || new Parser();
        this.error = parser.parseError(data.err);
    }
}

class FencedCode extends Element {
    constructor(fc) {
        super(fc);
        this.lang = fc.lang;
    }
}

class FigCaption extends Element {
    constructor(fc) {
        super(fc);
    }
}

class Figure extends Element {
    constructor(f) {
        super(f);
        if (f.style === "") {
            f.style = "listing";
        }
        if (f.pos < 1) {
            f.pos = 1;
        }
        f.section_id ? f.section_id : 1;
        this.pos = f.pos;
        this.style = f.style;
        this.section_id = f.section_id;
    }
}

class Heading extends Element {
    constructor(n) {
        super(n);
        this.level = 1;
        this.text = n.text;
        this.level = n.level;
        if (this.level < 1)
            this.level = 1;
    }
}

class Image extends Element {
    constructor(img) {
        super(img);
    }
}

class Include extends Element {
    constructor(el) {
        super(el);
        this.dir = el.dir;
    }
}

class InlineCode extends Element {
    constructor(t) {
        super(t);
    }
}

class LI extends Element {
    constructor(li) {
        super(li);
    }
}

// Code generated by gen.go. DO NOT EDIT.
let atoms = {
    A: "a",
    Abbr: "abbr",
    Accept: "accept",
    AcceptCharset: "accept-charset",
    Accesskey: "accesskey",
    Acronym: "acronym",
    Action: "action",
    Address: "address",
    Align: "align",
    Allowfullscreen: "allowfullscreen",
    Allowpaymentrequest: "allowpaymentrequest",
    Allowusermedia: "allowusermedia",
    Alt: "alt",
    Annotation: "annotation",
    AnnotationXml: "annotation-xml",
    Applet: "applet",
    Area: "area",
    Article: "article",
    As: "as",
    Aside: "aside",
    Async: "async",
    Audio: "audio",
    Autocomplete: "autocomplete",
    Autofocus: "autofocus",
    Autoplay: "autoplay",
    B: "b",
    Base: "base",
    Basefont: "basefont",
    Bdi: "bdi",
    Bdo: "bdo",
    Bgsound: "bgsound",
    Big: "big",
    Blink: "blink",
    Blockquote: "blockquote",
    Body: "body",
    Br: "br",
    Button: "button",
    Canvas: "canvas",
    Caption: "caption",
    Center: "center",
    Challenge: "challenge",
    Charset: "charset",
    Checked: "checked",
    Cite: "cite",
    Class: "class",
    Cmd: "cmd",
    Code: "code",
    Col: "col",
    Colgroup: "colgroup",
    Color: "color",
    Cols: "cols",
    Colspan: "colspan",
    Command: "command",
    Content: "content",
    Contenteditable: "contenteditable",
    Contextmenu: "contextmenu",
    Controls: "controls",
    Coords: "coords",
    Crossorigin: "crossorigin",
    Data: "data",
    Datalist: "datalist",
    Datetime: "datetime",
    Dd: "dd",
    Default: "default",
    Defer: "defer",
    Del: "del",
    Desc: "desc",
    Details: "details",
    Dfn: "dfn",
    Dialog: "dialog",
    Dir: "dir",
    Dirname: "dirname",
    Disabled: "disabled",
    Div: "div",
    Dl: "dl",
    Download: "download",
    Draggable: "draggable",
    Dropzone: "dropzone",
    Dt: "dt",
    Em: "em",
    Embed: "embed",
    Enctype: "enctype",
    Face: "face",
    Fieldset: "fieldset",
    Figcaption: "figcaption",
    Figure: "figure",
    File: "file",
    Filegroup: "filegroup",
    Font: "font",
    Footer: "footer",
    For: "for",
    ForeignObject: "foreignObject",
    Foreignobject: "foreignobject",
    Form: "form",
    Formaction: "formaction",
    Formenctype: "formenctype",
    Formmethod: "formmethod",
    Formnovalidate: "formnovalidate",
    Formtarget: "formtarget",
    Frame: "frame",
    Frameset: "frameset",
    Go: "go",
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
    HTML: "html",
    HTTPEquiv: "http-equiv",
    Head: "head",
    Header: "header",
    Headers: "headers",
    Headings: ["h1", "h2", "h3", "h4", "h5", "h6"],
    Height: "height",
    Hgroup: "hgroup",
    Hidden: "hidden",
    High: "high",
    Hr: "hr",
    Href: "href",
    Hreflang: "hreflang",
    I: "i",
    ID: "id",
    Icon: "icon",
    Iframe: "iframe",
    Image: "image",
    Img: "img",
    Include: "include",
    Input: "input",
    Inputmode: "inputmode",
    Ins: "ins",
    Integrity: "integrity",
    Is: "is",
    Isindex: "isindex",
    Ismap: "ismap",
    Itemid: "itemid",
    Itemprop: "itemprop",
    Itemref: "itemref",
    Itemscope: "itemscope",
    Itemtype: "itemtype",
    Kbd: "kbd",
    Keygen: "keygen",
    Keytype: "keytype",
    Kind: "kind",
    Label: "label",
    Lang: "lang",
    Legend: "legend",
    Li: "li",
    Link: "link",
    List: "list",
    Listing: "listing",
    Loop: "loop",
    Low: "low",
    Main: "main",
    Malignmark: "malignmark",
    Manifest: "manifest",
    Map: "map",
    Mark: "mark",
    Marquee: "marquee",
    Math: "math",
    Max: "max",
    Maxlength: "maxlength",
    Media: "media",
    Mediagroup: "mediagroup",
    Menu: "menu",
    Menuitem: "menuitem",
    Meta: "meta",
    Metadata: "metadata",
    Meter: "meter",
    Method: "method",
    Mglyph: "mglyph",
    Mi: "mi",
    Min: "min",
    Minlength: "minlength",
    Mn: "mn",
    Mo: "mo",
    Ms: "ms",
    Mtext: "mtext",
    Multiple: "multiple",
    Muted: "muted",
    Name: "name",
    Nav: "nav",
    Nobr: "nobr",
    Noembed: "noembed",
    Noframes: "noframes",
    Nomodule: "nomodule",
    Nonce: "nonce",
    Noscript: "noscript",
    Novalidate: "novalidate",
    Object: "object",
    Ol: "ol",
    Onabort: "onabort",
    Onafterprint: "onafterprint",
    Onautocomplete: "onautocomplete",
    Onautocompleteerror: "onautocompleteerror",
    Onauxclick: "onauxclick",
    Onbeforeprint: "onbeforeprint",
    Onbeforeunload: "onbeforeunload",
    Onblur: "onblur",
    Oncancel: "oncancel",
    Oncanplay: "oncanplay",
    Oncanplaythrough: "oncanplaythrough",
    Onchange: "onchange",
    Onclick: "onclick",
    Onclose: "onclose",
    Oncontextmenu: "oncontextmenu",
    Oncopy: "oncopy",
    Oncuechange: "oncuechange",
    Oncut: "oncut",
    Ondblclick: "ondblclick",
    Ondrag: "ondrag",
    Ondragend: "ondragend",
    Ondragenter: "ondragenter",
    Ondragexit: "ondragexit",
    Ondragleave: "ondragleave",
    Ondragover: "ondragover",
    Ondragstart: "ondragstart",
    Ondrop: "ondrop",
    Ondurationchange: "ondurationchange",
    Onemptied: "onemptied",
    Onended: "onended",
    Onerror: "onerror",
    Onfocus: "onfocus",
    Onhashchange: "onhashchange",
    Oninput: "oninput",
    Oninvalid: "oninvalid",
    Onkeydown: "onkeydown",
    Onkeypress: "onkeypress",
    Onkeyup: "onkeyup",
    Onlanguagechange: "onlanguagechange",
    Onload: "onload",
    Onloadeddata: "onloadeddata",
    Onloadedmetadata: "onloadedmetadata",
    Onloadend: "onloadend",
    Onloadstart: "onloadstart",
    Onmessage: "onmessage",
    Onmessageerror: "onmessageerror",
    Onmousedown: "onmousedown",
    Onmouseenter: "onmouseenter",
    Onmouseleave: "onmouseleave",
    Onmousemove: "onmousemove",
    Onmouseout: "onmouseout",
    Onmouseover: "onmouseover",
    Onmouseup: "onmouseup",
    Onmousewheel: "onmousewheel",
    Onoffline: "onoffline",
    Ononline: "ononline",
    Onpagehide: "onpagehide",
    Onpageshow: "onpageshow",
    Onpaste: "onpaste",
    Onpause: "onpause",
    Onplay: "onplay",
    Onplaying: "onplaying",
    Onpopstate: "onpopstate",
    Onprogress: "onprogress",
    Onratechange: "onratechange",
    Onrejectionhandled: "onrejectionhandled",
    Onreset: "onreset",
    Onresize: "onresize",
    Onscroll: "onscroll",
    Onsecuritypolicyviolation: "onsecuritypolicyviolation",
    Onseeked: "onseeked",
    Onseeking: "onseeking",
    Onselect: "onselect",
    Onshow: "onshow",
    Onsort: "onsort",
    Onstalled: "onstalled",
    Onstorage: "onstorage",
    Onsubmit: "onsubmit",
    Onsuspend: "onsuspend",
    Ontimeupdate: "ontimeupdate",
    Ontoggle: "ontoggle",
    Onunhandledrejection: "onunhandledrejection",
    Onunload: "onunload",
    Onvolumechange: "onvolumechange",
    Onwaiting: "onwaiting",
    Onwheel: "onwheel",
    Open: "open",
    Optgroup: "optgroup",
    Optimum: "optimum",
    Option: "option",
    Output: "output",
    P: "p",
    Page: "page",
    Param: "param",
    Pattern: "pattern",
    Picture: "picture",
    Ping: "ping",
    Placeholder: "placeholder",
    Plaintext: "plaintext",
    Playsinline: "playsinline",
    Poster: "poster",
    Pre: "pre",
    Preload: "preload",
    Progress: "progress",
    Prompt: "prompt",
    Public: "public",
    Q: "q",
    Radiogroup: "radiogroup",
    Rb: "rb",
    Readonly: "readonly",
    Ref: "ref",
    Referrerpolicy: "referrerpolicy",
    Rel: "rel",
    Required: "required",
    Reversed: "reversed",
    Rows: "rows",
    Rowspan: "rowspan",
    Rp: "rp",
    Rt: "rt",
    Rtc: "rtc",
    Ruby: "ruby",
    S: "s",
    Samp: "samp",
    Sandbox: "sandbox",
    Scope: "scope",
    Scoped: "scoped",
    Script: "script",
    Seamless: "seamless",
    Section: "section",
    Select: "select",
    Selected: "selected",
    Shape: "shape",
    Size: "size",
    Sizes: "sizes",
    Slot: "slot",
    Small: "small",
    Sortable: "sortable",
    Sorted: "sorted",
    Source: "source",
    Spacer: "spacer",
    Span: "span",
    Spellcheck: "spellcheck",
    Src: "src",
    Srcdoc: "srcdoc",
    Srclang: "srclang",
    Srcset: "srcset",
    Start: "start",
    Step: "step",
    Strike: "strike",
    Strong: "strong",
    Style: "style",
    Sub: "sub",
    Summary: "summary",
    Sup: "sup",
    Svg: "svg",
    System: "system",
    Tabindex: "tabindex",
    Table: "table",
    Target: "target",
    Tbody: "tbody",
    Td: "td",
    Template: "template",
    Textarea: "textarea",
    Tfoot: "tfoot",
    Th: "th",
    Thead: "thead",
    Time: "time",
    Title: "title",
    Tr: "tr",
    Track: "track",
    Translate: "translate",
    Tt: "tt",
    Type: "type",
    Typemustmatch: "typemustmatch",
    U: "u",
    Ul: "ul",
    Unknown: "unknown",
    Updateviacache: "updateviacache",
    Usemap: "usemap",
    Value: "value",
    Var: "var",
    Video: "video",
    Wbr: "wbr",
    Width: "width",
    Workertype: "workertype",
    Wrap: "wrap",
    Xmp: "xmp",
};

class Link extends Element {
    constructor(l) {
        super(l);
        this.url = l.url;
    }
}
function NewLink(url, attrs) {
    let ats = attrs ? attrs : {};
    if ((ats === null || ats === void 0 ? void 0 : ats.href) === undefined) {
        ats.href = url;
    }
    return new Link({
        atom: atoms.A,
        attributes: ats,
        nodes: [],
        type: gotypes.Link,
        url: url,
    });
}

class OL extends Element {
    constructor(ol) {
        super(ol);
    }
}

class Page extends Element {
    constructor(n) {
        super(n);
    }
}

class ParseError {
    constructor(data, parser) {
        this.filename = data.filename;
        this.root = data.root;
        parser = parser || new Parser();
        this.error = parser.parseError(data.err);
    }
}

class Ref extends Element {
    constructor(r) {
        super(r);
    }
}

class Snippet extends Element {
    constructor(s) {
        super(s);
        this.content = s.content;
        this.lang = s.lang;
        this.name = s.name;
        this.start = s.start;
        this.end = s.end;
    }
    toString() {
        return this.content;
    }
}

class SourceCode extends Element {
    constructor(sc) {
        super(sc);
        this.lang = sc.lang;
    }
}

class Table extends Element {
    constructor(t) {
        super(t);
    }
}

class Text {
    constructor(t) {
        this.atom = "text";
        this.nodes = [];
        this.type = t.type;
        this.text = t.text;
    }
    toString() {
        return this.text;
    }
    toHtml() {
        return this.text;
    }
}
function NewText(text) {
    return new Text({
        type: gotypes.Text,
        text: text,
    });
}

class UL extends Element {
    constructor(ul) {
        super(ul);
    }
}
function NewUL(attrs) {
    return new UL({
        atom: atoms.Ul,
        type: gotypes.UL,
        nodes: [],
        attributes: attrs,
    });
}

class PostParseError {
    constructor(data, parser) {
        this.filename = data.filename;
        this.postparser = data.postparser;
        this.root = data.root;
        this.type = data.type;
        parser = parser || new Parser();
        this.error = parser.parseError(data.error);
        this.orig_error = parser.parseError(data.orig_error);
    }
}

class Parser {
    constructor() {
        this.handlers = {};
        this.handlers[gotypes.CmdResult] = (n) => [new CmdResult(n)];
        this.handlers[gotypes.Cmd] = (n) => [new Cmd(n)];
        this.handlers[gotypes.FencedCode] = (n) => [new FencedCode(n)];
        this.handlers[gotypes.Figcaption] = (n) => [new FigCaption(n)];
        this.handlers[gotypes.Figure] = (n) => [new Figure(n)];
        this.handlers[gotypes.Heading] = (n) => [new Heading(n)];
        this.handlers[gotypes.Image] = (n) => [new Image(n)];
        this.handlers[gotypes.Include] = (n) => [new Include(n)];
        this.handlers[gotypes.InlineCode] = (n) => [new InlineCode(n)];
        this.handlers[gotypes.LI] = (n) => [new LI(n)];
        this.handlers[gotypes.Link] = (n) => [new Link(n)];
        this.handlers[gotypes.OL] = (n) => [new OL(n)];
        this.handlers[gotypes.Page] = (n) => [new Page(n)];
        this.handlers[gotypes.Ref] = (n) => [new Ref(n)];
        this.handlers[gotypes.Snippet] = (n) => [new Snippet(n)];
        this.handlers[gotypes.SourceCode] = (n) => [new SourceCode(n)];
        this.handlers[gotypes.Table] = (n) => [new Table(n)];
        this.handlers[gotypes.Text] = (n) => [new Text(n)];
        this.handlers[gotypes.UL] = (n) => [new UL(n)];
    }
    parse(data) {
        data = structuredClone(data);
        data.nodes = this.parseNodes(data.nodes);
        return new Document(data);
    }
    parseError(data) {
        switch (data.type) {
            case goerrors.ExecuteError:
                return new ExecuteError(data, this);
            case goerrors.CmdError:
                return new CmdError(data, this);
            case goerrors.ParseError:
                return new ParseError(data, this);
            case goerrors.PostParseError:
                return new PostParseError(data, this);
            case goerrors.PostExecuteError:
                throw new Error("not implemented: " + data.type);
            case goerrors.PreExecuteError:
                throw new Error("not implemented: " + data.type);
            case goerrors.PreParseError:
                throw new Error("not implemented: " + data.type);
            default:
                if (data.type === undefined) {
                    return data;
                }
                // console.warn("parseError: unknown type: ", data.type)
                return data;
        }
    }
    parseNodes(nodes = []) {
        let ret = [];
        nodes.forEach((n) => {
            if (n == null) {
                return;
            }
            if (Array.isArray(n)) {
                let nodes = this.parseNodes(n);
                ret.push(...nodes);
            }
            else {
                n.nodes = this.parseNodes(n.nodes);
                let fn = this.handlers[n.type];
                if (fn === undefined) {
                    // console.warn("unknown node type: " + n.type)
                    fn = newElement;
                }
                ret.push(...fn(n));
            }
        });
        return ret;
    }
}
function newElement(n) {
    return [new Element(n)];
}

class CmdError {
    constructor(data, parser) {
        this.args = data.args;
        this.env = data.env;
        this.exit = data.exit;
        this.filename = data.filename;
        this.output = data.output;
        this.root = data.root;
        parser = parser || new Parser();
        this.error = parser.parseError(data.err);
    }
}
// args: [ 'ech', 'Hello World' ],
// env: [
// ],
// err: 'exec: "ech": executable file not found in $PATH',
// exit: -1,
// filename: 'usage.md',
// output: '',
// root: '/Users/markbates/Library/CloudStorage/Dropbox/dev/guides/hypeviewer',
// type: 'hype.CmdError'

function VisitAtom(atom, n, fn) {
    var _a;
    if (n === undefined) {
        return;
    }
    (_a = n.nodes) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
        VisitAtom(atom, e, fn);
    });
    let atoms = [];
    if (Array.isArray(atom)) {
        atoms = atom;
    }
    else {
        atoms.push(atom);
    }
    atoms.forEach((a) => {
        if (a === n.atom) {
            fn(n);
        }
    });
    return;
}

class Toc extends Element {
    constructor() {
        super({
            nodes: [],
            atom: atoms.Ul,
            type: gotypes.UL,
            attributes: {
                class: "hype-toc",
            }
        });
        this.ids = [];
        this.nodes = [];
    }
    perform(doc, gen) {
        VisitAtom(atoms.Headings, doc, (n) => {
            let h = new Heading(n);
            // this.headings.push(h);
            let id = gen ? gen() : newUUID();
            this.ids.push(id);
            let a = NewLink(`#${id}`);
            let li = NewElement(atoms.Li, { class: `hype-toc-lvl-${h.level}` });
            a.nodes = h.nodes;
            li.nodes = [a];
            this.nodes.push(li);
            let nodes = n.nodes;
            let b = NewElement(atoms.A);
            b.attributes = { name: id };
            n.nodes = [b, ...nodes];
        });
    }
}
function newUUID() {
    return `heading-${v4()}`;
}

class Module {
    constructor(doc, parser) {
        this.id = "";
        this.filepath = "";
        this.dir = ""; // calculated from file
        this.name = ""; // calculated from file
        this.parser = new Parser();
        if (doc.doc !== undefined) {
            doc = doc.doc;
        }
        if (doc.id === undefined) {
            doc.id = v4();
        }
        this.id = doc.id;
        if (doc.root === undefined) {
            doc.root = "";
        }
        if (doc.filename === undefined) {
            doc.filename = "module.md";
        }
        this.filepath = path.join(doc.root, doc.filename);
        this.dir = doc.root;
        this.name = doc.filename;
        this.doc = this.parser.parse(doc);
        this.toc = new Toc();
        this.toc.perform(this.doc);
        // this.file = path.join(doc.root, doc.file);
        // this.dir = doc.root
        // this.name = path.basename(doc.file)
        // this.parser = parser ? parser : new Parser();
        // this.doc = this.parser.parse(doc.doc ? doc.doc : doc);
        // this.toc = new Toc();
        // this.toc.perform(this.doc);
    }
    title() {
        if (this.doc === undefined) {
            return this.name;
        }
        return this.doc.title;
    }
    toString() {
        if (this.doc === undefined) {
            return "";
        }
        return this.doc.toString();
    }
}

function EmptyModule() {
    let mod = new Module({
        id: "",
        doc: new Document({}),
        dir: "",
        filepath: "empty.md",
        name: "empty.md",
    });
    mod.doc.title = "Empty Module";
    mod.id = "";
    mod.doc.id = "";
    mod.dir = "";
    mod.filepath = "empty.md";
    mod.name = "empty.md";
    return mod;
}

class Modules {
    constructor() {
        this.current = EmptyModule();
        this.mods = {};
    }
    add(mod) {
        this.mods[mod.filepath] = mod;
        this.current = mod;
        return this.list();
    }
    list() {
        return Object.values(this.mods);
    }
    get(file) {
        return this.mods[file];
    }
}

export { Cmd, CmdError, CmdResult, Document, Element, EmptyModule, ExecuteError, FencedCode, FigCaption, Figure, Heading, Image, Include, InlineCode, LI, Link, Module, Modules, NewElement, NewLink, NewText, NewUL, OL, Page, ParseError, Parser, Ref, Snippet, SourceCode, Table, Text, Toc, UL, VisitAtom, atoms, gotypes };
