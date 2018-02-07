<template>
  <div class="component waterfall-images">
    <div v-masonry transition-duration="0.3s" item-selector=".item">
      <div v-masonry-tile class="item" v-for="item in blocks" :key="item.title">
        <div class="waterfall-item">
          <img v-bind:src="item.bgPic"/>
          <div class="info">             
            <p>{{item.content}}</p>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          title: "1",
          content: "I will start fresh, be someone new",
          bgPic: require("../../assets/images/waterfall1.jpg")
        },
        {
          title: "2",
          content: "No comment",
          bgPic: require("../../assets/images/waterfall2.jpg")
        },
        {
          title: "3",
          content:
            " Keep it up",
          bgPic: require("../../assets/images/waterfall3.jpg")
        },
        {
          title: "4",
          content: " Everything I've kept buried inside came rushing to the surface",
          bgPic: require("../../assets/images/waterfall4.jpg")
        },
        {
          title: "5",
          content: "She took my breath away",
          bgPic: require("../../assets/images/waterfall5.jpg")
        },
        {
          title: "6",
          content: "Ashes and Ashes",
          bgPic: require("../../assets/images/waterfall6.jpg")
        },
        {
          title: "7",
          content: "I want to change who I was",
          bgPic: require("../../assets/images/waterfall7.jpg")
        },
        {
          title: "8",
          content: "All you can do is be ready for the good. So when it comes, you invite it in, because you need it.",
          bgPic: require("../../assets/images/waterfall8.jpg")
        },
        {
          title: "9",
          content: "People are going to stop giving you breaks.",
          bgPic: require("../../assets/images/waterfall9.jpg")
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
