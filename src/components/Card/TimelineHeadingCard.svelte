<script>
  import * as Card from "$lib/components/ui/card";
  export let heading = "";
  export let subHeading = "";
</script>

<Card.Root class="bg-white border-none w-full">
  <Card.Content class="mt-4">
    <h1 class="text-xl font-bold mb-1">{heading}</h1>
    <p class="text-s text-primary">{subHeading}</p>
  </Card.Content>
</Card.Root>
