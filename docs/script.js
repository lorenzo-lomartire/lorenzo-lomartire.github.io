const urlParams = new URLSearchParams(location.search);
if (urlParams.size > 0) {
	location.replace(location.origin + location.pathname);
}
const referrerParams = new URLSearchParams(document.referrer.substring(document.referrer.indexOf('?')));
if (referrerParams.has('lang'))
	lang(referrerParams.get('lang'));
if (referrerParams.has('theme'))
	theme(referrerParams.get('theme'));
const text = JSON.parse(document.getElementById('text').textContent);

function navigate(url) {
	url += '?theme=' + (document.body.getAttribute('theme') || 'light');
	url += '&lang=' + (document.documentElement.getAttribute('lang') || 'en');
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
		document.getElementById('theme-icon').setAttribute('src', 'icons/theme/light.svg');
		document.getElementById('theme-icon').setAttribute('alt', 'switch theme from light to dark');
		return;
	}
	if (value === 'dark') {
		document.body.setAttribute('theme', 'dark');
		document.getElementById('theme-icon').setAttribute('src', 'icons/theme/dark.svg');
		document.getElementById('theme-icon').setAttribute('alt', 'switch theme from dark to light');
		return;
	}
}
function lang(value) {
	if (value === 'en') {
		document.documentElement.setAttribute('lang', 'en');
		document.getElementById('lang-icon').setAttribute('src', 'icons/lang/en.svg');
		document.getElementById('lang-icon').setAttribute('alt', 'switch language from english to italian');
		return;
	}
	if (value === 'it') {
		document.documentElement.setAttribute('lang', 'it');
		document.getElementById('lang-icon').setAttribute('src', 'icons/lang/it.svg');
		document.getElementById('lang-icon').setAttribute('alt', 'switch language from italian to english');
		return;
	}
}
