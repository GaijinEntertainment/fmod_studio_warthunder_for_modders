studio.menu.addMenuItem({
        name: "Utilities\\Shot",
        execute: function() {
        	var event = null;
        	var eventOld = null
        	var param = null;
        	var value = 1;
        	var rpmOld = 600;
        	var rpm = 600;

			event = studio.window.browserCurrent();
            eventOld = event; 	
	             	if(event && event.isOfType("Event")) {    
	                    event.getParameterPresets().forEach(function(parameter) {
	                        if(new RegExp('on_shot', 'gi').test(parameter.presetOwner.name)) {
	                            param = parameter;
	                        }
	                    });
	                }

            studio.ui.showModelessDialog({
            windowTitle: "RPM Designer",
            windowWidth: 160,
            widgetType: studio.ui.widgetType.Layout,
            layout: studio.ui.layoutType.VBoxLayout,
            items: [
                {
                    widgetType: studio.ui.widgetType.Layout,
                    widgetId: "m_controls",
                    layout: studio.ui.layoutType.HBoxLayout,
                    contentsMargins: { left: 0, top: 0, right: 0, bottom: 0 },
                    spacing: 20,
                    items: [
                        {
                            widgetType: studio.ui.widgetType.Layout,
                            layout: studio.ui.layoutType.VBoxLayout,
                            contentsMargins: { left: 0, top: 0, right: 0, bottom: 0 },
                            alignment: studio.ui.alignment.AlignRight,
                            stretchFactor: 1,
                            items: [
                                { widgetType: studio.ui.widgetType.Label, text: "RPM", alignment: studio.ui.alignment.AlignRight, },
                                {
                                    row: 1, column: 0,
                                    widgetType: studio.ui.widgetType.Slider,
                                    widgetId: "m_rpm",
                                    value: rpm,
             						range: { minimum: 0, maximum: 2000 },
                                    orientation: studio.ui.orientation.Vertical,
                                    AlignRight: studio.ui.alignment.AlignLeft,
                                },
                            ],
                        },
                        {
                            widgetType: studio.ui.widgetType.Layout,
                            layout: studio.ui.layoutType.VBoxLayout,
                            contentsMargins: { left: 0, top: 15, right: 0, bottom: 0 },
                            alignment: studio.ui.alignment.AlignLeft,
                            spacing: 10,
                            sizePolicy: { horizontalPolicy: studio.ui.sizePolicy.Fixed },
                            items: [
                                { widgetType: studio.ui.widgetType.Label, text: "- 2000", alignment: studio.ui.alignment.AlignLeft,},
                                { widgetType: studio.ui.widgetType.Spacer, stretchFactor: 10 },
                                { widgetType: studio.ui.widgetType.Label, text: "- 1000", alignment: studio.ui.alignment.AlignLeft, },
                                { widgetType: studio.ui.widgetType.Spacer, stretchFactor: 10 },
                                { widgetType: studio.ui.widgetType.Label, text: "- 0" },
                            ],
                        }
                    ],
                },
                { widgetType: studio.ui.widgetType.Label, widgetId: "m_status", text: rpm, wordWrap: true },
            ],
            onConstructed: function() {
                this.timerId = this.startTimer((1 / (rpm / 60)) * 1000);
            },
             onTimerEvent: function(timerId) {
             	if(timerId !== this.timerId)
                    return;
             	event = studio.window.browserCurrent();
             	if (event.name != eventOld.name) {
	             	if(event && event.isOfType("Event")) { 
	             	 param = null;  
	                    event.getParameterPresets().forEach(function(parameter) {
	                        if(new RegExp('on_shot', 'gi').test(parameter.presetOwner.name)) {
	                            param = parameter;
	                        }
	                    });
	                }
	                eventOld = event;
	            }
	            rpm = this.findWidget("m_rpm").value();
             	if (rpm != rpmOld) {
             		this.timerId = this.startTimer((1 / (rpm / 60)) * 1000);
             		this.findWidget("m_status").setText("{0}".format(rpm));
             		rpmOld = rpm;
             	}
	            if (param) {
             	event.setCursorPosition(param, 1);
             	event.setCursorPosition(param, 0);
             	} else {
                    this.findWidget("m_status").setText("<font color=\"Red\">on_shot not found</font>");
                }
            }
        });
        },
        keySequence: "Ctrl+,",
    })