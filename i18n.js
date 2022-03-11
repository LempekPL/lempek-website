module.exports = {
    "defaultLocale": "en",
    "locales": ["en", "pl", "de"],
    "pages": {
        "*": ["common", "navbar"],
        "/changelog": ["changelog"],
        "/about": ["about"]
    },
    "loadLocaleFrom": (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
    "domains": [
        {
            "domain": "lempek.dev",
            "defaultLocale": "en",
        },
        {
            "domain": "pl.lempek.dev",
            "defaultLocale": "pl",
        },
        {
            "domain": "de.lempek.dev",
            "defaultLocale": "de",
        },
    ],
}

