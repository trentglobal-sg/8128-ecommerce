import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup';  // import everything from the `yup` module and put them into an object named `Yup`
import { useLocation } from "wouter";


export default function RegisterPage() {

    // useLocation returns two elements in an array
    // index 0 - the current URL (aka path)
    // index1 1- a function to set the URL
    const [, setLocation] = useLocation();

    // store the starting values for each form element
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        salutation: "",
        marketingPreferences: [],
        country: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format detected').required('Email is required'),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("Please enter a password"),
        confirmPassword: Yup.string()
            .oneOf([null, Yup.ref('password')], "Passwords must match")
            .required('Please retype in your password'),
        salutation: Yup.string().required('Saluation is required'),
        country: Yup.string().required("Country is required")
    })


    // function to call when the form is submitted
    // the function will receive two parameters
    // parameter 1 - the values of the form
    // parameter 2 - formikHelper (utlity) contains functions to change the state of the form
    const handleSubmit = (values, formikHelper) => {
        console.log(values);
        setTimeout(() => {
            // tell formik that the form is done processing
            formikHelper.setSubmitting(false);
            setLocation('/');
        }, 2000);

    }

    return <div className="container mt-5">
        <h1>Register</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {
                (formik) => (<Form>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <Field
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                        />
                    </div>
                    <ErrorMessage name="name"
                        component="div"
                        className="text-danger"
                    />

                    <div className="mb-3">
                        <label>Email:</label>
                        <Field
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"></Field>
                    </div>
                    <ErrorMessage name="email"
                        component="div"
                        className="text-danger"
                    />

                    <div className="mb-3">
                        <label>Password:</label>
                        <Field
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"></Field>
                    </div>
                    <ErrorMessage name="password"
                        component="div"
                        className="text-danger"
                    />

                    <div className="mb-3">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <Field
                            type="password"
                            className="form-control"
                            id="confirm-password"
                            name="confirmPassword"></Field>
                    </div>
                    <ErrorMessage name="confirmPassword"
                        component="div"
                        className="text-danger"
                    />

                    <div className="mb-3">
                        <label className="form-label">Salutation</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <Field
                                    className="form-check-input"
                                    type="radio"
                                    name="salutation"
                                    id="mr"
                                    value="Mr"
                                />
                                <label className="form-check-label" htmlFor="mr">Mr</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <Field
                                    className="form-check-input"
                                    type="radio"
                                    name="salutation"
                                    id="ms"
                                    value="Ms."
                                />
                                <label className="form-check-label" htmlFor="ms.">Ms.</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <Field
                                    className="form-check-input"
                                    type="radio"
                                    name="salutation"
                                    id="mrs"
                                    value="Mrs."
                                />
                                <label className="form-check-label" htmlFor="mrs.">Mrs.</label>
                            </div>
                        </div>
                    </div>
                    <ErrorMessage name="salutation"
                        component="div"
                        className="text-danger"
                    />

                    <div className="mb-3">
                        <label className="form-label">Marketing Preferences</label>

                        <div className="form-check" key="1">
                            <Field
                                type="checkbox"
                                name="marketingPreferences"
                                value="1"
                                className="form-check-input"
                                id="marketing-1"
                            />
                            <label
                                className="form-check-label"
                                htmlFor='marketing-1'
                            >
                                Email Marketing
                            </label>
                        </div>

                        <div className="form-check" key="2">
                            <Field
                                type="checkbox"
                                name="marketingPreferences"
                                value="2"
                                className="form-check-input"
                                id="marketing-2"
                            />
                            <label
                                className="form-check-label"
                                htmlFor='marketing-2'
                            >
                                SMS Marketing
                            </label>
                        </div>

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Country</label>
                        <Field as="select"
                            className="form-select"
                            id="country"
                            name="country"
                        >
                            <option value="">Select Country</option>
                            <option value="sg">Singapore</option>
                            <option value="my">Malaysia</option>
                            <option value="in">Indonesia</option>
                            <option value="th">Thailand</option>

                        </Field>
                    </div>
                    <ErrorMessage name="country"
                        component="div"
                        className="text-danger"
                    />

                    <button type="submit"
                        className="btn btn-primary"
                        disabled={formik.isSubmitting}
                    >Register</button>

                </Form>)
            }
        </Formik>
    </div>
}