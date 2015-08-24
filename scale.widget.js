(function($) {
 $.fn.scaleWidget = function() {
 var widgetHeight = '';
 var widgetWidth = '';
 var objectWidth = '';
 var objectHeight = '';
 var objectNaturalHeight = '';
 var objectNaturalWidth = '';
 var imageTop = '';
 var tag = '';

 //As of now the plugin searches for img and video tag for scaling. You can input any of the input any HTML tags that you want to scale.
 tag='video,img'; 
 
 widget = $(this);
 object = $(this).find(tag);

 widgetHeight = widget.outerHeight();
 widgetWidth  = widget.outerWidth();
 objectWidth  = object.outerWidth();
 objectHeight = object.outerHeight();

 objectOriginalHeight = object.get(0).naturalHeight;
 objectOriginalWidth = object.get(0).naturalWidth;

 //Functionality goes here   
 //Parent height > image height and parent width > image width
 if(widgetHeight >= objectOriginalHeight && widgetWidth >= objectOriginalWidth) {
	 object.css('height','auto');
	 object.css('width','auto');
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
 //Below can be removed if centering is not needed
	widget.css('text-align','center');
	object.css('margin-top',imageTop);
 };
}(jQuery)); 
