<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Menu } from "lucide-svelte";
  import DropDown from "../Dropdown/DropDown.svelte";
  import {
    headerConfig,
    headerDropdownConfig,
  } from "../../config/header.config";
</script>

<Sheet.Root>
  <Sheet.Trigger asChild let:builder>
    <Button variant="ghost" builders={[builder]} size="sm" class="p-0">
      <Menu class="h-7 w-7" />
    </Button>
  </Sheet.Trigger>
  <Sheet.Content
    side="left"
    class="flex justify-between items-start flex-col bg-white"
  >
    <div class="flex flex-col justify-start items-start w-full mt-9">
      {#each headerConfig as { variant, heading, icon }}
        <Button {variant} size="sm" class="mb-3">
          <svelte:component
            this={icon}
            class="mr-3 h-4 w-4 text-[var(--grey-light)]"
          />
          {heading}
        </Button>
      {/each}
    </div>
    <Sheet.Footer>
      <Sheet.Close asChild let:builder>
        <DropDown {headerDropdownConfig} />
      </Sheet.Close>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>
