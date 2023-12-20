if (location.toString() !== 'https://lorenzo-lomartire.github.io/') {
	location.replace(location.origin);
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

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://tgesdgsgrhpcjjhcpvwd.supabase.co?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnZXNkZ3NncmhwY2pqaGNwdndkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzA4MzA2NSwiZXhwIjoyMDE4NjU5MDY1fQ.z0z_kpICIwIid9jr8pdqejH_wILx1FEmjk2k_cy1Vag');
xhr.send();
xhr.onload = function() {
  alert(`Loaded: ${xhr.status} ${xhr.response}`);
};
xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`);
  }
};
xhr.onerror = function() {
  alert(`Network Error`);
};

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
		text('en');
		return;
	}
	if (value === 'it') {
		document.documentElement.setAttribute('lang', 'it');
		document.getElementById('lang-icon').setAttribute('src', 'icons/lang/it.svg');
		text('it');
		return;
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
