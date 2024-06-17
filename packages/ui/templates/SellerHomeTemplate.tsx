import React, { ReactNode } from "react";
import FilledButton from "../atoms/FilledButton";
import { IPropsReactNode } from "../types/props";


const SellerHomeTemplate = ({ elem }: IPropsReactNode) => {
	return (
		<div>
			<div className="px-4 md:px-8 pt-20 md:pt-6 pb-6 flex flex-col gap-y-8 h-96 justify-center">
				<h1 className="text-center font-bold text-xl">
					The Marketplace for Sellers
				</h1>
				<p className="text-center">
					Are you looking to sell your items? Or perhaps you’re a business
					seeking a platform to expand your reach? Look no further! Welcome to
					the Marketplace, designed for sellers just like you.
				</p>
			</div>

			<div className="px-4 md:px-8 py-6 flex flex-wrap md:flex-nowrap gap-x-8 md:gap-x-12 bg-slate-900 text-white">
				<div className="flex flex-col gap-y-8 w-full md:w-1/2">
					<h2 className="font-bold text-lg uppercase">Why sell with us</h2>
					<ul className="flex flex-col gap-y-5 leading-8">
						<li>
							<h3 className="font-bold">1. Wide Audience Reach</h3>
							<p>
								Our platform attracts a diverse and engaged audience from all
								over the world. By listing your items with us, you gain access
								to a vast pool of potential buyers who are actively looking for
								products just like yours.
							</p>
						</li>
						<li>
							<h3 className="font-bold">2. User-Friendly Interface</h3>
							<p>
								We understand that your time is valuable. Our website is
								designed with simplicity and ease of use in mind. With our
								intuitive listing process, you can have your items online and
								ready to sell in just a few clicks.
							</p>
						</li>
						<li>
							<h3 className="font-bold">3. Secure Transactions</h3>
							<p>
								We prioritize your safety and security. Our robust payment
								system ensures that transactions are secure and hassle-free,
								providing peace of mind for both sellers and buyers.
							</p>
						</li>
						<li>
							<h3 className="font-bold">4. Low Fees</h3>
							<p>
								We offer competitive pricing with low fees, so you can keep more
								of your earnings. Our transparent pricing model means no hidden
								charges, allowing you to maximize your profit.
							</p>
						</li>
						<li>
							<h3 className="font-bold">5. Dedicated Support</h3>
							<p>
								Our customer support team is here to help you every step of the
								way. Whether you need assistance with setting up your listings
								or have questions about the selling process, we're just a click
								away.
							</p>
						</li>
					</ul>
				</div>
				<div className="w-full md:w-1/2">
					<img
						src="photo.jpg"
						alt="Photo of the Calgary tower at night"
						className="object-cover h-full"
					/>
				</div>
			</div>

			<div className="px-4 md:px-8 py-6">
				<div className="py-4 flex flex-col gap-y-4 items-center">
					<h4 className="text-center">
						Join the Marketplace today and start selling with confidence.
						Together, we can achieve great success!
					</h4>
					<div>
						<FilledButton>{elem}</FilledButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SellerHomeTemplate;
