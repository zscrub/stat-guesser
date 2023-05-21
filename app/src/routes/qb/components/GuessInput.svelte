<script lang="ts">
    import { Button, Search } from "flowbite-svelte";
    import { quarterback_stats, type Quarterback } from "../../../stats";
    import { onMount } from "svelte";

    let dropdown: Boolean;
    let input: string = "";
    let quarterbacks: Array<Quarterback>;
    let guesses: Array<string> = [];

    $: quarterbacks = input.length ? quarterback_stats.filter((qb) => {
        qb.NAME.toLowerCase().includes(input.toLowerCase()) && !guesses.includes(qb.NAME.toLowerCase())
    }) : quarterback_stats.filter((qb) => !guesses.includes(qb.NAME.toLowerCase()))

    const process_guess = (event: MouseEvent | null) => {
        if (event instanceof MouseEvent) {
            input = (event?.target as HTMLElement)?.textContent ?? ""
        }
        guesses.push(input.toLowerCase())
        
        quarterbacks = quarterbacks.filter((qb) => !guesses.includes(qb.NAME.toLowerCase()))
        input = ""
        dropdown = false
    }

    onMount(() => {
        const div = document.getElementById("search")
    
        div?.addEventListener('keydown', (e) => {
            if ((e as KeyboardEvent).key === 'Enter') {
                input = quarterbacks[0].NAME
                process_guess(null)
            }
        })
    }); 
</script>


<Search id="search" on:focus={() => dropdown = true} on:blur={() => dropdown = false} placeholder="Guess the player" bind:value={input} />
    {#each quarterbacks as quarterback}
        <Button class="w-full pt-5 pb-5" color="alternative" size="lg" on:click={process_guess} outline>
            {quarterback.NAME}
        </Button>
    {/each}
<section class="max-h-32">
    <div class={(dropdown ? " " : "hidden ") + "overflow-y-auto max-h-96"}>
    </div>

</section>
