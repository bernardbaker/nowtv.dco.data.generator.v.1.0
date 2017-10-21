{
            type: 'text.and.image.module.ticket.component',

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
            imageLayer: '01_text_and_image_module_ticket_image.png',
            imageTx: '<span style="line-height: 15px">&nbsp;</span><br>Viewing details<br>Programme name goes here',
            imageLogo: 'logo.png',
            ticketAnimation: { none: false, slideFromTheLeft: true, slideFromTheRight: false, slideFromTheLeftAtAnAngle: false, slideFromTheRightAtAnAngle: false, dropInFromAboveAtAnAngle: false, dropInFromAbove: false, fade: false, zoomIn: false },
            ticketAnimationTime: { time: 500, delay: 750 },

            showCallToAction: { visible: true, delay: 750 }
        },