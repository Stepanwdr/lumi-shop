// eslint-disable-next-line import/no-unresolved
import 'server-only'

import { Locale } from '@shared/lib/configs/i18n/index'

const dictionaries = {
  en: () => import('../../../localization/en').then(module => module.default),
  ru: () => import('../../../localization/ru').then(module => module.default),
  ar: () => import('../../../localization/ar').then(module => module.default)
}

const metaDictionaries = {
  en: () =>
    import('../../../localization/meta-info/en').then(module => module.default),
  ru: () =>
    import('../../../localization/meta-info/ru').then(module => module.default),
  ar: () =>
    import('../../../localization/meta-info/ar').then(module => module.default)
}
const pageNamesDictionaries = {
  en: () =>
    import('../../../localization/meta-info/micro-markup/en').then(
      module => module.default
    ),
  ru: () =>
    import('../../../localization/meta-info/micro-markup/ru').then(
      module => module.default
    ),
  ar: () =>
    import('../../../localization/meta-info/micro-markup/ar').then(
      module => module.default
    )
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? (await dictionaries.en())

export const getMetaDictionary = async (locale: Locale) =>
  metaDictionaries[locale]?.() ?? (await metaDictionaries.en())

export const getPageNamesDictionary = async (locale: Locale) =>
  pageNamesDictionaries[locale]?.() ?? (await pageNamesDictionaries.en())
