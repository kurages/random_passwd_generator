function generate_string(s,e){
	a=""
	for(var i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
		a+=i;
	}
	return a;
}

function random_string(LENGTH){
	char_=generate_string("A","Z")+generate_string("a","z");
	char_+=generate_string("0","9");
	char_+='!#$%&=~/*-+';
	var len = char_.length;
	var r = "";
	for(var i=0; i<LENGTH; i++){
		r += char_[Math.floor(Math.random()*len)];
	}
	return r;
}


window.onload = function() {
	new Vue({
		el: '#app',
		data: {
			length:8,
			result:""
		},
		methods: {
			generate: function() {
				this.result=random_string(this.length)
			}
		}
	});
}






