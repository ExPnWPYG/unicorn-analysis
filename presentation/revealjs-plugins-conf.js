//
// MENU PLUGIN https://github.com/denehyg/reveal.js-menu
//
menu: {
	numbers: true, // Add slide numbers to the titles in the slide list.
	titleSelector: 'h1, h2, h3, h4, h5, div.title, caption.title, #toctitle', // Specifies which slide elements will be used for generating the slide titles in the menu.
	transitions: true, // Specifies if the transitions menu panel will be shown.
	openButton: true, // Adds a menu button to the slides to open the menu panel.
	openSlideNumber: false, // If 'true' allows the slide number in the presentation to open the menu panel
	loadIcons: true, // By default the menu will load it's own font-awesome library icons
	sticky: true, // If 'true', the sticky option will leave the menu open until it is explicitly closed
	custom: [ { title: 'Keys', icon: '<i class="fa fa-keyboard">', content: `
		<ul class="slide-menu-items">
		<li class="slide-menu-item">
			<h3>Core</h3>
			<p>? : Show core keys</p>
		</li>
		<li class="slide-menu-item">
			<h3>Menu</h3>
			<p>M : Open menu</p>
			<p>H or LEFT : Next left panel</p>
			<p>L or RIGHT : Next right panel</p>
			<p>K or UP : Up</p>
			<p>J or DOWN : Down</p>
			<p>U or PAGE UP : Page up</p>
			<p>D or PAGE DOWN : Page down</p>
			<p>HOME : Top</p>
			<p>END : Bottom</p>
			<p>SPACE or RETURN : Selection</p>
			<p>ESC : Close menu</p>
		</li>
		</ul>` }
	        ],
  	themes: [// Specifies the themes that will be available in the themes menu panel. Set to 'true' to show the themes menu panel with the default themes list.
		{ name: '########## light ##########', theme: 'themes/css/reveal-zenika-light.css' },
		{ name: 'code-layers-multicolor', theme: 'themes/css/reveal-code-layers-multicolor.css' },
		{ name: 'containers', theme: 'themes/css/reveal-containers.css' },
		{ name: 'code-relax', theme: 'themes/css/reveal-code-relax.css' },
        { name: '########## dark ##########', theme: 'themes/css/reveal-zenika-dark.css' },
		{ name: 'security-dark', theme: 'themes/css/reveal-security-dark.css' },
		{ name: 'containers-dark', theme: 'themes/css/reveal-containers-dark.css' }]
},
// navigationMode: "linear",
hash: true,
slideNumber: "c/t"
