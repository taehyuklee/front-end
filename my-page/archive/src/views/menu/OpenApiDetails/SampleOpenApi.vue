<script setup>

defineProps({
    isDark: Boolean
});

</script>


<template>
    <div :class="{ openapi_app: true, 'isDark': true }">
      <aside aria-label="Open API Navigation">
        <div class="brand" aria-label="Brand">
          <span class="dot" aria-hidden="true"></span>
          <span>OPEN API Catalog</span>
        </div>

        <div class="search">
          <input type="text" placeholder="Search endpoints…" />
        </div>

        <nav class="api-list" role="navigation" aria-label="API list">
          <div class="section">
            <h3>Authentication</h3>
            <a class="item active" href="#auth-login">
              <span class="method POST">POST</span>
              <span class="label"><strong>/auth/login</strong> <span class="sub">사용자 로그인 토큰 발급</span></span>
            </a>
            <a class="item" href="#auth-refresh">
              <span class="method POST">POST</span>
              <span class="label"><strong>/auth/refresh</strong> <span class="sub">토큰 갱신</span></span>
            </a>
            <a class="item" href="#auth-revoke">
              <span class="method DELETE">DELETE</span>
              <span class="label"><strong>/auth/revoke</strong> <span class="sub">토큰 폐기</span></span>
            </a>
          </div>

          <div class="section">
            <h3>Users</h3>
            <a class="item" href="#users-list">
              <span class="method GET">GET</span>
              <span class="label"><strong>/users</strong> <span class="sub">사용자 목록 조회 (paging)</span></span>
            </a>
            <a class="item" href="#users-detail">
              <span class="method GET">GET</span>
              <span class="label"><strong>/users/{id}</strong> <span class="sub">사용자 상세 조회</span></span>
            </a>
            <a class="item" href="#users-create">
              <span class="method POST">POST</span>
              <span class="label"><strong>/users</strong> <span class="sub">사용자 생성</span></span>
            </a>
            <a class="item" href="#users-update">
              <span class="method PUT">PUT</span>
              <span class="label"><strong>/users/{id}</strong> <span class="sub">사용자 수정</span></span>
            </a>
            <a class="item" href="#users-delete">
              <span class="method DELETE">DELETE</span>
              <span class="label"><strong>/users/{id}</strong> <span class="sub">사용자 삭제</span></span>
            </a>
          </div>

          <div class="section">
            <h3>Products</h3>
            <a class="item" href="#products-list">
              <span class="method GET">GET</span>
              <span class="label"><strong>/products</strong> <span class="sub">상품 목록</span></span>
            </a>
            <a class="item" href="#products-create">
              <span class="method POST">POST</span>
              <span class="label"><strong>/products</strong> <span class="sub">상품 등록</span></span>
            </a>
            <a class="item" href="#products-detail">
              <span class="method GET">GET</span>
              <span class="label"><strong>/products/{id}</strong> <span class="sub">상품 상세</span></span>
            </a>
            <a class="item" href="#products-update">
              <span class="method PUT">PUT</span>
              <span class="label"><strong>/products/{id}</strong> <span class="sub">상품 수정</span></span>
            </a>
            <a class="item" href="#products-delete">
              <span class="method DELETE">DELETE</span>
              <span class="label"><strong>/products/{id}</strong> <span class="sub">상품 삭제</span></span>
            </a>
          </div>

          <div class="section">
            <h3>Orders</h3>
            <a class="item" href="#orders-list">
              <span class="method GET">GET</span>
              <span class="label"><strong>/orders</strong> <span class="sub">주문 목록</span></span>
            </a>
            <a class="item" href="#orders-create">
              <span class="method POST">POST</span>
              <span class="label"><strong>/orders</strong> <span class="sub">주문 생성</span></span>
            </a>
            <a class="item" href="#orders-detail">
              <span class="method GET">GET</span>
              <span class="label"><strong>/orders/{id}</strong> <span class="sub">주문 상세</span></span>
            </a>
            <a class="item" href="#orders-cancel">
              <span class="method DELETE">DELETE</span>
              <span class="label"><strong>/orders/{id}</strong> <span class="sub">주문 취소</span></span>
            </a>
          </div>

          <div class="section">
            <h3>Admin</h3>
            <a class="item" href="#admin-health">
              <span class="method GET">GET</span>
              <span class="label"><strong>/admin/health</strong> <span class="sub">상태 점검</span></span>
            </a>
            <a class="item" href="#admin-metrics">
              <span class="method GET">GET</span>
              <span class="label"><strong>/admin/metrics</strong> <span class="sub">메트릭 조회</span></span>
            </a>
          </div>
        </nav>

        <div class="footer">v1 · Open API Example</div>
      </aside>

      <main>
        <article id="auth-login" class="content-card">
            <h1>POST /auth/login</h1>
            <p class="path">Base URL: https://api.example.com</p>
            <p>사용자 로그인을 수행하고 JWT 토큰을 발급합니다. 좌측 목록은 많아져도 자체 스크롤이 생기며, 우측 본문은 독립적으로 스크롤됩니다.</p>
            <h3>Request Body</h3>
            <pre>{
  "username": "string",
  "password": "string"
}</pre>
        <h3>Response</h3>
        <pre>{
  "accessToken": "...",
  "refreshToken": "..."
}</pre>
        </article>
      </main>
    </div>
</template>


<style scoped>
 /* ---------- THEME ---------- */
    .openapi_app {
      --bg: #0b1220;
      --surface: #121a2b;
      --surface-2: #0f1626;
      --text: #e7ecf3;
      --muted: #9fb0c6;
      --primary: #60a5fa;
      --accent: #34d399;
      --border: #20304d;
      --shadow: 0 10px 25px rgba(0,0,0,.35);
    }
    @media (prefers-color-scheme: light) {
      .openapi_app {
        --bg: #f7f9fc;
        --surface: #ffffff;
        --surface-2: #f2f5fb;
        --text: #0f172a;
        --muted: #475569;
        --primary: #2563eb;
        --accent: #059669;
        --border: #e2e8f0;
        --shadow: 0 10px 25px rgba(2,8,23,.08);
      }
    }

    .openapi_app.isDark {
      --bg: var(--body-color);
      --surface: var(--sidebar-color);
      --surface-2: var(--header-color);
      --text: var(--text-color);
      --primary: var(--primary-color);
      --accent: #34d399; 
      --border: var(--toggle-color);
    }

    /* ---------- LAYOUT ---------- */
    html, .openapi_app { height: 100%; }
    .openapi_app {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font: 14px/1.5 system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif;
    }

    .openapi_app {
      display: grid;
      grid-template-columns: 320px 1fr; /* Sidebar width | Content */
      min-height: 100dvh;
    }

    /* ---------- SIDEBAR ---------- */
    aside {
      position: sticky;
      top: 0;
      display: flex;               /* flex로 바꿔서 내부 요소 높이 컨트롤 */
      flex-direction: column;      /* 세로로 쌓기 */
      gap: 12px;
      padding: 16px;
      margin-top: 15px;
      margin-left: 20px;
      background: var(--surface);
      border-right: 1px solid var(--border);
      height: auto;                /* 내용만 차지하도록 */
      min-height: 0;               /* flex 안에서 overflow 방지 */
      height: 100dvh; /* 또는 100vh 내가 aside를 flex로 바꾸는 바람에 grid 상속을 받지 못함 */
      overflow-y: auto;           /* input 아래 빈 공간 방지 */
    }

    .brand {
      display: flex; align-items: center; gap: 10px;
      font-weight: 700; letter-spacing: .2px;
    }
    .brand .dot {
      width: 10px; height: 10px; border-radius: 50%; background: var(--accent);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 20%, transparent);
    }

    .search {
      position: relative; 
      margin: 2px 0 8px;
      height: 43px;
    }
    .search input {
      width: 100%;
      box-sizing: border-box; /* padding, border 포함한 100% */
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid var(--border);
      background: var(--surface-2);
      color: var(--text);
      outline: none;
    }
    .search input::placeholder { color: var(--muted); }

    .api-list {
      overflow: auto; /* scrollable area */
      padding-right: 4px; /* for scrollbar spacing */
    }

    /* Scrollbar styling (WebKit) */
    .api-list::-webkit-scrollbar { width: 10px; }
    .api-list::-webkit-scrollbar-thumb { background: var(--border); border-radius: 999px; }
    .api-list::-webkit-scrollbar-track { background: transparent; }
    /* Scrollbar for Firefox */
    .api-list { scrollbar-width: thin; scrollbar-color: var(--border) transparent; }

    .section {
      margin: 14px 0;
      border-top: 1px dashed var(--border);
      padding-top: 12px;
    }
    .section:first-child { border-top: 0; padding-top: 0; }

    .section h3 {
      margin: 0 0 8px;
      font-size: 12px; text-transform: uppercase; letter-spacing: .12em; color: var(--muted);
    }

    .item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 10px;
      color: inherit; text-decoration: none;
      border: 1px solid transparent;
      transition: transform .06s ease, background-color .12s ease, border-color .12s ease;
    }

    .item:hover {
      background: color-mix(in srgb, var(--primary) 12%, transparent);
      border-color: color-mix(in srgb, var(--primary) 30%, var(--border));
      transform: translateY(-1px);
      cursor: pointer;
    }

    .item.active {
      background: color-mix(in srgb, var(--primary) 18%, transparent);
      border-color: color-mix(in srgb, var(--primary) 50%, var(--border));
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary) 40%, transparent);
    }

    .method {
      font: 11px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
      padding: 3px 6px;
      border-radius: 999px;
      border: 1px solid var(--border);
      background: var(--surface-2);
      min-width: 52px; text-align: center;
    }
    .GET    { color: #16a34a; border-color: color-mix(in srgb, #16a34a 40%, var(--border)); }
    .POST   { color: #2563eb; border-color: color-mix(in srgb, #2563eb 40%, var(--border)); }
    .PUT    { color: #d97706; border-color: color-mix(in srgb, #d97706 40%, var(--border)); }
    .DELETE { color: #dc2626; border-color: color-mix(in srgb, #dc2626 40%, var(--border)); }

    .label { flex: 1; }
    .sub { display: block; font-size: 12px; color: var(--muted); }

    .footer {
      font-size: 12px; color: var(--muted);
      border-top: 1px dashed var(--border);
      padding-top: 10px;
    }

    /* ---------- CONTENT AREA ---------- */
    main { padding: 28px; }
    .content-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      box-shadow: var(--shadow);
      padding: 20px;
      max-width: 980px;
    }

    .path {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
      font-size: 13px; color: var(--muted);
    }

    /* ---------- SMALL SCREENS ---------- */
    @media (max-width: 960px) {
      .openapi_app { grid-template-columns: 1fr; }
      aside { position: static; height: auto; border-right: 0; border-bottom: 1px solid var(--border); }
    }

</style>