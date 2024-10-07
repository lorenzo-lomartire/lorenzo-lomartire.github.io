/*
if (location.toString() !== location.origin + '/') {
	location.replace(location.origin + '/');
}

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js').then(function(registration) {}).catch(function(error) {
		console.error('Service Worker registration failed:', error);
	});
}

const urlParams = new URLSearchParams(new URL(document.referrer || location).search);
if (urlParams.has('lang'))
	lang(urlParams.get('lang'));
if (urlParams.has('theme'))
	theme(urlParams.get('theme'));

document.getElementById('lang-button').onclick = switchLang;
document.getElementById('theme-button').onclick = switchTheme;
document.getElementById('homepage-button').onclick = () => {
	navigate(location.origin);
}
document.getElementById('music-button').onclick = () => {
	navigate(location.origin + '/music');
};

function navigate(url) {
	if (navigator.onLine) {
		url += '?theme=' + (document.body.getAttribute('theme') || 'light');
		url += '&lang=' + (document.documentElement.getAttribute('lang') || 'en');
	}
	location = url;
}
function switchTheme() {
	if (document.body.getAttribute('theme') === 'light') {
		theme('dark');
		return;
	}
	if (document.body.getAttribute('theme') === 'dark') {
		theme('light');
		return;
	}
	theme('light');
}
function switchLang() {
	if (document.documentElement.getAttribute('lang') === 'en') {
		lang('it');
		return;
	}
	if (document.documentElement.getAttribute('lang') === 'it') {
		lang('en');
		return;
	}
	lang('en');
}
function theme(value) {
	if (value === 'light') {
		document.body.setAttribute('theme', 'light');
		document.getElementById('theme-icon').setAttribute('src', location.origin + '/icons/theme/light.svg');
		document.getElementById('theme-icon').setAttribute('alt', 'switch theme from light to dark');
	} else if (value === 'dark') {
		document.body.setAttribute('theme', 'dark');
		document.getElementById('theme-icon').setAttribute('src', location.origin + '/icons/theme/dark.svg');
		document.getElementById('theme-icon').setAttribute('alt', 'switch theme from dark to light');
	}
}
function lang(value) {
	if (value === 'en') {
		document.documentElement.setAttribute('lang', 'en');
		document.getElementById('lang-icon').setAttribute('src', location.origin + '/icons/lang/en.svg');
		text('en');
	} else if (value === 'it') {
		document.documentElement.setAttribute('lang', 'it');
		document.getElementById('lang-icon').setAttribute('src', location.origin + '/icons/lang/it.svg');
		text('it');
	}
}
function text(lang) {
	fetch('./text/' + lang + '.json')
	.then(response => response.json())
	.then(data => {
		for (let id in data) {
			document.getElementById(id).textContent = data[id];
		}
	});
}
*/