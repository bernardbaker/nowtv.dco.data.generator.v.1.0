 {
            type: 'text.heavy.a.module.ticket.component',

            frameDuration: 4000,

            transition: { cut: false, fade: true, topToBottom: false, rightToLeft: false, bottomToTop: false, leftToRight: false },
            transitionTime: { time: 750 },

            background: { colour: '#003464', animationTime: 500, delay: 750 },

            headlineColour: '#ffffff',
            headlinePosition: { x: 60, y: 330 },
            headlineText: 'Frame_2_Headline_standard_size',
            headlineAnimation: { fade: true, slideLeftToRight: false, slideRightToLeft: false, slideTopToBottom: false, zoom: false, fadeWithBounce: false, pulse: true, none: false },
            headlineAnimationTime: { time: 500, delay: 750 },

            imageMask: '03_text_heavy_a_module_ticket_mask.png',
            imageLayer: '03_text_heavy_a_module_ticket_image.png',
            imageTx: '<span style="line-height: 11px">&nbsp;</span><br>View detail<br>Programme name',
            imageLogo: 'logo.png',

            imageLayerReverse: '1x1.png',
            imageTxReverse: '&nbsp;',
            imageLogoReverse: 'logo.png',

            ticketAnimation: { none: false, slideFromTheLeft: false, slideFromTheRight: false, slideFromTheLeftAtAnAngle: false, slideFromTheRightAtAnAngle: false, dropInFromAboveAtAnAngle: false, dropInFromAbove: false, fade: true, zoomIn: false, flip: false },
            ticketAnimationTime: { time: 500, delay: 750, delayBeforeFlip: 1000 },

            showCallToAction: { visible: true, delay: 750 }
        },