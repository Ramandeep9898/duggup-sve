<script lg="ts">
  import * as Card from "$lib/components/ui/card";
  export let about = "";
  export let bgImageUrl = "";
</script>

<Card.Root
  class=" border-[var(--border)] w-full h-[200px] md:w-[350px] md:h-[250px] relative rounded-xl"
>
  <Card.Content
    style={`background-image: url(${bgImageUrl});`}
    class={`h-full bg-no-repeat p-0 bg-cover rounded-xl `}
  ></Card.Content>
  <Card.Footer class="bg-white h-20 absolute  w-full rounded-b-xl bottom-0 p-4">
    {#if about.length > 100}
      <p class="whitespace-pre-line text-xs md:text-sm text-primary">
        {about.slice(0, 80) + "..."}
      </p>
    {:else}
      <p class="whitespace-pre-line text-xs md:text-sm text-primary">
        {about}
      </p>
    {/if}
  </Card.Footer>
</Card.Root>
