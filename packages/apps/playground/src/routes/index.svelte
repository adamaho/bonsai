<script type="ts">
	import { Button } from '@bonsai/svelte-button';

	import Bookmark from '../components/Bookmark.svelte';

	import * as styles from './index.css';

	let isDisabled = false;
	let isLoading = false;

	const handleDisable = () => {
		isDisabled = !isDisabled;
	};

	const handleLoading = () => {
		isLoading = !isLoading;
	};
</script>

<svelte:head>
	<title>Bonsai Playground</title>
</svelte:head>

<div class={styles.buttonContainer}>
	<Button.Root
		class={styles.button}
		{isDisabled}
		{isLoading}
		on:click={() => console.log('asdsd')}
		on:blur={() => console.log('blurrr')}
	>
		<Button.Icon class={styles.buttonIcon}>
			<Bookmark />
		</Button.Icon>
		<Button.Text class={styles.buttonText} text="Bookmark" />
		<Button.Loading class={styles.buttonLoading} />
	</Button.Root>
</div>

<div>
	<button on:click={handleLoading}>set loading</button>
	<button on:click={handleDisable}>set disabled</button>
</div>
