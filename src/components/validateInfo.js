export default function validateInfo(values) {
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
  if (!values.mobile) {
    errors.mobile = 'Please provide your mobile number.';
  } else if (!/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(values.mobile)) {
    errors.mobile = 'Please provide a valid mobile number.';
  }

  return errors;
}
