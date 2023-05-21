<script lang="ts">
    import { TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
    import { quarterback_stats } from '../../stats';
    let searchTerm: string = '';

    $: filteredItems = quarterback_stats.filter(
      (item) => item.NAME.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );

  </script>
  
  <TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
    <TableHead>
      <TableHeadCell>Rank</TableHeadCell>
      <TableHeadCell>Player</TableHeadCell>
      <TableHeadCell>Completions</TableHeadCell>
      <TableHeadCell>Pass Attempts</TableHeadCell>
      <TableHeadCell>Completion %</TableHeadCell>
      <TableHeadCell>Passing Yards</TableHeadCell>
      <TableHeadCell>Yards per Attempt</TableHeadCell>
      <TableHeadCell>Passing TDs</TableHeadCell>
      <TableHeadCell>Interceptions</TableHeadCell>
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
      {#each filteredItems as item}
        <TableBodyRow>
          <TableBodyCell>{item.RANK}</TableBodyCell>
          <TableBodyCell>{item.NAME}</TableBodyCell>
          <TableBodyCell>{item.CMP}</TableBodyCell>
          <TableBodyCell>{item.PASS_ATT}</TableBodyCell>
          <TableBodyCell>{item.PCT}</TableBodyCell>
          <TableBodyCell>{item.PASS_YDS}</TableBodyCell>
          <TableBodyCell>{item.YPA}</TableBodyCell>
          <TableBodyCell>{item.PASS_TD}</TableBodyCell>
          <TableBodyCell>{item.INT}</TableBodyCell>
          <TableBodyCell>{item.SACKS}</TableBodyCell>
          <TableBodyCell>{item.RUSH_ATT}</TableBodyCell>
          <TableBodyCell>{item.RUSH_YDS}</TableBodyCell>
          <TableBodyCell>{item.RUSH_TD}</TableBodyCell>
          <TableBodyCell>{item.FUMBLES}</TableBodyCell>
          <TableBodyCell>{item.GAMES_PLAYED}</TableBodyCell>
          <TableBodyCell>{item.FPTS}</TableBodyCell>
          <TableBodyCell>{item.FPTSPG}</TableBodyCell>
          <TableBodyCell>{item.ROST}</TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </TableSearch>