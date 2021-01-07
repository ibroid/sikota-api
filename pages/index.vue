<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">sikota-api</h1>
      <div>
        <div class="links">
          <a href="#" class="button--green"> Login </a>
        </div>
      </div>
      <div class="links">
        <a href="/transit" rel="noopener noreferrer" class="button--green">
          Delegasi Transit
        </a>
        <a href="#" rel="noopener noreferrer" class="button--grey">
          Developer List
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>