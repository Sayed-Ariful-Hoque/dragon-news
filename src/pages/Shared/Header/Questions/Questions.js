import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <h1 className='text-center m-4 questions'>Questions</h1>
            <Accordion defaultActiveKey="" >
                <Accordion.Item eventKey="0" >
                    <Accordion.Header > <h2 className='text-secondary fw-bold fs-'> What is FutureSkills Prime?</h2></Accordion.Header>
                    <Accordion.Body className='fs-3 text-secondary'>
                    A skilling ecosystem focused on emerging technologies, powered by a partnership between the Ministry of Electronics and Information Technology, the Government of India,and the IT industry. It seeks to propel India to become a global hub of talent in emerging technologies. FutureSkills Prime is one of the lighthouse schemes under the Government's Trillion Dollar Digital Economy initiative.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" >
                    <Accordion.Header > <h2 className='text-secondary fw-bold fs-'> How do I select a course?</h2></Accordion.Header>
                    <Accordion.Body className='fs-3 text-secondary'>
                    Visit the course catalog to browse our offerings. In addition to searching by course duration and availability, you can also search by subject to ensure you find a course that reflects your interests. Though it is not required, we encourage those who have not studied art before to consider taking an art history course first to get a solid grounding in the discipline before exploring more specific disciplines. Our art history courses are the perfect first step before moving on to art market courses.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" >
                    <Accordion.Header > <h2 className='text-secondary fw-bold fs-'> I am a high school student, can I join?</h2></Accordion.Header>
                    <Accordion.Body className='fs-3 text-secondary'>
                    Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (online@sothebysinstitute.com) to discuss further.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" >
                    <Accordion.Header > <h2 className='text-secondary fw-bold fs-'>Can I take more than one course at a time?</h2></Accordion.Header>
                    <Accordion.Body className='fs-3 text-secondary'>
                    If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" >
                    <Accordion.Header > <h2 className='text-secondary fw-bold fs-'>What should I do if I need to start the course late?</h2></Accordion.Header>
                    <Accordion.Body className='fs-3 text-secondary'>
                    It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins.
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>

        </div>
    );
};

export default Questions;