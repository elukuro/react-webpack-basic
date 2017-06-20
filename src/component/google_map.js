import React, {Component} from 'react';

export class GoogleMap extends Component{
	//ini digunakan untuk mencegah component di update , hanya render sekali
	shouldComponentUpdate(){
		return false;
	}

	//ini digunakan untuk menerima Props meskipun component tidak di update kembali
	componentWillReceiveProps(nextProps){
		this.map.panTo({lat:nextProps.lat,lng:nextProps.lng})
	}

	// render component pertama kali
	componentDidMount(){
		this.map=new google.maps.Map(this.refs.map,{
			center:{lat:this.props.lat,lng:this.props.lng},
			zoom:8
		})
		console.log(this.refs.map);
	}
	render(){
		return(
			<div id="map" ref="map"/>
		)
	}
}