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
console.log(lang)

if (locat.pathname == '/') {
  if (lang == 'ua' && locat.pathname != '/') {
    location.href = '/'
  } else if (lang == 'ru' && locat.pathname != '/ru') {
    location.href = '/ru'
    console.log('переход1')
  } else if (lang == 'en' && locat.pathname != '/en') {
    location.href = '/en'
  }
}

if (!navigator.cookieEnabled || lang != null) {
} else if (locat.pathname != '/') {
} else if (
  (oLanguage.userLanguage == 'uk' ||
    oLanguage.userLanguage == 'uk-UA' ||
    oLanguage.UALanguage == 'uk' ||
    oLanguage.UALanguage == 'uk-UA') &&
  lang === null
) {
  location.href = '/'
} else if (
  (oLanguage.userLanguage == 'ru' ||
    oLanguage.userLanguage == 'ru-RU' ||
    oLanguage.UALanguage == 'ru' ||
    oLanguage.UALanguage == 'ru-RU') &&
  lang === null
) {
  location.href = '/ru'
} else {
  location.href = '/en'
}

$('.sidebar__link-lang--ru').on('click', function() {
  document.cookie = 'lang=ru; path=/'
})
$('.sidebar__link-lang--ua').on('click', function() {
  document.cookie = 'lang=ua; path=/'
})
$('.sidebar__link-lang--en').on('click', function() {
  document.cookie = 'lang=en; path=/'
})

$('.icon2-ru').on('click', function() {
  document.cookie = 'lang=ru'
})
$('.icon2-ua').on('click', function() {
  document.cookie = 'lang=ua'
})
$('.icon2-en').on('click', function() {
  document.cookie = 'lang=en'
})
