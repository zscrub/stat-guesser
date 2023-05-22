<script lang="ts">
    import { Button, Search } from "flowbite-svelte";
    import { quarterback_stats, type Quarterback } from "../../../stats";
    import { onMount } from "svelte";
    import { guesses, max_guesses } from "../../../stores";

    let input: string = "";
    let quarterbacks: Array<Quarterback>;
    
    $: quarterbacks = input?.length ? 
        quarterback_stats.filter((qb) => qb.NAME.toLowerCase().includes(input.toLowerCase()) && !$guesses.includes(qb))
    : quarterback_stats.filter((qb) => !$guesses.includes(qb))

    const process_guess = (event: MouseEvent) => {
        if ($guesses.length >= max_guesses) return
        
        if (event instanceof MouseEvent) {
            input = (event?.target as HTMLElement)?.textContent ?? ""
        }

        const qb = quarterbacks.find((qb) => qb.NAME.toLowerCase() === input.toLowerCase())
        if (qb === undefined) return

        guesses.update(arr => [...arr, qb])
        
        quarterbacks = quarterbacks.filter((qb) => !$guesses.includes(qb))
        input = ""
    }

    onMount(() => {
        const div = document.getElementById("search")
    
        div?.addEventListener('keydown', (e) => {
            if ($guesses.length >= max_guesses) return
            
            if ((e as KeyboardEvent).key === 'Enter') {
                if (!quarterbacks?.length) return
                const qb = quarterbacks[0]
                guesses.update(arr => [...arr, qb])
                quarterbacks = quarterbacks.slice(1)
                input = ""
            }
        })
    });
</script>

<section>
    <Search 
        id="search" 
        placeholder="Guess the player" 
        bind:value={input} 
    />
    <section class="max-h-32 mb-40">
        <div class="overflow-y-auto max-h-72 border border-gray-500 rounded-md">
            {#each quarterbacks as quarterback}
                <Button class="w-full pt-3" color="alternative" size="lg" on:click={process_guess} outline disabled={$guesses.length >= max_guesses ? true : false}>
                    <p class="text-lg">{quarterback.NAME}</p> 
                </Button>
                <!-- this element is required for functionality -->
                <br />
            {/each}
        </div>
    </section>
</section>

