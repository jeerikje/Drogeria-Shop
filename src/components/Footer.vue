<script lang="ts">
export default {
  name: "Footer"
}
</script>

<template>
  <footer class="footer">
    <div class="content">
      <div class="wrapper">
        <div class="footer-left">
          <p>Vaša obľúbená drogéria – kvalitné produkty pre zdravie, krásu a domácnosť.
            Široký výber kozmetiky, hygieny a doplnkov stravy na jednom mieste. U nás nájdete produkty, ktoré vám pomôžu udržať si krásu, zdravie a pohodlie vo vašom každodennom živote. Od kvalitných pleťových a vlasových prípravkov, cez prírodné produkty, až po zdravé potraviny a vitamíny – všetko, čo potrebujete pre zdravý a šťastný život.</p>
        </div>
        <div class="footer-right">
          <p>Pre viac informácií nás kontaktujte na čísle: <strong>+421 944 425 090</strong></p>
        </div>
      </div>
        <div class="bottom">
          <p>&copy; 2024 Michal Smatana. </p>
        </div>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background-color: #0c0c0c;
  color: #fff;
  padding: 2rem;
}

.content {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

.wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.footer-left {
  text-align: left;
  width: 50%;
}

.footer-right {
  text-align: end;
  width: 50%;
}

.bottom {
  text-align: center;
  margin-top: 2rem;
}
</style>