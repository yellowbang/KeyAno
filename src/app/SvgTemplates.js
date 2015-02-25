define(function(require, exports, module) {

    module.exports = {

        smileFace: function(size, color){
            return ['<span>',
                '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
                'width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">',
                '<path fill="',color,'" stroke="none" d="M256,32C132.281,32,32,132.281,32,256s100.281,224,224,224s224-100.281,224-224S379.719,32,256,32z M256,448',
                'c-105.875,0-192-86.125-192-192S150.125,64,256,64s192,86.125,192,192S361.875,448,256,448z M160,192c0-26.5,14.313-48,32-48',
                's32,21.5,32,48c0,26.531-14.313,48-32,48S160,218.531,160,192z M288,192c0-26.5,14.313-48,32-48s32,21.5,32,48',
                'c0,26.531-14.313,48-32,48S288,218.531,288,192z M384,288c-16.594,56.875-68.75,96-128,96c-59.266,0-111.406-39.125-128-96"/>',
                '</svg>',
                '</span>'].join('')
        },
        happyFace: function(size, color){
            return ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512">',
            '<g>',
            '</g>',
            '<path fill="',color,'" stroke="none" d="M332.165 248.709c0 40.264-34.14 73.011-76.144 73.011-41.974 0-76.165-32.748-76.165-73.011h-37.366c0 60.037 50.923 108.821 113.541 108.821 62.587 0 113.51-48.793 113.51-108.82h-37.376z" fill="#000000" />',
            '<path fill="',color,'" stroke="none" d="M221.338 190.31c0 19.804-16.763 35.84-37.356 35.84-20.665 0-37.397-16.036-37.397-35.84 0-19.753 16.743-35.83 37.397-35.83 20.603 0 37.356 16.077 37.356 35.83z" fill="#000000" />',
            '<path fill="',color,'" stroke="none" d="M364.708 190.31c0 19.804-16.784 35.84-37.406 35.84-20.675 0-37.406-16.036-37.406-35.84 0-19.753 16.743-35.83 37.406-35.83 20.634 0 37.406 16.077 37.406 35.83z" fill="#000000" />',
            '<path fill="',color,'" stroke="none" d="M256.021 47.319c-120.054 0-217.733 93.614-217.733 208.691 0 115.057 97.68 208.671 217.733 208.671 120.064 0 217.692-93.614 217.692-208.671 0-115.077-97.628-208.691-217.692-208.691zM256.021 421.57c-95.406 0-172.759-74.117-172.759-165.56 0-91.433 77.353-165.581 172.759-165.581s172.759 74.148 172.759 165.581c0 91.443-77.353 165.56-172.759 165.56z" fill="#000000" />',
            '</svg>'].join('')
        },
        happySun: function(size, color){
            return ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512">',
                '<g>',
                '</g>',
                '<path fill="',color,'" stroke="none" d="M313.324 335.637c0 31.621-25.702 57.344-57.313 57.344s-57.334-25.723-57.334-57.344h-28.13c0 47.155 38.339 85.504 85.463 85.504 47.135 0 85.453-38.339 85.453-85.504h-28.139z" fill="#000000" />',
                '<path fill="',color,'" stroke="none" d="M256.307 197.079c66.499 0 120.596 54.118 120.596 120.627 0 66.519-54.098 120.637-120.596 120.637-66.519 0-120.627-54.118-120.627-120.637 0-66.509 54.108-120.627 120.627-120.627zM93.829 317.696c0 89.6 72.898 162.457 162.478 162.457 89.559 0 162.437-72.858 162.437-162.457 0-89.59-72.878-162.478-162.437-162.478-89.579 0.010-162.478 72.899-162.478 162.478z" fill="#000000" />',
                '<path fill="',color,'" stroke="none" d="M230.43 280.525c0 15.38-12.503 27.884-27.914 27.884-15.401 0-27.904-12.503-27.904-27.884 0-15.442 12.503-27.904 27.904-27.904 15.422-0.010 27.914 12.462 27.914 27.904z" fill="#000000" />',
                '<path fill="',color,'" stroke="none" d="M337.357 280.525c0 15.38-12.462 27.884-27.863 27.884-15.421 0-27.904-12.503-27.904-27.884 0-15.442 12.483-27.904 27.904-27.904 15.411-0.010 27.863 12.462 27.863 27.904z" fill="#000000" />',
                '<path fill="',color,'" stroke="none" d="M256.307 176.159c-71.219 0-144.435 111.339-144.435 111.339l-55.808-87.225 90.685 10.486-7.004-97.648 83.712 55.798 34.867-97.648 41.851 104.622 69.765-55.828-17.459 83.702 87.224-27.883-41.882 97.659c0 0.010-70.349-97.372-141.517-97.372z" fill="#000000" />',
                '<path fill="',color,'" stroke="none" d="M256.307 162.222c-77.855 0-152.965 112.814-156.099 117.596l23.409 0.164-55.808-87.204-13.353 21.371 107.376 12.4-1.157-16.784-7.004-97.638-21.637 12.606 98.55 65.72 6.011-16.865 34.898-97.628-26.112 0.481 41.831 104.632 7.004 17.459 84.429-67.522-22.344-13.752-17.438 83.681-4.905 23.45 109.988-35.215-17.060-18.78-41.861 97.659 24.135-2.683c-3.041-4.209-75.438-103.147-152.853-103.147zM410.644 279.019l60.221-120.883-122.624 32.368 17.92 16.118 17.438-83.692 7.885-37.97-30.238 24.238-69.775 55.788 21.658 5.714-55.542-138.864-47.257 132.382 20.869-6.922-107.397-71.588 2.038 28.375 6.963 97.69 15.554-14.848-119.89-13.834 83.159 103.875 0.061 26.142 11.817-17.94c19.251-29.225 80.66-105.031 132.803-105.031 63.15 0 129.536 90.695 130.232 91.597l14.418 19.938 9.687-22.651z" fill="#000000" />',
                '<path fill="',color,'" stroke="none" d="M413.625 258.745l86.692 12.872-87.778 56.719z" fill="#000000" />',
                '<path fill="',color,'" stroke="none" d="M118.21 258.745l-106.537 19.036 87.787 56.719z" fill="#000000" />',
                '</svg>'].join('')
        },
        smileBigMouth: function(size, color){
            return ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512">',
                '<g>',
                '</g>',
                '<path fill="',color,'" stroke="none" d="M73.257 207.493h391.465l-21.699-23.593c-0.88 10.455-24.423 256.461-243.978 263.342h0.297c-0.717 0.021-74.23 0.399-110.653-51.241-30.505-43.141-28.775-111.36 5.038-202.742l-20.47 14.233zM200.397 490.783c107.428-3.379 191.089-57.436 241.992-156.303 37.529-72.868 43.796-143.975 44.042-146.975l1.966-23.542h-430.224l-5.294 14.192c-39.219 105.872-39.025 187.73 0.481 243.353 49.992 70.329 142.869 69.356 147.036 69.274z" fill="#000000" />',
                '<path fill="',color,'" stroke="none" d="M208.855 58.511c0 20.633-20.162 37.346-45.025 37.346-24.914 0-45.066-16.712-45.066-37.346 0-20.552 20.162-37.304 45.066-37.304 24.863 0.010 45.025 16.763 45.025 37.304z" fill="#000000" />',
                '<path fill="',color,'" stroke="none" d="M411.126 58.809c0 20.603-20.224 37.325-45.077 37.325-24.904 0-45.056-16.722-45.056-37.325 0-20.603 20.163-37.315 45.056-37.315 24.863 0 45.077 16.702 45.077 37.315z" fill="#000000" />',
                '</svg>'].join('')
        },
        cloudMusic: function(size, color){
            return ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
                'width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">',
                '<g>',
                '<path fill="',color,'" stroke="none" d="M446.844,208.875C447.625,203.313,448,197.656,448,192c0-70.563-57.406-128-128-128',
                'c-40.938,0-78.531,19.344-102.344,51.063C209.25,113.031,200.688,112,192,112c-61.75,0-112,50.25-112,112',
                'c0,1.563,0.031,3.094,0.094,4.625C33.813,242.375,0,285.313,0,336c0,61.75,50.25,112,112,112h272c70.594,0,128-57.406,128-128',
                'C512,273.344,486.344,231.188,446.844,208.875z M384,416H112c-44.188,0-80-35.813-80-80s35.813-80,80-80',
                'c2.438,0,4.75,0.5,7.125,0.719c-4.5-10-7.125-21.031-7.125-32.719c0-44.188,35.813-80,80-80c14.438,0,27.813,4.125,39.5,10.813',
                'C246,120.25,280.156,96,320,96c53.031,0,96,42.969,96,96c0,12.625-2.594,24.625-7.031,35.688C449.813,238.75,480,275.688,480,320',
                'C480,373.031,437.031,416,384,416z"/>',
                '<path fill="',color,'" stroke="none" d="M192,321.938c-5.031-1.188-10.359-1.938-16-1.938c-26.5,0-48,14.313-48,32s21.5,32,48,32s48-14.313,48-32V250.688',
                'l128-21.375v60.625c-5.031-1.188-10.375-1.938-16-1.938c-26.5,0-48,14.313-48,32s21.5,32,48,32s48-14.313,48-32V160l-192,32',
                'V321.938z"/>',
                '</g>',
                '</svg>'].join('')
        },
        musicNote1: function(size, color){
            return ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
                'width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">',
                '<path fill="',color,'" stroke="none" d="M272,48h-32v304.594C223,342.375,200.688,336,176,336c-53,0-96,28.625-96,64s43,64,96,64s96-28.625,96-64V144',
                'c80-13,128,80,160,128C412,48,272,48,272,48z"/>',
                '</svg>'].join('')
        },
        musicNote2: function(size, color){
            return ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
                'width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">',
                '<path fill="',color,'" stroke="none" d="M272,48h-32v304.625C223,342.406,200.688,336,176,336c-53,0-96,28.656-96,64s43,64,96,64s96-28.656,96-64V144',
                'c5.125-0.813,10.156-1.25,15.031-1.25c71.094,0,115.031,84.313,144.969,129.25C412,48,272,48,272,48z M176,432',
                'c-39.063,0-64-18.938-64-32s24.938-32,64-32s64,18.938,64,32S215.063,432,176,432z"/>',
            '</svg>'].join('')
        },
        musicNote3: function(size, color){
            return ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
                'width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">',
                '<path fill="',color,'" stroke="none" d="M320,48v304.594C303,342.375,280.688,336,256,336c-53,0-96,28.625-96,64s43,64,96,64s96-28.625,96-64V48H320z"/>',
                '</svg>'].join('')
        },
        musicNote4: function(size, color){
            return ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
                'width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">',
                '<path fill="',color,'" stroke="none" d="M160,96v304.594C143,390.375,120.688,384,96,384c-53,0-96,28.625-96,64s43,64,96,64s96-28.625,96-64V151.281l288-78.563',
                'v231.875C463,294.375,440.688,288,416,288c-53,0-96,28.625-96,64s43,64,96,64s96-28.625,96-64V0L160,96z"/>',
                '</svg>'].join('')
        },
        musicNote5: function(size, color){
            return ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
                'width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">',
                '<path fill="',color,'" stroke="none" d="M160,96v304.625C142.984,390.406,120.703,384,96,384c-53.016,0-96,28.656-96,64s42.984,64,96,64s96-28.656,96-64V256l288-96',
                'v144.625C463,294.406,440.688,288,416,288c-53,0-96,28.656-96,64s43,64,96,64s96-28.656,96-64V0L160,96z M192,224v-72.719',
                'l288-78.563V128L192,224z"/>',
                '</svg>'].join('')
        },
        musicNote6: function(size, color){
            return ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
                'width="',size[0],'px" height="',size[1],'px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">',
                '<path fill="',color,'" stroke="none" d="M352,48h-32v304.625C303,342.406,280.688,336,256,336c-53,0-96,28.656-96,64s43,64,96,64s96-28.656,96-64V48z M256,432',
                'c-39.063,0-64-18.938-64-32s24.938-32,64-32s64,18.938,64,32S295.063,432,256,432z"/>',
                '</svg>'].join('')
        },
        cloudSmile: function(size, color){
            return ['<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
                'width="',size[0],'px" height="',size[0],'px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve">',
                '<path fill="',color,'" stroke="none" d="M156.852,80.245c-1.754,0-4.427,0.145-7.807,0.4c-1.394-15.501-14.414-27.651-30.277-27.651',
                'c-5.798,0-11.216,1.623-15.826,4.438c-7.094-6.593-16.595-10.631-27.044-10.631c-21.951,0-39.743,17.794-39.743,39.746',
                'c0,1.944,0.146,3.854,0.416,5.725c-15.862,1.082-28.397,14.285-28.397,30.425c0,16.846,13.657,30.503,30.503,30.503',
                'c14.156,0,102.897,0,118.176,0c20.143,0,36.476-16.33,36.476-36.479C193.327,96.579,176.994,80.245,156.852,80.245z M102.018,87.16',
                'c0-2.977,2.412-5.39,5.389-5.39h0.774c2.976,0,5.39,2.414,5.39,5.39v13.391c0,2.977-2.414,5.391-5.39,5.391h-0.774',
                'c-2.977,0-5.389-2.414-5.389-5.391V87.16z M76.781,87.16c0-2.977,2.414-5.39,5.39-5.39h0.773c2.976,0,5.39,2.414,5.39,5.39v13.391',
                'c0,2.977-2.414,5.391-5.39,5.391h-0.773c-2.977,0-5.39-2.414-5.39-5.391V87.16z M126.797,120.327',
                'c-3.674,8.786-16.119,14.69-30.966,14.69s-27.291-5.904-30.965-14.69c-0.9-2.153,0.115-4.628,2.268-5.528',
                'c2.153-0.9,4.627,0.115,5.527,2.268c1.926,4.607,10.701,9.502,23.17,9.502c12.47,0,21.245-4.895,23.171-9.502',
                'c0.899-2.151,3.377-3.166,5.527-2.268C126.681,115.699,127.696,118.174,126.797,120.327z"/>',
                '</svg>'].join('')
        },
        //chick: function(size, color){
        //    return ['<img src="/assets/img/ChickCritter.png" style="height:',size[0],'px; width: ',size[1],'px"/>',
        //        ''].join('')
        //},
        //duck: function(size, color){
        //    return ['<img src="/assets/img/rubberduck.png" style="height:',size[0],'px; width: ',size[1],'px"/>',
        //        ''].join('')
        //},
        house: function(size, color){
            return ['<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" id="svg3323" sodipodi:version="0.32" inkscape:version="0.46+pre4" width="134.24727" height="105.05726" version="1.0" sodipodi:docbase="C:\Important\svg" sodipodi:docname="home.svg" inkscape:output_extension="org.inkscape.output.svg.inkscape"> <metadata id="metadata3328"> <rdf:RDF> <cc:Work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/> </cc:Work> </rdf:RDF> </metadata> <defs id="defs3326"> <inkscape:perspective sodipodi:type="inkscape:persp3d" inkscape:vp_x="0 : 72.240166 : 1" inkscape:vp_y="0 : 1000 : 0" inkscape:vp_z="134.24727 : 72.240166 : 1" inkscape:persp3d-origin="67.123634 : 48.16011 : 1" id="perspective6291"/> </defs> <sodipodi:namedview inkscape:window-height="938" inkscape:window-width="1280" inkscape:pageshadow="2" inkscape:pageopacity="0.0" guidetolerance="10.0" gridtolerance="10.0" objecttolerance="10.0" borderopacity="1.0" bordercolor="#666666" pagecolor="#ffffff" id="base" inkscape:zoom="0.8125" inkscape:cx="438.61548" inkscape:cy="-63.718918" inkscape:window-x="-4" inkscape:window-y="-4" inkscape:current-layer="svg3323" showgrid="false"/> <path style="fill: '+color+'; fill-opacity: 1; fill-rule: evenodd; stroke: '+color+'; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-opacity: 1;" d="M 67.125 2 L 2 46.125 L 132.25 46.125 L 104.65625 27.4375 L 104.65625 3.96875 L 86.1875 3.96875 L 86.1875 14.90625 L 67.125 2 z " id="path11341"/> <path style="opacity: 1; fill: '+color+'; fill-opacity: 1; fill-rule: evenodd; stroke: '+color+'; stroke-width: 4.08939; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dasharray: none; stroke-opacity: 1;" d="M 21 52.03125 L 21 103 L 112.625 103 L 112.625 52.03125 L 21 52.03125 z M 35.125 63.6875 L 56.65625 63.6875 L 56.65625 85.21875 L 35.125 85.21875 L 35.125 63.6875 z M 73.28125 70.125 L 95.4375 70.125 L 95.4375 102.75 L 73.28125 102.75 L 73.28125 70.125 z " id="rect11344"/> <path style="fill: '+color+'; fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 4; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1;" d="M 43.75 63.96875 L 43.75 72.4375 L 34.5 72.4375 L 34.5 76.4375 L 43.75 76.4375 L 43.75 85.53125 L 47.75 85.53125 L 47.75 76.4375 L 56.34375 76.4375 L 56.34375 72.4375 L 47.75 72.4375 L 47.75 63.96875 L 43.75 63.96875 z " id="path11352"/> </svg>']
        }

    }

});