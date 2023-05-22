<script lang="ts">
    import { Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Helper } from "flowbite-svelte";
    import { quarterback_stats } from '../../../stats';
    import { guesses, max_guesses, solution, qb_stats } from "../../../stores";

    const quarterbacks = quarterback_stats.filter((qb) => {
        return qb.FPTS !== "0" ? true : false
    })

    const quarterback = quarterbacks[Math.floor(Math.random() * quarterbacks.length)];
    $solution = quarterback

    // take attributes of qb and randomize order of how they appear
    let attributes = Object.entries(quarterback)
    $qb_stats = attributes.sort(() => Math.random() - 0.5);

    // hide all but the first 2 attributes, show more as the user guesses
        // will need to write to a store to update GuessTable to display the same stats in the same order
            // array of quarterback stats, either Array<Tuple> or Array<QuarterbackAttribute>
</script>


<Helper>
    Passing TDs
    Interceptions, 
    Passing Yards, 
    Yards per Attempt, 
    Completions, 
    Pass Attempts, 
    Completion %, 
    Sacks, 
    Rush Attempts, 
    Rush Yards, 
    Rush TDs, 
    Fumbles, 
    Games Played, 
    Fantasy Point, 
    Fantasy Points per Game, 
    Rostered %
</Helper>

<Heading tag="h2" class="pb-3 text-center">
    {$guesses.length >= max_guesses ? `The player was ${$solution.NAME}!` : "Who is this player?"}
</Heading>


<Table>
    <TableHead class="text-center">
        {#each $qb_stats as [key, stat]}
            {#if key !== "NAME"}
                <TableHeadCell>{key.replace("_", " ")}</TableHeadCell>
            {/if}
        {/each}
    </TableHead>
    <TableBody>
        <TableBodyRow class="text-center">        
                {#each $qb_stats as [key, stat]}
                    {#if key !== "NAME"}
                        <TableBodyCell>{stat}</TableBodyCell>
                    {/if}
                {/each}
            </TableBodyRow>
            <!-- <TableBodyCell>{quarterback.RANK}</TableBodyCell>
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
            <TableBodyCell>{quarterback.ROST}</TableBodyCell> -->
    </TableBody>
</Table>
