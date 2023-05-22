<script lang="ts">
    import { Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
    import { quarterback_stats } from '../../../stats';
    import { guesses, max_guesses, solution } from "../../../stores";

    const quarterbacks = quarterback_stats.filter((qb) => {
        return qb.FPTS !== "0" ? true : false
    })

    const quarterback = quarterbacks[Math.floor(Math.random() * quarterbacks.length)];
    $solution = quarterback
</script>

<Heading tag="h2" class="pb-3 text-center">
    {$guesses.length >= max_guesses ? `The player was ${$solution.NAME}!` : "Who is this player?"}
</Heading>


<Table>
    <TableHead class="text-center">
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
        <TableBodyRow class="text-center">
            <TableBodyCell>{$solution.RANK}</TableBodyCell>
            <TableBodyCell>{$solution.PASS_TD}</TableBodyCell>
            <TableBodyCell>{$solution.INT}</TableBodyCell>
            <TableBodyCell>{$solution.PASS_YDS}</TableBodyCell>
            <TableBodyCell>{$solution.YPA}</TableBodyCell>
            <TableBodyCell>{$solution.CMP}</TableBodyCell>
            <TableBodyCell>{$solution.PASS_ATT}</TableBodyCell>
            <TableBodyCell>{$solution.PCT}</TableBodyCell>
            <TableBodyCell>{$solution.SACKS}</TableBodyCell>
            <TableBodyCell>{$solution.RUSH_ATT}</TableBodyCell>
            <TableBodyCell>{$solution.RUSH_YDS}</TableBodyCell>
            <TableBodyCell>{$solution.RUSH_TD}</TableBodyCell>
            <TableBodyCell>{$solution.FUMBLES}</TableBodyCell>
            <TableBodyCell>{$solution.GAMES_PLAYED}</TableBodyCell>
            <TableBodyCell>{$solution.FPTS}</TableBodyCell>
            <TableBodyCell>{$solution.FPTSPG}</TableBodyCell>
            <TableBodyCell>{$solution.ROST}</TableBodyCell>
        </TableBodyRow>
    </TableBody>
</Table>
