// SPDX-FileCopyrightText: 2023 Marlon W (Mawoka)
//
// SPDX-License-Identifier: MPL-2.0

import i18next from 'i18next';
import en from './locales/en.json';
import id from './locales/id.json';
// import uz from './locales/uz.json'
// import zh_Hans from './locales/zh_Hans.json';
import LanguageDetector from 'i18next-browser-languagedetector';

import type { i18n } from 'i18next';

export class I18nService {
	// expose i18next
	i18n: i18n;

	constructor() {
		this.i18n = i18next;
		this.initialize();
		// this.changeLanguage("de")
		//this.changeLanguage(INITIAL_LANGUAGE);
	}

	// Our translation function
	t(key: string, replacements?: Record<string, unknown>): string {
		return this.i18n.t(key, replacements);
	}

	// Initializing i18n
	initialize(): void {
		this.i18n.use(LanguageDetector).init({
			// lng: INITIAL_LANGUAGE,
			compatibilityJSON: 'v3',
			fallbackLng: 'en',
			debug: false,
			defaultNS: 'translation',
			interpolation: {
				escapeValue: false
			},
			returnEmptyString: false,
			simplifyPluralSuffix: true,
			// detection: {
			// 	order: ['browser', 'querystring', 'navigator', 'localStorage', 'htmlTag'],
			// 	lookupQuerystring: 'lng'
			// }
			detection: {
				order: ['querystring', 'cookie', 'localStorage', 'navigator'],
				lookupQuerystring: 'lng',
				lookupLocalStorage: 'language'
			}
		});
		this.i18n.addResourceBundle('en', 'translation', en);
		this.i18n.addResourceBundle('id', 'translation', id);
		// this.i18n.addResourceBundle('uz', 'translation', uz);
	}

	changeLanguage(language: string): void {
		this.i18n.changeLanguage(language);
	}
}
