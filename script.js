document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = link.href;
            console.log('before: ' + link.href);
            if (!href.startsWith('http://') && !href.startsWith('https://')) {
                return;
            }
          if (href === 'https://distrokid.com' || href === 'https://www.distrokid.com') {
            link.href = 'https://distrokid.com/vip/seven/618592';
        } else if (href.includes('native-instruments.com')) {
            link.href = `https://shareasale.com/r.cfm?b=1145559&u=3025083&m=77930&urllink=${encodeURIComponent(href)}&afftrack=`;
        } else if (href.includes('sonarworks.com')) {
            link.href = `${href}${href.includes('?') ? '&' : '?'}_ef_transation_id=&uid=2&oid=2&affid=451&sub1=affiliate&utm_medium=affiliate`;
        } else if (href.includes('www.fender.com')) {
            link.href = `https://fender.prf.hn/click/camref:1100lvZJw/destination:${encodeURIComponent(href)}`;
        } else if (href.includes('audioplugin.deals')) {
            link.href = href + (href.endsWith('/') ? 'ref/215/' : '/ref/215/');
        } else if (href.includes('zzounds.com')) {
            link.href = href.replace('zzounds.com', 'zzounds.com/a--3979116');
        } else if (['adsrsounds.com', 'www.rhodesmusic.com'].includes(new URL(href).hostname)) {
            link.href = href + (href.endsWith('/') ? '#a_aid=musicmanta' : '/#a_aid=musicmanta');
        } else if (href.includes('bestservice.com')) {
            link.href = `${href}${href.includes('?') ? '&' : '?'}aid=4r9SLiKkbQ4AG6qi`;
        } else if (href.includes('pluginfox.com')) {
            link.href = `${href}${href.includes('?') ? '&' : '?'}aff=294`;
        } else if (href.includes('cloudbounce.com')) {
            link.href = `${href}${href.includes('?') ? '&' : '?'}idev_id=4216`;
        } else if (href.includes('lalal.ai')) {
            link.href = `${href}${href.includes('?') ? '&' : '?'}fp_ref=christof55`;
        } else if (href.includes('reverb.com')) {
    const params = new URLSearchParams({ awinmid: '67144', awinaffid: '1370319' });
    link.href = `https://www.awin1.com/cread.php?${params}&ued=${encodeURIComponent(href)}`;
} else if (href.includes('perfectcircuit.com')) {
            link.href = `${href}${href.includes('?') ? '&' : '?'}utm_source=pepperjam&utm_medium=affiliate&utm_campaign=265943`;
        } else if (href.includes('resonance-sound.com')) {
            link.href = `${href}${href.includes('?') ? '&' : '?'}ref=1212`;
        } else if (href.includes('landr.com')) {
            link.href = `${href}${href.includes('?') ? '&' : '?'}utm_campaign=sales_platform_en_intl_1stpromoter&utm_medium=paid_affiliate&utm_source=outbound-link&fpr=christof31`;
        }
          console.log('after: '+link.href)
    });
});
