export let config = {
    html: {
        output: {
            prefix: '<li>',
            suffix: '</li>'
        },
        header: {
            prefix: '<h2>',
            suffix: '</h2>'
        },
        subhed: {
            prefix: '<h3>',
            suffix: '</h3>'
        }
    },
    wlsOrder: [
        'hockey',
        'baseball',
        'football',
        'google',
        'digital',
        'news',
        'stream',
        'dev',
        'money',
        'other',
        'shop'
    ],
    wlsSide: 'bp',
    data: {
        baseDir: 'http://repo/wls/src/data/',
        fileExt: '.json'
    } 
};
