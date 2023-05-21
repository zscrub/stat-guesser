<script lang="ts">
    import { Helper, Table, TableBody, TableBodyCell } from "flowbite-svelte";
import GuessInput from "./components/GuessInput.svelte";
import UnknownPlayer from "./components/UnknownPlayer.svelte";
</script>


<section class="h-full grid grid-cols-1 gap-4 content-between p-4">
    <div class="pb-6">
        <UnknownPlayer />
    </div>

    <div>
        <GuessInput />
    </div>
</section>
