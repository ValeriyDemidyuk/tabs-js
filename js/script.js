(function () {
    var containerTabs = document.getElementById('switching-tabs');

    containerTabs.onclick = function (event) {
        var tabActive = containerTabs.querySelector('.tab.active');
        var contentOpen = containerTabs.querySelector('.tab__content.open');
        var target = event.target;

        if (target.hasAttribute('data-for')) {
            var id = target.getAttribute('data-for');
            var content = document.getElementById(id);

            if (target.classList.contains('active')) return;
            target.classList.add('active');
            tabActive.classList.remove('active');

            if (content && !content.classList.contains('open')) {
                content.classList.add('open');
                contentOpen.classList.remove('open')
            }
        }
    };
}());