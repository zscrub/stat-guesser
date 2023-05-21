<script lang="ts">
    import { Heading, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
    import { quarterback_stats } from '../../../stats';

    const quarterbacks = quarterback_stats.filter((qb) => {
        return qb.FPTS !== "0" ? true : false
    })

    const quarterback = quarterbacks[Math.floor(Math.random() * quarterbacks.length)];
</script>

<Heading tag="h2" class="pb-3 text-center">
    Who is this player?
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
    </TableBody>
</Table>
