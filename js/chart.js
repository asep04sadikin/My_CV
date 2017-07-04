/*----------------------------------------------------*/
        /*	EasyPie Chart Effects
         /*----------------------------------------------------*/
        if(jQuery.isFunction(jQuery.fn.easyPieChart)){

            // Big EasyPie Chart Effects;
            $('.circular-chart-big').easyPieChart({
                animate : 2000,
                barColor: "#727CB6",
                trackColor : '#f9f9f9',
                scaleColor: false,
                lineWidth: 11,
                size: 180,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent)+'%');
                }
            });

            // Small EasyPie Chart Effects;
            $('.circular-chart-small').easyPieChart({
                size : 120,
                animate : 2000,
                lineWidth : 7,
                lineCap : 'square',
                barColor : '#727CB6',
                trackColor : '#f9f9f9',
                scaleColor : false,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent)+'%');
                }
            });
        }