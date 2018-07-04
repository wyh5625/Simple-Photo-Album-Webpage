function countNodes(IDs) {
	var isRootNode = function(node, id){
		var pNode = node.parentNode;
		while(pNode){
			if(pNode.id == id)
				return false;
			pNode = pNode.parentNode;
		}
		return true;
	}
	var countNode = function(node){
		var counts = 0;
		if(node.nodeType == 1){
			var children = node.childNodes;
			for(var i = 0; i < children.length; i++){
				if(children[i] != 3){
					if(children[i] == 1)
						counts += countNodes(children[i]);
					else
						counts += 1;
				}
			}
		}
		return counts;
		
	}
	var targetElement = [];
	var Count = [];
	for(var i = 0; i < IDs.length; i++){
		var counts = 0;
		targetElement = document.querySelectorAll("#" + IDs[i]);
		for(var j = 0; j < targetElement.length; j++){
			if(isRootNode(targetElement[i], IDs[i])){
				if(targetElement[i].nodeType != 3) counts ++;
				counts += countNode(targetElement[i]);
			}
		}
		Count.push(counts);
	}
	return Count;
}

window.onload = function() {
	var IDs = ["one", "two", "three", "four", "btn"];
	var counts = countNodes(IDs);
	console.log(IDs);
	console.log(counts);
}