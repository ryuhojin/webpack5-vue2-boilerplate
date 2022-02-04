<template>
  <div>HOME PAGE</div>
</template>
<script>
import dayjs from "dayjs";
import cloneDeep from "lodash-es/cloneDeep";
export default {
  mounted() {
    const a = cloneDeep("a");
    console.log(a)
    console.log(dayjs('2022-02-04'))
  },
};
</script>