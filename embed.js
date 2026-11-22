/* =========================================================
   embed.js — 素材集の一覧を、よそのページに自動で並べる部品
   使い方（導入事業者のページに置く）:
     <div data-ods-games> …読み込めなかったとき用の一覧（そのまま残る）… </div>
     <script src="https://game.onlinedayservice.com/embed.js" async></script>
   games.json を読んで、分類の見出し(.ods-cat)とボタン(.ods-grid > a.ods-card)を作る。
   見た目(CSS)は置く側のページで決める。読み込みに失敗したら、元の中身に手を付けない。
   ========================================================= */
(function () {
  // この部品が置いてある場所（＝素材集のURL）を、自分自身の読み込み元から求める
  var BASE = 'https://game.onlinedayservice.com/';
  try {
    var me = document.currentScript && document.currentScript.src;
    if (me) BASE = me.replace(/[^\/]*$/, '');
  } catch (e) {}

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function render(box, data) {
    var frag = document.createDocumentFragment();
    data.sections.forEach(function (sec) {
      var cat = el('div', 'ods-cat');
      cat.appendChild(el('span', '', sec.label));
      cat.appendChild(el('i'));
      frag.appendChild(cat);
      var grid = el('div', 'ods-grid');
      sec.items.forEach(function (it) {
        var a = el('a', 'ods-card', it.name);
        a.href = BASE + it.id + '/';
        grid.appendChild(a);
      });
      frag.appendChild(grid);
    });
    box.textContent = '';
    box.appendChild(frag);
  }

  function start() {
    var boxes = document.querySelectorAll('[data-ods-games]');
    if (!boxes.length) return;
    fetch(BASE + 'games.json', { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (data) {
        if (!data || !data.sections || !data.sections.length) return;
        for (var i = 0; i < boxes.length; i++) render(boxes[i], data);
      })
      .catch(function () { /* 失敗時は元の一覧のまま */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
