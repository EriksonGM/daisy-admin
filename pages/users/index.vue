<script setup lang="ts">
import {usePageHeader} from "~/composables/usePageHeader";
import Card from "~/components/ui/UiCard.vue";

usePageHeader('Utilizadores', 'ti ti-users')
</script>

<template>
<div class="col-span-6">
  <Card title="Utilizadores">
    <template #actions>
      <button class="btn btn-primary btn-sm">See all users</button>
      <button class="btn btn-sm">Settings</button>
    </template>
  </Card>
</div>
  <div class="col-span-6">
    <section class="card card-compact col-span-12 overflow-hidden bg-base-100 shadow-sm xl:col-span-7">
      <div class="card-body grow-0">
        <div class="flex justify-between gap-2">
          <h2 class="card-title grow">
            <a class="link-hover link">Recent user transactions</a>
          </h2>
          <button class="btn btn-sm">See all users</button>
          <button class="btn btn-sm">Settings</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <tbody>
          <tr>
            <td class="w-0"><input type="checkbox" class="checkbox" /></td>
            <td>
              <div class="flex items-center gap-4">
                <div class="avatar">
                  <div class="mask mask-squircle h-10 w-10">
                    <img
                        src="https://picsum.photos/80/80?1"
                        alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="text-sm font-bold">Hart Hagerty</div>
                  <div class="text-xs opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>Feb 2nd</td>
            <td>
              <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                  class="inline-block h-5 w-5 text-success"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-id="svg-loader_3">
                <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"></path>
              </svg>
              180 USD
            </td>
          </tr>
          <tr>
            <td class="w-0"><input type="checkbox" class="checkbox" /></td>
            <td>
              <div class="flex items-center gap-4">
                <div class="avatar">
                  <div class="mask mask-squircle h-10 w-10">
                    <img
                        src="https://picsum.photos/80/80?2"
                        alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="text-sm font-bold">Brice Swyre</div>
                  <div class="text-xs opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>Sep 2nd</td>
            <td>
              <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                  class="inline-block h-5 w-5 text-success"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-id="svg-loader_4">
                <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"></path>
              </svg>
              250 USD
            </td>
          </tr>
          <tr>
            <td class="w-0"><input type="checkbox" class="checkbox" /></td>
            <td>
              <div class="flex items-center gap-4">
                <div class="avatar">
                  <div class="mask mask-squircle h-10 w-10">
                    <img
                        src="https://picsum.photos/80/80?3"
                        alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="text-sm font-bold">Marjy Ferencz</div>
                  <div class="text-xs opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>Sep 2nd</td>
            <td>
              <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                  class="inline-block h-5 w-5 text-success"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-id="svg-loader_5">
                <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"></path>
              </svg>
              250 USD
            </td>
          </tr>
          <tr>
            <td class="w-0"><input type="checkbox" class="checkbox" /></td>
            <td>
              <div class="flex items-center gap-4">
                <div class="avatar">
                  <div class="mask mask-squircle h-10 w-10">
                    <img
                        src="https://picsum.photos/80/80?4"
                        alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="text-sm font-bold">Yancy Tear</div>
                  <div class="text-xs opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td>Sep 2nd</td>
            <td>
              <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-down-right.svg"
                  class="inline-block h-5 w-5 text-error"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-id="svg-loader_6">
                <path
                    d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z"></path>
              </svg>
              250 USD
            </td>
          </tr>
          <tr>
            <td class="w-0"><input type="checkbox" class="checkbox" /></td>
            <td>
              <div class="flex items-center gap-4">
                <div class="avatar">
                  <div class="mask mask-squircle h-10 w-10">
                    <img
                        src="https://picsum.photos/80/80?5"
                        alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="text-sm font-bold">Marjy Ferencz</div>
                  <div class="text-xs opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>Sep 2nd</td>
            <td>
              <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-down-right.svg"
                  class="inline-block h-5 w-5 text-error"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-id="svg-loader_7">
                <path
                    d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z"></path>
              </svg>
              250 USD
            </td>
          </tr>
          <tr>
            <td class="w-0"><input type="checkbox" class="checkbox" /></td>
            <td>
              <div class="flex items-center gap-4">
                <div class="avatar">
                  <div class="mask mask-squircle h-10 w-10">
                    <img
                        src="https://picsum.photos/80/80?6"
                        alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="text-sm font-bold">Hart Hagerty</div>
                  <div class="text-xs opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>Jul 2nd</td>
            <td>
              <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                  class="inline-block h-5 w-5 text-success"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-id="svg-loader_8">
                <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"></path>
              </svg>
              320 USD
            </td>
          </tr>
          <tr>
            <td class="w-0"><input type="checkbox" class="checkbox" /></td>
            <td>
              <div class="flex items-center gap-4">
                <div class="avatar">
                  <div class="mask mask-squircle h-10 w-10">
                    <img
                        src="https://picsum.photos/80/80?1"
                        alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="text-sm font-bold">Hart Hagerty</div>
                  <div class="text-xs opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>Feb 2nd</td>
            <td>
              <svg
                  data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
                  class="inline-block h-5 w-5 text-success"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-id="svg-loader_3">
                <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"></path>
              </svg>
              180 USD
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>