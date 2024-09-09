import Title from '../Title/Title';
import { Col, Row } from 'react-bootstrap';
import './Department.css';
import { useState } from 'react';

const Department = () => {
    const [depsIndex, setDepsIndex] = useState(0);
    const [activeDepartment, setActiveDepartment] = useState(null);

    const handleDepartmentClick = (department, index) => {
        setActiveDepartment(department);
        setDepsIndex(index);
    };

    const deps = [
        {
            img: './images/departments-1.jpg',
            title: 'Cardiology',
            subTitle: 'architecto voluptatem sit fuga suscipit non sint ipsam',
            text: 'Eum fuga necessitatibus id molestiae dolorum hic similique tenetur et dolor fuga sit enim quas qui earum magni ut delectus fugiat. Aut nulla enim in vero eligendi non numquam sint.'
        },
        {
            img: './images/departments-2.jpg',
            title: 'Neurology',
            subTitle: 'architecto voluptatem sit fuga suscipit non sint ipsam',
            text: 'Eum fuga necessitatibus id molestiae dolorum hic similique tenetur et dolor fuga sit enim quas qui earum magni ut delectus fugiat. Aut nulla enim in vero eligendi non numquam sint.'
        },
        {
            img: './images/departments-3.jpg',
            title: 'Hepatology',
            subTitle: 'architecto voluptatem sit fuga suscipit non sint ipsam',
            text: 'Eum fuga necessitatibus id molestiae dolorum hic similique tenetur et dolor fuga sit enim quas qui earum magni ut delectus fugiat. Aut nulla enim in vero eligendi non numquam sint.'
        },
        {
            img: './images/departments-4.jpg',
            title: 'Pediatrics',
            subTitle: 'architecto voluptatem sit fuga suscipit non sint ipsam',
            text: 'Eum fuga necessitatibus id molestiae dolorum hic similique tenetur et dolor fuga sit enim quas qui earum magni ut delectus fugiat. Aut nulla enim in vero eligendi non numquam sint.'
        },
        {
            img: './images/departments-5.jpg',
            title: 'Opthalmologists',
            subTitle: 'architecto voluptatem sit fuga suscipit non sint ipsam',
            text: 'Eum fuga necessitatibus id molestiae dolorum hic similique tenetur et dolor fuga sit enim quas qui earum magni ut delectus fugiat. Aut nulla enim in vero eligendi non numquam sint.'
        }
    ];

    return (
        <div className='dep__container'>
            <Title title="Departments" desc="provident eum quis dolores sit adipisci galisum" />
            <Row className='d-flex flex-wrap justify-content-center mt-5'>
                <Col xs={12} md={4} lg={3} className='mb-4'>
                    <ul className='t-black fw-bold d-flex flex-column gap-1 dep__lists'>
                        {['Cardiology', 'Neurology', 'Hepatology', 'Pediatrics', 'Opthalmologists'].map((department, index) => {
                            return (
                                <li key={index} className={activeDepartment === department ? 'active' : ''} onClick={() => handleDepartmentClick(department, index)}>
                                    {department}
                                </li>
                            );
                        })}
                    </ul>
                </Col>

                <Col xs={12} md={4} className='mb-4'>
                    <div className="d-flex flex-column justify-content-center">
                        <h1 className='t-black fw-bold'>{deps[depsIndex].title}</h1>
                        <p className="t-black fw-light mt-2">{deps[depsIndex].subTitle}</p>
                        <p className="t-black fw-light mt-2">{deps[depsIndex].text}</p>
                    </div>
                </Col>

                <Col xs={12} md={4} className='mb-4'>
                    <img src={deps[depsIndex].img} alt="department" className='dep__img' />
                </Col>
            </Row>
        </div>
    );
};

export default Department;