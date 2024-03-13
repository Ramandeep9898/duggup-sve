<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  export let imageUrl: any = "";
  export let sizeClass: any = "";
</script>

<Avatar.Root class={sizeClass}>
  <Avatar.Image src={imageUrl} alt="@shadcn" />
  <Avatar.Fallback>CN</Avatar.Fallback>
</Avatar.Root>
