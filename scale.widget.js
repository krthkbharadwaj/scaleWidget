(function($) {
 $.fn.scaleWidget = function() {
 var type='';
 var parentId = ''; 
 var widgetHeight = '';
 var widgetWidth = '';
 var objectWidth = '';
 var objectHeight = '';
 var objectNaturalHeight = '';
 var objectNaturalWidth = '';
 var imageTop = '';
 var tag = '';
 var noTop =''; 
 var scenario = '';
 var widgetBorderTop = '';
 var widgetBorderLeft = '';

 if($(this).hasClass("scale-widget")) {
   scenario = 'preview';
 }
 if($(this).hasClass('image-object')) {
   type = 'image';   tag='img';
 }
 else if ($(this).hasClass('video-object')) {
   type = 'video'; 
   if(scenario == 'preview')  {   tag='video'; } 
   else { tag='img'; }
 }
 else {
   type = 'playlist';
   tag = 'img'; 
   if(scenario == 'preview') { tag='video,img'; }    
 }
 widget = $(this);
 object = $(this).find(tag+':visible');

 widgetHeight = widget.outerHeight();
 widgetWidth  = widget.outerWidth();

 widgetBorderTop = widget.css('border-top-width');
 widgetBorderLeft = widget.css('border-left-width'); 
 widgetBorderTop = widgetBorderTop.replace('px','');
 widgetBorderLeft = widgetBorderLeft.replace('px','');

 if(widgetBorderTop !=undefined && widgetBorderLeft !=undefined) {
 	widgetHeight = widgetHeight - widgetBorderTop - widgetBorderTop;
 	widgetWidth  = widgetWidth - widgetBorderLeft - widgetBorderLeft;
 }
 objectHeight = object.outerHeight();
 objectWidth  = object.outerWidth();

 if(type == 'video') {
 	objectOriginalHeight = object.videoHeight;
 	objectOriginalWidth = object.videoWidth;
 }else{
 	objectOriginalHeight = object.get(0).naturalHeight;
	objectOriginalWidth = object.get(0).naturalWidth;
 } 

 //Functionality goes here   
 var marginLeft = (widgetWidth - objectWidth)/2;
 if(type=='video' || type=='playlist'){
	 if(widgetWidth > objectWidth) {
		 widget.css('text-align','center');
	 }
 }
 //Parent height > image height and parent width > image width
 if(widgetHeight >= objectOriginalHeight && widgetWidth >= objectOriginalWidth) {
	 object.css('height','auto');
	 object.css('width','auto');
         if(type == 'image') {
 	 	if(widgetHeight > widgetWidth){
 		  object.css('width','100%');
		  object.css('height','auto');
                }else if(widgetHeight < widgetWidth){
                  object.css('width','auto');
                  object.css('height','100%');
                }
                else if(widgetHeight == objectHeight && widgetWidth == objectWidth){
                  object.css('width','auto');
                  object.css('width','auto');
                  noTop = 1;
                }
         }  
 }
 //Parent height > image height and parent width < image width
 if(widgetHeight > objectOriginalHeight && widgetWidth < objectOriginalWidth){
	 object.css('width','100%');
	 object.css('height','auto');
 }
 //Parent height < image height and parent width > image width
 if(widgetHeight < objectOriginalHeight && widgetWidth > objectOriginalWidth){
	 object.css('width','auto');
	 object.css('height','100%');
 }
 if(widgetHeight < objectHeight && objectWidth <= widgetWidth){
	 object.css('height','100%');
	 object.css('width','auto');
	 object.css('text-align','center');
 }
 if(widgetHeight == objectHeight && objectWidth == widgetWidth){
	 object.css('width','auto');
	 object.css('height','auto');
 } 
 //Calculating the top  
 var imageTop = (widgetHeight - objectHeight)/2;
 if(imageTop < 0){
	 imageTop = 0;
 }
// console.log("imageTop"+imageTop+"widgetHeight"+widgetHeight+"objectHeight"+objectHeight); 
 if(noTop !=1){
	 object.css('margin-top',imageTop);
 }
 };
}(jQuery)); 

