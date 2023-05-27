<script lang="ts">
    import { Heading, Helper, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
    import { guesses, max_guesses, qb_stats } from "../../../stores";
    import type { Quarterback } from "../../../stats";

    type IndexedQuarterback = Quarterback & {
        [key: string]: unknown;
    }

    let Guesses: Array<IndexedQuarterback>;
    $: Guesses = $guesses

</script>

<hr /> 

<section class="mt-3">
    {#if $guesses.length}

        <Heading tag="h2" class="pb-3 text-center">
            {$guesses.length}/{max_guesses} {$guesses.length >= max_guesses ? "You're out of guesses!" : "Guesses"}
            <Helper class="text-center">
                <span class="italic text-sm text-gray-500">
                    max guesses is {max_guesses}
                </span>
            </Helper>
        </Heading>

        <Table>
            <TableHead class="text-center">
                <TableHeadCell>NAME</TableHeadCell>
                {#each $qb_stats as [key, _]}
                    <TableHeadCell class={key === "NAME" ? "hidden" : ""}>{key.replace("_", " ")}</TableHeadCell>
                {/each}
            </TableHead>
            <TableBody>
                {#each Guesses as quarterback}
                    <TableBodyRow class="text-center">
                            <TableBodyCell>{quarterback.NAME}</TableBodyCell>
                        {#each $qb_stats as [key, _]}
                            <TableBodyCell class={key === "NAME" ? "hidden" : ""}>{quarterback[key]}</TableBodyCell>
                        {/each}
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
    {/if}
</section>
    