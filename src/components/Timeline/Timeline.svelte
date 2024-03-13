<script>
  import { ChevronUp } from "lucide-svelte";
  import Avatar from "../Avatar/Avatar.svelte";
  import TimelineBlogCard from "../Card/TimelineBlogCard.svelte";
  import TimelineHeadingCard from "../Card/TimelineHeadingCard.svelte";
  import TimelineSideCard from "./TimelineSideCard.svelte";
  export let user;
  const { timeline } = user;
</script>

{#each timeline as element}
  {#if element.headingComponentAvailable === true}
    <div class="w-full md:max-w-[1400px] flex justify-start h-full">
      <div class="ml-[100px] md:ml-[120px] mx-[21px] relative">
        <ChevronUp class="absolute left-[-10px] bg-white" />

        <div
          class="border-[var(--grey-lightest)] border-l-[4px] border-dotted h-full w-[1px]"
        ></div>
        <div
          class="flex justify-center items-center gap-2 absolute top-[15%] right-[-13px]"
        >
          <TimelineSideCard {element} />
          <div
            class="bg-[#fff] w-7 h-7 rounded-full border-[9px] border-solid border-[#0066FF]"
          ></div>
        </div>
      </div>

      <div class="flex gap-8 p-5 md:p-10 w-[750px]">
        <TimelineHeadingCard
          heading={element.heading}
          subHeading={element.subHeading}
        />
      </div>
    </div>
  {/if}
  {#if element.content}
    <div class="w-full md:max-w-[1400px] mt-1 flex justify-start h-full">
      <div class="ml-[100px] md:ml-[120px] mx-[21px] relative">
        <div
          class="border-[var(--grey-lightest)] border-l-[4px] border-dotted h-full w-[1px]"
        ></div>

        <div
          class="flex justify-center items-center gap-2 absolute top-[50%] right-[-6px]"
        >
          <p class="whitespace-nowrap text-primary md:text-sm text-xs">
            {element.content.date}
          </p>

          <div
            class="bg-[#fff] w-4 h-4 rounded-full border-[3px] border-solid border-[#0066FF]"
          ></div>
        </div>
      </div>

      <div class="flex gap-8 p-6 md:p-10 flex-col md:flex-row w-full">
        {#each element.content?.blogs as blogs}
          <TimelineBlogCard
            about={blogs.blogHeading}
            bgImageUrl={blogs.blogImage}
          />
        {/each}
      </div>
    </div>
  {/if}
{/each}
