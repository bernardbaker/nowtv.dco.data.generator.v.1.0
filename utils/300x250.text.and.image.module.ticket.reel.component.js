{
            type: 'text.and.image.module.ticket.reel.component',

            frameDuration: 4000,

            transition: { cut: false, fade: true, topToBottom: false, rightToLeft: false, bottomToTop: false, leftToRight: false },
            transitionTime: { time: 750 },

            background: { colour: '#003464', animationTime: 500, delay: 750 },

            headlineColour: '#ffffff',
            headlinePosition: { x: 150, y: 40 },
            headlineText: 'Frame_1_Headline_standard_size',
            headlineAnimation: { fade: true, slideLeftToRight: false, slideRightToLeft: false, slideTopToBottom: false, zoom: false, fadeWithBounce: false, pulse: false, none: false },
            headlineAnimationTime: { time: 500, delay: 750 },

            imageMask: '01_text_and_image_module_ticket_mask.png',
            reelImage1: '01_text_and_image_module_ticket_left.png',
            reelImage2: '01_text_and_image_module_ticket_center.png',
            reelImage3: '01_text_and_image_module_ticket_right.png',

            reelTxt1: '<span style="line-height: 15px">&nbsp;</span><br>Viewing details<br>Programme name goes here',
            reelTxt2: '<span style="line-height: 15px">&nbsp;</span><br>Viewing details<br>Programme name goes here',
            reelTxt3: '<span style="line-height: 15px">&nbsp;</span><br>Viewing details<br>Programme name goes here',

            reelLogo1: 'logo.png',
            reelLogo2: 'logo.png',
            reelLogo3: 'logo.png',

            reelAnimation: { last: true, all: false, middle: false, none: false },
            reelAnimationTime: { time: 2000, delay: 750 },
            reelPosition: { left: true, right: false },

            showCallToAction: { visible: true, delay: 750 }
        },