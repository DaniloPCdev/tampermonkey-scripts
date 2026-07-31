// ==UserScript==
// @name         MercadoLivre - Hide Header Location Info
// @namespace    https://www.mercadolivre.com.br/
// @version      1.0
// @description  Hide name and street from ML header
// @author       DaniloPCdev
// @match        https://www.mercadolivre.com.br/*
// @icon         https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`
    .nav-menu-link-cp {
        display: none !important;
    }
    .nav-menu-cp-send {
        display: none !important;
    }
    .nav-header-username {
        display: none !important;
    }
`);
