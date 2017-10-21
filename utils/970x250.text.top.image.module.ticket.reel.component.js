{
            type: 'text.top.image.module.ticket.reel.component',

            frameDuration: 5000,

            transition: { cut: false, fade: true, topToBottom: false, rightToLeft: false, bottomToTop: false, leftToRight: false },
            transitionTime: { time: 750 },

            background: { colour: '#003464', animationTime: 500, delay: 750 },

            headlineColour: '#ffffff',
            headlinePosition: { x: 300, y: 215 },
            headlineText: 'Frame_1_Headline_standard_size',
            headlineAnimation: { fade: true, slideLeftToRight: false, slideRightToLeft: false, slideTopToBottom: false, zoom: false, fadeWithBounce: false, pulse: false, none: false },
            headlineAnimationTime: { time: 500, delay: 750 },

            imageMask: '02_text_top_image_module_reel_ticket_mask.png',
            imageOnTheLeft: '02_text_top_image_module_reel_ticket_left.png',
            imageInTheCenter: '02_text_top_image_module_reel_ticket_center.png',
            imageOnTheRight: '02_text_top_image_module_reel_ticket_right.png',

            txOnTheLeft: '<span style="line-height: 18px">&nbsp;</span><br>L Viewing details<br>Programme name',
            txInTheCenter: '<span style="line-height: 18px">&nbsp;</span><br>C Viewing details<br>Programme name',
            txOnTheRight: '<span style="line-height: 18px">&nbsp;</span><br>R Viewing details<br>Programme name',

            logoOnTheLeft: 'logo.png',
            logoInTheCenter: 'logo.png',
            logoOnTheRight: 'logo.png',

            reelAnimation: { all: true, none: false },
            reelAnimationTime: { time: 750, delay: 750 },
            reelPosition: { left: true, right: false },

            showCallToAction: { visible: true, delay: 750 }
        },