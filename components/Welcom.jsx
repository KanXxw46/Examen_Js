import React, { useEffect,useState} from 'react';
import SWAPI from '../../React/my-app/src/api/SWAPI';
import People from './People';

const Welcome = (props) => {
    const [people,setPeople] = useState(null);
     useEffect(() => {
       let getPeople = async (value) => {
       let data = await SWAPI.getPeoplewithParams(value);
       setPeople(data.data.results);
    };

    return <>
    <Formik
            initialValues={{
                firstName: '',
            }}
            onSubmit={(value) => {console.log(value.firstName)}}
            >
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Test" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
        {!!people && people.map((item) => {
            return <People item = {item} hey={item.name}/>
        })}    
    </> 
})};


export default Welcome;
