<template>
  <div ref='chart' class='chart-container'></div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'D3ChartConfidenceIntervalDiagram', // 'GaussianChart',
  props: {
    mean: {
      type: Number,
      default: -1.029
    },
    stdDev: {
      type: Number,
      default: 0.176
    },
    lowerBound: {
      type: Number,
      default: -1.373
    },
    upperBound: {
      type: Number,
      default: -0.684
    },
    max: {
      type: Number,
      default: 135.0
    },
    min: {
      tpye: Number,
      default: -135.0
    }
  },
  computed: {
    // X축 범위 동적 설정
    xDomain () {
      return [this.dynamicMin, this.dynamicMax] // 주어진 lowerBound, upperBound
    },
    // Y축 범위 동적 설정
    yDomain () {
      const gaussian = (x) => (1 / (this.stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - this.mean) / this.stdDev) ** 2)
      // X축 범위에 대한 gaussian 값 계산
      const step = (this.dynamicMax - this.dynamicMin) / (600 / 2)
      const xValues = d3.range(this.dynamicMin, this.dynamicMax, step)
      const maxY = Math.max(...xValues.map(x => gaussian(x)))
      return [0, maxY * 1.1] // Y축의 최대값을 Gaussian 함수 최대값의 10% 더 크게 설정
    },
    // X축 데이터 값 동적 생성
    xValues () {
      const step = (this.dynamicMax - this.dynamicMin) / (600 / 2) // width / 2 기준으로 step 결정
      return d3.range(this.dynamicMin, this.dynamicMax, step)
    },
    dynamicMin () {
      return this.mean - 3.1 * this.stdDev
    },
    dynamicMax () {
      return this.mean + 3.1 * this.stdDev
    }
  },
  mounted () {
    const width = 600
    const height = 400
    const margin = { top: 20, right: 70, bottom: 50, left: 50 }

    const svg = d3.select(this.$refs.chart)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const xScale = d3.scaleLinear().domain(this.xDomain).range([0, width - margin.left - margin.right])
    const yScale = d3.scaleLinear().domain(this.yDomain).range([height - margin.top - margin.bottom, 0])

    const gaussian = (x) => (1 / (this.stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - this.mean) / this.stdDev) ** 2)
    const xValues = this.xValues

    // 정규분포 라인 추가
    svg.append('path')
      .datum(xValues.map(x => ({ x, y: gaussian(x) })))
      .attr('class', 'line')
      .attr('d', d3.line()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y))
      )

    // X축 신뢰구간 (95% CI) 수직선 추가
    svg.append('line')
      .attr('class', 'ci-line')
      .attr('x1', xScale(this.lowerBound))
      .attr('x2', xScale(this.lowerBound))
      .attr('y1', yScale(0))
      .attr('y2', yScale(gaussian(this.lowerBound)))

    svg.append('line')
      .attr('class', 'ci-line')
      .attr('x1', xScale(this.upperBound))
      .attr('x2', xScale(this.upperBound))
      .attr('y1', yScale(0))
      .attr('y2', yScale(gaussian(this.upperBound)))

    svg.append('line')
      .attr('class', 'ci-line-mean')
      .attr('x1', xScale(this.mean))
      .attr('x2', xScale(this.mean))
      .attr('y1', yScale(0))
      .attr('y2', yScale(gaussian(this.mean)))

    // X축 및 Y축 추가
    svg.append('g')
      .attr('transform', `translate(0, ${height - margin.top - margin.bottom})`)
      .call(d3.axisBottom(xScale))

    svg.append('g')
      .call(d3.axisLeft(yScale))

    // 텍스트 라벨 추가
    svg.append('text')
      .attr('class', 'label')
      .attr('x', xScale(this.lowerBound))
      .attr('y', height - margin.bottom + 20)
      .text(`Lower Bound: ${this.lowerBound.toFixed(2)}`)

    svg.append('text')
      .attr('class', 'label')
      .attr('x', xScale(this.upperBound))
      .attr('y', height - margin.bottom + 20)
      .text(`Upper Bound: ${this.upperBound.toFixed(2)}`)

    svg.append('text')
      .attr('class', 'label')
      .attr('x', xScale(this.mean))
      .attr('y', height - margin.bottom + 20)
      .text(`Mean: ${this.mean}`)

    svg.append('text')
      .attr('class', 'label')
      .attr('x', width - margin.right - 100)
      .attr('y', 0 + margin.bottom + 20)
      .attr('text-anchor', 'end')
      .text(`Std Dev: ${this.stdDev}`)
  }
}
</script>

<style>
.chart-container {
  position: relative;
}

.line {
  fill: none;
  stroke: blue;
  stroke-width: 2;
}

.ci-line {
  stroke: red;
  stroke-width: 2;
  stroke-dasharray: 5,5;
}

.ci-line-mean {
  stroke: black;
  stroke-width: 2;
  stroke-dasharray: 5,5;
}

.label {
  font-size: 12px;
  fill: black;
  text-anchor: middle;
  font-weight: bold;
}
</style>
