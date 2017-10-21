{
            type: 'double.image.module.pass.and.ticket.component',

            frameDuration: 4000,

            transition: { cut: false, fade: true, topToBottom: false, rightToLeft: false, bottomToTop: false, leftToRight: false },
            transitionTime: { time: 750 },

            background: { colour: '#003464', animationTime: 500, delay: 750 },

            headlineColour: '#ffffff',
            headlineText: 'Frame_1_Headline_standard_size',
            headlinePosition: { x: 150, y: 230 },
            headlineAnimation: { fade: true, slideLeftToRight: false, slideRightToLeft: false, slideTopToBottom: false, zoom: false, fadeWithBounce: false, pulse: false, none: false },
            headlineAnimationTime: { time: 500, delay: 750 },

            ticketMask: '03_double_image_module_angled_pass_mask.png',
            ticketImage: '03_double_image_module_angled_pass_image.png',
            passAnimation: { none: false, slideFromTheLeft: false, slideFromTheRight: false, slideFromTheLeftAtAnAngle: true, slideFromTheRightAtAnAngle: false, dropInFromAboveAtAnAngle: false, spinInFromAbove: false, dropInFromAbove: false, fade: false, zoomIn: false },
            passAnimationTime: { time: 750, delay: 750 },

            imageMask: '03_double_image_module_ticket_mask.png',
            imageLayer: '03_double_image_module_ticket_image.png',
            imageTx: '<span style="line-height: 16px">&nbsp;</span><br>Viewing details<br>Programme name goes here',
            imageLogo: 'logo.png',
            ticketAnimation: { none: false, slideFromTheLeft: false, slideFromTheRight: false, slideFromTheLeftAtAnAngle: false, slideFromTheRightAtAnAngle: false, dropInFromAboveAtAnAngle: false, dropInFromAbove: false, fade: true, zoomIn: false },
            ticketAnimationTime: { time: 500, delay: 750 },

            showCallToAction: { visible: true, delay: 750 }
        },