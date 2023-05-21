<script lang="ts">
    import { Button, Search } from "flowbite-svelte";
    import { quarterback_stats, type Quarterback } from "../../../stats";
    import { onMount } from "svelte";

    let input: string = "";
    let quarterbacks: Array<Quarterback>;
    let guesses: Array<Quarterback | undefined> = [];

    $: quarterbacks = input?.length ? 
        quarterback_stats.filter((qb) => qb.NAME.toLowerCase().includes(input.toLowerCase()) && !guesses.includes(qb))
    : quarterback_stats.filter((qb) => !guesses.includes(qb))

    const process_guess = (event: MouseEvent | null) => {
        if (event instanceof MouseEvent) {
            input = (event?.target as HTMLElement)?.textContent ?? ""
        }

        const res = quarterbacks.find((qb) => {
            qb.NAME.toLowerCase() === input.toLowerCase()
        })

        if (res === undefined) {
            console.log
            return
        }

        guesses.push(res)
        
        quarterbacks = quarterbacks.filter((qb) => !guesses.includes(qb))
        input = ""
        console.log(guesses)
    }

    onMount(() => {
        const div = document.getElementById("search")
    
        div?.addEventListener('keydown', (e) => {
            if ((e as KeyboardEvent).key === 'Enter') {
                // rare cases where the player wont show up due to a ghost space
                
                input = quarterbacks[0]?.NAME ?? input
                input = input.trimEnd()
                process_guess(null)
            }
        })
    });
</script>


<Search id="search" placeholder="Guess the player" bind:value={input} />
<section class="max-h-32">
    <div class="overflow-y-auto max-h-96 border border-gray-500 rounded-md">
        {#each quarterbacks as quarterback}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="w-full pt-3" on:click={process_guess}>
                <Button class="w-full" color="alternative" size="lg" outline>
                    {quarterback.NAME}
                </Button>
            </div>
        {/each}
    </div>
</section>
