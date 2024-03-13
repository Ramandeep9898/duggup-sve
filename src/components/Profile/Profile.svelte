<script>
  import { Button } from "$lib/components/ui/button";
  import { SquareArrowOutUpRight, Ellipsis } from "lucide-svelte";
  import Avatar from "../Avatar/Avatar.svelte";

  export let user;
  const {
    userProfileImage,
    username,
    userCompanyLogo,
    about,
    userCompanyName,
    position,
  } = user;

  let isFollowed = "Follow";

  const handleFollow = () => {
    isFollowed === "Follow"
      ? (isFollowed = "Following")
      : (isFollowed = "Follow");
  };
</script>

<div class="w-full flex gap-5 md:gap-14 max-w-[1200px] py-12 px-3 items-start">
  <!-- avatar  -->
  <div class="flex flex-col justify-center items-center">
    <Avatar
      imageUrl={userProfileImage}
      sizeClass="md:h-32 md:w-32  h-16 w-16 "
    />
    <p
      class="text-[var(--grey-dark)] text-lg font-bold md:text-2xl text-center mt-2"
    >
      {username}
    </p>
  </div>

  <!-- about + side  -->
  <div class="max-w-[900px]">
    <div class="flex justify-between items-start gap-14 mb-4">
      <p
        class="text-sm text-[var(--text-dark)] leading-6 font-inter hidden md:block"
      >
        {about}
      </p>
      <p
        class="text-sm text-[var(--text-dark)] leading-6 font-inter block md:hidden"
      >
        {about.slice(0, 50) + " Read more..."}
      </p>

      <div class="flex items-end flex-col">
        <Avatar imageUrl={userCompanyLogo} />
        <p
          class="text-right text-black font-bold text-base mb-1 hidden md:block"
        >
          {userCompanyName}
        </p>
        <p
          class="text-right whitespace-nowrap text-[var(--grey-lightest)] text-xs hidden md:block"
        >
          {position}
        </p>
      </div>
    </div>

    <!-- follow + linkss  -->
    <div class="flex justify-between items-center">
      <Button variant="primary" on:click={handleFollow}>{isFollowed}</Button>

      <div class="flex">
        <Button variant="ghost" size="sm">
          website
          <SquareArrowOutUpRight class="ml-2 h-4 w-4" />
        </Button>

        <Button variant="ghost" size="sm">
          <Ellipsis class="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</div>
