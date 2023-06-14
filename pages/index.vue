<script setup>
    import { ref } from 'vue'
    import axios from 'axios'

    
    const getStorageZones = async () => {
        // isLoading.value = true;

        const url = "https://api.bunny.net/storagezone?page=1&perPage=1000&includeDeleted=false";
        try {
            let result = await axios.post('/api/fetch-data', {
                method: "GET",
                url,
                headers: {
                    Accept: "application/json",
                    AccessKey: 'ceb9e3d0-18bc-4c95-9cd7-1f14fddc7c9bedf36057-9ced-4eea-8c66-a4393841b2b1',
                },
            });
            console.log(result);
            return true;

        } catch (err) {
            console.log(err);
            return false
        } finally {
            // isLoading.value = false;
        }

    }

    // let fetchFromServer = async () => {
    //     result = await useFetch('/api/fetchData')
    // }
</script>
<template>
    <h1>Hello</h1>
    <!-- <div>{{ result }}</div> -->

    <button @click="getStorageZones">Fetch</button>
</template>