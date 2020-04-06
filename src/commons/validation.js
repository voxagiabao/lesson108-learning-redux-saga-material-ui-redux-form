const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Vui lòng nhập tiêu đề!";
  } else if (values.title.trim() && values.title.length < 5) {
    errors.title = "Tiêu đề có ít nhất 5 ký tự!";
  }
  return errors;
};

export default validate;
