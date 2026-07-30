// ==UserScript==
// @name         AmazonBR - Hide Header Location Info
// @namespace    https://www.amazon.com.br/
// @version      1.0
// @description  Hide city and postal code from Amazon header
// @author       DaniloPCdev
// @match        https://www.amazon.com.br/*
// @icon         https://a.favicon.im/amazon.com
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`
    #glow-ingress-block,
    #glow-ingress-line1,
    #glow-ingress-line2 {
        display: none !important;
    }
`);
