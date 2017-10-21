 {
            type: 'text.and.image.module.ticket.reel.component',

            frameDuration: 4000,

            transition: { cut: false, fade: true, topToBottom: false, rightToLeft: false, bottomToTop: false, leftToRight: false },
            transitionTime: { time: 750 },

            background: { colour: '#003464', animationTime: 500, delay: 750 },

            headlineColour: '#ffffff',
            headlinePosition: { x: 59, y: 95 },
            headlineText: 'Frame_2_Headline_standard_size',
            headlineAnimation: { fade: true, slideLeftToRight: false, slideRightToLeft: false, slideTopToBottom: false, zoom: false, fadeWithBounce: false, pulse: false, none: false },
            headlineAnimationTime: { time: 500, delay: 750 },

            imageMask: '01_text_and_image_module_reel_ticket_mask.png',
            imageOnTheLeft: '01_text_and_image_module_reel_ticket_left.png',
            imageOnTheLeftReverse: '1x1.png',
            imageInTheCenter: '01_text_and_image_module_reel_ticket_center.png',
            imageInTheCenterReverse: '1x1.png',
            imageOnTheRight: '01_text_and_image_module_reel_ticket_right.png',
            imageOnTheRightReverse: '1x1.png',

            txOnTheLeft: '<span style="line-height: 11px">&nbsp;</span><br>L View<br>Programme name',
            txOnTheLeftReverse: '&nbsp;',
            txInTheCenter: '<span style="line-height: 11px">&nbsp;</span><br>C View<br>Programme name',
            txInTheCenterReverse: '&nbsp;',
            txOnTheRight: '<span style="line-height: 11px">&nbsp;</span><br>R View<br>Programme name',
            txOnTheRightReverse: '&nbsp;',

            logoOnTheLeft: 'logo.png',
            logoOnTheLeftReverse: '1x1.png',
            logoInTheCenter: 'logo.png',
            logoInTheCenterReverse: '1x1.png',
            logoOnTheRight: 'logo.png',
            logoOnTheRightReverse: '1x1.png',

            reelAnimation: { last: false, all: true, middle: false, none: false },
            reelAnimationTime: { time: 500, delay: 750, delayBeforeFlip: 500 },
            reelPosition: { left: false, right: true },
            reelFlipAnimation: { left: false, middle: false, right: false },

            showCallToAction: { visible: true, delay: 750 }
        },