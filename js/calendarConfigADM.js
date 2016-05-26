$('#calendar').fullCalendar({
    header: {
		left: 'prev,next today',
		center: 'title',
		right: 'month,basicWeek,basicDay'
	},
	defaultDate: '2016-05-24',
	editable: true,
	eventLimit: true, // allow "more" link when too many events
    events: [
        {
        	title:'UNAM vs IBERO',
        	start:'2016-05-10T10:00:00',
        	end:'2016-05-10T11:00:00'
    	},
    	{
        	title:'UAM vs IPN',
        	start:'2016-05-09T08:00:00',
        	end:'2016-05-09T09:00:00'
    	},
    	{
        	title:'ITAM vs UVM',
        	start:'2016-05-16T10:00:00',
        	end:'2016-05-16T11:00:00'
    	},
    ]
});