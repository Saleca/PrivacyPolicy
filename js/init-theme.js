const theme = localStorage.getItem('THEME') || 'device';

if (theme !== 'light') {
    const disposable_theme = document.createElement('div');
    disposable_theme.id = 'disposable_theme';
    document.documentElement.appendChild(disposable_theme);

    const theme_selector = document.createElement('input');
    theme_selector.type = 'radio';
    theme_selector.id = theme;
    theme_selector.checked = true;
    theme_selector.hidden = true;
    theme_selector.name = 'initial-theme';
    disposable_theme.appendChild(theme_selector);
}