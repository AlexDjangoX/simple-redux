import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

import Button from '@/components/Button';

const SearchQueryForm = ({ setSearchQuery }) => {
  const initialValues = {
    language: '',
    job: '',
    city: '',
    country: '',
  };

  const validationSchema = Yup.object({
    language: Yup.string().required('Language is required'),
    job: Yup.string().required('Job is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const query = `${values.language} ${values.job} ${values.city} ${values.country}`;
    setSearchQuery(query);
    resetForm();
  };

  return (
    <div className="mb-12 bg-slate-500">
      <div className="mb-12 flex justify-center">
        <h2>Search Query Form</h2>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="m-4 flex text-gray-900">
          <div className="m-4 flex flex-col rounded-md ">
            <label className="mb-4 flex justify-center" htmlFor="language">
              Language
            </label>
            <Field type="text" id="language" name="language" />
            <ErrorMessage name="language" component="div" />
          </div>
          <div className="m-4 flex flex-col rounded-md">
            <label className="mb-4 flex justify-center" htmlFor="job">
              Job
            </label>
            <Field type="text" id="job" name="job" />
            <ErrorMessage name="job" component="div" />
          </div>
          <div className="m-4 flex flex-col rounded-md">
            <label className="mb-4 flex justify-center" htmlFor="city">
              City
            </label>
            <Field type="text" id="city" name="city" />
            <ErrorMessage name="city" component="div" />
          </div>
          <div className="m-4 flex flex-col rounded-md">
            <label className="mb-4 flex justify-center" htmlFor="country">
              Country
            </label>
            <Field type="text" id="country" name="country" />
            <ErrorMessage name="country" component="div" />
          </div>
          {/* <Button
            classStyles="bg-secondary3 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4"
            type="submit"
            btnName="Search"
          /> */}
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchQueryForm;
