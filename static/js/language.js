function LanguageInfo() {
  var n = navigator
  this.UALanguage = n.language
    ? n.language
    : n.browserLanguage
      ? n.browserLanguage
      : null
  this.userLanguage = n.userLanguage
    ? n.userLanguage
    : n.systemLanguage
      ? systemLanguage
      : null
}

function getCookie(lg) {
  var results = document.cookie.match('(^|;) ?' + lg + '=([^;]*)(;|$)')

  if (results) return unescape(results[2])
  else return null
}

var $SITE_HREF = 'https://compassionate-golick-3c8633.netlify.com/'

var oLanguage = new LanguageInfo(),
  lg = getCookie('lg'),
  locat = window.location,
  lang = getCookie('lang')

if (locat.pathname == '/') {
  if (lang == 'ru' && locat.pathname != '/ru') {
    location.href = '/ru'
  } else if (lang == 'ua' && locat.pathname != '/') {
    location.href = '/'
  } else if (lang == 'en' && locat.pathname != '/en') {
    location.href = '/en'
  }
}

if (!navigator.cookieEnabled || lang != null) {
} else if (locat.href != $SITE_HREF) {
  document.cookie = 'lg=1'
} else if (
  oLanguage.userLanguage == 'uk' ||
  oLanguage.userLanguage == 'uk-UA' ||
  oLanguage.UALanguage == 'uk' ||
  oLanguage.UALanguage == 'uk-UA'
) {
  document.cookie = 'lg=1'
  location.href = '/'
} else if (
  oLanguage.userLanguage == 'ru' ||
  oLanguage.userLanguage == 'ru-RU' ||
  oLanguage.UALanguage == 'ru' ||
  oLanguage.UALanguage == 'ru-RU'
) {
  document.cookie = 'lg=1'
  location.href = '/ru'
} else {
  document.cookie = 'lg=1'
  location.href = '/en'
}

$('.sidebar__link-lang--ru').on('click', function() {
  document.cookie = 'lang=ru'
  document.cookie = 'lg=1'
})
$('.sidebar__link-lang--ua').on('click', function() {
  document.cookie = 'lang=ua'
  document.cookie = 'lg=1'
})
$('.sidebar__link-lang--en').on('click', function() {
  document.cookie = 'lang=en'
  document.cookie = 'lg=1'
})

$('.icon2-ru').on('click', function() {
  document.cookie = 'lang=ru'
  document.cookie = 'lg=1'
})
$('.icon2-ua').on('click', function() {
  document.cookie = 'lang=ua'
  document.cookie = 'lg=1'
})
$('.icon2-en').on('click', function() {
  document.cookie = 'lang=en'
  document.cookie = 'lg=1'
})
