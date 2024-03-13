<script>
  import Header from "../components/Header/Header.svelte";
  import Profile from "../components/Profile/Profile.svelte";
  import Timeline from "../components/Timeline/Timeline.svelte";
  import { user } from "../config/profile.config";
</script>

<div class="md:flex md:flex-col md:items-center md:justify-center">
  <div class="flex flex-col items-center justify-center sm:min-w-[1400px]">
    <Header />
    <Profile {user} />
    <Timeline {user} />
  </div>
</div>
