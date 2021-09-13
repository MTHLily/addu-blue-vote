<template lang="">
    <div class="card mb-3 d-flex align-items-center" style="max-width: 540px;">
        <button type="button" class="btn btn-light">
            <div class="row g-0 mh-15">
                <div class="col-md-3">
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" class="img-fluid rounded-start" alt="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" style="object-fit:cover">
                </div>
                <div class="col-md-8 align-items-start">
                    <div class="card-body text-start">
                        <p class="card-title">District: </p>
                        <h5 class="card-text">Ateneo de Davao University</h5>
                        <p class="card-text"><small class="text-muted">Address</small></p>
                        <p class="card-text"><small class="text-muted">Tel.no.</small></p>
                    </div>
                </div>
                <div class="col-md-1 row-2 bg-primary text-white"></div>
            </div>
        </button>
    </div>
</template>


<script>
export default {
    props: ['img','alt','district','name','address','contact'],
}
</script>


<style lang="">
    
</style>