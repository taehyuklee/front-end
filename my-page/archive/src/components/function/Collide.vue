<template>
  <svg :width="width" :height="height" ref="svgRef"
       @mousemove="onMouseMove"></svg>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as d3 from "d3";

const width = 600;
const height = 400;
const svgRef = ref(null);

let nodes = d3.range(200).map(() => ({ r: Math.random() * 12 + 4 }));
const mouseNode = { r: 30, x: width / 2, y: height / 2 };
nodes.push(mouseNode);

let simulation, circle;

onMounted(() => {
  const svg = d3.select(svgRef.value);

  simulation = d3.forceSimulation(nodes)
    .force("x", d3.forceX(width / 2).strength(0.02))
    .force("y", d3.forceY(height / 2).strength(0.02))
    .force("collide", d3.forceCollide().radius(d => d.r + 0.5).iterations(3))
    .alpha(1).restart();

  circle = svg.append("g")
    .selectAll("circle")
    .data(nodes.slice(0, -1)) // mouseNode는 그림에서 제외
    .enter().append("circle")
    .attr("r", d => d.r)
    .attr("fill", "steelblue")
    .attr("stroke", "white")
    .attr("stroke-width", 1.5);

  simulation.on("tick", () => {
    circle
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  });
});

// 마우스 움직일 때 가짜 노드(mouseNode) 좌표 업데이트
const onMouseMove = (event) => {
  const [x, y] = d3.pointer(event);
  mouseNode.x = x;
  mouseNode.y = y;
  simulation.alpha(0.5).restart(); // 반응 즉시 재시작
};
</script>


