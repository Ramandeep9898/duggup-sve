<script>
  import { Button } from "$lib/components/ui/button";
  import DropDown from "../Dropdown/DropDown.svelte";
  import HeaderMobile from "./HeaderMobile.svelte";
  import {
    headerConfig,
    headerDropdownConfig,
  } from "../../config/header.config";
  import DuggupTextLogo from "$lib/assets/duggup.png";
  import DuggupLogo from "$lib/assets/dugup.svg";
</script>

<div
  class="flex w-full justify-between p-3 border-[var(--grey-lightest)] border-b-[3px] border-dotted"
>
  <div class="flex items-center gap-2">
    <img src={DuggupLogo} alt="" />
    <img src={DuggupTextLogo} alt="" />
  </div>
  <div class=" hidden md:block">
    <div class="flex gap-10 items-center">
      <div class="flex gap-10 items-center">
        {#each headerConfig as { variant, heading, icon }}
          <Button {variant}>
            <svelte:component
              this={icon}
              class="mr-3 h-4 w-4 text-[var(--grey-light)]"
            />
            {heading}
          </Button>
        {/each}
      </div>
      <div class="">
        <DropDown {headerDropdownConfig} />
      </div>
    </div>
  </div>

  <div class="block md:hidden">
    <HeaderMobile />
  </div>
</div>
