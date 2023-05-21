<script lang="ts">
    import { Dropdown, DropdownItem, Input } from "flowbite-svelte";
    import { quarterback_stats, type Quarterback } from "../../../stats";

    let input: string = "";
    let quarterbacks: Array<Quarterback>;

    $: quarterbacks = input.length ? quarterback_stats.filter((qb) => qb.NAME.includes(input)) : quarterback_stats
</script>



<Input placeholder="Guess the player" bind:value={input} />
<Dropdown>
    {#each quarterbacks as quarterback}
        <DropdownItem>{quarterback.NAME}</DropdownItem>
    {/each}
</Dropdown>
