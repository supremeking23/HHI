/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 
// Google Fonts

// Initialize Share-Buttons
$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'facebook':   { class: 'facebook', use: true, link: '', extras: '' },
    'linkedin':   { class: 'linkedin', use: true, link: 'https://www.linkedin.com/company/hunter-s-hub-incorporated/about/', extras: 'target="_blank"'  },
    'lightbulb-o':   { class: 'lightbulb-o', use: true, link: 'https://www.indeedjobs.com/hunters-hub-inc/_hl/en_PH?cpref=JXWAtnzf3XW5aRnY2g_zonsfzg9-fxtSRiWa1kaGqGU', extras: 'target="_blank"'  },
  }
});