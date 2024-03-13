<script>
  import Avatar from "../Avatar/Avatar.svelte";
  export let element;
  const { companyLogo, companyName, region, date } = element;
</script>

<div class="flex flex-col items-end">
  <Avatar imageUrl={companyLogo} />
  <p class="whitespace-nowrap text-primary text-lg font-bold">
    {companyName}
  </p>
  <p class="whitespace-nowrap text-primary hidden md:block md:text-sm">
    {region}
  </p>
  <p class="whitespace-nowrap text-primary md:text-sm text-xs">Joined</p>
  <p class="whitespace-nowrap text-primary text-xs md:text-sm">
    {date}
  </p>
</div>
