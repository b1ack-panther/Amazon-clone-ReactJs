import "../style/Payment.css";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";

function Payment() {
	const user = useSelector((state) => state.userCredentials.user);
  const basket = useSelector(state => state.basket)
	return (
		<div className="payment">
			<div className="payment_container">
				<div className="payment_section">
					<div className="payment_title">
						<h3>Your Delivery Address</h3>
					</div>
					<div className="payment_address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>U.P. India</p>
					</div>
				</div>
				<div className="payment_section">
					<div className='payment title'>
            <h3>Review items and delivery</h3>
          </div>
					<div className="payment_items">
						{basket.map((item) => (
              <CheckoutProduct
                togglebtn={0}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
        <div className="payment_section">
          <div className="payment_title">Payment Method</div>
          <div className="payment_details"></div>
        </div>
			</div>
		</div>
	);
}

export default Payment;
