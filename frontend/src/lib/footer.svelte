<!--
SPDX-FileCopyrightText: 2023 Marlon W (Platonic)

SPDX-License-Identifier: MPL-2.0
-->

<script lang="ts">
	import LanguageToggle from './language-toggle.svelte';
	import { getLocalization } from '$lib/i18n';

	const { t } = getLocalization();
</script>

<footer class="text-center text-white border-black w-screen">
	<div class="grid grid-cols-12 w-full pt-4 bg-gray-700 pb-2">
		<p class="col-start-3 col-end-11 text-center w-full">
			{@html $t('footer.self_ads', {
				platonic_link:
					'<a href="https://mawoka.eu?utm_source=Quizzy&utm_medium=footer" target="_blank" class="underline text-blue-300 hover:text-blue-500 transition">Platonic</a>',
				giovanny_link: `<a href='https://www.linkedin.com/in/giovanny-halimko/' class='underline text-blue-300 hover:text-blue-500 transition'>Giovanny Halimko</a>`,
                samuel_link: `<a href='https://www.linkedin.com/in/samuel-onasis/' class='underline text-blue-300 hover:text-blue-500 transition'>Samuel Onasis</a>`,
                aswin_link: `<a href='https://www.linkedin.com/in/aswin-angkasa-1a58b4247/' class='underline text-blue-300 hover:text-blue-500 transition'>Aswin Angkasa</a>`,
				interpolation: { escapeValue: false }
			})}
			<br />

			{@html $t('footer.donate', {
				donate_link: `<a href='https://mawoka.eu/donate' target='_blank' class='underline text-blue-300 hover:text-blue-500 transition'>${$t(
					'words.donating'
				)}</a>`,
				interpolation: { escapeValue: false }
			})}
			<a
				href="https://mawoka.eu/donate"
				target="_blank"
				class="underline text-blue-300 hover:text-blue-500 transition"
				>{$t('footer.more_details_here')}.</a
			>
		</p>
	</div>
	<div class="md:hidden block">
		<div class="self-end flex justify-center min-h-full h-full bg-gray-700 pb-2 md:pb-0">
			<div class="m-auto md:invisible visible">
				<LanguageToggle />
			</div>
		</div>
	</div>
</footer>

<!--
<style>
	.bg-animated {
		background-size: 100% 100%;

		-webkit-animation: ColorRunner 13s ease infinite;
		-moz-animation: ColorRunner 13s ease infinite;
		-o-animation: ColorRunner 13s ease infinite;
		animation: ColorRunner 13s ease infinite;
	}

	@-webkit-keyframes ColorRunner {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@-moz-keyframes ColorRunner {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@-o-keyframes ColorRunner {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes ColorRunner {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
-->
