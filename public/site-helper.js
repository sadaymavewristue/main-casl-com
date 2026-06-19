// public/site-helper.js
// 页面辅助工具：提示卡片、关键词徽章、访问说明

(function () {
  'use strict';

  const siteUrl = 'https://main-casl.com';
  const keywords = ['中国体育彩票', '公益金', '体彩', '玩法', '开奖信息'];

  const config = {
    containerId: 'site-helper-root',
    cardTitle: '欢迎访问',
    cardMessage: '本站提供中国体育彩票相关资讯与公益信息，请理性购彩。',
    badgeLabel: '关键词',
    noticeText: '本页面仅供学习参考，不涉及任何投注引导。'
  };

  function createElement(tag, attrs) {
    const el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === 'className') {
          el.className = attrs[key];
        } else if (key === 'innerText') {
          el.innerText = attrs[key];
        } else {
          el.setAttribute(key, attrs[key]);
        }
      });
    }
    return el;
  }

  function buildCard() {
    const card = createElement('div', { className: 'helper-card' });
    const title = createElement('h3', { innerText: config.cardTitle, className: 'card-title' });
    const message = createElement('p', { innerText: config.cardMessage, className: 'card-message' });
    const link = createElement('a', { href: siteUrl, target: '_blank', innerText: '访问主站', className: 'card-link' });
    card.appendChild(title);
    card.appendChild(message);
    card.appendChild(link);
    return card;
  }

  function buildBadges() {
    const wrapper = createElement('div', { className: 'badge-wrapper' });
    const label = createElement('span', { innerText: config.badgeLabel + '：', className: 'badge-label' });
    wrapper.appendChild(label);
    keywords.forEach(function (kw) {
      const badge = createElement('span', { innerText: kw, className: 'keyword-badge' });
      wrapper.appendChild(badge);
    });
    return wrapper;
  }

  function buildNotice() {
    const notice = createElement('p', { innerText: config.noticeText, className: 'helper-notice' });
    return notice;
  }

  function createStyles() {
    const style = document.createElement('style');
    style.textContent = [
      '.helper-card { background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 16px; margin: 12px 0; }',
      '.card-title { font-size: 1.2em; margin: 0 0 8px; color: #333; }',
      '.card-message { font-size: 0.95em; color: #555; margin: 0 0 12px; }',
      '.card-link { color: #1a73e8; text-decoration: none; font-weight: 500; }',
      '.card-link:hover { text-decoration: underline; }',
      '.badge-wrapper { margin: 8px 0; }',
      '.badge-label { font-weight: 600; margin-right: 6px; color: #444; }',
      '.keyword-badge { display: inline-block; background: #e0f2fe; color: #0369a1; border-radius: 12px; padding: 2px 10px; margin: 2px 4px; font-size: 0.85em; }',
      '.helper-notice { font-size: 0.85em; color: #888; border-top: 1px solid #eee; padding-top: 8px; margin-top: 12px; }'
    ].join(' ');
    return style;
  }

  function attachHelper() {
    if (document.getElementById(config.containerId)) {
      return;
    }
    const container = createElement('div', { id: config.containerId, className: 'site-helper-panel' });
    container.appendChild(createStyles());
    container.appendChild(buildCard());
    container.appendChild(buildBadges());
    container.appendChild(buildNotice());
    document.body.appendChild(container);
    console.log('[site-helper] 辅助面板已加载，主站：' + siteUrl);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachHelper);
  } else {
    attachHelper();
  }
})();