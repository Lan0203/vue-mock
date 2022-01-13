<template>
    <div>
       <div>
            <textarea v-model="text"></textarea>
       </div>
       <div>结果页</div>
    </div>
</template>

<script>
export default {
    name:"sql",
    data() {
        return {
            text: '',
        }
    }
}
</script>