export default function validateInfo(values) {
  // console.log('Validate', values.officialEmail);
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please provide your name.';
  }

  if (!values.email) {
    errors.email = 'Please provide your email address.';
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!values.officialEmail) {
    errors.officialEmail = 'Please provide your MUJ email address.';
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.officialEmail
    )
  ) {
    errors.officialEmail = 'Please provide a valid MUJ email address.';
  }

  if (!values.mobile) {
    errors.mobile = 'Please provide your mobile number.';
  } else if (!/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(values.mobile)) {
    errors.mobile = 'Please provide a valid mobile number.';
  }

  if (!values.regno) {
    errors.regno = 'Please provide your registration no.';
  }

  if (!values.course) {
    errors.course = 'Please provide your course.';
  }
  if (!values.year) {
    errors.year = 'Please provide your present year.';
  } else if (!/^(?:[1-9]|0[1-9]|10)$/.test(values.year)) {
    errors.year = 'Please input your year in the form of integer.';
  }
  if (!values.paymentRef) {
    errors.paymentRef = 'Please provide your Payment Reference No.';
  }

  return errors;
}
