<!--
SPDX-FileCopyrightText: 2023 Marlon W (Platonic)

SPDX-License-Identifier: MPL-2.0
-->

<script lang="ts">
	import { navbarVisible } from '$lib/stores';

	navbarVisible.set(true);
</script>

<slot />
