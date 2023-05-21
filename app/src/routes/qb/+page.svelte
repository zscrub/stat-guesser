<script lang="ts">
    import GuessInput from "./components/GuessInput.svelte";
    import GuessTable from "./components/GuessTable.svelte";
    import UnknownPlayer from "./components/UnknownPlayer.svelte";
</script>


<div class="h-full grid grid-cols-1 gap-4 content-between p-4">
    <section class="h-full grid grid-cols-1 gap-4 content-between p-4">
        <UnknownPlayer />
    </section>

    <section>
        <GuessInput />
    </section>

    <section class="pt-5">
        <GuessTable />
    </section>
</div>
