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
        	start:'2016-05-26T10:00:00',
        	end:'2016-05-30T09:00:00'
    	},
    	{
        	title:'Client Appointment',
        	start:'2016-05-2412T08:00:00',
        	end:'2016-05-24T09:00:00'
    	},
    	{
        	title:'Meeting whit clients',
        	start:'2016-05-2412T10:15:00',
        	end:'2016-05-24T12:00:00'
    	},
    	{
        	title:'Conference',
        	start:'2016-05-2412T07:00:00',
        	end:'2016-05-24T12:00:00'
    	},
    ]
});