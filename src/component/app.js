import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			hello:"this is a state and try change state"
		}
	}

	componentDidMount(){
		//this.testPalindrome();
		this.testPhone();
	}

	testPhone(){
		var phone="00-44  48 5555 8361";
		var breaked=phone.replace(/-|\s/g,"");
		console.log(breaked.length);
		//var regex=breaked.replace(/(\d{3})(\d{3})(\d{3})(\d+)/,'$1-$2-$3-$4-$5');
		if(breaked.length==9){
			var compile=breaked.substr(0,3)+'-'+breaked.substr(3,3)+'-'+breaked.substr(6,4);
		}else if(breaked.length==10){
			var compile=breaked.substr(0,3)+'-'+breaked.substr(3,3)+'-'+breaked.substr(6,2)+'-'+breaked.substr(8,2);
		}else{
			var compile=breaked.substr(0,3)+'-'+breaked.substr(3,3)+'-'+breaked.substr(6,3)+'-'+breaked.substr(9,3)+'-'+breaked.substr(12,2);		
		}
		console.log(compile);
	}


	testPalindrome(){
		var text="p__.__  ,__.__p";
		var split=text.split("").reverse().join('');
		console.log("split "+split+" text " + text);
		if(text==split){
			console.log(true);	
		}else{
			console.log(false);
		}


	}


	testCodingity(){
		var A = [-1, 3, -4, 5, 0, -6, 2, 1];
			function kepret(A){
				var rightSum=A.reduce((acc,val)=>acc+val,0);
				var leftSum=0;
				for (var i=0;i<A.length;i++){
					rightSum=rightSum-A[i];
						if(rightSum===leftSum) return i;
					leftSum=leftSum+A[i];
					
				};
				return -1;
			}
			console.log(kepret(A));
			
		
		
		// function solution(A) {        
		//     var rightSum = A.reduce((acc, val) => acc + val, 0), leftSum = 0;
		    
		//     for (var i = 0; i < A.length; i++) {
		        
		//         rightSum -= A[i];

		//         // Codility is asking for any, so return first found
		//         if (rightSum === leftSum) return i; 
		        
		//         leftSum += A[i];
		//     }
		    
		//     return -1;
		// }
		//console.log(solution(A));

	}

	testBitGame(){
		var left=1;
		var right=3;
		var k=3;
		var count=0;
		var result=[];
		var a=left;
		var b=left+1;
		
		while(count < k){
			if(a+b<=k){
				result.push(a+b);
				if(a>=left && a < b){
					a++;
				}
				if(b<=right){
					b++;
				}
			}
		count++;
		}
		console.log(result.pop());
	}

	testJavasscriptSumOddDevider(){
		var input=[1,6,10];
		var counter=1;
		var result=[];
		var combine=[];

		for(var a=0; a<input.length;a++){
			while(counter <=input[a]){
				var devide=input[a]/counter;
				if(Math.floor(devide)==devide){
					(devide % 2 == 1 ) ? result.push(devide) : '';
				}
				counter++;
				devide=0;
			}
			counter =1;
			combine=combine.concat(result);
			result=[];
		}
		console.log(combine);
		var sum=combine.reduce((a,b)=>a+b,0);
		console.log(sum);

	}


	render(){
		return(
			<div>
			
			</div>
		)
	}
}

export default App;