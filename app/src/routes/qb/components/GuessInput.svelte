<script lang="ts">
    import { Button, Search } from "flowbite-svelte";
    import { quarterback_stats, type Quarterback } from "../../../stats";
    import { onMount } from "svelte";
    import { guesses } from "../../../stores";

    let input: string = "";
    let quarterbacks: Array<Quarterback>;

    $: quarterbacks = input?.length ? 
        quarterback_stats.filter((qb) => qb.NAME.toLowerCase().includes(input.toLowerCase()) && !$guesses.includes(qb))
    : quarterback_stats.filter((qb) => !$guesses.includes(qb))

    const process_guess = (event: MouseEvent | null) => {
        if (event instanceof MouseEvent) {
            input = (event?.target as HTMLElement)?.textContent ?? ""
        }

        const res = quarterbacks.find((qb) => qb.NAME.toLowerCase() === input.toLowerCase())

        if (res === undefined) {
            return
        }

        $guesses.push(res)
        
        quarterbacks = quarterbacks.filter((qb) => !$guesses.includes(qb))
        input = ""
        console.log($guesses)
    }

    onMount(() => {
        const div = document.getElementById("search")
    
        div?.addEventListener('keydown', (e) => {
            if ((e as KeyboardEvent).key === 'Enter') {
                if (!quarterbacks?.length) return
                const qb = quarterbacks[0]
                $guesses.push(qb)
                quarterbacks = quarterbacks.slice(1)
                input = ""
            }
        })
    });
</script>


<Search id="search" placeholder="Guess the player" bind:value={input} />
<section class="max-h-32 pt-1">
    <div class="overflow-y-auto max-h-96 border border-gray-500 rounded-md">
        {#each quarterbacks as quarterback}
            <Button class="w-full pt-3" color="alternative" size="lg" on:click={process_guess} outline disabled>
                {quarterback.NAME}
            </Button>
            <br />
        {/each}
    </div>
</section>
