<template>
    <div>
        <h1>World</h1>
    </div>
</template>

<script>
export default {
    name: 'world',
    mounted () {
        this.$http.get('/api/v1/hello').then(res => {
            console.log(res.data)
        })
    }
}
</script>
