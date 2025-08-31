<script setup>
import * as d3 from "d3";
import { onMounted, ref } from "vue";

const svgRef = ref(null);

onMounted(() => {
  const width = window.innerWidth * 0.9;
  const height = window.innerHeight * 0.8;

  const svg = d3.select(svgRef.value)
    .attr("width", width)
    .attr("height", height);

  const svgGroup = svg.append("g");

  // Zoom 기능
  svg.call(d3.zoom()
    .scaleExtent([0.2, 3])
    .on("zoom", (event) => {
      svgGroup.attr("transform", event.transform);
    })
  );

  // lattice grid 생성
  const gridSize = 20; // 가로, 세로 노드 개수
  const spacing = 5; // 노드 간 거리
  const nodes = [];
  const links = [];

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const id = y * gridSize + x;
      nodes.push({ id, x: x * spacing, y: y * spacing });

      // 오른쪽 이웃과 연결
      if (x < gridSize - 1) {
        links.push({ source: id, target: id + 1 });
      }
      // 아래쪽 이웃과 연결
      if (y < gridSize - 1) {
        links.push({ source: id, target: id + gridSize });
      }
    }
  }

  // Force Simulation
  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(spacing))
    .force("charge", d3.forceManyBody().strength(-50))
    .force("center", d3.forceCenter(width / 2, height / 2));

  // 링크
  const link = svgGroup.append("g")
    .attr("stroke", "#aaa")
    .attr("stroke-width", 1)
    .selectAll("line")
    .data(links)
    .join("line");

  // 노드
  const node = svgGroup.append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", 10)
    .attr("fill", "#69b3a2")
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended)
    );

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  });

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
});
</script>

<template>
  <div style="width: 100%; height: 100vh; overflow: hidden;">
    <svg ref="svgRef" style="width:100%; height:100%; border: none;"></svg>
  </div>
</template>

<style scoped>
/* 필요시 스타일 추가 */
</style>
