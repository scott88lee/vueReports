$('table').tablesort()


$('#rangestart').calendar({
    type: 'date',
    endCalendar: $('#rangeend')
});
$('#rangeend').calendar({
    type: 'date',
    startCalendar: $('#rangestart')
});

$('.ui.tab')
    .on('click', function () {
        // programmatically activating tab
        $.tab('change tab', 'tab-name');
    })
    ;

function doSomething(msg) {
    alert(msg);
}