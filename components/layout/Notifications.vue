<script lang="ts" setup>

</script>

<template>
  <div class="dropdown dropdown-end z-10">
    <div class="btn btn-circle btn-ghost" tabindex="0">
      <div class="indicator ">
        <span class="badge indicator-item badge-error badge-xs"></span>
        <i class="ti ti-bell text-3xl "/>
      </div>
    </div>
    <ul
        class="menu dropdown-content mt-3 w-80 rounded-box bg-base-100 p-2 shadow-2xl"
        tabindex="0">
      <li>
        <a class="gap-4">
          <div class="avatar">
            <div class="w-8 rounded-full">
              <img src="https://picsum.photos/80/80?1"/>
            </div>
          </div>
          <span>
            <b>New message</b>
            <br/>
            Alice: Hi, did you get my files?Alice: Hi, did you get my files?Alice: Hi, did you get my files?Alice: Hi, did you get my files?
          </span>
        </a>
      </li>
      <li>
        <a class="gap-4">
          <div class="avatar">
            <div class="w-8 rounded-full">
              <img src="https://picsum.photos/80/80?2"/>
            </div>
          </div>
          <span>
										<b>Reminder</b>
										<br/>
										Your meeting is at 10am
									</span>
        </a>
      </li>
      <li>
        <a class="gap-4">
          <div class="avatar">
            <div class="w-8 rounded-full">
              <img src="https://picsum.photos/80/80?3"/>
            </div>
          </div>
          <span>
										<b>New payment</b>
										<br/>
										Received $2500 from John Doe
									</span>
        </a>
      </li>
      <li>
        <a class="gap-4">
          <div class="avatar">
            <div class="w-8 rounded-full">
              <img src="https://picsum.photos/80/80?4"/>
            </div>
          </div>
          <span>
										<b>New payment</b>
										<br/>
										Received $1900 from Alice
									</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>