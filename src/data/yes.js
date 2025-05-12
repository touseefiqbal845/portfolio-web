import React from "react";

function article_3() {
    return {
        date: "7 May 2023",
        title: "The Benefits of Cloud Computing",
        description:
            "Cloud computing transforms business operations by offering scalable, flexible, and cost-effective infrastructure solutions.",
        keywords: [
            "Cloud Computing",
            "Cloud Benefits",
            "Digital Transformation",
            "Tharindu Nayanajith",
        ],
        style: `
            .article-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2rem;
            }

            .article-content img {
                margin: 1rem 0;
                border-radius: 12px;
                box-shadow: 0 0 10px rgba(0,0,0,0.2);
            }
        `,
        body: (
            <React.Fragment>
                <div className="article-content">
    <img
                        src="https://cdn.mos.cms.futurecdn.net/pL5rBKGq88cnoqgdJgCXGS-970-80.jpg.webp"
                        alt="Cloud computing"
                        width="600"
                    />

                    <p>
                        Cloud computing has revolutionized the way businesses deploy and manage applications. By using internet-based services, organizations avoid heavy infrastructure costs and enjoy on-demand access to computing power.
                    </p>
                    <p>
                        One of the biggest advantages is scalability. Businesses can easily scale resources up or down based on current needs, eliminating over-provisioning and underutilization. This dynamic flexibility drives efficiency and cost savings.
                    </p>
                    <p>
                        Cloud providers like AWS, Google Cloud, and Azure also offer robust security tools that meet industry standards. These platforms often implement better security than most in-house IT departments, including firewalls, encryption, and access controls.
                    </p>
                    <p>
                        Another key benefit is disaster recovery. Cloud solutions automatically back up data and offer redundancy, ensuring business continuity in the event of data loss, system failure, or cyber-attacks.
                    </p>
                    <p>
                        Remote access and collaboration are also significantly improved through the cloud. Teams can access systems and work collaboratively from anywhere, which is essential in a post-pandemic hybrid working world.
                    </p>
                    <p>
                        In conclusion, cloud computing is not just a trend — it's a foundational component of modern digital transformation. Organizations that leverage it gain a competitive edge through innovation, flexibility, and rapid scalability.
                    </p>
                
                </div>
            </React.Fragment>
        ),
    };
}


function article_3() {
    return {
        date: "7 May 2023",
        title: "Artificial Intelligence in Healthcare",
        description:
            "AI is revolutionizing healthcare by enabling faster diagnosis, predictive analytics, and personalized medicine, improving patient outcomes across the board.",
        keywords: [
            "AI in Healthcare",
            "Artificial Intelligence",
            "Digital Health",
            "Tharindu Nayanajith",
        ],
        style: `
            .article-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2rem;
            }

            .article-content img {
                margin: 1rem 0;
                border-radius: 12px;
                box-shadow: 0 0 10px rgba(0,0,0,0.2);
            }
        `,
        body: (
            <React.Fragment>
                <div className="article-content">
                    <img
                        src="https://ric.edu.pk/wp-content/uploads/2025/01/Artificial-Intelligence-1-770x400.jpg"
                        alt="AI in healthcare"
                        width="600"
                    />
                    <p>
                        Artificial Intelligence (AI) is reshaping the healthcare landscape. From diagnosing diseases to managing administrative workflows, AI technologies are unlocking unprecedented capabilities in medicine.
                    </p>
                    <p>
                        One notable application is in medical imaging. AI algorithms can analyze X-rays, MRIs, and CT scans with remarkable accuracy, often detecting conditions earlier than human radiologists.
                    </p>
                    <p>
                        Predictive analytics powered by machine learning helps doctors identify patients at risk of chronic diseases such as diabetes and heart failure, enabling preventive care and timely interventions.
                    </p>
                    <p>
                        AI chatbots and virtual assistants now handle routine tasks like scheduling, medication reminders, and answering general health questions, reducing the burden on healthcare staff.
                    </p>
                    <p>
                        Personalized medicine has also gained momentum thanks to AI. Algorithms tailor treatment plans based on genetic data, lifestyle, and medical history, offering more effective and patient-specific care.
                    </p>
                    <p>
                        While ethical concerns around data privacy and AI decision-making persist, the trajectory of AI in healthcare is overwhelmingly positive. It's not just enhancing care—it's redefining it.
                    </p>
                    
                </div>
            </React.Fragment>
        ),
    };
}

const myArticles = [article_1, article_2];

export default myArticles;
