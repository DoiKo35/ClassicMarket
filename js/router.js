window.onpopstate = () => {
    const id = location.hash.slice(1);
    if(id) renderAppPage(id);
    else renderList();
};
