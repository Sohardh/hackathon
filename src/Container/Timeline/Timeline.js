import React,{Component} from 'react';
import Order from '../../Component/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {
	state={
		orders:[]
	}
	componentDidMount() {
		const fetchedOrders=[];
		axios.get('/orders.json')

		.then(res => {
			for(let key in res.data) {
				fetchedOrders.push({
					...res.data[key],
					id:key
				});
				fetchedOrders.reverse();
			}

			this.setState({orders:fetchedOrders})
		})
	}
	render() {
		return (
			<div classname="timeline">
				{
					this.state.orders.map(order => {
						return(
							<Order 
								postData={order.name}
								/>)
					})}
			</div>)
	}
}
export default Orders;