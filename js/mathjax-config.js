MathJax.Hub.Config({
    /*jax: ["input/TeX", "output/HTML-CSS"],*/
    /*"HTML-CSS": {
        availableFonts: [],
        preferredFont: null,
        webFont: "STIX"
    },*/
    tex2jax: {
        inlineMath: [['$','$'], ['\\(','\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true
    },
    TeX: {
        /*extensions: [ "autoload-all.js" ],*/
        Macros: {
            Lagr: ["\\mathcal{L}"],
            vec: ["\\mathbf{#1}", 1],
            dvec: ["\\dot{\\mathbf{#1}}", 1],
            dif: ["\\mathop{}\\!\\mathrm{d}"],
            Dif: ["\\mathop{}\\!\\mathrm{D}"],
            deldif: ["\\mathop{}\!\\updelta"],
            pd: ["\\frac{\\partial #1}{\\partial #2}", 2],
            od: ["\\frac{\\dif {#1}}{\\dif {#2}}", 2]
        }
    }
});

