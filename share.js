/* share.js – Shared share-dropdown logic for Things pages
   Loaded dynamically; uses IIFE (not DOMContentLoaded). */
(function() {
    'use strict';

    var LABELS = {
        en:{copy:'Copy Link',copied:'Copied!',wa:'WhatsApp',tw:'X / Twitter',li:'LinkedIn',fb:'Facebook'},
        fr:{copy:'Copier le lien',copied:'Copié !',wa:'WhatsApp',tw:'X / Twitter',li:'LinkedIn',fb:'Facebook'},
        es:{copy:'Copiar enlace',copied:'¡Copiado!',wa:'WhatsApp',tw:'X / Twitter',li:'LinkedIn',fb:'Facebook'},
        pt:{copy:'Copiar link',copied:'Copiado!',wa:'WhatsApp',tw:'X / Twitter',li:'LinkedIn',fb:'Facebook'},
        de:{copy:'Link kopieren',copied:'Kopiert!',wa:'WhatsApp',tw:'X / Twitter',li:'LinkedIn',fb:'Facebook'},
        it:{copy:'Copia link',copied:'Copiato!',wa:'WhatsApp',tw:'X / Twitter',li:'LinkedIn',fb:'Facebook'},
        ja:{copy:'リンクをコピー',copied:'コピーしました',wa:'WhatsApp',tw:'X / Twitter',li:'LinkedIn',fb:'Facebook'},
        zh:{copy:'复制链接',copied:'已复制',wa:'WhatsApp',tw:'X / Twitter',li:'LinkedIn',fb:'Facebook'}
    };

    var sl = LABELS[document.documentElement.lang] || LABELS.en;

    function buildShareUrl(itemId) {
        var lang = document.documentElement.lang || 'en';
        var prefix = lang === 'en' ? '' : lang + '-';
        return location.origin + '/' + prefix + 'things.html?id=' + itemId;
    }

    /* First sentence of description (up to first period followed by space or end) */
    function firstParagraph(desc) {
        if (!desc) return '';
        var m = desc.match(/^[^.]*\./);
        return m ? m[0] : desc;
    }

    /* Build text payload per platform */
    function shareText(title, subtitle, desc, url, platform) {
        var fp = firstParagraph(desc);
        switch (platform) {
            case 'copy':
                return url;
            case 'wa':
                // WhatsApp: bold title, subtitle, snippet + URL
                return '*' + title + '*\n' + subtitle + '\n\n' + fp + '\n\n' + url;
            case 'tw':
                // X/Twitter: concise — title + subtitle + URL (URL auto-shortens)
                return title + ' — ' + subtitle;
            case 'li':
                // LinkedIn only accepts url param; text goes in the post composer
                return null;
            case 'fb':
                // Facebook only accepts url param
                return null;
            default:
                return title + '\n' + subtitle + '\n' + fp + '\n' + url;
        }
    }

    /* SVG icons */
    var ICONS = {
        copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path></svg>',
        wa: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.627.616l4.584-1.207A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.7-6.04-1.893l-.422-.296-2.723.717.749-2.636-.326-.463A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>',
        tw: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
        li: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        fb: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'
    };

    function clipboardCopy(text, btnEl) {
        navigator.clipboard.writeText(text).then(function() {
            showCopied(btnEl);
        }).catch(function() {
            var ta = document.createElement('textarea');
            ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
            document.body.appendChild(ta); ta.select();
            try { document.execCommand('copy'); showCopied(btnEl); } catch(ex) {}
            document.body.removeChild(ta);
        });
    }

    function showCopied(btnEl) {
        btnEl.innerHTML = ICONS.copy + sl.copied;
        btnEl.classList.add('copied');
        setTimeout(function() {
            btnEl.innerHTML = ICONS.copy + sl.copy;
            btnEl.classList.remove('copied');
        }, 2000);
    }

    function openShareDropdown(btn) {
        closeAllShareDropdowns();
        var id       = btn.dataset.shareId;
        var title    = btn.dataset.shareTitle;
        var subtitle = btn.dataset.shareSubtitle || '';
        var desc     = btn.dataset.shareDesc || '';
        var url      = buildShareUrl(id);
        var encoded  = encodeURIComponent(url);

        var dd = document.createElement('div');
        dd.className = 'share-dropdown open';
        dd.innerHTML =
              '<button class="share-dropdown-item" data-action="copy">' + ICONS.copy + sl.copy + '</button>'
            + '<a class="share-dropdown-item" data-action="wa">' + ICONS.wa + sl.wa + '</a>'
            + '<a class="share-dropdown-item" data-action="tw">' + ICONS.tw + sl.tw + '</a>'
            + '<a class="share-dropdown-item" data-action="li">' + ICONS.li + sl.li + '</a>'
            + '<a class="share-dropdown-item" data-action="fb">' + ICONS.fb + sl.fb + '</a>';
        btn.appendChild(dd);

        /* Copy Link */
        dd.querySelector('[data-action="copy"]').addEventListener('click', function(e) {
            e.stopPropagation();
            clipboardCopy(url, this);
        });

        /* WhatsApp — rich text with title, subtitle, description snippet */
        dd.querySelector('[data-action="wa"]').addEventListener('click', function(e) {
            e.stopPropagation();
            var text = shareText(title, subtitle, desc, url, 'wa');
            window.open('https://wa.me/?text=' + encodeURIComponent(text), 'share', 'width=600,height=500');
            closeAllShareDropdowns();
        });

        /* X / Twitter — title + subtitle as tweet text, URL appended */
        dd.querySelector('[data-action="tw"]').addEventListener('click', function(e) {
            e.stopPropagation();
            var text = shareText(title, subtitle, desc, url, 'tw');
            window.open('https://twitter.com/intent/tweet?url=' + encoded + '&text=' + encodeURIComponent(text), 'share', 'width=600,height=500');
            closeAllShareDropdowns();
        });

        /* LinkedIn — url only (LinkedIn generates its own preview) */
        dd.querySelector('[data-action="li"]').addEventListener('click', function(e) {
            e.stopPropagation();
            window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encoded, 'share', 'width=600,height=500');
            closeAllShareDropdowns();
        });

        /* Facebook — url only (Facebook generates its own preview) */
        dd.querySelector('[data-action="fb"]').addEventListener('click', function(e) {
            e.stopPropagation();
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encoded, 'share', 'width=600,height=500');
            closeAllShareDropdowns();
        });
    }

    function closeAllShareDropdowns() {
        document.querySelectorAll('.share-dropdown').forEach(function(d) { d.remove(); });
    }

    /* Close on outside click */
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.item-share-btn')) closeAllShareDropdowns();
    });

    /* Expose for things pages to call */
    window.shareInit = function() {
        document.querySelectorAll('.item-share-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                var existing = btn.querySelector('.share-dropdown');
                if (existing) { existing.remove(); return; }
                openShareDropdown(btn);
            });
        });
    };

    /* Auto-init if items already rendered */
    if (document.querySelector('.item-share-btn')) {
        window.shareInit();
    }
})();
