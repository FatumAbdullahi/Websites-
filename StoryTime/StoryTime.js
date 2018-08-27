function StoryTime(){
	var animal1=document.getElementById("animal1");
	var animal2=document.getElementById("animal2");
	var terrestrial=document.getElementById("terrestrial");
	var verb1=document.getElementById("verb1");
	var verb2=document.getElementById("verb2");

	var story= " Once upon a time there lived a "+  animal1.value + " in a "+ terrestrial.value + " . One day after a heavy meal. It was "+ verb1.value +" under a tree. After a while, there came a "+ animal2.value+ " and it started to play on the "+ animal1.value + ". Suddenly the " + animal1.value+ " got up with anger and looked for those who disturbed its nice "+ verb2.value+ ". Then it saw a small " + animal2.value+ " standing trembling with fear. The " +animal2.value+" jumped on it and started to kill it. The " +animal2.value+ " requested the " + animal1.value+ " to forgive it. The " + animal1.value+ " felt pity and left it. The "+ animal2.value +" ran away. On another day, the" + animal1.value + " was caught in a net by a hunter. The "+ animal2.value + "came there and cut the net. Thus it escaped. There after, the " + animal2.value+ " and the " +animal1.value + "became friends. They lived happily in the "+ terrestrial.value+ " afterwards. " 
  		story+= "<br/><br/>"+"<i/><i/>"+"<b/><b/>"+"Moral : A friend in need is a friend indeed."
  		story+="<br/> <br/>" +"<h5/><h5/>"+"http://www.english-for-students.com/A-friend-in-need-is-a-friend-indeed.html" 
  		

 output.innerHTML= story;
}