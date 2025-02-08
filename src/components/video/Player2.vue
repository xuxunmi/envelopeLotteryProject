<template>
<video id="player-container-id" width="414" height="270" preload="auto" playsinline webkit-playsinline>
</video>
</template>

<script setup lang="ts">
import TCPlayer from 'tcplayer.js';
import 'tcplayer.js/dist/tcplayer.min.css';
let player = TCPlayer("player-container-id", {
    fileID: "388912588489000736",
    appID: "1500024012",
    psign: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBJZCI6MTUwMDAyNDAxMiwiZmlsZUlkIjoiMzg4OTEyNTg4NDg5MDAwNzM2IiwiY29udGVudEluZm8iOnsiYXVkaW9WaWRlb1R5cGUiOiJQcm90ZWN0ZWRBZGFwdGl2ZSIsImRybUFkYXB0aXZlSW5mbyI6eyJwcml2YXRlRW5jcnlwdGlvbkRlZmluaXRpb24iOjE0ODA3OTV9fSwiY3VycmVudFRpbWVTdGFtcCI6MTczMzQ1MTUxOSwiZXhwaXJlVGltZVN0YW1wIjoxNzMzNTM3OTE5LCJ1cmxBY2Nlc3NJbmZvIjp7InQiOiI2NzUzYjA3ZiIsInVzIjoiYmMxMjAyMjE2MTE5XzM4ODkxMjU4ODQ4OTAwMDczNl9fMSJ9LCJnaG9zdFdhdGVybWFya0luZm8iOnsidGV4dCI6Ilx1NTI2N1x1NjYxZiJ9LCJkcm1MaWNlbnNlSW5mbyI6eyJzdHJpY3RNb2RlIjoyfX0.-YMq0EY807JEBj4ybp_RsofsZl0t-0MfcuB_AVj1cYc',
  });
  
</script>