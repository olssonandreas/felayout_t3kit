$('.news-list-view__timelineItem').on('click', function(e) {
    if ($(this).hasClass('collapsed')){
        e.preventDefault();
        $(this).removeClass('collapsed');
        $(this).closest('.news-list-view__wrapper').find('.news-list-date').addClass('open');
    }
});

$('.clippable').dotdotdot({
    watch: 'window'
});
