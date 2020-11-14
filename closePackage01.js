function breadMgr(num){
	var breadNum= arguments[0] || 10;
	 
	function supply(){
		breadNum +=10;
		console.log(breadNum)
	}

	function sale(){
		breadNum --;
		console.log(breadNum)
	}
	
	return [supply,sale];
}

var breadMgr=breadMgr();

breadMgr[0]();

breadMgr[1]();

breadMgr[1]();