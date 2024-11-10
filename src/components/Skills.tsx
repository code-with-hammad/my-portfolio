import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='container pt-32'>
            <div className='grid md:grid-cols-2 gap-20 items-center'>
                <div data-aos="zoom-in-up">
                    <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                    <p className='text-gray-500 pl-2'>
                        I have solid foundation in web development,specalizing in HTML,CSS,and Javascript my experience extand to using frameworks like React and Next.js to create dynamic and user-friendly applications I am also profficient in Tailwand CSS for efficient styling and design. With a passion for learning I stay update on the latest technologies to enhance my skill set and contribute effectively to project.
                    </p>
                </div>
                <div>
                    <div className='grid grid-cols-2 text-green-600 text-3xl sm:text-4xl'>
                        <div className='space-y-2'>
                            <h2 data-aos="zoom-in-up">Typescript</h2>
                            <h2 data-aos="zoom-in-up">Next.js</h2>
                            <h2 data-aos="zoom-in-up">React.js</h2>
                        </div>
                        <div className='space-y-2'>
                            <h2 data-aos="zoom-in-up">Tailwid</h2>
                            <h2 data-aos="zoom-in-up">CSS</h2>
                            <h2 data-aos="zoom-in-up">Node.js</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills