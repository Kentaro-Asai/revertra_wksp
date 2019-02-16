$(function(){
	var e=$("#atcl").html();
	var b=0;
	var f=0;
	var c=[];
	for(var d=0;f>-1;d++){
		b=e.search("<article>");
		f=e.search("</article>");
		if(f===-1){
			break
		}
		c[d]=e.substring(b,f+10);
		e=e.substr(f+10)
	}
	$("#atcl").html(c[0]);
	$("#side li").on("click",function(){
		var a=$(this).attr("data-0");
		for(var g=0;g<c.length;g++){
			if(parseInt(a)===g){
				$("#atcl").html(c[g])
			}
		}
	})
});