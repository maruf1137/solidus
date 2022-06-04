$('.default_option').click(function () {
	$(this).parent().toggleClass('active');
});

$('.select_ul li').click(function () {
	var currentele = $(this).html();
	$('.default_option li').html(currentele);
	$(this).parents('.select_wrap').removeClass('active');
});

// sidebar
const sidebar = document.querySelector('.sidebar');
const btnShow = document.querySelector('.bars');
const btnClose = document.querySelector('.close-btn');

function showSidebar() {
	sidebar.classList.add('show-sidebar');
}

function closeSidebar() {
	sidebar.classList.remove('show-sidebar');
}

btnShow.addEventListener('click', showSidebar);
btnClose.addEventListener('click', closeSidebar);
