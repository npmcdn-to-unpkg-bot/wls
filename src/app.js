import {config}             from './js/config';
import {listenForClicks}    from './js/listenForClicks';
import {insertHTML}         from './js/insertHTML';
import {getJSON}            from './js/getJSON';
import {buildWLSside}       from './js/buildWLSside';

let html = '',
    json,
    args,
    isError = false,
    wlsOrder = config.wlsOrder
    ;

function parseComponent(params) {
    let fileName = params.fileName;
    let parent = (params.parent) ? params.parent : 'content';
    let file = config.data.baseDir + fileName + config.data.fileExt;
    let args;
    getJSON(args = {
        fileName, 
        file, 
        callback: insertHTML, 
        parent, 
        config
    });
}

function initWLS() {
    // add base components as determined by config order
    Object.keys(wlsOrder).forEach(function(key, index, array) {
        // order is important so we create our dom elements here to preserve order
        let parent = document.getElementById('content'),
            child = document.createElement('ul');
        child.id = wlsOrder[key];
        parent.appendChild(child);
        if (wlsOrder[key] !== 'side') {
            parseComponent(args = { fileName: wlsOrder[key] });
        } else {
            let parent = document.getElementById('theside'),
                child = document.createElement('ul');
            child.id = config.wlsSide.default;
            // todo if default is not in array of regular order
            parent.appendChild(child);
            buildWLSside(args = {config, insertHTML});
            parseComponent(args = { fileName: config.wlsSide.default, parent: 'theside' });
            listenForClicks({className: 'sidelinks', parseComponent});

        }
    });

    // setMasonry();
    // add default sidebar component
    
}

// function setMasonry() {
//     var elem = document.querySelector('#content');
//     var msnry = new Masonry( elem, {
//       itemSelector: 'ul'
//     });
// }


initWLS();

/* todo
set side toggle
is no masonry ok
start css
*/