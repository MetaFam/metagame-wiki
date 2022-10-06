import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export const shouldHideHeader = (url) => {
  const urlParams = new URLSearchParams(url.search);
  const hideHeader = urlParams.get('metaos') === 'true';
  return hideHeader;
}

if (ExecutionEnvironment.canUseDOM && ExecutionEnvironment.canUseEventListeners) {
  const url = new URL(window.location.href);
  const hideHeader = shouldHideHeader(url);
  const sidebar = document.querySelector('aside > div');

  if (hideHeader) {
    document.body.classList.add('metaos');
  }

  if (sidebar) {
    console.log('sidebar', sidebar);
  }
}

