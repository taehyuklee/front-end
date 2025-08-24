//Vue에서의 reactive의 원리 

let activeEffect = null
const targetMap = new WeakMap()

function effect(fn) {
  activeEffect = fn
  fn() // 최초 실행 → 의존성 수집
  activeEffect = null
}

function track(target, key) {
  if (!activeEffect) return
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
    depsMap.set(key, deps)
  }
  deps.add(activeEffect)
}

function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  const deps = depsMap.get(key)
  deps && deps.forEach(fn => fn())
}

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key)
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      trigger(target, key)
      return true
    }
  })
}

// 사용
const state = reactive({ count: 0 })

effect(() => {
  console.log("count:", state.count)
})

state.count++ // effect 자동 실행
state.count++