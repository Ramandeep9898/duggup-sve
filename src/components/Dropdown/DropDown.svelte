<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { ChevronDown } from "lucide-svelte";
  import Avatar from "../Avatar/Avatar.svelte";
  export let headerDropdownConfig;
  const { profile, profileName } = headerDropdownConfig;
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger class="flex  justify-center items-center gap-4">
    <Avatar imageUrl={profile} />

    <p class="text-primary text-xl">{profileName}</p>

    <ChevronDown />
  </DropdownMenu.Trigger>

  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.Label>My Account</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>Profile</DropdownMenu.Item>
      <DropdownMenu.Item>Billing</DropdownMenu.Item>
      <DropdownMenu.Item>Team</DropdownMenu.Item>
      <DropdownMenu.Item>Subscription</DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
