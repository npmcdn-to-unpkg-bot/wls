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
        'stream',
        'other',
        'side'
    ],
    wlsSide: {
        default: 'bp',
        options: [
            'bp',
            'tnr',
            'dev2',
            'js',
            'wp',
            'mlb',
            'matchup'
         ]
    },
    data: {
        baseDir: 'http://wls.publicsport.net/src/data/',
        fileExt: '.json'
    } 
};
