<template>
  <client-only>
    <div>
      <div class="backdrop-filter backdrop-blur-lg">
        <div
          class="
            rounded-xl
            overflow-clip
            shadow-lg
            py-3
            px-6
            bg-gray-400/20
            ring-2 ring-red-100
            hover:ring-red-5001shadow-warning-100/30 hover:shadow-primary-500/70
            mt-3
          "
        >
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-4">
              <img
                class="
                  aspect-[9/14]
                  shadow-lg shadow-gray-300
                  backdrop-filter backdrop-blur
                  rounded-lg
                "
                :src="movie.poster"
              />
            </div>
            <div class="col-span-12 md:col-span-8 px-6 text-sm">
              <div class="flex justify-between">
                <div class="text-gray-100 text-2xl font-bold py-6">
                  {{ movie.title }}
                </div>
              </div>
              <div class="flex items-center gap-4 py-3">
                <div
                  class="
                    rounded
                    px-2
                    py-1
                    bg-yellow-400
                    text-yellow-900 text-sm
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
                      fill="rgba(55,54,51,1)"
                    ></path></svg
                  ><span class="ml-1">{{ movie.imdb }}</span>
                </div>
                <div class="ml-1 text-gray-300 text-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
                      fill="rgba(255,255,255,1)"
                    ></path>
                  </svg>
                  <span class="ml-1">{{ movie.duration }} min</span>
                </div>
              </div>
              <p class="text-gray-200 py-3">
                {{ movie.desc }}
              </p>
              <div class="flex flex-col justify-center py-3 text-gray-300">
                <div class="block mb-1">
                  <span class="text-gray-100">Country</span> :
                  {{ movie.countries }}
                </div>
                <div class="block mb-1">
                  <span class="text-gray-100">Genres</span> : {{ movie.genres }}
                </div>
                <div class="block mb-1">
                  <span class="text-gray-100">Release</span> :
                  {{ movie.release }}
                </div>
                <div class="block mb-1">
                  <span class="text-gray-100">Cast</span> : {{ movie.actors }}
                </div>
              </div>
              <div class="py-3 flex gap-4 font-normal">
                <Button
                  variant="rounded"
                  custom-class="bg-red-600 font-semibold"
                >
                  Watch trailer
                </Button>

                 <Button
                  variant="rounded"
                  custom-class="bg-red-600 font-semibold"
                >
                  Login to watch movie
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: "MovieCardDetail",
  props: {
    movie: {
      type: Object,
      required: true,
      default: {},
    },
  },
};
</script>
