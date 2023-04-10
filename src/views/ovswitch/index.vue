<template>
  <div>
    <svg>
      <line x1="100" y1="50" x2="200" y2="100" class="normal"></line>
      <path d="M 100 50 C 120 80, 180 80, 200 100" class="water"></path>
      <circle cx="100" cy="50" r="10"></circle>
      <circle cx="200" cy="100" r="10"></circle>
    </svg>
  </div>
</template>

<style>
.normal {
  stroke: black;
  stroke-width: 2px;
  fill: none;
}

.water {
  stroke: blue;
  stroke-width: 4px;
  stroke-dasharray: 10 5;
  fill: none;
}
</style>
