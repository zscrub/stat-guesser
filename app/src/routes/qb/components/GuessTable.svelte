<script lang="ts">
    import { Heading, Helper, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
    import { guesses, max_guesses } from "../../../stores";
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
                <TableHeadCell>Player Name</TableHeadCell>
                <TableHeadCell>Fantasy Rank</TableHeadCell>
                <TableHeadCell>Passing TDs</TableHeadCell>
                <TableHeadCell>Interceptions</TableHeadCell>
                <TableHeadCell>Passing Yards</TableHeadCell>
                <TableHeadCell>Yards per Attempt</TableHeadCell>
                <TableHeadCell>Completions</TableHeadCell>
                <TableHeadCell>Pass Attempts</TableHeadCell>
                <TableHeadCell>Completion %</TableHeadCell>
                <TableHeadCell>Sacks</TableHeadCell>
                <TableHeadCell>Rush Attempts</TableHeadCell>
                <TableHeadCell>Rush Yards</TableHeadCell>
                <TableHeadCell>Rush TDs</TableHeadCell>
                <TableHeadCell>Fumbles</TableHeadCell>
                <TableHeadCell>Games Played</TableHeadCell>
                <TableHeadCell>Fantasy Points</TableHeadCell>
                <TableHeadCell>Fantasy Points per Game</TableHeadCell>
                <TableHeadCell>Rostered %</TableHeadCell>
            </TableHead>
            <TableBody>
                {#each $guesses as quarterback}
                    <TableBodyRow class="text-center">
                        <TableBodyCell>{quarterback.NAME}</TableBodyCell>
                        <TableBodyCell>{quarterback.RANK}</TableBodyCell>
                        <TableBodyCell>{quarterback.PASS_TD}</TableBodyCell>
                        <TableBodyCell>{quarterback.INT}</TableBodyCell>
                        <TableBodyCell>{quarterback.PASS_YDS}</TableBodyCell>
                        <TableBodyCell>{quarterback.YPA}</TableBodyCell>
                        <TableBodyCell>{quarterback.CMP}</TableBodyCell>
                        <TableBodyCell>{quarterback.PASS_ATT}</TableBodyCell>
                        <TableBodyCell>{quarterback.PCT}</TableBodyCell>
                        <TableBodyCell>{quarterback.SACKS}</TableBodyCell>
                        <TableBodyCell>{quarterback.RUSH_ATT}</TableBodyCell>
                        <TableBodyCell>{quarterback.RUSH_YDS}</TableBodyCell>
                        <TableBodyCell>{quarterback.RUSH_TD}</TableBodyCell>
                        <TableBodyCell>{quarterback.FUMBLES}</TableBodyCell>
                        <TableBodyCell>{quarterback.GAMES_PLAYED}</TableBodyCell>
                        <TableBodyCell>{quarterback.FPTS}</TableBodyCell>
                        <TableBodyCell>{quarterback.FPTSPG}</TableBodyCell>
                        <TableBodyCell>{quarterback.ROST}</TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
    {/if}
</section>
    