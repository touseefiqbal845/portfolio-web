import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./company_logo/astra_protocol.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Astra Protocol</div>
							<div className="work-subtitle">
								Lead Full Stack Engineer
							</div>
							<div className="work-duration">Mar 2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./company_logo/quadacts_technologies_logo.jfif"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Quadacts Technologies</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Jan 2025 - Mar 2025</div>
						</div>
					<div className="work">
							<img
								src="./company_logo/sentex_lab_logo.jfif"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Sentax Lab</div>
							<div className="work-subtitle">
								Mern Stack Devloper
							</div>
							<div className="work-duration">Mar 2024 - Jul 2024</div>
						</div>
					<div className="work">
							<img
								src="./company_logo/webevis.jfif"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Webevis Technologies</div>
							<div className="work-subtitle">
								Backend Developer -Internship
							</div>
							<div className="work-duration">Oct 2024 - Jan 2024</div>
						</div>
					<div className="work">
							<img
								src="./company_logo/hixol_logo.jfif"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Hixol</div>
							<div className="work-subtitle">
								React Developer -Internship
							</div>
							<div className="work-duration">Oct 2023 - Nov 2023</div>
						</div>
					
					</div>
				}
			/>
		</div>
	);
};

export default Works;
