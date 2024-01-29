import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/cocoon.module.css'
import ImageGallery from '/components/ImageGallery'

export default function Cocoon() {
    return(
        <main>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <Image
                        className={styles.logo}
                        src={'/images/cocoon-logo.png'}
                        height={80}
                        width={350}
                    />

                    <div>
                        <h1>You're worth more than you think.</h1>
                    </div>


                </div>

            </div>


            <Image
                className={styles.laptop}
                src={'/images/laptop-mockup.png'}
                height={500}
                width={500}
            />

            <div className={styles.roleInfo}>
                <div className={styles.role}>
                    <h4>Role for this project:</h4>
                    <div className={styles.roleName}>
                        <p>UX/UI Designer</p>
                    </div>

                </div>

                <div className={styles.skills}>
                    <h4>Skills utilized for this project:</h4>
                    <div className={styles.tags}>
                        <span className={styles.label}>Figma</span>
                        <span className={styles.label}>Research</span>
                        <span className={styles.label}>Usability Testing</span>
                    </div>

                </div>
            </div>

            <div className={styles.projectIntro}>
                <p>
                    While all other career development apps focus on providing opportunities for people that are currently already in that industry, what about the ones who are still trying to get there?
                    Or what about the people who are stuck in their current job and got nowhere else to go? Or what about those who are in an industry that is bound to eventually cease to exist?
                    Let's paint a picture for the oil and gas industry as an example. With electric vehicles on the rise, in the next 10-20 years, where would they go?
                    
                </p>
            </div>

            <div className={styles.introImages}>
                <Image
                    className={styles.homeWeb}
                    src={'/images/cocoon-app1.png'}
                    height={470}
                    width={880}
                />

                <Image
                    className={styles.mobile}
                    src={'/images/cocoon-mobile.png'}
                    height={400}
                    width={200}
                />


            </div>

            <div className={styles.projectDescription}>
                <h3>What is Cocoon?</h3>
                <p>
                    Cocoon is a career development app that uses the power of AI to scan people's
                    resumes and analyze their skills to recommend courses and programs
                    required for their desired job industry.
                </p>
            </div>

            <div className={styles.cocoonProcess}>
                <Image
                    className={styles.upload}
                    src={'/images/cocoon-app2.png'}
                    height={300}
                    width={600}
                />

                <Image
                    className={styles.uploadResults}
                    src={'/images/cocoon-app3.png'}
                    height={300}
                    width={600}
                />


            </div>

            <div className={styles.features}>
                <h3>Features</h3>
                <div className={styles.featuresList}>
                    <ul>
                        <li>View career paths and the details for each job</li>
                        <li>Upload resume for AI to scan your skills and your compatibility for your selected career path</li>
                        <li>View recommended courses and steps to take to fill the gaps to get into your desired career path</li>
                        <li>Take on a recommended course and keep track of your progress</li>
                    </ul>
                </div>

            </div>

            <div className={styles.designJourney}>
                <h3>Design Journey</h3>
                
            </div>

            <div className={styles.gallery}>
                <ImageGallery/>
            </div>

            <p className={styles.projectHistory}>
                The project started off as an app called "FutureQuest", designed for highschool students that are unsure of what they want to do after graduating.
                The app would allow them to reach out to students from universities but mainly BCIT students at the start, so that they can ask questions about all sorts of courses and have an idea on what they could get into in universities.
                With consecutive weeks of revision and consultation, this idea was eventually shot down and we decided to pivot to what would become Cocoon.
            </p>


            <div className={styles.challenges}>
                <h3>Challenges Faced</h3>
                <p className={styles.challengeDescription}>
                    There has been a lot of difficulties in regards to designing the app. Especially at the beginning where our idea continuously had to be revised.
                    As our ideas solidified and started to take form, the next challenge was how to differentiate Cocoon from all the competition. From icons, to components, to logos, and even colors, we had to thoroughly experiment for weeks.
                    Along with with designing the app, there were internal struggles that made things a lot more difficult than it already was. Being in a split group with only having so little time a week to communicate with each other, it was a hurdle to stay connected and on the same page.

                </p>
            </div>

            <div className={styles.lessons}>
                <h3>Lessons Learned</h3>
                <p className={styles.lessonsDescription}>
                    Being able to run a project as big as this with a somewhat small group was a tall order.
                    Especially with everyone having their own agendas to take care of, as well as other projects and assignments from school made it difficult to manage and balance work.
                    Despite all the shortcomings and the final product not shaping up to be how it was designed, it was still a blast and for the most part, got everythign working as it should.
                </p>
            </div>

            

        </main>
    )
}